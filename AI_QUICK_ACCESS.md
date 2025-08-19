# AI Quick Access - Korean Government UI Components

AI 서버들이 바로 사용할 수 있는 직접 링크들입니다.

## 🎯 통합 번들 (추천) - 모든 컴포넌트 한 번에

### 완전한 정부 디자인 시스템 (4파일 복사)
```bash
# 1. 모든 컴포넌트 + 타입 (단일 파일)
curl -o government-components.tsx https://raw.githubusercontent.com/wonjinparkz/storybook/main/dist/government-components.tsx

# 2. 모든 스타일 (단일 파일)  
curl -o government-components.css https://raw.githubusercontent.com/wonjinparkz/storybook/main/dist/government-components.css

# 3. 인터랙션 스크립트 (개발용)
curl -o government-scripts.js https://raw.githubusercontent.com/wonjinparkz/storybook/main/dist/government-scripts.js

# 4. 인터랙션 스크립트 (운영용 - 압축)
curl -o government-scripts.min.js https://raw.githubusercontent.com/wonjinparkz/storybook/main/dist/government-scripts.min.js
```

### React에서 사용
```tsx
import { 
  GovernmentHeader, 
  GovernmentFooter, 
  StepProcessPage,
  FullBannerCarousel,
  IconFeaturesCarousel, 
  ComplexFeaturesCarousel,
  ContentsCardCarousel,
  FootContents,
  TabContents,
  CardContents
} from './government-components';
import './government-components.css';

// 바로 사용 가능!
<StepProcessPage type="single" title="정부 서비스" breadcrumb={[]} />
<GovernmentHeader etcMenus={{...}} siteInfo={{...}} isLoggedIn={false} menuStructure={[]} />
<FullBannerCarousel slides={[]} swiperId="banner1" />
```

### HTML에서 사용 (스크립트 포함)
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="government-components.css">
</head>
<body>
  <!-- 컴포넌트 HTML -->
  <div id="app"></div>
  
  <!-- 인터랙션 스크립트 -->
  <script src="government-scripts.min.js"></script>
  <script>
    // 자동 초기화됨 - 추가 설정 불필요
    console.log('정부 디자인 시스템 준비 완료');
  </script>
</body>
</html>
```

**포함된 컴포넌트**: 
- `ApplyPage`
- `CardContents`
- `ComplexFeaturesCarousel`
- `ContentsCardCarousel`
- `ContentsListPage`
- `ContentsPage`
- `ContentsSearchPage`
- `ContentsSidebar`
- `FootContents`
- `FullBannerCarousel`
- `GovernmentFooter`
- `GovernmentHeader`
- `IconFeaturesCarousel`
- `StepProcessPage`
- `TabContents`
 - 정부사이트 헤더 
- `GovernmentFooter` - 정부사이트 푸터
- `StepProcessPage` - 단계별 신청 폼 (14개 필드 타입)
- `FullBannerCarousel` - 메인 배너 슬라이더
- `IconFeaturesCarousel` - 아이콘 메뉴 슬라이더  
- `ComplexFeaturesCarousel` - 고급 카드 슬라이더
- `ContentsCardCarousel` - 콘텐츠 카드 슬라이더
- `FootContents` - 하단 콘텐츠 섹션
- `TabContents` - 탭형 콘텐츠
- `CardContents` - 카드 그리드 레이아웃

## 🚀 개별 컴포넌트 복사 (1분 설정)

### StepProcessPage 컴포넌트
```bash
# 1. 컴포넌트 파일
curl -o StepProcessPage.tsx https://raw.githubusercontent.com/wonjinparkz/storybook/main/src/government/StepProcessPage.tsx

# 2. 타입 파일 (필요한 부분만)
curl -o types.ts https://raw.githubusercontent.com/wonjinparkz/storybook/main/packages/StepProcessPage/types.ts

# 3. 스타일 파일
curl -o stepprocess.css https://raw.githubusercontent.com/wonjinparkz/storybook/main/packages/StepProcessPage/styles.css
```

### 즉시 사용
```tsx
import StepProcessPage from './StepProcessPage';
import './stepprocess.css';

// 바로 사용!
<StepProcessPage type="single" title="테스트" breadcrumb={[]} />
```

## 📱 CDN 사용 (HTML에서 바로)

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://wonjinparkz.github.io/storybook/cdn/korean-government-ui.css">
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://wonjinparkz.github.io/storybook/cdn/korean-government-ui.umd.js"></script>
  <script>
    const { StepProcessPage } = KoreanGovernmentUI;
    // 바로 사용 가능
  </script>
</body>
</html>
```

## 🎯 원클릭 복사 링크들

### StepProcessPage
- **컴포넌트**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/packages/StepProcessPage/StepProcessPage.tsx
- **타입**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/packages/StepProcessPage/types.ts  
- **스타일**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/packages/StepProcessPage/styles.css

### Government Header
- **컴포넌트**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/src/government/GovernmentHeader.tsx
- **타입**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/src/government/types.ts (해당 섹션만)

### Government Footer  
- **컴포넌트**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/src/government/GovernmentFooter.tsx

## 📦 NPM 패키지 (출시 예정)

```bash
npm install @wonjinpark/korean-government-ui
```

```tsx
import { StepProcessPage, GovernmentHeader, GovernmentFooter } from '@wonjinpark/korean-government-ui';
```

## 🔗 API 엔드포인트

### 컴포넌트 메타데이터
```
GET https://wonjinparkz.github.io/storybook/api/components.json
```

### 개별 컴포넌트 정보
```
GET https://wonjinparkz.github.io/storybook/api/stepprocesspage.json
GET https://wonjinparkz.github.io/storybook/api/header.json
GET https://wonjinparkz.github.io/storybook/api/footer.json
```

## ⚡ AI 서버 통합 예시

### ChatGPT/Claude 등이 바로 사용할 수 있는 형태

```typescript
// 1분 설정: 이 3개 파일만 복사
// StepProcessPage.tsx, types.ts, styles.css

// 바로 사용
const MyApp = () => (
  <StepProcessPage
    type="single"
    title="AI 테스트"
    breadcrumb={[{text: '홈'}]}
    stepContents={{
      1: {
        fields: [{
          type: 'text',
          name: 'test',
          label: 'AI 입력 테스트'
        }]
      }
    }}
  />
);
```

## 🎨 라이브 예시 링크

- **기본 폼**: https://wonjinparkz.github.io/storybook/?path=/story/government-z-page-stepprocesspage--dynamic-form-basic
- **복합 폼**: https://wonjinparkz.github.io/storybook/?path=/story/government-z-page-stepprocesspage--dynamic-form-complex
- **4단계 프로세스**: https://wonjinparkz.github.io/storybook/?path=/story/government-z-page-stepprocesspage--full-step-process

## 📞 지원

- **GitHub Issues**: https://github.com/wonjinparkz/storybook/issues
- **Storybook Docs**: https://wonjinparkz.github.io/storybook/
- **실시간 업데이트**: main 브랜치 푸시 시 자동 반영