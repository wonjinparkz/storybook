# AI Quick Access - Korean Government UI Components

AI 서버들이 바로 사용할 수 있는 직접 링크들입니다.

## 🚀 컴포넌트 직접 복사 (1분 설정)

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