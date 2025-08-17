# 개발 가이드 및 베스트 프랙티스

## 🎯 개발 원칙

### 핵심 가치
1. **접근성 우선**: WCAG 2.1 AA 수준 준수
2. **정부 표준**: 한국 정부 디자인 시스템 가이드라인 따름
3. **타입 안전성**: TypeScript 엄격 모드 사용
4. **컴포넌트 기반**: 재사용 가능한 컴포넌트 설계
5. **문서화**: 모든 컴포넌트는 Storybook으로 문서화

### 코딩 스타일
- **ESLint**: React 및 Storybook 권장 규칙 적용
- **TypeScript**: 엄격한 타입 체크
- **네이밍**: PascalCase 컴포넌트, camelCase 함수/변수
- **파일 구조**: 컴포넌트별 폴더 구조 또는 단일 파일

## 🏗️ 프로젝트 구조 가이드

### 디렉토리 구성 원칙
```
src/
├── components/           # 범용 컴포넌트 (정부 표준과 무관)
│   ├── ComponentName/   # 폴더형 구조 (복잡한 컴포넌트)
│   │   ├── index.ts     # export 정의
│   │   ├── ComponentName.tsx
│   │   ├── ComponentName.css
│   │   └── ComponentName.stories.ts
│   └── SimpleComponent.tsx  # 단일 파일 (간단한 컴포넌트)
└── government/          # 정부 표준 컴포넌트
    ├── ComponentName.tsx      # 컴포넌트 파일
    ├── ComponentName.stories.ts  # 스토리 파일
    ├── assets/               # 정부 전용 에셋
    ├── components/           # 공통 유틸리티 컴포넌트
    ├── fonts/               # 폰트 파일
    ├── scripts/             # JavaScript 유틸리티
    ├── styles/              # CSS 스타일
    └── utils/               # TypeScript 유틸리티
```

### 파일 네이밍 규칙
```
# 컴포넌트
PascalCase.tsx                 # GovernmentHeader.tsx
PascalCase.stories.ts          # GovernmentHeader.stories.ts
PascalCase.css                 # GovernmentHeader.css

# 유틸리티
kebab-case.ts                  # auto-loader.ts
kebab-case.js                  # government-features.js

# 스타일
kebab-case.css                 # dropdown-styles.css
index.css                      # 메인 스타일

# 타입 정의
types.ts                       # 프로젝트 공통 타입
ComponentName.types.ts         # 특정 컴포넌트 타입
```

## 🧩 새 컴포넌트 개발 워크플로우

### 1단계: 요구사항 분석
```markdown
## 컴포넌트 기획서 템플릿

### 기본 정보
- **컴포넌트명**: [PascalCase]
- **용도**: [한 줄 설명]
- **카테고리**: Layout | Navigation | Form | Display | Feedback

### 기능 요구사항
- [ ] 기본 기능 1
- [ ] 기본 기능 2
- [ ] 선택적 기능 1

### 접근성 요구사항
- [ ] 키보드 네비게이션
- [ ] 스크린 리더 지원
- [ ] 색상 대비 준수
- [ ] 포커스 관리

### 디자인 요구사항
- [ ] 정부 디자인 토큰 사용
- [ ] 반응형 디자인
- [ ] 다크모드 지원 (필요 시)
```

### 2단계: 타입 정의
```typescript
// ComponentName.types.ts 또는 컴포넌트 파일 상단
export interface ComponentNameProps {
  /** 컴포넌트의 주요 텍스트 */
  title: string;
  
  /** 선택적 설명 텍스트 */
  description?: string;
  
  /** 버튼 크기 변형 */
  size?: 'small' | 'medium' | 'large';
  
  /** 비활성화 상태 */
  disabled?: boolean;
  
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  
  /** 추가 CSS 클래스 */
  className?: string;
  
  /** 인라인 스타일 */
  style?: React.CSSProperties;
  
  /** 자식 요소 */
  children?: React.ReactNode;
}
```

### 3단계: 컴포넌트 구현
```typescript
// ComponentName.tsx
import React from 'react';
import { ComponentNameProps } from './ComponentName.types'; // 또는 인라인 정의

/**
 * 컴포넌트 설명
 * @param props - ComponentName의 props
 * @returns JSX.Element
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  description,
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  style,
  children,
  ...restProps
}) => {
  // 컴포넌트 로직
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  // CSS 클래스 조합
  const componentClasses = [
    'component-name',
    `component-name--${size}`,
    disabled && 'component-name--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={componentClasses}
      style={style}
      onClick={handleClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      {...restProps}
    >
      <h3 className="component-name__title">{title}</h3>
      {description && (
        <p className="component-name__description">{description}</p>
      )}
      {children}
    </div>
  );
};

export default ComponentName;
```

