# Storybook 설정 및 구성

## 📖 Storybook 개요

이 프로젝트는 **Storybook 9.1.2**를 사용하여 정부 표준 컴포넌트를 문서화하고 시각적으로 테스트합니다. React Webpack5 프레임워크를 기반으로 구성되어 있습니다.

## 🔧 핵심 설정 파일

### 1. main.ts - 메인 설정
**위치**: `.storybook/main.ts`

```typescript
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  // 스토리 파일 위치 - Government 컴포넌트에 특화
  stories: [
    "../src/government/**/*.mdx",                                    // MDX 문서
    "../src/government/**/*.stories.@(js|jsx|mjs|ts|tsx)"          // 스토리 파일
  ],
  
  // 필수 addon들
  addons: [
    "@storybook/preset-create-react-app",    // CRA 호환성
    "@storybook/addon-docs",                 // 문서화 지원
    "@storybook/addon-onboarding"           // 온보딩 가이드
  ],
  
  // React Webpack5 프레임워크
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  
  // 정적 파일 제공
  staticDirs: [
    "../public",                                      // 기본 public 디렉토리
    { from: "../src/government/assets", to: "/assets" }  // Government 에셋을 /assets로 매핑
  ]
};
```

### 2. preview.tsx - 프리뷰 설정
**위치**: `.storybook/preview.tsx`

#### 핵심 기능
- **Government Provider 자동 적용**: Government/ 네임스페이스 스토리에만 자동으로 GovernmentProvider 적용
- **조건부 래핑**: 일반 컴포넌트는 그대로, 정부 컴포넌트만 특별 처리
- **문서화 설정**: 목차(TOC) 자동 생성

```typescript
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,    // 색상 컨트롤 자동 감지
        date: /Date$/i,                   // 날짜 컨트롤 자동 감지
      },
    },
    docs: {
      toc: true,                          // 목차 자동 생성
    },
  },
  
  decorators: [
    (Story, context) => {
      // Government 폴더의 스토리만 특별 처리
      const isGovernmentStory = context.title?.includes('Government/');
      
      if (isGovernmentStory) {
        return (
          <GovernmentProvider autoLoad={true}>
            <div style={{ minHeight: '100vh' }}>
              <Story />
            </div>
          </GovernmentProvider>
        );
      }
      
      // 일반 컴포넌트는 그대로
      return <Story />;
    },
  ],
};
```

### 3. storybook-override.css - 스타일 오버라이드
**위치**: `.storybook/storybook-override.css`

#### 폰트 시스템 통합
Storybook 전체에 PretendardGOV 폰트를 적용하면서 Storybook UI는 보호:

```css
/* Storybook iframe 및 캔버스에 Pretendard GOV 폰트 적용 */
html, body, body *, .sb-show-main, .sb-show-main *,
.sb-main-padded, .sb-main-padded *, .docs-story, .docs-story *,
#storybook-root, #storybook-root *, #storybook-preview-iframe,
[data-is-storybook="true"], [data-is-storybook="true"] * {
  font-family: 'Pretendard GOV', -apple-system, BlinkMacSystemFont, 
               'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 
               sans-serif !important;
}

/* Storybook UI 요소는 원래 폰트 유지 */
.sidebar-container, .sidebar-container *, .manager-main, .manager-main *,
.sb-bar, .sb-bar * {
  font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", 
               "San Francisco", BlinkMacSystemFont, "Segoe UI", 
               "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}
```

## 📁 스토리 구조 및 네이밍 규칙

### 디렉토리 구조
```
src/government/
├── Button.tsx                     # 컴포넌트
├── Button.stories.ts              # 스토리 파일
├── GovernmentHeader.tsx
├── GovernmentHeader.stories.ts
├── ComplexFeaturesCarousel.tsx
├── ComplexFeaturesCarousel.stories.ts
└── Configure.mdx                  # MDX 문서
```

### 네이밍 규칙
- **컴포넌트**: `PascalCase.tsx` (예: `GovernmentHeader.tsx`)
- **스토리**: `PascalCase.stories.ts` (예: `GovernmentHeader.stories.ts`)
- **MDX 문서**: `PascalCase.mdx` (예: `Configure.mdx`)

### 스토리 네임스페이스
Storybook에서 `Government/` 네임스페이스 하위에 모든 정부 컴포넌트가 표시됩니다:

```
Government/
├── Government Header
├── Government Footer
├── Button
├── Complex Features Carousel
├── Contents Card Carousel
├── Full Banner Carousel
├── Icon Features Carousel
├── Apply Page
└── Design Tokens
```

## 🎭 데코레이터 시스템

### GovernmentProvider 데코레이터
**자동 적용 조건**: 스토리 타이틀에 'Government/' 포함  
**적용 내용**:
- GovernmentProvider 컨텍스트 제공
- 자동 에셋 로딩 (autoLoad=true)
- 최소 높이 설정 (minHeight: 100vh)
- 정부 표준 폰트 및 스타일 적용

