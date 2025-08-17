# 스타일 시스템 참조

## 🎨 정부 표준 디자인 시스템

이 프로젝트는 한국 정부 웹표준을 준수하는 종합적인 스타일 시스템을 구현합니다. CSS 커스텀 프로퍼티(CSS 변수)를 기반으로 일관성 있는 디자인을 제공합니다.

## 🎯 CSS 변수 체계

### 색상 시스템 (Color Tokens)

#### 주요 색상 (Primary Colors)
```css
:root {
  /* 정부 기본 색상 */
  --primary: #246BEB;           /* 정부 표준 파란색 */
  --primary-5: #EFF5FF;         /* Primary 5% 농도 */
  --primary-10: #DFE9FF;        /* Primary 10% 농도 */
  
  /* 정부 보조 색상 */
  --secondary: #003675;         /* 정부 진한 파란색 */
  --secondary-5: #EDF1F5;       /* Secondary 5% 농도 */
  --secondary-10: #DBE2EA;      /* Secondary 10% 농도 */
  
  /* 포인트 색상 */
  --point: #E71825;             /* 정부 빨간색 (강조용) */
  --point-5: #FDEDEF;           /* Point 5% 농도 */
  --point-10: #FBD5D8;          /* Point 10% 농도 */
}
```

#### 그레이스케일 (Grayscale)
```css
:root {
  /* 기본 흑백 */
  --white: #FFFFFF;
  --black: #000000;
  
  /* 그레이 스케일 (10% 단위) */
  --gray-10: #F8F8F8;          /* 매우 연한 회색 (배경용) */
  --gray-20: #E4E4E4;          /* 연한 회색 (구분선용) */
  --gray-30: #D8D8D8;          /* 보통 연한 회색 (테두리용) */
  --gray-40: #C2C2C2;          /* 중간 연한 회색 */
  --gray-50: #999999;          /* 중간 회색 */
  --gray-60: #717171;          /* 중간 진한 회색 (보조 텍스트) */
  --gray-70: #555555;          /* 진한 회색 (일반 텍스트) */
  --gray-80: #2D2D2D;          /* 매우 진한 회색 (제목 텍스트) */
  --gray-90: #1A1A1A;          /* 거의 검은색 */
}
```

#### 시맨틱 색상 (Semantic Colors)
```css
:root {
  /* 성공 */
  --success: #22C55E;
  --success-bg: #F0FDF4;
  --success-border: #BBF7D0;
  
  /* 경고 */
  --warning: #F59E0B;
  --warning-bg: #FFFBEB;
  --warning-border: #FDE68A;
  
  /* 오류 */
  --error: #EF4444;
  --error-bg: #FEF2F2;
  --error-border: #FECACA;
  
  /* 정보 */
  --info: #3B82F6;
  --info-bg: #EFF6FF;
  --info-border: #DBEAFE;
}
```

### 타이포그래피 시스템 (Typography)

#### 폰트 패밀리
```css
:root {
  /* 정부 전용 폰트 */
  --font-government: 'Pretendard GOV', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* 시스템 폰트 (fallback) */
  --font-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
  
  /* 모노스페이스 폰트 */
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
}
```

#### 폰트 크기 스케일 (Font Scale)
```css
:root {
  /* 기본 폰트 크기 */
  --font-size-base: 1rem;       /* 16px */
  
  /* 헤딩 폰트 크기 */
  --font-size-h1: 2.5rem;       /* 40px */
  --font-size-h2: 2rem;         /* 32px */
  --font-size-h3: 1.5rem;       /* 24px */
  --font-size-h4: 1.25rem;      /* 20px */
  --font-size-h5: 1.125rem;     /* 18px */
  --font-size-h6: 1rem;         /* 16px */
  
  /* 본문 폰트 크기 */
  --font-size-lg: 1.125rem;     /* 18px - 큰 본문 */
  --font-size-md: 1rem;         /* 16px - 기본 본문 */
  --font-size-sm: 0.875rem;     /* 14px - 작은 텍스트 */
  --font-size-xs: 0.75rem;      /* 12px - 매우 작은 텍스트 */
}
```

