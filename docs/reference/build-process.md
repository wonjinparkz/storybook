# 빌드 프로세스 참조

## 🏗️ 빌드 시스템 개요

이 프로젝트는 Create React App(CRA)을 기반으로 하는 React 애플리케이션과 Storybook 문서화 시스템의 이중 빌드 환경을 제공합니다.

## 📦 빌드 도구 및 의존성

### 메인 빌드 도구
- **Create React App 5.0.1**: React 앱 빌드 시스템
- **Webpack 5**: 모듈 번들러 (CRA 내장)
- **Babel**: JavaScript 트랜스파일러 (CRA 내장)
- **TypeScript 4.9.5**: 타입 체크 및 컴파일

### Storybook 빌드 도구
- **Storybook 9.1.2**: 컴포넌트 문서화 도구
- **@storybook/react-webpack5**: React Webpack5 프레임워크
- **@storybook/preset-create-react-app**: CRA 호환성 프리셋

## 🚀 빌드 스크립트

### package.json 스크립트
```json
{
  "scripts": {
    "start": "react-scripts start",           // 개발 서버 시작
    "build": "react-scripts build",           // 프로덕션 빌드
    "test": "react-scripts test",             // 테스트 실행
    "eject": "react-scripts eject",           // CRA 설정 추출 (비추천)
    "storybook": "storybook dev -p 6006",     // Storybook 개발 서버
    "build-storybook": "storybook build"      // Storybook 정적 빌드
  }
}
```

## 🔧 React 앱 빌드 프로세스

### 개발 빌드 (`npm start`)

**실행 과정**:
1. **환경 설정 로딩**: `.env` 파일들 처리
2. **TypeScript 컴파일**: TSC로 타입 체크
3. **Webpack Dev Server 시작**: 
   - 포트 3000에서 개발 서버 시작
   - Hot Module Replacement (HMR) 활성화
   - 소스맵 생성으로 디버깅 지원
4. **에셋 처리**:
   - CSS 파일들을 `<style>` 태그로 주입
   - 이미지 및 폰트 파일 처리
   - SVG 파일을 React 컴포넌트로 변환 지원

**개발 서버 특징**:
- **Hot Reload**: 파일 변경 시 자동 새로고침
- **Error Overlay**: 런타임 오류를 브라우저에 오버레이로 표시
- **Lint 오류 표시**: ESLint 오류를 콘솔 및 브라우저에 표시

### 프로덕션 빌드 (`npm run build`)

**빌드 단계**:
1. **정적 분석**:
   ```bash
   # TypeScript 타입 체크
   tsc --noEmit
   
   # ESLint 검사
   eslint src/**/*.{ts,tsx}
   ```

2. **최적화**:
   - **JavaScript**: Terser로 압축 및 난독화
   - **CSS**: CSSNano로 압축 및 최적화
   - **이미지**: 자동 압축 및 포맷 최적화
   - **폰트**: 서브셋팅 및 압축

3. **번들링**:
   ```
   # 청크 분할 전략
   main.[hash].js         # 애플리케이션 코드
   vendor.[hash].js       # 서드파티 라이브러리
   runtime.[hash].js      # Webpack 런타임
   [chunk].[hash].js      # 동적 import 청크
   ```

4. **에셋 처리**:
   - CSS 파일을 별도 파일로 추출
   - 이미지 파일에 해시 추가
   - 폰트 파일 최적화
   - manifest.json 및 PWA 에셋 처리

**빌드 결과물 구조**:
```
build/
├── static/
│   ├── css/
│   │   ├── main.[hash].css           # 메인 CSS 번들
│   │   └── main.[hash].css.map       # CSS 소스맵
│   ├── js/
│   │   ├── main.[hash].js            # 메인 JS 번들
│   │   ├── main.[hash].js.map        # JS 소스맵
│   │   ├── runtime.[hash].js         # Webpack 런타임
│   │   └── [chunk].[hash].chunk.js   # 코드 스플리팅 청크
│   └── media/
│       ├── [font-files].[hash].woff2 # 폰트 파일들
│       └── [images].[hash].{png,jpg,svg} # 이미지 파일들
├── index.html                        # 메인 HTML 파일
├── favicon.ico                       # 파비콘
├── manifest.json                     # PWA 매니페스트
└── robots.txt                        # 검색엔진 크롤링 설정
```

