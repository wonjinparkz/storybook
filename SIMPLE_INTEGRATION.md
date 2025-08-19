# 🚀 초간단 통합 가이드

## 방법 1: 통합 번들 (초추천) - 모든 컴포넌트 한 번에

```bash
# 이 4개 파일로 완전한 정부 디자인 시스템 구축
```

1. **모든 컴포넌트 + 타입**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/dist/government-components.tsx
2. **모든 스타일**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/dist/government-components.css
3. **인터랙션 스크립트 (개발)**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/dist/government-scripts.js
4. **인터랙션 스크립트 (운영)**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/dist/government-scripts.min.js

```tsx
// 10개 컴포넌트 모두 바로 사용
import { 
  GovernmentHeader, GovernmentFooter, StepProcessPage,
  FullBannerCarousel, IconFeaturesCarousel, ComplexFeaturesCarousel,
  ContentsCardCarousel, FootContents, TabContents, CardContents
} from './government-components';
import './government-components.css';

<StepProcessPage type="single" title="정부 서비스" breadcrumb={[]} />
<GovernmentHeader etcMenus={{...}} siteInfo={{...}} isLoggedIn={false} menuStructure={[]} />
```

## 방법 2: 개별 컴포넌트 (StepProcessPage만 필요한 경우)

```bash
# 이 3개 링크에서 파일 내용 복사만 하면 끝
```

1. **컴포넌트**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/packages/StepProcessPage/StepProcessPage.tsx
2. **타입**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/packages/StepProcessPage/types.ts
3. **스타일**: https://raw.githubusercontent.com/wonjinparkz/storybook/main/packages/StepProcessPage/styles.css

```tsx
// 바로 사용
import StepProcessPage from './StepProcessPage';
import './styles.css';

<StepProcessPage type="single" title="테스트" breadcrumb={[]} />
```

## 방법 3: NPM 설치

```bash
npm install @wonjinpark/korean-government-ui
```

```tsx
import { StepProcessPage } from '@wonjinpark/korean-government-ui';
```

## 방법 4: CDN 사용

```html
<script src="https://wonjinparkz.github.io/storybook/dist/korean-government-ui.js"></script>
<script>
  const { StepProcessPage } = KoreanGovernmentUI;
</script>
```

## ✅ 추천: 방법 1 (통합 번들)

- **장점**: 10개 컴포넌트 + 스크립트 모두 포함, 의존성 없음, 커스터마이징 자유, 즉시 사용
- **시간**: 4파일 복사 (2분)  
- **관리**: 자동화됨 - 새 컴포넌트 추가 시 자동 포함
- **크기**: 약 90KB (압축 시 ~22KB)
- **자동화**: `npm run bundle:all`로 전체 재빌드

🤖 **자동화**: 새 컴포넌트를 추가하면 빌드 시 자동으로 통합 번들에 포함됩니다!