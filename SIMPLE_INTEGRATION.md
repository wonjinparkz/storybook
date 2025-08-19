# 🚀 초간단 통합 가이드

## 방법 1: 3초 복사 (추천)

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

## 방법 2: NPM 설치

```bash
npm install @wonjinpark/korean-government-ui
```

```tsx
import { StepProcessPage } from '@wonjinpark/korean-government-ui';
```

## 방법 3: CDN 사용

```html
<script src="https://wonjinparkz.github.io/storybook/dist/korean-government-ui.js"></script>
<script>
  const { StepProcessPage } = KoreanGovernmentUI;
</script>
```

## ✅ 추천: 방법 1 (Raw 링크 복사)

- **장점**: 의존성 없음, 커스터마이징 자유, 즉시 사용
- **시간**: 3초
- **관리**: 필요 없음

더 복잡한 관리는 필요 없습니다!