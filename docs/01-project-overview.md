# 프로젝트 개요

## 📋 프로젝트 기본 정보

### 프로젝트명
**React Storybook Project** - 한국 정부 표준 컴포넌트 라이브러리

### 프로젝트 목적
- 한국 정부 웹사이트용 표준 UI 컴포넌트 라이브러리 개발
- Storybook을 통한 컴포넌트 문서화 및 시각적 테스트
- 재사용 가능한 컴포넌트 시스템 구축
- 접근성 및 정부 디자인 가이드라인 준수

### 기술 스택
- **Frontend**: React 19.1.1, TypeScript 4.9.5
- **Documentation**: Storybook 9.1.2
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Package Manager**: npm
- **Testing**: Jest, React Testing Library

## 🏗️ 프로젝트 구조

```
react-storybook-project/
├── .storybook/                    # Storybook 설정 파일들
│   ├── main.ts                   # Storybook 메인 설정
│   ├── preview.tsx               # Storybook 프리뷰 설정
│   └── storybook-override.css    # Storybook 커스텀 스타일
├── docs/                         # 프로젝트 문서
├── public/                       # 정적 파일
├── src/
│   ├── components/               # 일반 React 컴포넌트
│   │   ├── Badge/               # 뱃지 컴포넌트
│   │   ├── Card/                # 카드 컴포넌트
│   │   └── Input/               # 입력 컴포넌트
│   ├── government/              # 정부 표준 컴포넌트 시스템
│   │   ├── assets/             # 정부 전용 아이콘, 이미지
│   │   ├── components/         # 정부 컴포넌트들
│   │   ├── fonts/              # 정부 전용 폰트 (PretendardGOV)
│   │   ├── scripts/            # JavaScript 유틸리티
│   │   ├── styles/             # CSS 스타일 시스템
│   │   └── utils/              # TypeScript 유틸리티
│   ├── react-app-env.d.ts      # TypeScript 환경 설정
│   └── index.tsx               # 앱 진입점
└── package.json                # 의존성 및 스크립트 정의
```

## 🎨 디자인 시스템

### 컴포넌트 분류
1. **기본 컴포넌트** (`src/components/`)
   - 범용 React 컴포넌트
   - 일반적인 웹 프로젝트에서 사용 가능

2. **정부 표준 컴포넌트** (`src/government/`)
   - 한국 정부 디자인 시스템 준수
   - 정부 웹사이트 전용 컴포넌트
   - 접근성 및 표준 가이드라인 준수

### 스타일링 시스템
- **CSS 변수**: `--primary`, `--secondary`, `--gray-*` 등 정부 표준 색상
- **PretendardGOV 폰트**: 정부 표준 폰트 시스템
- **반응형 디자인**: 모바일 우선 접근법
- **접근성**: WCAG 2.1 AA 수준 준수

## 🔧 개발 환경

### 필수 도구
- **Node.js**: 16+ (권장: 18+)
- **npm**: 8+
- **TypeScript**: 4.9.5
- **IDE**: VS Code (권장)

### 주요 스크립트
```bash
npm start          # React 개발 서버 시작 (포트 3000)
npm run storybook  # Storybook 개발 서버 시작 (포트 6006)
npm run build      # 프로덕션 빌드
npm run build-storybook  # Storybook 정적 빌드
npm test           # 테스트 실행
```

### Storybook 설정
- **포트**: 6006
- **스토리 위치**: `src/government/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- **정적 파일**: `public/`, `src/government/assets/`
- **addon**: docs, onboarding, create-react-app preset

## 📁 핵심 디렉토리 세부사항

### `/src/government/` 구조
```
government/
├── assets/                    # 아이콘, 이미지, SVG 파일
├── components/               # React 컴포넌트들
│   ├── GovernmentProvider.tsx # 컨텍스트 프로바이더
│   └── [기타 컴포넌트들]
├── fonts/                    # PretendardGOV 폰트 파일들
├── scripts/                  # Vanilla JS 기능
│   ├── government-features.js/ts  # 정부 사이트 인터랙션
│   └── [기타 스크립트들]
├── styles/                   # CSS 스타일 시트
│   ├── index.css            # 메인 스타일
│   ├── swiper-minimal.css   # 슬라이더 스타일
│   └── government-interactions.css # 인터랙션 스타일
├── utils/                    # TypeScript 유틸리티
│   └── auto-loader.ts       # 자동 로딩 시스템
├── dropdown-styles.css       # 드롭다운 전용 스타일
├── fonts.css                # 폰트 정의
└── [기타 설정 파일들]
```

## 🔄 워크플로우

### 컴포넌트 개발 프로세스
1. **요구사항 분석** - 정부 디자인 가이드라인 확인
2. **컴포넌트 설계** - TypeScript 인터페이스 정의
3. **컴포넌트 구현** - React 컴포넌트 작성
4. **스타일링** - CSS 변수 및 정부 표준 적용
5. **Storybook 스토리** - 문서화 및 시각적 테스트
6. **접근성 검증** - WCAG 준수 확인
7. **테스트 작성** - Jest/RTL 단위 테스트

### Git 브랜치 전략
- `main`: 안정화된 프로덕션 코드
- `develop`: 개발 중인 기능들
- `feature/*`: 개별 기능 개발
- `hotfix/*`: 긴급 수정사항

## ⚡ 성능 최적화

### 자동 로딩 시스템
- **지연 로딩**: 필요한 시점에 스타일 및 스크립트 로드
- **캐싱**: 브라우저 캐시 활용
- **번들 최적화**: 코드 스플리팅 적용

### 빌드 최적화
- **Tree Shaking**: 사용하지 않는 코드 제거
- **압축**: CSS/JS 파일 압축
- **이미지 최적화**: SVG 아이콘 사용

## 🛡️ 접근성 및 표준

### WCAG 2.1 AA 준수사항
- **키보드 네비게이션**: 모든 인터랙티브 요소
- **스크린 리더**: ARIA 레이블 및 속성
- **색상 대비**: 4.5:1 이상 명도 대비
- **포커스 관리**: 명확한 포커스 표시

### 정부 표준 준수
- **한국형 웹 콘텐츠 접근성 지침 2.1**
- **전자정부 웹표준 준수지침**
- **정부 통합 디자인 시스템**

## 🔍 모니터링 및 분석

### 개발 도구
- **React DevTools**: 컴포넌트 디버깅
- **Storybook**: 컴포넌트 시각적 테스트
- **TypeScript**: 타입 안전성 검사
- **ESLint**: 코드 품질 관리

### 성능 측정
- **Web Vitals**: Core Web Vitals 모니터링
- **Bundle Analyzer**: 번들 크기 분석
- **Lighthouse**: 웹 성능 및 접근성 검사

---

**다음 문서**: [Government 컴포넌트 시스템](./02-government-components.md)