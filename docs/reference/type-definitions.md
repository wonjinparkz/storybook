# TypeScript 타입 정의 참조

## 🎯 타입 시스템 개요

이 프로젝트는 TypeScript 4.9.5를 사용하여 엄격한 타입 안전성을 보장합니다. 모든 컴포넌트와 유틸리티는 명확한 타입 정의를 가지고 있습니다.

## 📁 타입 정의 위치

### 글로벌 타입
- **위치**: `src/react-app-env.d.ts`
- **내용**: 프로젝트 전역 타입 정의

```typescript
/// <reference types="react-scripts" />

// CSS 모듈 타입 선언
declare module '*.css' {
  const content: any;
  export default content;
}

// 추가 글로벌 타입들...
```

### Government 컴포넌트 타입
- **위치**: `src/government/types.ts`
- **내용**: 정부 컴포넌트 시스템 전용 타입

### 개별 컴포넌트 타입
- **패턴**: 각 컴포넌트 파일 내부 또는 별도 `.types.ts` 파일

## 🏛️ Government 시스템 핵심 타입

### GovernmentProvider 관련 타입

```typescript
// Government 컨텍스트 타입
interface GovernmentContextType {
  /** 에셋 로딩 완료 상태 */
  isAssetsLoaded: boolean;
  /** 프로바이더 초기화 상태 */
  isInitialized: boolean;
}

// Government 프로바이더 Props
interface GovernmentProviderProps {
  /** 자식 컴포넌트들 */
  children: React.ReactNode;
  /** 자동 에셋 로딩 여부 (기본값: true) */
  autoLoad?: boolean;
}

// HOC withGovernmentAssets 옵션
interface WithGovernmentAssetsOptions {
  /** 에셋 로딩 대기 여부 */
  waitForAssets?: boolean;
  /** 로딩 중 표시할 컴포넌트 */
  loadingComponent?: React.ComponentType;
}
```

### 공통 UI 타입

```typescript
// 크기 변형
type SizeVariant = 'small' | 'medium' | 'large';

// 색상 변형
type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

// 기본 컴포넌트 Props
interface BaseComponentProps {
  /** 추가 CSS 클래스 */
  className?: string;
  /** 인라인 스타일 */
  style?: React.CSSProperties;
  /** 테스트 ID */
  'data-testid'?: string;
}
```

## 🧩 레이아웃 컴포넌트 타입

### GovernmentHeader

```typescript
interface GovernmentHeaderProps extends BaseComponentProps {
  /** 로고 클릭 시 이동할 URL */
  logoHref?: string;
  /** 로그인 상태 */
  isLoggedIn?: boolean;
  /** 사용자 정보 */
  user?: UserInfo;
  /** 메뉴 구성 */
  navigation?: NavigationMenu;
  /** 검색 기능 활성화 */
  enableSearch?: boolean;
  /** 언어 선택 활성화 */
  enableLanguageSelector?: boolean;
}

interface UserInfo {
  /** 사용자 이름 */
  name: string;
  /** 사용자 ID */
  id: string;
  /** 프로필 이미지 URL */
  avatar?: string;
  /** 사용자 역할 */
  role?: string;
}

interface NavigationMenu {
  /** 메인 메뉴 항목들 */
  mainItems: MenuItem[];
  /** 유틸리티 메뉴 항목들 */
  utilityItems?: MenuItem[];
}

interface MenuItem {
  /** 메뉴 ID */
  id: string;
  /** 메뉴 라벨 */
  label: string;
  /** 링크 URL */
  href?: string;
  /** 하위 메뉴 */
  children?: MenuItem[];
  /** 아이콘 */
  icon?: string;
  /** 외부 링크 여부 */
  external?: boolean;
  /** 활성 상태 */
  active?: boolean;
  /** 비활성 상태 */
  disabled?: boolean;
}
```

### GovernmentFooter

