# 파일 구조 참조

## 📁 전체 프로젝트 구조

```
react-storybook-project/
├── .storybook/                          # Storybook 설정
│   ├── main.ts                         # 메인 설정 파일
│   ├── preview.tsx                     # 프리뷰 설정 (GovernmentProvider 포함)
│   └── storybook-override.css          # 폰트 및 스타일 오버라이드
├── docs/                               # 프로젝트 문서
│   ├── README.md                       # 문서 인덱스
│   ├── 01-project-overview.md          # 프로젝트 개요
│   ├── 02-government-components.md     # Government 컴포넌트 시스템
│   ├── 03-storybook-configuration.md  # Storybook 설정 가이드
│   ├── 04-development-guide.md        # 개발 가이드
│   ├── 05-component-catalog.md        # 컴포넌트 카탈로그
│   └── reference/                      # 참조 문서들
│       ├── file-structure.md           # 이 파일
│       ├── type-definitions.md         # TypeScript 타입 정의
│       ├── styling-system.md           # 스타일 시스템 가이드
│       └── build-process.md            # 빌드 프로세스 설명
├── public/                             # 정적 파일
│   ├── index.html                      # HTML 템플릿
│   ├── favicon.ico                     # 파비콘
│   └── manifest.json                   # PWA 매니페스트
├── src/                                # 소스 코드
│   ├── components/                     # 일반 React 컴포넌트
│   │   ├── Badge.tsx                   # 뱃지 컴포넌트
│   │   ├── Badge.css                   # 뱃지 스타일
│   │   ├── Badge.stories.ts            # 뱃지 스토리
│   │   ├── Card.tsx                    # 카드 컴포넌트
│   │   ├── Card.css                    # 카드 스타일
│   │   ├── Card.stories.ts             # 카드 스토리
│   │   ├── Input.tsx                   # 입력 컴포넌트
│   │   ├── Input.css                   # 입력 스타일
│   │   ├── Input.stories.ts            # 입력 스토리
│   │   └── index.ts                    # 컴포넌트 익스포트
│   ├── government/                     # 정부 표준 컴포넌트
│   │   ├── assets/                     # 정부 전용 에셋
│   │   │   ├── [아이콘 파일들].svg     # SVG 아이콘 (100개 이상)
│   │   │   └── [이미지 파일들]         # PNG, JPG 이미지
│   │   ├── components/                 # 정부 공통 컴포넌트
│   │   │   └── GovernmentProvider.tsx  # 컨텍스트 프로바이더
│   │   ├── fonts/                      # 정부 전용 폰트
│   │   │   ├── PretendardGOV-Regular.woff2
│   │   │   ├── PretendardGOV-Bold.woff2
│   │   │   └── woff2/
│   │   │       └── PretendardGOVVariable.woff2
│   │   ├── scripts/                    # JavaScript 기능
│   │   │   ├── government-features.js  # Vanilla JS 버전
│   │   │   └── government-features.ts  # TypeScript 버전
│   │   ├── styles/                     # CSS 스타일 시트
│   │   │   ├── index.css               # 메인 스타일
│   │   │   ├── swiper-minimal.css      # 슬라이더 스타일
│   │   │   ├── government-interactions.css # 인터랙션
│   │   │   └── contents-page.css       # 콘텐츠 페이지 스타일
│   │   ├── utils/                      # TypeScript 유틸리티
│   │   │   └── auto-loader.ts          # 자동 로딩 시스템
│   │   ├── ApplyPage.tsx               # 신청 페이지 템플릿
│   │   ├── ApplyPage.stories.ts        # 신청 페이지 스토리
│   │   ├── Button.tsx                  # 정부 표준 버튼
│   │   ├── Button.stories.ts           # 버튼 스토리
│   │   ├── button.css                  # 버튼 스타일 (legacy)
│   │   ├── ComplexFeaturesCarousel.tsx # 복합 기능 캐러셀
│   │   ├── ComplexFeaturesCarousel.stories.ts
│   │   ├── Configure.mdx               # Storybook 설정 문서
│   │   ├── ContentsCardCarousel.tsx    # 콘텐츠 카드 캐러셀
│   │   ├── ContentsCardCarousel.stories.ts
│   │   ├── ContentsPage.tsx            # 콘텐츠 페이지 템플릿
│   │   ├── DesignTokens.tsx            # 디자인 토큰 시각화
│   │   ├── DesignTokens.stories.ts     # 디자인 토큰 스토리
│   │   ├── dropdown-styles.css         # 드롭다운 전용 스타일
│   │   ├── fonts.css                   # 폰트 정의
│   │   ├── FullBannerCarousel.tsx      # 전체 배너 캐러셀
│   │   ├── FullBannerCarousel.stories.ts
│   │   ├── GovernmentFooter.tsx        # 정부 표준 푸터
│   │   ├── GovernmentFooter.stories.ts # 푸터 스토리
│   │   ├── GovernmentHeader.tsx        # 정부 표준 헤더
│   │   ├── GovernmentHeader.stories.ts # 헤더 스토리
│   │   ├── IconFeaturesCarousel.tsx    # 아이콘 기능 캐러셀
│   │   ├── IconFeaturesCarousel.stories.ts
│   │   ├── index.ts                    # Government 컴포넌트 익스포트
│   │   └── types.ts                    # Government 타입 정의
│   ├── App.tsx                         # 메인 앱 컴포넌트
│   ├── App.css                         # 앱 스타일
│   ├── App.test.tsx                    # 앱 테스트
│   ├── index.tsx                       # React 진입점
│   ├── index.css                       # 글로벌 스타일
│   ├── logo.svg                        # React 로고
│   ├── react-app-env.d.ts              # React 앱 타입 정의
│   ├── reportWebVitals.ts              # 웹 바이탈 리포팅
│   └── setupTests.ts                   # 테스트 설정
├── package.json                        # 의존성 및 스크립트
├── package-lock.json                   # 의존성 잠금 파일
├── tsconfig.json                       # TypeScript 설정
├── .gitignore                          # Git 무시 파일
└── README.md                           # 프로젝트 README
```

