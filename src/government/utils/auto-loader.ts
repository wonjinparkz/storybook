/**
 * Government Components Auto-Loader
 * 정부 컴포넌트들의 스타일, 스크립트, 폰트를 자동으로 로드하는 유틸리티
 */

// 로드 상태 추적
let isStylesLoaded = false;
let isScriptsLoaded = false;
let isFontsLoaded = false;

// CSS 파일들 목록 (Storybook 정적 파일 경로)
const CSS_FILES = [
  '/styles/index.css',
  '/styles/swiper-minimal.css',
  '/styles/government-interactions.css',
  '/fonts.css',
  '/dropdown-styles.css'
];

// JavaScript 파일들 목록 (Storybook 정적 파일 경로)
const SCRIPT_FILES = [
  '/scripts/government-features.js'
];

/**
 * CSS 파일을 동적으로 로드
 */
const loadCSS = (href: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // 이미 로드된 CSS인지 확인
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    
    document.head.appendChild(link);
  });
};

/**
 * JavaScript 파일을 동적으로 로드
 */
const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // 이미 로드된 스크립트인지 확인
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.head.appendChild(script);
  });
};

/**
 * 폰트 로드
 */
const loadFonts = (): Promise<void> => {
  return new Promise((resolve) => {
    if (isFontsLoaded) {
      resolve();
      return;
    }

    // 폰트 사전 로드 (Storybook 정적 파일 경로)
    const fontUrls = [
      '/fonts/PretendardGOV-Regular.woff2',
      '/fonts/PretendardGOV-Bold.woff2',
      '/fonts/woff2/PretendardGOVVariable.woff2'
    ];

    const fontPromises = fontUrls.map(url => {
      return new Promise<void>((fontResolve) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.href = url;
        link.crossOrigin = 'anonymous';
        
        link.onload = () => fontResolve();
        link.onerror = () => fontResolve(); // 폰트 로드 실패해도 계속 진행
        
        document.head.appendChild(link);
      });
    });

    Promise.all(fontPromises).then(() => {
      isFontsLoaded = true;
      resolve();
    });
  });
};

/**
 * 스타일 로드 (CSS import 방식으로 변경)
 */
export const loadStyles = async (): Promise<void> => {
  if (isStylesLoaded) return;

  try {
    // CSS 파일들을 직접 import (Webpack이 처리)
    await Promise.all([
      import('../styles/index.css'),
      import('../styles/swiper-minimal.css'),
      import('../styles/government-interactions.css'),
      import('../fonts.css'),
      import('../dropdown-styles.css')
    ]);
    isStylesLoaded = true;
    console.log('Government styles loaded successfully');
  } catch (error) {
    console.warn('Some government styles failed to load:', error);
    isStylesLoaded = true; // 일부 실패해도 계속 진행
  }
};

/**
 * 스크립트 로드 (import 방식으로 변경)
 */
export const loadScripts = async (): Promise<void> => {
  if (isScriptsLoaded) return;

  try {
    // TypeScript 스크립트를 직접 import
    await import('../scripts/government-features');
    
    isScriptsLoaded = true;
    console.log('Government scripts loaded successfully');
    
    // 스크립트 로드 후 초기화 함수 호출
    await initializeGovernmentComponents();
  } catch (error) {
    console.warn('Government script failed to load:', error);
    isScriptsLoaded = true;
    // 스크립트 없이도 초기화 시도
    await initializeGovernmentComponents();
  }
};

/**
 * 정부 컴포넌트 초기화
 */
const initializeGovernmentComponents = async (): Promise<void> => {
  // DOM이 준비될 때까지 대기
  if (document.readyState === 'loading') {
    await new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', resolve);
    });
  }

  try {
    // UI 스크립트 초기화 (전역 함수들이 있다면)
    if (typeof (window as any).initGovernmentUI === 'function') {
      (window as any).initGovernmentUI();
    }

    // 퀵 네비게이션 스크립트 초기화
    if (typeof (window as any).initQuickNavigation === 'function') {
      (window as any).initQuickNavigation();
    }

    // 아코디언 및 확장 컨텐츠 초기화
    if (typeof (window as any).initExpandableContent === 'function') {
      (window as any).initExpandableContent();
    }

    console.log('Government components initialized successfully');
  } catch (error) {
    console.warn('Government components initialization failed:', error);
  }
};

/**
 * 모든 리소스 로드 (메인 함수)
 */
export const loadGovernmentAssets = async (): Promise<void> => {
  try {
    // 병렬로 로드 (스타일과 폰트는 독립적)
    await Promise.all([
      loadFonts(),
      loadStyles()
    ]);
    
    // 스크립트는 스타일 로드 후에 로드
    await loadScripts();
    
    console.log('All government assets loaded successfully');
  } catch (error) {
    console.error('Failed to load government assets:', error);
  }
};

/**
 * 컴포넌트 언마운트 시 정리
 */
export const cleanupGovernmentAssets = (): void => {
  // 필요시 이벤트 리스너 정리 등
  if (typeof (window as any).cleanupGovernmentUI === 'function') {
    (window as any).cleanupGovernmentUI();
  }
};

/**
 * React Hook 형태로 사용할 수 있는 헬퍼
 */
export const useGovernmentAssets = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  React.useEffect(() => {
    loadGovernmentAssets().then(() => {
      setIsLoaded(true);
    });
    
    return () => {
      cleanupGovernmentAssets();
    };
  }, []);
  
  return isLoaded;
};

// React import (조건부)
declare const React: any;