```typescript
interface GovernmentFooterProps extends BaseComponentProps {
  /** 기관 정보 */
  organization?: OrganizationInfo;
  /** 연락처 정보 */
  contact?: ContactInfo;
  /** 관련 사이트 */
  relatedSites?: LinkGroup[];
  /** 소셜 미디어 링크 */
  socialLinks?: SocialLink[];
  /** 저작권 정보 */
  copyright?: CopyrightInfo;
}

interface OrganizationInfo {
  /** 기관명 */
  name: string;
  /** 기관 주소 */
  address: string;
  /** 대표 전화번호 */
  phone: string;
  /** 팩스 번호 */
  fax?: string;
  /** 이메일 */
  email?: string;
}

interface ContactInfo {
  /** 대표 전화 */
  mainPhone: string;
  /** 민원 전화 */
  servicePhone?: string;
  /** 운영 시간 */
  operatingHours?: string;
  /** 휴무일 */
  holidays?: string;
}

interface LinkGroup {
  /** 그룹 제목 */
  title: string;
  /** 링크 목록 */
  links: SiteLink[];
}

interface SiteLink {
  /** 링크 라벨 */
  label: string;
  /** 링크 URL */
  href: string;
  /** 외부 링크 여부 */
  external?: boolean;
}

interface SocialLink {
  /** 플랫폼 이름 */
  platform: 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'blog';
  /** 링크 URL */
  href: string;
  /** 접근성 라벨 */
  ariaLabel?: string;
}

interface CopyrightInfo {
  /** 저작권자 */
  holder: string;
  /** 연도 */
  year: number;
  /** 추가 텍스트 */
  additionalText?: string;
}
```

## 🎠 캐러셀 컴포넌트 타입

### FullBannerCarousel

```typescript
interface FullBannerCarouselProps extends BaseComponentProps {
  /** 슬라이드 데이터 */
  slides: BannerSlide[];
  /** 자동 재생 여부 */
  autoplay?: boolean;
  /** 자동 재생 간격 (ms) */
  interval?: number;
  /** 무한 루프 여부 */
  loop?: boolean;
  /** 슬라이드 전환 효과 */
  effect?: 'slide' | 'fade' | 'cube';
  /** 네비게이션 표시 */
  showNavigation?: boolean;
  /** 페이지네이션 표시 */
  showPagination?: boolean;
  /** 슬라이드 변경 콜백 */
  onSlideChange?: (index: number) => void;
}

interface BannerSlide {
  /** 슬라이드 ID */
  id: string;
  /** 제목 */
  title: string;
  /** 부제목 */
  subtitle?: string;
  /** 설명 */
  description?: string;
  /** 배경 이미지 URL */
  imageUrl: string;
  /** 모바일 배경 이미지 URL */
  mobileImageUrl?: string;
  /** 액션 버튼 */
  action?: SlideAction;
  /** 텍스트 위치 */
  textPosition?: 'left' | 'center' | 'right';
  /** 텍스트 색상 테마 */
  textTheme?: 'light' | 'dark';
}

interface SlideAction {
  /** 버튼 텍스트 */
  label: string;
  /** 링크 URL */
  href: string;
  /** 버튼 스타일 */
  variant?: 'primary' | 'secondary' | 'outline';
  /** 외부 링크 여부 */
  external?: boolean;
}
```

### IconFeaturesCarousel

```typescript
interface IconFeaturesCarouselProps extends BaseComponentProps {
  /** 기능 항목들 */
  features: FeatureItem[];
  /** 한 번에 표시할 항목 수 */
  itemsPerView?: number | 'auto';
  /** 스크롤 단위 */
  scrollBy?: number;
  /** 반응형 설정 */
  responsive?: ResponsiveSettings;
  /** 중앙 정렬 여부 */
  centeredSlides?: boolean;
}

interface FeatureItem {
  /** 항목 ID */
  id: string;
  /** 제목 */
  title: string;
  /** 설명 */
  description: string;
  /** 아이콘 URL 또는 SVG */
  icon: string | React.ReactNode;
  /** 링크 URL */
  href?: string;
  /** 외부 링크 여부 */
  external?: boolean;
  /** 배지 */
  badge?: string;
  /** 비활성화 상태 */
  disabled?: boolean;
}

interface ResponsiveSettings {
  /** 모바일 설정 */
  mobile?: {
    itemsPerView?: number;
    spaceBetween?: number;
  };
  /** 태블릿 설정 */
  tablet?: {
    itemsPerView?: number;
    spaceBetween?: number;
  };
  /** 데스크톱 설정 */
  desktop?: {
    itemsPerView?: number;
    spaceBetween?: number;
  };
}
```

