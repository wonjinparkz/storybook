# 🤖 자동화된 통합 번들 빌드 시스템

Korean Government Design System의 자동화된 빌드 시스템 가이드입니다.

## 📋 개요

수동으로 컴포넌트를 추가/수정할 때마다 통합 파일을 업데이트할 필요가 없습니다! 
이 시스템은 **모든 컴포넌트를 자동으로 스캔하고 통합 번들을 생성**합니다.

## 🚀 사용법

### 1. 새 컴포넌트 추가 시

```bash
# 1. src/government/ 폴더에 새 컴포넌트 추가
# 2. 자동 빌드 실행
npm run bundle:all

# 또는 개별 빌드
npm run bundle          # 컴포넌트만
npm run bundle:scripts  # 스크립트만
```

### 2. 개발 중 자동 빌드

```bash
# 파일 변경 시 자동으로 번들 재생성
npm run bundle:watch

# 또는 Storybook과 함께 실행
npm run dev
```

### 3. 전체 배포 빌드

```bash
# 번들 + Storybook + GitHub Pages 배포
npm run build:complete
```

## 🔧 빌드 시스템 구조

### 스크립트 파일들

| 파일 | 역할 |
|------|------|
| `scripts/build-bundle.js` | 컴포넌트 + CSS 통합 |
| `scripts/build-scripts.js` | JavaScript 스크립트 통합 |
| `scripts/build-all.js` | 전체 통합 빌드 |

### 생성되는 파일들

| 파일 | 설명 | 크기 |
|------|------|------|
| `dist/government-components.tsx` | 모든 컴포넌트 + 타입 | ~50KB |
| `dist/government-components.css` | 통합 스타일시트 | ~25KB |
| `dist/government-scripts.js` | 인터랙션 스크립트 (개발용) | ~10KB |
| `dist/government-scripts.min.js` | 인터랙션 스크립트 (압축) | ~5KB |

## 📁 디렉토리 구조

```
src/government/
├── *.tsx              # 👈 자동 스캔 대상
├── types.ts           # 👈 타입 정의 자동 포함
├── styles/
│   └── *.css          # 👈 자동 스타일 통합
└── scripts/
    └── *.js           # 👈 자동 스크립트 통합

dist/                  # 👈 생성된 통합 파일들
├── government-components.tsx
├── government-components.css
├── government-scripts.js
└── government-scripts.min.js
```

## ⚙️ 자동화 규칙

### 컴포넌트 스캔 규칙

✅ **포함되는 파일:**
- `src/government/*.tsx` (컴포넌트 파일)
- `src/government/types.ts` (타입 정의)
- `src/government/styles/*.css` (스타일 파일)
- `src/government/scripts/*.{js,ts}` (스크립트 파일)

❌ **제외되는 파일:**
- `*.stories.tsx` (Storybook 스토리)
- `*.test.tsx` (테스트 파일)
- `*.spec.tsx` (테스트 파일)
- `index.ts` (인덱스 파일)
- `Button.tsx` (기본 버튼 - 제외 설정됨)
- `DesignTokens.tsx` (토큰 파일)
- `components/*` (헬퍼 컴포넌트)
- `utils/*` (유틸리티)

### 코드 변환 과정

1. **Import 정리**: React hooks만 유지, 상대 경로 제거
2. **HOC 제거**: `withGovernmentAssets` HOC 자동 제거
3. **Export 변환**: `export default`를 `export const`로 변환
4. **타입 포함**: `types.ts`의 모든 인터페이스 자동 포함
5. **스타일 결합**: 모든 CSS 파일을 하나로 통합

## 🔄 CI/CD 자동화

### GitHub Actions 통합

```yaml
# .github/workflows/deploy-storybook.yml
- name: Build Complete Bundle
  run: npm run bundle:all

- name: Build Storybook  
  run: npm run build-storybook
```

### 자동 트리거

- **Push to main**: 자동으로 번들 빌드 + 배포
- **Pull Request**: 번들 빌드로 충돌 검사
- **Manual**: `workflow_dispatch`로 수동 실행

## 🔍 고급 설정

### 빌드 설정 커스터마이징

`scripts/build-bundle.js`의 CONFIG 객체 수정:

```javascript
const CONFIG = {
  srcDir: 'src/government',        // 소스 디렉토리
  distDir: 'dist',                 // 출력 디렉토리
  outputTs: 'government-components.tsx',  // TS 출력 파일명
  outputCss: 'government-components.css', // CSS 출력 파일명
  excludeFiles: [                  // 제외할 파일 패턴
    '*.stories.tsx',
    '*.test.tsx',
    // 추가 제외 패턴...
  ]
};
```

### 스크립트 빌드 설정

`scripts/build-scripts.js`에서 설정 수정 가능:

```javascript
const CONFIG = {
  scriptsDir: 'src/government/scripts',  // 스크립트 소스
  distDir: 'dist',                       // 출력 디렉토리
  outputJs: 'government-scripts.js',     // 개발용 출력
  outputMinJs: 'government-scripts.min.js' // 압축 출력
};
```

## 🐛 문제 해결

### 빌드 실패 시

```bash
# 상세 로그 확인
npm run bundle:all 2>&1 | tee build.log

# 개별 단계 테스트
npm run bundle          # 컴포넌트 빌드만
npm run bundle:scripts  # 스크립트 빌드만
```

### TypeScript 오류

- 새 컴포넌트에 `className?: string` prop 추가 필요
- `types.ts`에 새 인터페이스 정의 추가
- React hooks import 확인

### 스타일 누락

- `src/government/styles/` 폴더에 CSS 파일 위치 확인
- CSS 파일명이 올바른지 확인
- 클래스명 충돌 검사

## 📊 성능 최적화

### 번들 크기 최적화

- **Tree shaking**: 사용하지 않는 컴포넌트 자동 제외
- **CSS 압축**: 중복 스타일 제거
- **스크립트 최소화**: 프로덕션용 압축 버전 생성

### 빌드 속도 최적화

- **캐싱**: Node.js require 캐시 활용
- **병렬 처리**: 파일 처리 병렬화
- **증분 빌드**: 변경된 파일만 재처리 (향후 추가)

## 🔮 향후 계획

- [ ] **증분 빌드**: 변경된 파일만 재빌드
- [ ] **Tree shaking**: 미사용 컴포넌트 자동 제거
- [ ] **번들 분석**: 크기 분석 리포트 생성
- [ ] **타입 체크**: 자동 TypeScript 검증
- [ ] **테스트 통합**: 빌드 시 테스트 자동 실행

---

이제 새 컴포넌트를 추가하거나 기존 컴포넌트를 수정하면 **자동으로 통합 번들이 업데이트**됩니다! 🎉