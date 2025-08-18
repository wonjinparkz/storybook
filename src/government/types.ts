// Government Header Types
export interface TopLink {
  url: string;
  text: string;
  icon?: string;
  target?: string;
}

export interface DropdownItem {
  url: string;
  text: string;
  class?: string;
  icon?: string;
  target?: string;
}

export interface DropdownFooter {
  text: string;
  icon: string;
}

export interface Dropdown {
  title: string;
  class?: string;
  items: DropdownItem[];
  footer?: DropdownFooter;
}

export interface EtcMenus {
  topLinks: TopLink[];
  dropdowns: Dropdown[];
}

export interface SiteInfo {
  homepage_url: string;
  title: string;
  slogan_image: string;
  slogan: string;
}

export interface MyGovMenuItem {
  url: string;
  text: string;
}

export interface MyGovMenu {
  user_name: string;
  items: MyGovMenuItem[];
}

export interface SubMenuItem {
  title: string;
  url: string;
}

export interface SubMenuBanner {
  badge: string;
  badge_class: string;
  url: string;
  text: string;
}

export interface SubMenu {
  id: string;
  title: string;
  url: string;
  type: 'internal' | 'external';
  items?: SubMenuItem[];
  banner?: SubMenuBanner;
}

export interface MainMenu {
  title: string;
  url: string;
  submenu: SubMenu[];
}

export interface GovernmentHeaderProps {
  etcMenus: EtcMenus;
  siteInfo: SiteInfo;
  isLoggedIn: boolean;
  myGovMenu?: MyGovMenu;
  menuStructure: MainMenu[];
  submenuInteraction?: 'hover' | 'click';
}

// Government Footer Types
export interface FooterQuickLink {
  title: string;
  layerTitle: string;
}

export interface FooterContactInfo {
  number: string;
  description?: string;
}

export interface FooterServiceLink {
  url: string;
  text: string;
}

export interface FooterSocialLink {
  platform: 'youtube' | 'instagram' | 'facebook' | 'twitter' | 'blog';
  url: string;
}

export interface FooterMenuLink {
  url: string;
  text: string;
  isHighlighted?: boolean;
}

export interface FooterBanner {
  organization: string;
  description: string;
}

export interface GovernmentFooterProps {
  quickLinks: FooterQuickLink[];
  logoInfo: {
    imageUrl: string;
    text: string;
  };
  contactInfo: {
    address: string;
    contacts: FooterContactInfo[];
  };
  serviceLinks: FooterServiceLink[];
  socialLinks: FooterSocialLink[];
  footerMenus: FooterMenuLink[];
  copyright: string;
  banner?: FooterBanner;
}

// Full Banner Carousel Types
export interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
}

export interface FullBannerCarouselProps {
  slides: CarouselSlide[];
  className?: string;
  swiperId: string;
  autoplayDelay?: number;
  speed?: number;
  loop?: boolean;
  backgroundColor?: string;
}

// Icon Features Carousel Types
export interface IconFeatureItem {
  id: string;
  title: string;
  description: string;
  url: string;
  iconClass?: string;
  iconSvg?: string;
}

export interface IconFeaturesCarouselProps {
  title: string;
  items: IconFeatureItem[];
  swiperId: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  speed?: number;
  className?: string;
}