### ComplexFeaturesCarousel

```typescript
interface ComplexFeaturesCarouselProps extends BaseComponentProps {
  /** 카드 데이터 */
  cards: ComplexCard[];
  /** 레이아웃 타입 */
  layout?: 'grid' | 'masonry' | 'carousel';
  /** 필터링 활성화 */
  enableFiltering?: boolean;
  /** 정렬 활성화 */
  enableSorting?: boolean;
  /** 카드 크기 */
  cardSize?: SizeVariant;
  /** 로딩 상태 */
  loading?: boolean;
}

interface ComplexCard {
  /** 카드 ID */
  id: string;
  /** 제목 */
  title: string;
  /** 설명 */
  description: string;
  /** 썸네일 이미지 */
  thumbnail?: string;
  /** 카테고리 */
  category: string;
  /** 태그들 */
  tags?: string[];
  /** 메타데이터 */
  metadata?: CardMetadata;
  /** 액션들 */
  actions?: CardAction[];
  /** 상태 */
  status?: 'draft' | 'published' | 'archived';
}

interface CardMetadata {
  /** 작성자 */
  author?: string;
  /** 작성일 */
  publishDate?: string;
  /** 수정일 */
  updateDate?: string;
  /** 읽기 시간 */
  readTime?: string;
  /** 조회수 */
  views?: number;
  /** 좋아요 수 */
  likes?: number;
}

interface CardAction {
  /** 액션 라벨 */
  label: string;
  /** 액션 타입 */
  type: 'primary' | 'secondary' | 'destructive';
  /** 클릭 핸들러 */
  onClick: () => void;
  /** 아이콘 */
  icon?: string;
  /** 비활성화 상태 */
  disabled?: boolean;
}
```

## 🔘 기본 UI 컴포넌트 타입

### Button

```typescript
interface ButtonProps extends BaseComponentProps {
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 버튼 스타일 변형 */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  /** 버튼 크기 */
  size?: SizeVariant;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 로딩 상태 */
  loading?: boolean;
  /** 전체 너비 */
  fullWidth?: boolean;
  /** 시작 아이콘 */
  startIcon?: React.ReactNode;
  /** 끝 아이콘 */
  endIcon?: React.ReactNode;
  /** 클릭 핸들러 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** 폼 제출 타입 */
  type?: 'button' | 'submit' | 'reset';
  /** ARIA 라벨 */
  'aria-label'?: string;
  /** ARIA 설명 */
  'aria-describedby'?: string;
}
```

### DesignTokens

```typescript
interface DesignTokensProps extends BaseComponentProps {
  /** 표시할 토큰 카테고리 */
  categories?: TokenCategory[];
  /** 검색 기능 활성화 */
  enableSearch?: boolean;
  /** 복사 기능 활성화 */
  enableCopy?: boolean;
  /** 테마 모드 */
  theme?: 'light' | 'dark' | 'auto';
}

type TokenCategory = 
  | 'colors' 
  | 'typography' 
  | 'spacing' 
  | 'shadows' 
  | 'borders' 
  | 'radii' 
  | 'breakpoints';

interface ColorToken {
  /** 토큰 이름 */
  name: string;
  /** CSS 변수명 */
  variable: string;
  /** 색상 값 */
  value: string;
  /** 설명 */
  description?: string;
  /** 사용 예시 */
  usage?: string[];
}

interface TypographyToken {
  /** 토큰 이름 */
  name: string;
  /** 폰트 크기 */
  fontSize: string;
  /** 줄 높이 */
  lineHeight: string;
  /** 폰트 굵기 */
  fontWeight: string;
  /** 문자 간격 */
  letterSpacing?: string;
  /** 사용 용도 */
  usage: string;
}

interface SpacingToken {
  /** 토큰 이름 */
  name: string;
  /** CSS 변수명 */
  variable: string;
  /** 크기 값 */
  value: string;
  /** 픽셀 값 */
  pixels: number;
  /** 사용 예시 */
  usage: string;
}
```

## 📄 페이지 템플릿 타입

### ApplyPage