### 일반 컴포넌트
**적용 조건**: Government/ 네임스페이스가 아닌 스토리  
**처리 방식**: 추가 래핑 없이 그대로 렌더링

## 🔗 정적 파일 제공

### Public 디렉토리
- **경로**: `../public`
- **접근**: `/파일명`
- **용도**: 일반적인 정적 파일 (favicon, manifest 등)

### Government Assets
- **소스**: `../src/government/assets`
- **매핑**: `/assets`
- **접근**: `/assets/파일명`
- **용도**: 정부 전용 아이콘, 이미지, SVG 파일

#### 에셋 사용 예시
```typescript
// 스토리나 컴포넌트에서 사용
const logoSrc = "/assets/head_logo.svg";
const iconSrc = "/assets/ico_arr_16_down.svg";
```

## 📝 스토리 작성 가이드

### 기본 스토리 템플릿
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Government/Component Name',    // Government 네임스페이스 필수
  component: ComponentName,
  parameters: {
    layout: 'fullscreen',               // 레이아웃 설정
    docs: {
      description: {
        component: '컴포넌트 설명...'    // 컴포넌트 문서화
      }
    }
  },
  argTypes: {
    // Props 타입 정의
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    // 기본 props
  },
};

// 변형 스토리들
export const Variant: Story = {
  args: {
    // 변형 props
  },
};
```

### 스토리 작성 베스트 프랙티스

#### 1. 네임스페이스 준수
```typescript
// ✅ 올바른 네임스페이스
title: 'Government/Header'

// ❌ 잘못된 네임스페이스 (GovernmentProvider 적용 안됨)
title: 'Components/Header'
```

#### 2. 의미있는 스토리 변형
```typescript
export const Default: Story = { /* 기본 상태 */ };
export const WithUser: Story = { /* 로그인 상태 */ };
export const Mobile: Story = { /* 모바일 화면 */ };
export const Accessibility: Story = { /* 접근성 테스트 */ };
```

#### 3. 문서화 포함
```typescript
parameters: {
  docs: {
    description: {
      component: `
        정부 표준 헤더 컴포넌트입니다.
        - 정부 로고 및 슬로건 표시
        - 글로벌 네비게이션 제공
        - 반응형 디자인 지원
      `
    }
  }
}
```

## 🚀 실행 및 빌드

### 개발 서버
```bash
npm run storybook
# 포트 6006에서 Storybook 개발 서버 시작
# http://localhost:6006
```

### 정적 빌드
```bash
npm run build-storybook
# storybook-static/ 디렉토리에 정적 파일 생성
# 배포용 빌드 결과물
```

### 빌드 결과물
```
storybook-static/
├── index.html                    # 메인 페이지
├── iframe.html                   # 스토리 프레임
├── assets/                       # 정적 에셋들
├── static/                       # 컴파일된 스토리북 파일들
└── [기타 필요 파일들]
```

## 🔧 고급 설정

### Webpack 설정 확장
main.ts에서 webpack 설정을 확장할 수 있습니다:

```typescript
const config: StorybookConfig = {
  // ... 기본 설정
  webpackFinal: async (config) => {
    // 사용자 정의 webpack 설정
    return config;
  },
};
```

### 환경별 설정
```typescript
// 개발/프로덕션 환경별 다른 설정
const config: StorybookConfig = {
  staticDirs: process.env.NODE_ENV === 'production' 
    ? ["../build/static"] 
    : ["../public"],
};
```

## 🐛 문제 해결

### 일반적인 문제들

#### 1. Government 컴포넌트에 폰트가 적용되지 않음
**원인**: 스토리 타이틀에 'Government/' 네임스페이스가 없음  
**해결**: `title: 'Government/ComponentName'`으로 수정

#### 2. 에셋 파일을 찾을 수 없음
**원인**: 정적 파일 경로 오류  
**해결**: `/assets/파일명` 경로 확인 (main.ts의 staticDirs 설정)

#### 3. GovernmentProvider 컨텍스트 오류
**원인**: Government 네임스페이스가 아닌 스토리에서 useGovernment 훅 사용  
**해결**: 네임스페이스 수정 또는 수동으로 GovernmentProvider 래핑

### 디버깅 도구
```typescript
// 스토리 컨텍스트 확인
decorators: [
  (Story, context) => {
    console.log('Story context:', context);  // 디버깅용
    // ...
  },
],
```

## 📋 체크리스트

### 새 스토리 작성 시
- [ ] `Government/` 네임스페이스 사용
- [ ] 기본 스토리와 주요 변형 스토리 작성
- [ ] 컴포넌트 설명 추가
- [ ] ArgTypes 정의
- [ ] 접근성 고려사항 포함

### 배포 전 확인
- [ ] 모든 스토리가 정상 렌더링
- [ ] 에셋 파일 경로 정상 작동
- [ ] 반응형 디자인 확인
- [ ] 접근성 검사 통과

---

**다음 문서**: [개발 가이드](./04-development-guide.md)