## 📚 Storybook 빌드 프로세스

### 개발 빌드 (`npm run storybook`)

**실행 과정**:
1. **Storybook 설정 로딩**:
   - `.storybook/main.ts` 설정 적용
   - `.storybook/preview.tsx` 프리뷰 설정 로딩
   - 스토리 파일들 자동 감지

2. **Webpack 설정**:
   - CRA 프리셋 적용으로 기존 설정 상속
   - Government 에셋 정적 파일 서빙 설정
   - TypeScript 및 CSS 처리 설정

3. **서버 시작**:
   - 포트 6006에서 Storybook 서버 시작
   - Manager UI와 Preview iframe 서빙
   - 스토리 파일 변경 감지 및 자동 업데이트

**Storybook 설정 적용**:
```typescript
// .storybook/main.ts
export default {
  stories: ["../src/government/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: [
    "../public",
    { from: "../src/government/assets", to: "/assets" }
  ]
};
```

### 프로덕션 빌드 (`npm run build-storybook`)

**빌드 단계**:
1. **스토리 수집**: 설정된 패턴에 따라 모든 스토리 파일 수집
2. **정적 분석**: TypeScript 타입 체크 및 ESLint 검사
3. **번들 생성**:
   - Manager 번들: Storybook UI
   - Preview 번들: 스토리 프리뷰
   - Stories 번들: 개별 스토리들

4. **에셋 복사**:
   - `public/` 디렉토리 파일들
   - `src/government/assets/` → `/assets/` 매핑
   - Storybook 정적 에셋들

**빌드 결과물 구조**:
```
storybook-static/
├── assets/                           # Government 에셋들
│   ├── [svg-icons]                   # SVG 아이콘 파일들
│   └── [images]                      # 이미지 파일들
├── static/
│   ├── css/
│   │   └── [storybook-styles].css    # Storybook CSS
│   └── js/
│       ├── manager.[hash].js         # Storybook Manager
│       ├── preview.[hash].js         # Preview iframe
│       └── stories.[hash].js         # 스토리 번들
├── index.html                        # Storybook 메인 페이지
├── iframe.html                       # 스토리 프리뷰 iframe
├── project.json                      # 프로젝트 메타데이터
└── stories.json                      # 스토리 인덱스
```

## ⚙️ 빌드 최적화

### Webpack 최적화 설정

**코드 스플리팅**:
```javascript
// 자동 청크 분할
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
      government: {
        test: /[\\/]src[\\/]government[\\/]/,
        name: 'government',
        chunks: 'all',
      }
    }
  }
}
```

**트리 쉐이킹**:
```javascript
// package.json에서 사이드 이펙트 명시
{
  "sideEffects": [
    "*.css",
    "src/government/fonts.css",
    "src/government/styles/*.css"
  ]
}
```

### CSS 최적화

**CSS 압축 및 최적화**:
```css
/* 빌드 시 자동 처리되는 최적화들 */
/* 1. 미사용 CSS 제거 (PurgeCSS) */
/* 2. CSS 변수 인라인 처리 */
/* 3. 벤더 프리픽스 자동 추가 */
/* 4. 중복 규칙 제거 */
/* 5. 압축 및 압축화 */
```

**Critical CSS**:
```html
<!-- index.html에 중요 CSS 인라인 삽입 -->
<style>
  /* Above-the-fold CSS가 자동으로 인라인됨 */
  body { font-family: 'Pretendard GOV', sans-serif; }
  .loading { /* 로딩 스타일 */ }
</style>
```

### 에셋 최적화

**이미지 최적화**:
```javascript
// Webpack 설정 (CRA 내장)
{
  test: /\.(png|jpe?g|gif|webp|avif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    },
    'image-webpack-loader' // 자동 압축
  ]
}
```

