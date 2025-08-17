# Government 컴포넌트 시스템

## 🏛️ 시스템 개요

Government 컴포넌트 시스템은 한국 정부 웹사이트의 표준 UI 컴포넌트 라이브러리입니다. 정부 디자인 시스템 가이드라인을 준수하며, 접근성과 사용자 경험을 최우선으로 설계되었습니다.

## 🏗️ 아키텍처

### 핵심 구조
```
src/government/
├── components/               # React 컴포넌트
│   └── GovernmentProvider.tsx # 컨텍스트 프로바이더
├── assets/                  # 정부 전용 아이콘, 이미지
├── fonts/                   # PretendardGOV 폰트 시스템
├── scripts/                 # Vanilla JS 기능들
├── styles/                  # CSS 스타일 시스템
├── utils/                   # TypeScript 유틸리티
└── [컴포넌트 파일들]        # 개별 컴포넌트들
```

## 🔧 GovernmentProvider 시스템

### 역할과 기능
`GovernmentProvider`는 모든 정부 컴포넌트의 루트 프로바이더로 다음 기능을 제공합니다:

```typescript
interface GovernmentContextType {
  isAssetsLoaded: boolean;    // 에셋 로딩 상태
  isInitialized: boolean;     // 초기화 상태
}

interface GovernmentProviderProps {
  children: React.ReactNode;
  autoLoad?: boolean;         // 자동 로딩 여부 (기본값: true)
}
```

### 자동 로딩 시스템
- **스타일 시트**: CSS 파일들의 동적 로딩
- **스크립트**: JavaScript 기능들의 지연 로딩
- **폰트**: PretendardGOV 폰트 시스템
- **에셋**: 아이콘 및 이미지 리소스

### 사용법
```typescript
// Storybook에서의 사용 (preview.tsx)
<GovernmentProvider autoLoad={true}>
  <div style={{ minHeight: '100vh' }}>
    <Story />
  </div>
</GovernmentProvider>

// 개별 컴포넌트에서의 컨텍스트 사용
const { isAssetsLoaded, isInitialized } = useGovernment();
```

## 📋 컴포넌트 카탈로그

### 1. 레이아웃 컴포넌트

#### GovernmentHeader
**파일**: `GovernmentHeader.tsx`, `GovernmentHeader.stories.ts`  
**용도**: 정부 웹사이트 표준 헤더  
**특징**:
- 정부 로고 및 슬로건
- 글로벌 네비게이션
- 사용자 메뉴 (로그인/회원가입/나의 GOV)
- 검색 기능
- 반응형 디자인

#### GovernmentFooter
**파일**: `GovernmentFooter.tsx`, `GovernmentFooter.stories.ts`  
**용도**: 정부 웹사이트 표준 푸터  
**특징**:
- 정부 정보 및 연락처
- 관련 사이트 링크
- 소셜 미디어 링크
- 저작권 정보

### 2. 네비게이션 컴포넌트

#### Carousel 시리즈
정부 웹사이트의 다양한 배너 및 콘텐츠 표시용 캐러셀 컴포넌트들:

##### FullBannerCarousel
**파일**: `FullBannerCarousel.tsx`, `FullBannerCarousel.stories.ts`  
**용도**: 전체 폭 메인 배너 슬라이더  
**특징**:
- 자동 재생/정지 기능
- 네비게이션 버튼
- 인디케이터 도트
- 접근성 지원

##### IconFeaturesCarousel
**파일**: `IconFeaturesCarousel.tsx`, `IconFeaturesCarousel.stories.ts`  
**용도**: 아이콘과 함께 하는 기능 소개 캐러셀  
**특징**:
- 아이콘 + 텍스트 레이아웃
- 간편한 네비게이션
- 정부 서비스 소개용

##### ComplexFeaturesCarousel
**파일**: `ComplexFeaturesCarousel.tsx`, `ComplexFeaturesCarousel.stories.ts`  
**용도**: 복합적인 기능을 표시하는 고급 캐러셀  
**특징**:
- 카드 형태의 레이아웃
- 상세 정보 표시
- 고급 네비게이션 컨트롤

##### ContentsCardCarousel
**파일**: `ContentsCardCarousel.tsx`, `ContentsCardCarousel.stories.ts`  
**용도**: 콘텐츠 카드들의 캐러셀  
**특징**:
- 콘텐츠 카드 디자인
- 썸네일 이미지 지원
- 부드러운 전환 효과

### 3. 기본 UI 컴포넌트

#### Button
**파일**: `Button.tsx`, `Button.stories.ts`  
**용도**: 정부 표준 버튼 컴포넌트  
**특징**:
- 다양한 버튼 스타일 (primary, secondary, outline 등)
- 크기 변형 (large, medium, small)
- 아이콘 지원
- 접근성 준수

### 4. 페이지 템플릿

#### ApplyPage
**파일**: `ApplyPage.tsx`, `ApplyPage.stories.ts`  
**용도**: 정부 서비스 신청 페이지 템플릿  
**특징**:
- 표준 신청서 레이아웃
- 폼 유효성 검사
- 단계별 진행 표시
- 접근성 최적화

#### ContentsPage
**파일**: `ContentsPage.tsx`  
**용도**: 일반 콘텐츠 페이지 템플릿  
**특징**:
- 표준 콘텐츠 레이아웃
- 목차 및 네비게이션
- 반응형 디자인

### 5. 디자인 시스템