#### 폰트 굵기 (Font Weight)
```css
:root {
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

#### 줄 높이 (Line Height)
```css
:root {
  --line-height-tight: 1.25;    /* 헤딩용 */
  --line-height-normal: 1.5;    /* 일반 텍스트 */
  --line-height-relaxed: 1.625; /* 긴 텍스트 */
  --line-height-loose: 2;       /* 매우 긴 텍스트 */
}
```

### 간격 시스템 (Spacing)

#### 기본 간격 (Base Spacing)
```css
:root {
  /* 4px 기반 간격 시스템 */
  --spacing-0: 0;
  --spacing-1: 0.25rem;         /* 4px */
  --spacing-2: 0.5rem;          /* 8px */
  --spacing-3: 0.75rem;         /* 12px */
  --spacing-4: 1rem;            /* 16px */
  --spacing-5: 1.25rem;         /* 20px */
  --spacing-6: 1.5rem;          /* 24px */
  --spacing-8: 2rem;            /* 32px */
  --spacing-10: 2.5rem;         /* 40px */
  --spacing-12: 3rem;           /* 48px */
  --spacing-16: 4rem;           /* 64px */
  --spacing-20: 5rem;           /* 80px */
  --spacing-24: 6rem;           /* 96px */
  --spacing-32: 8rem;           /* 128px */
}
```

#### 시맨틱 간격 (Semantic Spacing)
```css
:root {
  /* 자주 사용되는 간격에 시맨틱 이름 부여 */
  --spacing-xs: var(--spacing-1);   /* 4px */
  --spacing-sm: var(--spacing-2);   /* 8px */
  --spacing-md: var(--spacing-4);   /* 16px */
  --spacing-lg: var(--spacing-6);   /* 24px */
  --spacing-xl: var(--spacing-8);   /* 32px */
  --spacing-2xl: var(--spacing-12); /* 48px */
  --spacing-3xl: var(--spacing-16); /* 64px */
}
```

### 모서리 반지름 (Border Radius)

```css
:root {
  /* 정부 표준 반지름 */
  --rd-none: 0;
  --rd-2: 0.2rem;               /* 2px */
  --rd-4: 0.4rem;               /* 4px */
  --rd-6: 0.6rem;               /* 6px */
  --rd-8: 0.8rem;               /* 8px */
  --rd-12: 1.2rem;              /* 12px */
  --rd-16: 1.6rem;              /* 16px */
  --rd-full: 9999px;            /* 완전한 원형 */
  
  /* 시맨틱 반지름 */
  --rd-sm: var(--rd-4);         /* 작은 반지름 */
  --rd-md: var(--rd-6);         /* 기본 반지름 */
  --rd-lg: var(--rd-8);         /* 큰 반지름 */
  --rd-xl: var(--rd-12);        /* 매우 큰 반지름 */
}
```

### 그림자 시스템 (Shadow)

```css
:root {
  /* 박스 그림자 */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* 내부 그림자 */
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  
  /* 포커스 그림자 */
  --shadow-focus: 0 0 0 3px rgba(36, 107, 235, 0.1);
  --shadow-focus-error: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```

### Z-Index 시스템

```css
:root {
  /* 레이어 관리 */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-toast: 1080;
}
```

## 📱 반응형 디자인 시스템

### 브레이크포인트

```css
/* 모바일 우선 접근법 */
:root {
  --breakpoint-sm: 640px;       /* 작은 태블릿 */
  --breakpoint-md: 768px;       /* 태블릿 */
  --breakpoint-lg: 1024px;      /* 작은 데스크톱 */
  --breakpoint-xl: 1280px;      /* 큰 데스크톱 */
  --breakpoint-2xl: 1536px;     /* 매우 큰 화면 */
}

/* 미디어 쿼리 사용 예시 */
@media (min-width: 768px) {
  /* 태블릿 이상에서 적용 */
}

@media (min-width: 1024px) {
  /* 데스크톱 이상에서 적용 */
}
```

### 컨테이너 시스템

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
```

## 🧩 컴포넌트 스타일 패턴

### BEM 방법론 적용

```css
/* Block */
.government-header {
  background: var(--white);
  border-bottom: 1px solid var(--gray-20);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

/* Element */
.government-header__logo {
  height: 60px;
  width: auto;
}

.government-header__nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
}

.government-header__menu-item {
  padding: var(--spacing-3) var(--spacing-4);
  text-decoration: none;
  color: var(--gray-70);
  font-weight: var(--font-weight-medium);
  transition: color 0.2s ease;
}

/* Modifier */
.government-header--transparent {
  background: transparent;
  border-bottom: none;
}

.government-header__menu-item--active {
  color: var(--primary);
  font-weight: var(--font-weight-semibold);
}

.government-header__menu-item--disabled {
  color: var(--gray-40);
  cursor: not-allowed;
  pointer-events: none;
}
```

### 상태 기반 스타일링

```css
/* 호버 상태 */
.btn:hover:not(.btn--disabled) {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* 포커스 상태 */
.btn:focus {
  outline: none;
  box-shadow: var(--shadow-focus);
}

/* 활성 상태 */
.btn:active {
  transform: translateY(0);
}

/* 비활성 상태 */
.btn--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

/* 로딩 상태 */
.btn--loading {
  position: relative;
  color: transparent;
}

.btn--loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-right-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

### 애니메이션 시스템

```css
:root {
  /* 애니메이션 지속 시간 */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* 이징 함수 */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 페이드 인 애니메이션 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 슬라이드 인 애니메이션 */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 사용 예시 */
.fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

.slide-in-right {
  animation: slideInRight var(--duration-normal) var(--ease-out);
}
```

## 🎭 테마 시스템

### 다크 모드 지원

```css
/* 라이트 테마 (기본) */
:root {
  --bg-primary: var(--white);
  --bg-secondary: var(--gray-10);
  --text-primary: var(--gray-80);
  --text-secondary: var(--gray-60);
  --border-color: var(--gray-20);
}

/* 다크 테마 */
[data-theme="dark"] {
  --bg-primary: var(--gray-90);
  --bg-secondary: var(--gray-80);
  --text-primary: var(--gray-10);
  --text-secondary: var(--gray-30);
  --border-color: var(--gray-70);
}

/* 고대비 테마 */
[data-theme="high-contrast"] {
  --bg-primary: var(--white);
  --bg-secondary: var(--gray-10);
  --text-primary: var(--black);
  --text-secondary: var(--gray-80);
  --border-color: var(--black);
}
```

### 접근성 고려사항

```css
/* 색상 대비 확보 */
.text-primary {
  color: var(--text-primary);
  /* 4.5:1 이상 명도 대비 확보 */
}

/* 움직임 감소 선호 설정 고려 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 고대비 모드 지원 */
@media (prefers-contrast: high) {
  .btn {
    border: 2px solid currentColor;
  }
}

/* 포커스 링 강화 */
.focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

## 📏 레이아웃 유틸리티

### 플렉스박스 유틸리티

```css
/* 플렉스 컨테이너 */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

/* 정렬 */
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }

.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.items-stretch { align-items: stretch; }

/* 플렉스 아이템 */
.flex-1 { flex: 1 1 0%; }
.flex-auto { flex: 1 1 auto; }
.flex-none { flex: none; }
```

### 그리드 유틸리티

```css
.grid {
  display: grid;
}

.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

.gap-1 { gap: var(--spacing-1); }
.gap-2 { gap: var(--spacing-2); }
.gap-4 { gap: var(--spacing-4); }
.gap-6 { gap: var(--spacing-6); }
.gap-8 { gap: var(--spacing-8); }
```

## 📋 스타일 작성 가이드

### CSS 변수 사용 권장사항

```css
/* ✅ 권장: CSS 변수 사용 */
.my-component {
  color: var(--primary);
  background: var(--white);
  padding: var(--spacing-md);
  border-radius: var(--rd-md);
}

/* ❌ 비권장: 하드코딩된 값 */
.my-component {
  color: #246BEB;
  background: #FFFFFF;
  padding: 16px;
  border-radius: 6px;
}
```

### 반응형 스타일 작성

```css
/* 모바일 우선 접근법 */
.responsive-component {
  /* 모바일 스타일 (기본) */
  padding: var(--spacing-4);
  font-size: var(--font-size-sm);
}

@media (min-width: 768px) {
  .responsive-component {
    /* 태블릿 스타일 */
    padding: var(--spacing-6);
    font-size: var(--font-size-md);
  }
}

@media (min-width: 1024px) {
  .responsive-component {
    /* 데스크톱 스타일 */
    padding: var(--spacing-8);
    font-size: var(--font-size-lg);
  }
}
```

### 성능 최적화

```css
/* 하드웨어 가속 활용 */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
}

/* 리플로우 최소화 */
.efficient-animation {
  /* transform과 opacity만 애니메이션 */
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* 폰트 최적화 */
.optimized-text {
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

이 스타일 시스템 참조는 독립 에이전트가 일관성 있고 접근성을 고려한 스타일을 작성할 수 있도록 구성되었습니다. 모든 스타일은 정부 표준을 준수하며, 유지보수와 확장성을 고려하여 설계되었습니다.