**폰트 최적화**:
```css
/* 폰트 로딩 최적화 */
@font-face {
  font-family: 'Pretendard GOV';
  src: url('./fonts/PretendardGOV-Regular.woff2') format('woff2');
  font-display: swap; /* 폰트 로딩 최적화 */
  unicode-range: U+AC00-D7AF; /* 한글 범위만 로드 */
}
```

## 🔍 빌드 분석 및 디버깅

### Bundle Analyzer

**설치 및 사용**:
```bash
# 번들 분석 도구 설치
npm install --save-dev webpack-bundle-analyzer

# 빌드 후 분석 실행
npx webpack-bundle-analyzer build/static/js/*.js
```

**분석 포인트**:
- 번들 크기 및 구성
- 중복 모듈 탐지
- 트리 쉐이킹 효과성
- 코드 스플리팅 효율성

### 성능 측정

**빌드 시간 측정**:
```bash
# 시간 측정과 함께 빌드
time npm run build

# 상세 빌드 정보
npm run build -- --verbose
```

**런타임 성능**:
```javascript
// src/reportWebVitals.ts
import { Metric } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);  // Cumulative Layout Shift
      getFID(onPerfEntry);  // First Input Delay
      getFCP(onPerfEntry);  // First Contentful Paint
      getLCP(onPerfEntry);  // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};
```

## 🚢 배포 프로세스

### GitHub Actions CI/CD

```yaml
# .github/workflows/build-and-deploy.yml
name: Build and Deploy
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test -- --coverage --watchAll=false
      
      - name: Build React app
        run: npm run build
      
      - name: Build Storybook
        run: npm run build-storybook
      
      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

### 정적 사이트 배포

**Netlify 배포 설정**:
```toml
# netlify.toml
[build]
  publish = "storybook-static"
  command = "npm run build-storybook"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**Vercel 배포 설정**:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "storybook-static" }
    }
  ],
  "scripts": {
    "build": "npm run build-storybook"
  }
}
```

## 📋 빌드 트러블슈팅

### 일반적인 빌드 오류

#### TypeScript 타입 오류
```bash
# 오류 예시
TS2307: Cannot find module '../dropdown-styles.css'

# 해결 방법
# 1. src/react-app-env.d.ts에 모듈 선언 추가
declare module '*.css' {
  const content: any;
  export default content;
}
```

#### 메모리 부족 오류
```bash
# 오류 예시
FATAL ERROR: Ineffective mark-compacts near heap limit

# 해결 방법
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

#### 정적 파일 경로 오류
```javascript
// 문제: 상대 경로 사용
const imageSrc = '../assets/logo.svg';

// 해결: public 경로 사용
const imageSrc = '/assets/logo.svg';
```

### 빌드 최적화 팁

**빌드 속도 향상**:
```javascript
// 개발 환경에서 타입 체크 건너뛰기
// .env.development
SKIP_PREFLIGHT_CHECK=true
TSC_COMPILE_ON_ERROR=true
```

**번들 크기 최적화**:
```javascript
// 동적 import 사용
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// 서드파티 라이브러리 최소화
import { debounce } from 'lodash/debounce'; // 전체 lodash 대신
```

**캐시 최적화**:
```bash
# 의존성 캐시 활용
npm ci --cache .npm

# 빌드 캐시 활용 (GitHub Actions)
- uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

## 📊 빌드 모니터링

### 빌드 메트릭 수집

```javascript
// 빌드 시간 측정
const buildStart = Date.now();
// ... 빌드 프로세스
const buildTime = Date.now() - buildStart;
console.log(`Build completed in ${buildTime}ms`);

// 번들 크기 측정
const bundleSize = fs.statSync('build/static/js/main.*.js').size;
console.log(`Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)}MB`);
```

### 성능 벤치마크

```bash
# Lighthouse CI로 성능 측정
npm install -g @lhci/cli
lhci autorun

# Bundle size 모니터링
npm install -g bundlesize
bundlesize
```

---

이 빌드 프로세스 참조는 독립 에이전트가 프로젝트의 빌드 시스템을 이해하고, 효율적으로 빌드 및 배포를 관리할 수 있도록 구성되었습니다.