#### DesignTokens
**파일**: `DesignTokens.tsx`, `DesignTokens.stories.ts`  
**용도**: 정부 디자인 토큰 시각화  
**특징**:
- 색상 팔레트 표시
- 타이포그래피 시스템
- 스페이싱 가이드
- 개발자용 참조 도구

## 🎨 스타일링 시스템

### CSS 변수 체계
정부 표준 디자인 토큰을 CSS 변수로 정의:

```css
/* 주요 색상 */
:root {
  --primary: #246BEB;        /* 정부 기본 파란색 */
  --secondary: #003675;      /* 정부 보조 색상 */
  --point: #E71825;          /* 포인트 색상 (빨간색) */
  --gray-10: #F8F8F8;        /* 연한 회색 */
  --gray-20: #E4E4E4;        /* ... */
  --gray-80: #2D2D2D;        /* 진한 회색 */
  --white: #FFFFFF;
  --black: #000000;
}

/* 간격 시스템 */
:root {
  --spacing-xs: 0.25rem;     /* 4px */
  --spacing-sm: 0.5rem;      /* 8px */
  --spacing-md: 1rem;        /* 16px */
  --spacing-lg: 1.5rem;      /* 24px */
  --spacing-xl: 2rem;        /* 32px */
}

/* 반경 시스템 */
:root {
  --rd-4: 0.4rem;           /* 4px */
  --rd-6: 0.6rem;           /* 6px */
  --rd-8: 0.8rem;           /* 8px */
}
```

### 폰트 시스템
**PretendardGOV**: 정부 전용 한글 폰트
- **Regular** (400): 본문용
- **Bold** (700): 제목용
- **Variable Font**: 다양한 굵기 지원

### 반응형 브레이크포인트
```css
/* 모바일 우선 접근법 */
@media (max-width: 768px) { /* 모바일 */ }
@media (min-width: 769px) and (max-width: 1024px) { /* 태블릿 */ }
@media (min-width: 1025px) { /* 데스크톱 */ }
```

## 🔧 JavaScript 기능 시스템

### auto-loader.ts
**역할**: 정부 컴포넌트의 동적 에셋 로딩
**기능**:
- CSS 파일 동적 import
- JavaScript 기능 초기화
- 폰트 로딩 관리
- 에러 핸들링

```typescript
// 주요 함수들
export const loadGovernmentAssets = async (): Promise<void>
export const cleanupGovernmentAssets = (): void
export const isGovernmentAssetsLoaded = (): boolean
```

### government-features.js/ts
**역할**: 정부 웹사이트 표준 인터랙션
**기능**:
- 체크박스 전체 선택
- 반응형 테이블
- 파일 다운로드
- 외부 링크 처리
- 접근성 키보드 네비게이션

## 📱 접근성 (a11y) 구현

### WCAG 2.1 AA 준수사항

#### 키보드 네비게이션
- **Tab**: 다음 요소로 이동
- **Shift+Tab**: 이전 요소로 이동
- **Enter/Space**: 버튼 활성화
- **Arrow Keys**: 캐러셀 네비게이션

#### 스크린 리더 지원
```html
<!-- ARIA 레이블 예시 -->
<button aria-label="이전 슬라이드로 이동">
<div role="region" aria-labelledby="carousel-title">
<nav aria-label="주요 메뉴">
```

#### 색상 대비
- **텍스트**: 4.5:1 이상
- **대형 텍스트**: 3:1 이상
- **UI 컴포넌트**: 3:1 이상

#### 포커스 관리
```css
/* 포커스 표시 */
.btn:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

## 🚀 성능 최적화

### 지연 로딩 (Lazy Loading)
- **CSS**: 필요한 시점에 동적 로딩
- **JavaScript**: 인터랙션 필요 시 로딩
- **이미지**: Intersection Observer 활용

### 코드 스플리팅
```typescript
// 동적 import 예시
const loadCarouselStyles = () => import('../styles/swiper-minimal.css');
```

### 캐싱 전략
- **브라우저 캐시**: 정적 에셋 캐싱
- **메모리 캐시**: 컴포넌트 상태 캐싱
- **CDN**: 폰트 및 이미지 배포

## 🧪 테스트 전략

### Storybook 시각적 테스트
- **컴포넌트 격리**: 각 컴포넌트를 독립적으로 테스트
- **상태 시나리오**: 다양한 props와 상태 조합
- **반응형 테스트**: 여러 디바이스 크기에서 확인

### 접근성 테스트
- **axe-core**: 자동화된 접근성 검사
- **키보드 테스트**: 키보드만으로 모든 기능 접근 확인
- **스크린 리더**: NVDA, JAWS 호환성 테스트

## 🔧 확장 및 커스터마이징

### 새 컴포넌트 추가 시 체크리스트
- [ ] TypeScript 인터페이스 정의
- [ ] CSS 변수 사용
- [ ] 접근성 속성 추가
- [ ] Storybook 스토리 작성
- [ ] 반응형 디자인 적용
- [ ] 키보드 네비게이션 지원

### 스타일 커스터마이징
```css
/* CSS 변수 오버라이드 */
:root {
  --primary: #custom-color;  /* 기본 색상 변경 */
}
```

### 기능 확장
```typescript
// HOC를 통한 기능 확장
export const withGovernmentAssets = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options?: { waitForAssets?: boolean; loadingComponent?: React.ComponentType }
) => {
  // 자동 에셋 로딩 기능 추가
};
```

---

**다음 문서**: [Storybook 설정](./03-storybook-configuration.md)