### 4단계: 스타일링
```css
/* ComponentName.css 또는 스타일 섹션 */

/* BEM 방법론 사용 */
.component-name {
  /* CSS 변수 사용 */
  background-color: var(--white);
  border: 1px solid var(--gray-30);
  border-radius: var(--rd-6);
  padding: var(--spacing-md);
  font-family: 'Pretendard GOV', sans-serif;
  
  /* 기본 상태 */
  cursor: pointer;
  transition: all 0.2s ease;
}

/* 크기 변형 */
.component-name--small {
  padding: var(--spacing-sm);
  font-size: 0.875rem;
}

.component-name--medium {
  padding: var(--spacing-md);
  font-size: 1rem;
}

.component-name--large {
  padding: var(--spacing-lg);
  font-size: 1.125rem;
}

/* 상태 변형 */
.component-name--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: var(--gray-10);
}

.component-name:hover:not(.component-name--disabled) {
  background-color: var(--secondary-5);
  border-color: var(--secondary);
}

.component-name:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* 내부 요소 */
.component-name__title {
  margin: 0 0 var(--spacing-sm) 0;
  font-weight: 600;
  color: var(--gray-80);
}

.component-name__description {
  margin: 0;
  color: var(--gray-60);
  font-size: 0.875rem;
  line-height: 1.5;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .component-name {
    padding: var(--spacing-sm);
  }
  
  .component-name__title {
    font-size: 1rem;
  }
}
```

### 5단계: Storybook 스토리 작성
```typescript
// ComponentName.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Government/Component Name',
  component: ComponentName,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          정부 표준 컴포넌트입니다.
          
          ## 특징
          - 정부 디자인 토큰 사용
          - 접근성 준수 (WCAG 2.1 AA)
          - 반응형 디자인 지원
          - 키보드 네비게이션 지원
        `
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '컴포넌트 크기'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태'
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    title: '기본 컴포넌트',
    description: '기본 상태의 컴포넌트입니다.',
  },
};

// 크기 변형
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
    title: '작은 크기',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
    title: '큰 크기',
  },
};

// 상태 변형
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    title: '비활성화된 컴포넌트',
  },
};

// 접근성 테스트
export const AccessibilityTest: Story = {
  args: {
    ...Default.args,
    title: '접근성 테스트',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab 키로 포커스 이동, Enter/Space로 활성화 테스트'
      }
    }
  }
};

// 반응형 테스트
export const ResponsiveTest: Story = {
  args: {
    ...Default.args,
    title: '반응형 테스트',
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
      },
    },
  },
};
```

## 🎨 스타일링 가이드

### CSS 변수 사용
```css
/* ✅ 정부 표준 CSS 변수 사용 */
.my-component {
  color: var(--primary);
  background: var(--white);
  border: 1px solid var(--gray-30);
  border-radius: var(--rd-6);
  padding: var(--spacing-md);
}

/* ❌ 하드코딩된 값 사용 금지 */
.my-component {
  color: #246BEB;
  background: #FFFFFF;
  border: 1px solid #D8D8D8;
  border-radius: 6px;
  padding: 16px;
}
```

### BEM 네이밍 규칙
```css
/* Block */
.government-header { }

/* Element */
.government-header__logo { }
.government-header__nav { }
.government-header__menu-item { }

/* Modifier */
.government-header--mobile { }
.government-header__menu-item--active { }
.government-header__menu-item--disabled { }
```

### 반응형 디자인
```css
/* 모바일 우선 접근법 */
.component {
  /* 모바일 스타일 (기본) */
  padding: var(--spacing-sm);
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .component {
    /* 태블릿 스타일 */
    padding: var(--spacing-md);
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .component {
    /* 데스크톱 스타일 */
    padding: var(--spacing-lg);
    font-size: 1.125rem;
  }
}
```

## ♿ 접근성 구현 가이드

### 의미있는 HTML 구조
```html
<!-- ✅ 의미있는 HTML -->
<nav aria-label="주요 메뉴">
  <ul>
    <li><a href="/">홈</a></li>
    <li><a href="/about">소개</a></li>
  </ul>
</nav>

<main>
  <h1>페이지 제목</h1>
  <section aria-labelledby="section-title">
    <h2 id="section-title">섹션 제목</h2>
    <!-- 내용 -->
  </section>
</main>

<!-- ❌ 의미없는 div 남용 -->
<div class="nav">
  <div class="nav-item">홈</div>
  <div class="nav-item">소개</div>
</div>
```

### ARIA 속성 사용
```typescript
// 버튼 컴포넌트 예시
<button
  aria-label="메뉴 열기"           // 스크린 리더용 설명
  aria-expanded={isOpen}          // 확장 상태
  aria-controls="menu-items"      // 제어하는 요소 ID
  aria-describedby="menu-help"    // 추가 설명 요소 ID
>
  메뉴
</button>

// 폼 입력 예시
<div>
  <label htmlFor="email">이메일 주소</label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby="email-error"
  />
  {hasError && (
    <div id="email-error" role="alert">
      올바른 이메일 주소를 입력해주세요.
    </div>
  )}
</div>
```

### 키보드 네비게이션
```typescript
const handleKeyDown = (event: React.KeyboardEvent) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      onClick?.();
      break;
    case 'Escape':
      if (isOpen) {
        setIsOpen(false);
      }
      break;
    case 'ArrowDown':
      // 다음 항목으로 이동
      focusNextItem();
      break;
    case 'ArrowUp':
      // 이전 항목으로 이동
      focusPreviousItem();
      break;
  }
};
```

### 포커스 관리
```typescript
// 포커스 트랩 구현
const FocusTrap: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const focusableElements = containerRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements && focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  }, []);

  return (
    <div ref={containerRef} onKeyDown={handleKeyDown}>
      {children}
    </div>
  );
};
```

## 🔧 유틸리티 함수 가이드

### 자주 사용되는 유틸리티
```typescript
// 클래스명 조합
export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// 사용 예시
const buttonClass = cn(
  'btn',
  size && `btn--${size}`,
  disabled && 'btn--disabled',
  className
);