```typescript
interface ApplyPageProps extends BaseComponentProps {
  /** 신청서 제목 */
  title: string;
  /** 신청서 설명 */
  description?: string;
  /** 진행 단계들 */
  steps: FormStep[];
  /** 현재 단계 (0-based index) */
  currentStep: number;
  /** 폼 데이터 */
  formData?: Record<string, any>;
  /** 폼 제출 핸들러 */
  onSubmit?: (data: FormData) => Promise<void>;
  /** 임시 저장 핸들러 */
  onSaveDraft?: (data: FormData) => Promise<void>;
  /** 단계 변경 핸들러 */
  onStepChange?: (step: number) => void;
  /** 제출 중 상태 */
  submitting?: boolean;
  /** 에러 상태 */
  error?: string;
}

interface FormStep {
  /** 단계 ID */
  id: string;
  /** 단계 제목 */
  title: string;
  /** 단계 설명 */
  description?: string;
  /** 폼 필드들 */
  fields: FormField[];
  /** 유효성 검사 규칙 */
  validation?: ValidationRule[];
  /** 완료 조건 */
  completionCondition?: (data: any) => boolean;
}

interface FormField {
  /** 필드 이름 */
  name: string;
  /** 필드 라벨 */
  label: string;
  /** 필드 타입 */
  type: FormFieldType;
  /** 필수 여부 */
  required?: boolean;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 기본값 */
  defaultValue?: any;
  /** 옵션들 (select, radio, checkbox) */
  options?: FieldOption[];
  /** 유효성 검사 */
  validation?: FieldValidation;
  /** 도움말 텍스트 */
  helpText?: string;
  /** 조건부 표시 */
  conditional?: ConditionalRule;
}

type FormFieldType = 
  | 'text' 
  | 'email' 
  | 'password' 
  | 'number' 
  | 'tel' 
  | 'url' 
  | 'textarea' 
  | 'select' 
  | 'radio' 
  | 'checkbox' 
  | 'file' 
  | 'date' 
  | 'time' 
  | 'datetime-local';

interface FieldOption {
  /** 옵션 값 */
  value: string | number;
  /** 옵션 라벨 */
  label: string;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 그룹 (optgroup) */
  group?: string;
}

interface FieldValidation {
  /** 최소 길이 */
  minLength?: number;
  /** 최대 길이 */
  maxLength?: number;
  /** 최소값 */
  min?: number;
  /** 최대값 */
  max?: number;
  /** 정규식 패턴 */
  pattern?: string;
  /** 커스텀 유효성 검사 */
  custom?: (value: any) => string | undefined;
}

interface ValidationRule {
  /** 검사 함수 */
  validator: (data: any) => boolean;
  /** 오류 메시지 */
  message: string;
  /** 필드 이름들 */
  fields?: string[];
}

interface ConditionalRule {
  /** 조건 필드 */
  field: string;
  /** 조건 값 */
  value: any;
  /** 조건 연산자 */
  operator?: 'equals' | 'notEquals' | 'includes' | 'notIncludes';
}

type FormData = Record<string, any>;
```

### ContentsPage

```typescript
interface ContentsPageProps extends BaseComponentProps {
  /** 페이지 제목 */
  title: string;
  /** 페이지 설명 */
  description?: string;
  /** 콘텐츠 본문 */
  content: React.ReactNode;
  /** 목차 표시 여부 */
  showToc?: boolean;
  /** 목차 설정 */
  tocConfig?: TocConfig;
  /** 공유 옵션 */
  shareOptions?: ShareOption[];
  /** 관련 콘텐츠 */
  relatedContents?: RelatedContent[];
  /** 메타데이터 */
  metadata?: PageMetadata;
  /** 브레드크럼 */
  breadcrumbs?: Breadcrumb[];
}

interface TocConfig {
  /** 제목 레벨 (h1-h6) */
  headingLevels?: number[];
  /** 위치 */
  position?: 'left' | 'right' | 'top';
  /** 스티키 여부 */
  sticky?: boolean;
  /** 자동 하이라이트 */
  autoHighlight?: boolean;
}

interface ShareOption {
  /** 플랫폼 */
  platform: 'facebook' | 'twitter' | 'linkedin' | 'email' | 'copy';
  /** 라벨 */
  label: string;
  /** 공유 URL 생성 함수 */
  getUrl: (url: string, title: string) => string;
}

interface RelatedContent {
  /** 콘텐츠 ID */
  id: string;
  /** 제목 */
  title: string;
  /** 요약 */
  summary?: string;
  /** 썸네일 */
  thumbnail?: string;
  /** 링크 URL */
  href: string;
  /** 카테고리 */
  category?: string;
  /** 작성일 */
  publishDate?: string;
}

interface PageMetadata {
  /** 작성자 */
  author?: string;
  /** 작성일 */
  publishDate?: string;
  /** 수정일 */
  updateDate?: string;
  /** 카테고리 */
  category?: string;
  /** 태그들 */
  tags?: string[];
  /** 읽기 시간 */
  readTime?: string;
}

interface Breadcrumb {
  /** 라벨 */
  label: string;
  /** 링크 URL */
  href?: string;
  /** 현재 페이지 여부 */
  current?: boolean;
}
```

