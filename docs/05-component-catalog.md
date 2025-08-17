# 컴포넌트 카탈로그

## 📚 전체 컴포넌트 개요

이 카탈로그는 프로젝트에서 사용 가능한 모든 컴포넌트의 상세 참조 가이드입니다. 독립 에이전트가 컴포넌트의 구조, 사용법, API를 빠르게 파악할 수 있도록 구성되었습니다.

## 🏛️ Government 컴포넌트 (정부 표준)

### 레이아웃 컴포넌트

#### GovernmentHeader
**위치**: `src/government/GovernmentHeader.tsx`  
**스토리**: `src/government/GovernmentHeader.stories.ts`  
**카테고리**: Layout  

**설명**: 한국 정부 웹사이트 표준 헤더 컴포넌트

**주요 기능**:
- 정부 로고 및 슬로건 표시
- 글로벌 네비게이션 메뉴
- 사용자 메뉴 (로그인/회원가입/나의 GOV)
- 통합 검색 기능
- 반응형 모바일 메뉴

**API**:
```typescript
interface GovernmentHeaderProps {
  /** 로고 클릭 시 이동할 URL */
  logoHref?: string;
  /** 로그인 상태 */
  isLoggedIn?: boolean;
  /** 사용자 이름 (로그인 시) */
  userName?: string;
  /** 메뉴 항목들 */
  menuItems?: MenuItem[];
  /** 검색 기능 활성화 여부 */
  enableSearch?: boolean;
}
```

**사용 예시**:
```typescript
<GovernmentHeader 
  logoHref="/"
  isLoggedIn={true}
  userName="홍길동"
  enableSearch={true}
/>
```

**접근성 특징**:
- `role="banner"` 속성
- 키보드 네비게이션 지원
- 스크린 리더 호환
- Skip link 제공

---

#### GovernmentFooter
**위치**: `src/government/GovernmentFooter.tsx`  
**스토리**: `src/government/GovernmentFooter.stories.ts`  
**카테고리**: Layout  

**설명**: 한국 정부 웹사이트 표준 푸터 컴포넌트

**주요 기능**:
- 정부 기관 정보
- 관련 사이트 링크
- 소셜 미디어 링크
- 저작권 및 법적 고지
- 연락처 정보

**API**:
```typescript
interface GovernmentFooterProps {
  /** 기관명 */
  organizationName?: string;
  /** 연락처 정보 */
  contactInfo?: ContactInfo;
  /** 관련 사이트 링크 */
  relatedSites?: SiteLink[];
  /** 소셜 미디어 링크 */
  socialLinks?: SocialLink[];
}
```

### 네비게이션 컴포넌트

#### FullBannerCarousel
**위치**: `src/government/FullBannerCarousel.tsx`  
**스토리**: `src/government/FullBannerCarousel.stories.ts`  
**카테고리**: Navigation  

**설명**: 전체 너비 메인 배너 슬라이더

**주요 기능**:
- 자동 재생/정지 토글
- 이전/다음 네비게이션
- 페이지 인디케이터
- 키보드 컨트롤
- 터치/스와이프 지원

**API**:
```typescript
interface FullBannerCarouselProps {
  /** 슬라이드 데이터 */
  slides: BannerSlide[];
  /** 자동 재생 여부 */
  autoplay?: boolean;
  /** 자동 재생 간격 (ms) */
  interval?: number;
  /** 무한 루프 여부 */
  loop?: boolean;
}

interface BannerSlide {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  linkUrl?: string;
  linkText?: string;
}
```

**키보드 단축키**:
- `←/→`: 이전/다음 슬라이드
- `Space`: 재생/정지 토글
- `Home/End`: 첫/마지막 슬라이드

---

#### IconFeaturesCarousel
**위치**: `src/government/IconFeaturesCarousel.tsx`  
**스토리**: `src/government/IconFeaturesCarousel.stories.ts`  
**카테고리**: Navigation  

**설명**: 아이콘과 텍스트로 구성된 기능 소개 캐러셀

**주요 기능**:
- 아이콘 + 제목 + 설명 레이아웃
- 간편한 좌/우 네비게이션
- 반응형 그리드 레이아웃
- 호버 효과

**API**:
```typescript
interface IconFeaturesCarouselProps {
  /** 기능 항목들 */
  features: FeatureItem[];
  /** 한 번에 표시할 항목 수 */
  itemsPerView?: number;
  /** 스크롤 단위 */
  scrollBy?: number;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  linkUrl?: string;
}
```

---

#### ComplexFeaturesCarousel
**위치**: `src/government/ComplexFeaturesCarousel.tsx`  
**스토리**: `src/government/ComplexFeaturesCarousel.stories.ts`  
**카테고리**: Navigation  

**설명**: 고급 기능을 표시하는 복합 카드 캐러셀

**주요 기능**:
- 카드 형태 레이아웃
- 썸네일 이미지 지원
- 상세 정보 표시
- 카테고리 태그
- 고급 네비게이션 컨트롤