## 📂 디렉토리별 상세 설명

### `.storybook/` - Storybook 설정
**목적**: Storybook 개발 환경 설정  
**주요 파일**:
- `main.ts`: 스토리 위치, addon, 프레임워크 설정
- `preview.tsx`: GovernmentProvider 데코레이터, 글로벌 설정
- `storybook-override.css`: PretendardGOV 폰트 적용

### `docs/` - 프로젝트 문서
**목적**: 독립 에이전트를 위한 종합 문서  
**구성**:
- 메인 문서: 01-05번 순서로 구성된 핵심 가이드
- `reference/`: 세부 참조 문서들

### `public/` - 정적 파일
**목적**: 빌드 시 그대로 복사되는 정적 리소스  
**특징**:
- Storybook에서 `/` 경로로 접근 가능
- React 앱의 public 디렉토리 역할

### `src/components/` - 일반 컴포넌트
**목적**: 정부 표준과 무관한 범용 React 컴포넌트  
**패턴**:
```
ComponentName.tsx       # 컴포넌트 구현
ComponentName.css       # 컴포넌트 스타일
ComponentName.stories.ts # Storybook 스토리
```

### `src/government/` - 정부 표준 컴포넌트
**목적**: 한국 정부 디자인 시스템 준수 컴포넌트  
**특징**:
- Storybook에서 `Government/` 네임스페이스 사용
- GovernmentProvider 자동 적용
- PretendardGOV 폰트 및 정부 CSS 변수 사용

#### `assets/` - 정부 전용 에셋
**구성**:
- SVG 아이콘: 100개 이상의 정부 표준 아이콘
- 이미지: PNG, JPG, AVIF 형식 지원
- **접근 경로**: Storybook에서 `/assets/파일명`으로 접근

**주요 아이콘 카테고리**:
```
head_*.svg              # 헤더 관련 아이콘
foot_*.svg              # 푸터 관련 아이콘
ico_*.svg               # 일반 UI 아이콘
btn_*.svg               # 버튼 아이콘
arr_*.svg               # 화살표 아이콘
```

#### `components/` - 공통 유틸리티
- `GovernmentProvider.tsx`: 컨텍스트 시스템의 핵심

#### `fonts/` - 폰트 시스템
**구성**:
- `PretendardGOV-Regular.woff2`: 정규 굵기
- `PretendardGOV-Bold.woff2`: 볼드 굵기
- `PretendardGOVVariable.woff2`: 가변 폰트