## 🔧 유틸리티 타입

### 자동 로더 타입

```typescript
// auto-loader.ts
interface LoaderConfig {
  /** CSS 파일들 */
  styles: string[];
  /** JavaScript 기능들 */
  scripts: string[];
  /** 폰트 파일들 */
  fonts: string[];
  /** 에러 핸들링 */
  onError?: (error: Error) => void;
}

interface AssetLoadResult {
  /** 로딩 성공 여부 */
  success: boolean;
  /** 로딩된 에셋 수 */
  loadedCount: number;
  /** 전체 에셋 수 */
  totalCount: number;
  /** 에러 목록 */
  errors: Error[];
}

// 함수 타입
type LoadGovernmentAssets = () => Promise<AssetLoadResult>;
type CleanupGovernmentAssets = () => void;
type IsGovernmentAssetsLoaded = () => boolean;
```

### 이벤트 핸들러 타입

```typescript
// 키보드 이벤트
type KeyboardEventHandler = (event: React.KeyboardEvent) => void;

// 마우스 이벤트
type MouseEventHandler = (event: React.MouseEvent) => void;

// 폼 이벤트
type FormEventHandler = (event: React.FormEvent) => void;

// 제네릭 이벤트 핸들러
type EventHandler<T = Element> = (event: React.SyntheticEvent<T>) => void;

// 값 변경 핸들러
type ValueChangeHandler<T = any> = (value: T) => void;

// 비동기 액션 핸들러
type AsyncActionHandler<T = any> = (data: T) => Promise<void>;
```

### 반응형 타입

```typescript
// 브레이크포인트
type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

// 반응형 값
type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

// 디바이스 타입
type DeviceType = 'mobile' | 'tablet' | 'desktop';

// 화면 방향
type Orientation = 'portrait' | 'landscape';

// 뷰포트 정보
interface ViewportInfo {
  width: number;
  height: number;
  deviceType: DeviceType;
  orientation: Orientation;
  breakpoint: Breakpoint;
}
```

### 상태 관리 타입

```typescript
// 로딩 상태
type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// 데이터 상태
interface DataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  lastUpdated?: Date;
}

// 페이지네이션
interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// 필터 상태
interface FilterState {
  search?: string;
  category?: string;
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
```

## 📋 타입 사용 가이드

### 새 컴포넌트 타입 정의 시
1. **BaseComponentProps 확장**: 공통 props 포함
2. **명확한 prop 설명**: JSDoc 주석 추가
3. **선택적 props**: 기본값이 있는 경우 optional로 설정
4. **제네릭 활용**: 재사용 가능한 컴포넌트의 경우

### 타입 익스포트
```typescript
// 컴포넌트와 함께 타입도 익스포트
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';

// 유틸리티 타입들
export type {
  LoadingState,
  DataState,
  PaginationState,
  FilterState,
} from './types';
```

### 타입 가드 활용
```typescript
// 타입 가드 함수
const isMenuItem = (item: any): item is MenuItem => {
  return item && typeof item.id === 'string' && typeof item.label === 'string';
};

// 사용 예시
if (isMenuItem(data)) {
  // data는 MenuItem 타입으로 인식됨
  console.log(data.label);
}
```

---

이 타입 정의 참조는 독립 에이전트가 프로젝트의 타입 시스템을 이해하고, 타입 안전한 코드를 작성할 수 있도록 구성되었습니다.