// 디바운스
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// 포맷팅
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('ko-KR').format(num);
};
```

## 🧪 테스트 가이드

### Jest + React Testing Library
```typescript
// ComponentName.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  test('기본 렌더링', () => {
    render(<ComponentName title="테스트 제목" />);
    expect(screen.getByText('테스트 제목')).toBeInTheDocument();
  });

  test('클릭 이벤트', () => {
    const handleClick = jest.fn();
    render(<ComponentName title="테스트" onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('비활성화 상태', () => {
    render(<ComponentName title="테스트" disabled />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  test('키보드 네비게이션', () => {
    const handleClick = jest.fn();
    render(<ComponentName title="테스트" onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## 🐛 문제 해결

### 자주 발생하는 문제들

#### 1. TypeScript 오류
```typescript
// ❌ 문제: Property 'onClick' does not exist
interface Props {
  title: string;
}

// ✅ 해결: 옵셔널 속성 추가
interface Props {
  title: string;
  onClick?: () => void;
}
```

#### 2. CSS 변수가 적용되지 않음
```css
/* ❌ 문제: CSS 변수 미정의 */
.component {
  color: var(--primary-color);  /* 존재하지 않는 변수 */
}

/* ✅ 해결: 올바른 변수명 사용 */
.component {
  color: var(--primary);        /* 정의된 변수 사용 */
}
```

#### 3. GovernmentProvider 컨텍스트 오류
```typescript
// ❌ 문제: useGovernment() hook을 Government 네임스페이스 외부에서 사용
export const MyComponent = () => {
  const { isAssetsLoaded } = useGovernment(); // 오류!
};

// ✅ 해결: Government 네임스페이스 사용하거나 수동 래핑
// 방법 1: 스토리 네임스페이스 수정
title: 'Government/My Component'

// 방법 2: 수동 래핑
<GovernmentProvider>
  <MyComponent />
</GovernmentProvider>
```

#### 4. Storybook 에셋 경로 오류
```typescript
// ❌ 문제: 상대 경로 사용
const imageSrc = '../assets/logo.svg';

// ✅ 해결: 정적 파일 경로 사용
const imageSrc = '/assets/logo.svg';  // main.ts의 staticDirs 설정 활용
```

### 디버깅 도구
```typescript
// Government 컨텍스트 상태 확인
const DebugGovernment = () => {
  const context = useGovernment();
  console.log('Government Context:', context);
  return null;
};

// 스토리에서 사용
export const Debug: Story = {
  render: () => (
    <>
      <DebugGovernment />
      <ComponentName title="디버그 테스트" />
    </>
  ),
};
```

## 📋 개발 체크리스트

### 새 컴포넌트 체크리스트
- [ ] TypeScript 인터페이스 정의
- [ ] 정부 CSS 변수 사용
- [ ] BEM 네이밍 규칙 적용
- [ ] 접근성 속성 추가 (role, aria-*)
- [ ] 키보드 네비게이션 구현
- [ ] 반응형 디자인 적용
- [ ] Storybook 스토리 작성 (최소 3개 변형)
- [ ] Government 네임스페이스 사용
- [ ] 에러 상태 고려
- [ ] 로딩 상태 고려 (필요 시)

### 배포 전 체크리스트
- [ ] 모든 스토리 정상 렌더링
- [ ] 접근성 검사 통과
- [ ] 반응형 테스트 완료
- [ ] 키보드 네비게이션 테스트
- [ ] 스크린 리더 테스트
- [ ] 빌드 오류 없음
- [ ] TypeScript 타입 체크 통과
- [ ] ESLint 규칙 준수

### 코드 리뷰 포인트
- [ ] 코드 가독성 및 유지보수성
- [ ] 성능 최적화 고려사항
- [ ] 보안 이슈 없음
- [ ] 정부 표준 가이드라인 준수
- [ ] 재사용 가능성 고려
- [ ] 문서화 충분성

---

**다음 문서**: [컴포넌트 카탈로그](./05-component-catalog.md)