#### `scripts/` - JavaScript 기능
**구성**:
- `government-features.js`: Vanilla JS 버전 (legacy)
- `government-features.ts`: TypeScript 버전 (현재)

**주요 기능**:
- 체크박스 전체 선택
- 반응형 테이블
- 파일 다운로드
- 외부 링크 처리

#### `styles/` - CSS 스타일 시스템
**구성**:
- `index.css`: 메인 스타일 (CSS 변수, 기본 스타일)
- `swiper-minimal.css`: 캐러셀/슬라이더 스타일
- `government-interactions.css`: 인터랙션 효과
- `contents-page.css`: 콘텐츠 페이지 전용

#### `utils/` - TypeScript 유틸리티
- `auto-loader.ts`: 동적 에셋 로딩 시스템

## 🔗 파일 간 의존성 관계

### Government 컴포넌트 로딩 순서
```
1. GovernmentProvider 초기화
2. auto-loader.ts 실행
3. CSS 파일들 동적 로딩:
   - styles/index.css
   - styles/swiper-minimal.css
   - styles/government-interactions.css
   - fonts.css
   - dropdown-styles.css
4. JavaScript 기능 초기화
5. 컴포넌트 렌더링
```

### Storybook 파일 관계
```
main.ts
├── stories 위치: "../src/government/**/*.stories.*"
├── staticDirs: "../public", "../src/government/assets"
└── addons: docs, onboarding, create-react-app

preview.tsx
├── GovernmentProvider import
├── 조건부 래핑: title.includes('Government/')
└── autoLoad=true 설정

storybook-override.css
├── 모든 iframe에 PretendardGOV 폰트 적용
└── Storybook UI는 원래 폰트 유지
```

## 📝 파일 네이밍 규칙

### 컴포넌트 파일
```
PascalCase.tsx              # React 컴포넌트
PascalCase.stories.ts       # Storybook 스토리
PascalCase.css              # 컴포넌트별 스타일
PascalCase.test.tsx         # 컴포넌트 테스트
PascalCase.types.ts         # 타입 정의 (선택사항)
```

### 유틸리티 파일
```
kebab-case.ts               # TypeScript 유틸리티
kebab-case.js               # JavaScript 스크립트
kebab-case.css              # 전역/유틸리티 스타일
```

### 에셋 파일
```
snake_case.svg              # SVG 아이콘
kebab-case.png              # 이미지 파일
PascalCase.woff2            # 폰트 파일
```

## 🚀 빌드 결과물 구조

### React 앱 빌드 (`npm run build`)
```
build/
├── static/
│   ├── css/
│   │   └── main.[hash].css
│   ├── js/
│   │   ├── main.[hash].js
│   │   └── [chunk].[hash].chunk.js
│   └── media/
│       └── [assets with hashes]
├── index.html
└── [other static files]
```

### Storybook 빌드 (`npm run build-storybook`)
```
storybook-static/
├── assets/                 # Government 에셋들
│   └── [모든 SVG, 이미지 파일들]
├── static/
│   ├── css/
│   └── js/
├── index.html              # Storybook 메인 페이지
├── iframe.html             # 스토리 프레임
└── [기타 Storybook 파일들]
```

## 📋 파일 관리 가이드

### 새 파일 추가 시
1. **위치 결정**: 정부 표준 여부에 따라 `components/` 또는 `government/`
2. **네이밍**: 파일 타입에 맞는 네이밍 규칙 적용
3. **의존성**: 관련 파일들과 함께 그룹화
4. **익스포트**: `index.ts`에 적절히 익스포트 추가

### 파일 삭제 시 주의사항
1. **의존성 체크**: 다른 파일에서 import하는지 확인
2. **Storybook**: 관련 스토리 파일도 함께 정리
3. **에셋**: 사용하지 않는 에셋 파일 정리
4. **타입**: TypeScript 타입 정의 업데이트

### 파일 이동 시
1. **Import 경로**: 모든 import 경로 업데이트
2. **Storybook**: 스토리 파일의 title 경로 확인
3. **정적 파일**: main.ts의 staticDirs 설정 확인
4. **타입**: 상대 경로 기반 타입 참조 업데이트

---

이 파일 구조는 독립 에이전트가 프로젝트의 물리적 구조를 빠르게 파악하고, 올바른 위치에 파일을 생성하거나 수정할 수 있도록 설계되었습니다.