// Complex Features Carousel Types
export interface ComplexCarouselIntro {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface ComplexCarouselCard {
  id: string;
  title: string;
  description: string;
  url: string;
  imageClass: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface ComplexFeaturesCarouselProps {
  title: string;
  intro: ComplexCarouselIntro;
  cards: ComplexCarouselCard[];
  swiperId: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  speed?: number;
  loop?: boolean;
  className?: string;
}

// Contents Card Carousel Types
export interface ContentsCard {
  id: string;
  title: string;
  description: string;
  url: string;
  badge?: string;
  buttonText?: string;
}

export interface ContentsCardCarouselProps {
  title: string;
  cards: ContentsCard[];
  swiperId: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  speed?: number;
  loop?: boolean;
  moreLink?: string;
  moreText?: string;
  showBadges?: boolean;
  className?: string;
}

// Apply Page Types
export interface BreadcrumbItem {
  text: string;
  url?: string;
}

export interface QuickNavItem {
  id: string;
  text: string;
  active: boolean;
}

export interface ApplyButton {
  text: string;
  sub_text: string;
}

export interface ServiceOverview {
  service_target: string;
  service_type: string;
  selection_criteria: string;
  application_methods: string[];
  contact: string;
}

export interface PaymentTableHeader {
  headers: string[];
}

export interface PaymentTableRow {
  [key: number]: string;
}

export interface PaymentTable {
  headers: string[];
  rows: string[][];
}

export interface SelectionNote {
  title: string;
  content: string | {
    formula: string;
    details: string[];
  };
}

export interface SelectionSubItem {
  text: string;
  note?: SelectionNote;
}

export interface SelectionItem {
  text?: string;
  sub_items?: (string | SelectionSubItem)[];
  note?: SelectionNote;
}

export interface SelectionCriteriaSection {
  items: (string | SelectionItem)[];
}

export interface SelectionCriteria {
  disability: SelectionCriteriaSection;
  age: SelectionCriteriaSection;
  income: SelectionCriteriaSection;
}

export interface ServiceDetail {
  provision_content: string;
  payment_table: PaymentTable;
  selection_criteria: SelectionCriteria;
}

export interface ApplicationProcess {
  num: string;
  title: string;
  period: string;
  description: string;
}

export interface ApplicationSection {
  methods: string[];
  process: ApplicationProcess[];
}

export interface DocumentItem {
  title: string;
  file_size: string;
  file_type: string;
}

export interface TogetherService {
  id: string;
  title: string;
  description: string;
  disabled: boolean;
  checked: boolean;
}

export interface TogetherServices {
  description: string;
  services: TogetherService[];
}

export interface ReferenceForm {
  title: string;
  file_size: string;
  file_type: string;
}

export interface WebsiteLink {
  text: string;
  url: string;
}

export interface AdditionalInfo {
  reference_forms?: ReferenceForm[];
  related_websites?: WebsiteLink[];
  legal_basis?: WebsiteLink[];
  welfare_case?: string;
}

export interface ChangeHistoryItem {
  date: string;
  content: string;
}

export interface ApplyPageSections {
  overview: ServiceOverview;
  detail: ServiceDetail;
  application: ApplicationSection;
  documents: DocumentItem[];
  together_services: TogetherServices;
  additional_info: AdditionalInfo;
  change_history: ChangeHistoryItem[];
}

export interface ApplyPageProps {
  breadcrumb: BreadcrumbItem[];
  title: string;
  description: string;
  quick_nav: QuickNavItem[];
  apply_button: ApplyButton;
  sections: ApplyPageSections;
  className?: string;
}

// Contents Page Types
export interface SidebarSubItem {
  title: string;
  url: string;
}

export interface SidebarMenuItem {
  title: string;
  url: string;
  subitems?: SidebarSubItem[];
}

export interface SidebarCategory {
  title: string;
  expanded: boolean;
  items: SidebarMenuItem[];
}

export interface SidebarMenu {
  title: string;
  menu: SidebarCategory[];
}

export interface DropdownItem {
  text: string;
  url: string;
}

export interface PageDropdown {
  current: string;
  items: DropdownItem[];
}

export interface PageInfo {
  title: string;
  dropdown?: PageDropdown;
}

export interface ContentsPageProps {
  breadcrumb: BreadcrumbItem[];
  page: PageInfo;
  content: string;
  className?: string;
}

// 레거시 사이드바 포함 버전 (기존 호환성용)
export interface ContentsPageWithSidebarProps {
  sidebar: SidebarMenu;
  breadcrumb: BreadcrumbItem[];
  page: PageInfo;
  content: string;
  currentUrl?: string;
  className?: string;
}

// Contents List Page Types
export interface ListItemBadge {
  text: string;
  className?: string;
}

export interface ListItemMeta {
  badge?: ListItemBadge;
  date: string;
  views?: number;
  attachments?: number;
  url?: string;
}

export interface ListItemContent {
  title: string;
  description: string;
  url: string;
}

export interface ListItem {
  id: string;
  meta: ListItemMeta;
  content: ListItemContent;
}

export interface SearchInfo {
  totalResults: number;
}

export interface SortOption {
  label: string;
  value: string;
  active?: boolean;
}

export interface ListControls {
  searchInfo?: SearchInfo;
  sortOptions: SortOption[];
  pageSize?: number;
  pageSizeOptions?: number[];
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ContentsListPageProps {
  breadcrumb: BreadcrumbItem[];
  page: PageInfo;
  description?: string;
  controls?: ListControls;
  items: ListItem[];
  pagination?: PaginationInfo;
  currentUrl?: string;
  className?: string;
}

// Card Contents Types
export interface CardContentsCard {
  id: string;
  title: string;
  description: string;
  url: string;
  badge?: string;
  buttonText: string;
  imageClass: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface CardContentsProps {
  title: string;
  cards: CardContentsCard[];
  moreLink?: string;
  moreText?: string;
  desktopLimit?: number;
  className?: string;
}

// Foot Contents Types
export interface FootContentsProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonUrl?: string;
  hasBackground?: boolean;
  className?: string;
}

// Tab Contents Types
export interface TabItem {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  buttonText: string;
}

export interface Tab {
  id: string;
  label: string;
  panelId: string;
  active: boolean;
  items?: TabItem[];
  emptyMessage?: string;
}

export interface TabContentsProps {
  title: string;
  tabs: Tab[];
  moreLink?: string;
  moreText?: string;
  className?: string;
}

// Step Process Page Types
export interface StepInfo {
  num: number;
  title: string;
}

export interface StepButtons {
  prev?: { text: string; show: boolean };
  save?: { text: string; show: boolean };
  next?: { text: string; show: boolean };
  cancel?: { text: string; show: boolean };
  submit?: { text: string; show: boolean };
}

export interface SuccessInfo {
  message: string;
  applicant?: string;
  info?: string[];
  relatedServices?: { text: string; url: string }[];
  relatedTitle?: string;
}

// Dynamic Form Field Types
export interface SelectOption {
  value: string;
  label: string;
  selected?: boolean;
}

export interface CheckboxOption {
  value: string;
  label: string;
  checked?: boolean;
}

export interface RadioOption {
  value: string;
  label: string;
  checked?: boolean;
}

export interface TermsSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface FormField {
  type: 'text' | 'tel' | 'email' | 'number' | 'date' | 'time' | 'select' | 'textarea' | 'file' | 
        'checkbox_single' | 'checkbox_group' | 'radio_group' | 'terms_box' | 'custom_html' | 'section_title';
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  readonly?: boolean;
  help?: string;
  
  // Select options
  options?: SelectOption[] | CheckboxOption[] | RadioOption[];
  
  // Textarea specific
  rows?: number;
  
  // File upload specific
  accept?: string;
  multiple?: boolean;
  
  // Terms box specific
  title?: string;
  sections?: TermsSection[];
  
  // Custom HTML
  html?: string;
  
  // Checkbox single specific
  checked?: boolean;
  
  // Section title specific (for grouping)
  subsection_title?: string;
}

export interface FormSection {
  section_title: string;
  fields: FormField[];
}

export interface StepContent {
  fields?: FormField[] | FormSection[];
  html?: string;
  buttons?: StepButtons;
}

export interface StepProcessPageProps {
  type: 'nostep' | 'single' | 'multi' | 'success';
  title: string;
  breadcrumb: BreadcrumbItem[];
  steps?: StepInfo[];
  currentStep?: number;
  content?: string;
  stepContents?: { [stepNumber: number]: StepContent };
  buttons?: StepButtons;
  success?: SuccessInfo;
  className?: string;
}