**API**:
```typescript
interface ComplexFeaturesCarouselProps {
  /** 카드 데이터 */
  cards: ComplexCard[];
  /** 카드 레이아웃 스타일 */
  layout?: 'grid' | 'masonry';
  /** 필터링 옵션 */
  enableFiltering?: boolean;
}

interface ComplexCard {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  category: string;
  tags?: string[];
  metadata?: Record<string, any>;
  linkUrl?: string;
}
```

---

#### ContentsCardCarousel
**위치**: `src/government/ContentsCardCarousel.tsx`  
**스토리**: `src/government/ContentsCardCarousel.stories.ts`  
**카테고리**: Navigation  

**설명**: 콘텐츠 카드들의 수평 스크롤 캐러셀

**주요 기능**:
- 콘텐츠 카드 디자인
- 부드러운 스크롤 애니메이션
- 반응형 카드 크기
- 로딩 상태 표시

**API**:
```typescript
interface ContentsCardCarouselProps {
  /** 콘텐츠 카드들 */
  contents: ContentCard[];
  /** 카드 크기 */
  cardSize?: 'small' | 'medium' | 'large';
  /** 로딩 상태 */
  loading?: boolean;
}

interface ContentCard {
  id: string;
  title: string;
  summary?: string;
  thumbnailUrl?: string;
  author?: string;
  publishDate?: string;
  category?: string;
  readTime?: string;
  linkUrl?: string;
}
```

### 기본 UI 컴포넌트

#### Button
**위치**: `src/government/Button.tsx`  
**스토리**: `src/government/Button.stories.ts`  
**카테고리**: Form  

**설명**: 정부 표준 버튼 컴포넌트

**주요 기능**:
- 다양한 스타일 변형
- 크기 옵션
- 아이콘 지원
- 로딩 상태
- 접근성 최적화

**API**:
```typescript
interface ButtonProps {
  /** 버튼 텍스트 */
  children: React.ReactNode;
  /** 버튼 스타일 */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  /** 버튼 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 로딩 상태 */
  loading?: boolean;
  /** 아이콘 (앞) */
  startIcon?: React.ReactNode;
  /** 아이콘 (뒤) */
  endIcon?: React.ReactNode;
  /** 전체 너비 */
  fullWidth?: boolean;
  /** 클릭 핸들러 */
  onClick?: () => void;
}
```

**스타일 변형**:
- `primary`: 주요 액션 (파란색)
- `secondary`: 보조 액션 (회색)
- `outline`: 테두리만 있는 버튼
- `ghost`: 배경 없는 버튼
- `link`: 링크 스타일 버튼

### 페이지 템플릿

#### ApplyPage
**위치**: `src/government/ApplyPage.tsx`  
**스토리**: `src/government/ApplyPage.stories.ts`  
**카테고리**: Template  

**설명**: 정부 서비스 신청 페이지 템플릿

**주요 기능**:
- 단계별 진행 표시
- 폼 유효성 검사
- 파일 업로드 지원
- 임시 저장 기능
- 접근성 최적화된 폼

**API**:
```typescript
interface ApplyPageProps {
  /** 신청서 제목 */
  title: string;
  /** 진행 단계들 */
  steps: FormStep[];
  /** 현재 단계 */
  currentStep: number;
  /** 폼 데이터 */
  formData?: Record<string, any>;
  /** 폼 제출 핸들러 */
  onSubmit?: (data: any) => void;
  /** 임시 저장 핸들러 */
  onSaveDraft?: (data: any) => void;
}

interface FormStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  validation?: ValidationRule[];
}
```

---

#### ContentsPage
**위치**: `src/government/ContentsPage.tsx`  
**카테고리**: Template  

**설명**: 일반 콘텐츠 페이지 템플릿

**주요 기능**:
- 표준 콘텐츠 레이아웃
- 목차 자동 생성
- 인쇄 최적화
- 공유 기능
- 접근성 네비게이션

**API**:
```typescript
interface ContentsPageProps {
  /** 페이지 제목 */
  title: string;
  /** 콘텐츠 본문 */
  content: React.ReactNode;
  /** 목차 표시 여부 */
  showToc?: boolean;
  /** 공유 옵션 */
  shareOptions?: ShareOption[];
  /** 관련 콘텐츠 */
  relatedContents?: ContentCard[];
}
```

### 디자인 시스템

#### DesignTokens
**위치**: `src/government/DesignTokens.tsx`  
**스토리**: `src/government/DesignTokens.stories.ts`  
**카테고리**: Design System  

**설명**: 정부 디자인 토큰 시각화 컴포넌트

**주요 기능**:
- 색상 팔레트 표시
- 타이포그래피 스케일
- 스페이싱 시스템
- 아이콘 라이브러리
- CSS 변수 참조

**API**:
```typescript
interface DesignTokensProps {
  /** 표시할 토큰 카테고리 */
  categories?: TokenCategory[];
  /** 검색 기능 활성화 */
  enableSearch?: boolean;
  /** 복사 기능 활성화 */
  enableCopy?: boolean;
}

type TokenCategory = 'colors' | 'typography' | 'spacing' | 'shadows' | 'borders';
```

## 🧩 일반 컴포넌트 (src/components/)

