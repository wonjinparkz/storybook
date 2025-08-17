import React, { useEffect, useState, createContext, useContext } from 'react';
import { loadGovernmentAssets, cleanupGovernmentAssets } from '../utils/auto-loader';

interface GovernmentContextType {
  isAssetsLoaded: boolean;
  isInitialized: boolean;
}

const GovernmentContext = createContext<GovernmentContextType>({
  isAssetsLoaded: false,
  isInitialized: false
});

export const useGovernment = () => useContext(GovernmentContext);

interface GovernmentProviderProps {
  children: React.ReactNode;
  autoLoad?: boolean;
}

/**
 * 정부 컴포넌트들의 공통 프로바이더
 * 스타일, 스크립트, 폰트를 자동으로 로드하고 관리합니다.
 */
export const GovernmentProvider: React.FC<GovernmentProviderProps> = ({ 
  children, 
  autoLoad = true 
}) => {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initializeAssets = async () => {
      if (!autoLoad) {
        setIsAssetsLoaded(true);
        setIsInitialized(true);
        return;
      }

      try {
        await loadGovernmentAssets();
        
        if (isMounted) {
          setIsAssetsLoaded(true);
          
          // 추가 초기화 로직
          setTimeout(() => {
            if (isMounted) {
              setIsInitialized(true);
            }
          }, 100);
        }
      } catch (error) {
        console.error('Failed to initialize government assets:', error);
        if (isMounted) {
          setIsAssetsLoaded(true);
          setIsInitialized(true);
        }
      }
    };

    initializeAssets();

    return () => {
      isMounted = false;
      cleanupGovernmentAssets();
    };
  }, [autoLoad]);

  const contextValue: GovernmentContextType = {
    isAssetsLoaded,
    isInitialized
  };

  return (
    <GovernmentContext.Provider value={contextValue}>
      <div className="government-components-wrapper">
        {children}
      </div>
    </GovernmentContext.Provider>
  );
};

/**
 * 개별 정부 컴포넌트를 감싸는 HOC
 */
export function withGovernmentAssets<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: { 
    waitForAssets?: boolean;
    loadingComponent?: React.ComponentType;
  } = {}
) {
  const { waitForAssets = false, loadingComponent: LoadingComponent } = options; // 기본값을 false로 변경

  return React.forwardRef<any, P>((props, ref) => {
    const { isAssetsLoaded, isInitialized } = useGovernment();
    const [localAssetsLoaded, setLocalAssetsLoaded] = useState(false);
    const [loadingTimeout, setLoadingTimeout] = useState(false);

    useEffect(() => {
      // 5초 후 강제로 렌더링 (무한 로딩 방지)
      const timeout = setTimeout(() => {
        setLoadingTimeout(true);
        setLocalAssetsLoaded(true);
      }, 5000);

      const loadAssets = async () => {
        try {
          await loadGovernmentAssets();
          setLocalAssetsLoaded(true);
          clearTimeout(timeout);
        } catch (error) {
          console.warn('Failed to load government assets, proceeding anyway:', error);
          setLocalAssetsLoaded(true);
          clearTimeout(timeout);
        }
      };

      if (!isAssetsLoaded && !localAssetsLoaded) {
        loadAssets();
      } else {
        setLocalAssetsLoaded(true);
        clearTimeout(timeout);
      }

      return () => clearTimeout(timeout);
    }, [isAssetsLoaded, localAssetsLoaded]);

    const shouldRender = !waitForAssets || localAssetsLoaded || loadingTimeout || isAssetsLoaded;

    if (!shouldRender) {
      if (LoadingComponent) {
        return <LoadingComponent />;
      }
      return (
        <div className="government-loading">
          <div className="loading-spinner"></div>
          <p>정부 컴포넌트를 로딩 중입니다...</p>
        </div>
      );
    }

    return <WrappedComponent {...(props as P)} ref={ref} />;
  });
}

/**
 * 정부 컴포넌트용 기본 로딩 컴포넌트
 */
export const GovernmentLoading: React.FC = () => (
  <div className="government-loading" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    minHeight: '200px'
  }}>
    <div 
      className="loading-spinner" 
      style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #0066cc',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '1rem'
      }}
    />
    <p style={{ color: '#666', fontSize: '14px' }}>
      정부 컴포넌트를 로딩 중입니다...
    </p>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);