### Badge
**위치**: `src/components/Badge.tsx`  
**스토리**: `src/components/Badge.stories.ts`  
**카테고리**: Display  

**설명**: 상태나 카테고리를 표시하는 작은 라벨

**API**:
```typescript
interface BadgeProps {
  /** 배지 텍스트 */
  children: React.ReactNode;
  /** 배지 스타일 */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** 배지 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 둥근 모서리 */
  rounded?: boolean;
}
```

### Card
**위치**: `src/components/Card.tsx`  
**스토리**: `src/components/Card.stories.ts`  
**카테고리**: Layout  

**설명**: 콘텐츠를 담는 카드 컨테이너

**API**:
```typescript
interface CardProps {
  /** 카드 내용 */
  children: React.ReactNode;
  /** 카드 헤더 */
  header?: React.ReactNode;
  /** 카드 푸터 */
  footer?: React.ReactNode;
  /** 그림자 효과 */
  shadow?: 'none' | 'small' | 'medium' | 'large';
  /** 패딩 크기 */
  padding?: 'none' | 'small' | 'medium' | 'large';
}
```

### Input
**위치**: `src/components/Input.tsx`  
**스토리**: `src/components/Input.stories.ts`  
**카테고리**: Form  

**설명**: 텍스트 입력 필드

**API**:
```typescript
interface InputProps {
  /** 라벨 텍스트 */
  label?: string;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 입력 타입 */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /** 필수 입력 여부 */
  required?: boolean;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 오류 상태 */
  error?: boolean;
  /** 오류 메시지 */
  errorMessage?: string;
  /** 도움말 텍스트 */
  helpText?: string;
  /** 값 */
  value?: string;
  /** 변경 핸들러 */
  onChange?: (value: string) => void;
}
```

## 🔧 유틸리티 컴포넌트

### GovernmentProvider
**위치**: `src/government/components/GovernmentProvider.tsx`  
**카테고리**: Utility  

**설명**: 정부 컴포넌트의 컨텍스트 프로바이더

**API**:
```typescript
interface GovernmentProviderProps {
  /** 자식 컴포넌트들 */
  children: React.ReactNode;
  /** 자동 에셋 로딩 여부 */
  autoLoad?: boolean;
}

// 컨텍스트 훅
const useGovernment = (): GovernmentContextType
```

**사용법**:
```typescript
// 앱 루트에서 사용
<GovernmentProvider autoLoad={true}>
  <App />
</GovernmentProvider>

// 개별 컴포넌트에서 컨텍스트 사용
const { isAssetsLoaded, isInitialized } = useGovernment();
```

## 📋 컴포넌트 선택 가이드

### 사용 목적별 추천

#### 페이지 레이아웃
```typescript
// 정부 사이트 전체 레이아웃
<GovernmentProvider>
  <GovernmentHeader />
  <main>
    {/* 페이지 콘텐츠 */}
  </main>
  <GovernmentFooter />
</GovernmentProvider>
```

#### 메인 페이지 배너
```typescript
// 대형 배너가 필요한 경우
<FullBannerCarousel slides={mainBanners} autoplay />

// 기능 소개가 필요한 경우
<IconFeaturesCarousel features={serviceFeatures} />
```

#### 콘텐츠 목록
```typescript
// 간단한 콘텐츠 카드
<ContentsCardCarousel contents={articles} />

// 복잡한 기능 설명
<ComplexFeaturesCarousel cards={detailedFeatures} />
```

#### 폼 페이지
```typescript
// 신청서 페이지
<ApplyPage 
  title="민원 신청"
  steps={applicationSteps}
  currentStep={1}
/>

// 일반 콘텐츠 페이지
<ContentsPage 
  title="서비스 소개"
  content={<div>...</div>}
  showToc
/>
```

#### 기본 UI 요소
```typescript
// 액션 버튼
<Button variant="primary" size="large">
  신청하기
</Button>

// 상태 표시
<Badge variant="success">승인</Badge>

// 정보 카드
<Card shadow="medium">
  <h3>카드 제목</h3>
  <p>카드 내용...</p>
</Card>
```

## 🎨 스타일링 참조

### CSS 변수 Quick Reference
```css
/* 주요 색상 */
--primary: #246BEB
--secondary: #003675
--point: #E71825
--white: #FFFFFF
--black: #000000

/* 회색 스케일 */
--gray-10: #F8F8F8
--gray-20: #E4E4E4
--gray-30: #D8D8D8
--gray-60: #717171
--gray-80: #2D2D2D

/* 간격 */
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem

/* 반경 */
--rd-4: 0.4rem
--rd-6: 0.6rem
--rd-8: 0.8rem
```

### 반응형 브레이크포인트
```css
/* 모바일 */ @media (max-width: 768px)
/* 태블릿 */ @media (min-width: 769px) and (max-width: 1024px)
/* 데스크톱 */ @media (min-width: 1025px)
```

---

이 카탈로그는 프로젝트의 모든 컴포넌트를 포괄하며, 독립 에이전트가 빠르게 필요한 컴포넌트를 찾고 올바르게 사용할 수 있도록 구성되었습니다.