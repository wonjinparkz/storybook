// Korean Government Design System - Complete Components Package
// 모든 Government 컴포넌트를 하나의 파일로 통합
// Auto-generated on 2025-08-19T01:17:57.184Z

import { useState, useEffect, useRef } from 'react';

// Swiper 타입 정의
declare global {
  interface Window {
    Swiper: any;
  }
}

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
// ===== HOOKS =====
const useGovernmentAssets = () => {
  useEffect(() => {
    // Government assets loading logic would go here
    // This is a placeholder for the actual asset loading
  }, []);
};

// ===== COMPONENTS =====

// ApplyPage Component
export const ApplyPage = ({
  breadcrumb,
  title,
  description,
  quick_nav,
  apply_button,
  sections,
  className = ''
}: ApplyPageProps) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const toggleExpand = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
    console.log('Toggled section:', sectionId); // expandedSections 사용
  };
  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const renderSelectionItem = (item: string | SelectionItem, index: number) => {
    if (typeof item === 'string') {
      return <li key={index} dangerouslySetInnerHTML={{ __html: item }} />;
    }
    return (
      <li key={index}>
        {item.text && <span dangerouslySetInnerHTML={{ __html: item.text }} />}
        {item.sub_items && (
          <ul className="info-list dash">
            {item.sub_items.map((subItem, subIndex) => 
              renderSubItem(subItem, subIndex)
            )}
          </ul>
        )}
        {item.note && renderNote(item.note)}
      </li>
    );
  };
  const renderSubItem = (subItem: string | SelectionSubItem, index: number) => {
    if (typeof subItem === 'string') {
      return <li key={index} dangerouslySetInnerHTML={{ __html: subItem }} />;
    }
    return (
      <li key={index}>
        <span dangerouslySetInnerHTML={{ __html: subItem.text }} />
        {subItem.note && renderNote(subItem.note)}
      </li>
    );
  };
  const renderNote = (note: { title: string; content: string | { formula: string; details: string[] } }) => (
    <div className="helper-box refer">
      <p className="helper-tit">{note.title}</p>
      <div className="helper-desc-wrap">
        {typeof note.content === 'string' ? (
          <p>{note.content}</p>
        ) : (
          <div className="calc-wrap">
            <p className="total-txt">{note.content.formula}</p>
            <ol className="calc-list">
              {note.content.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
  return (
    <div id="container" className={className}>
      {/* breadcrumb */}
      <nav className="breadcrumb-wrap" aria-label="브레드크럼">
        <ol className="breadcrumb">
          {breadcrumb.map((crumb, index) => (
            <li key={index} className={index === 0 ? 'home' : ''}>
              {crumb.url ? (
                <a 
                  href={crumb.url} 
                  className="txt"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(crumb.url!);
                  }}
                >
                  {crumb.text}
                </a>
              ) : (
                <span className="txt">{crumb.text}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {/* 컨텐츠 영역 */}
      <div className="inner quick-nav-inner">
        {/* 페이지 타이틀 영역 */}
        <div className="page-title-wrap">
          <h2 className="h-tit">{title}</h2>
          <p className="guide-txt">{description}</p>
        </div>
        {/* 컨텐츠 영역 */}
        <div className="conts-area quick-nav-type">
          {/* quick link */}
          <div className="quick-nav-area">
            <div className="quick-title-wrap pc-only">
              <p className="guide-txt">이 페이지의 구성</p>
              <h3 className="sec-tit">{title}</h3>
            </div>
            <nav className="quick-list">
              <ul>
                {quick_nav.map((nav) => (
                  <li key={nav.id}>
                    <a 
                      href={`#${nav.id}`} 
                      className={nav.active ? 'active' : ''}
                    >
                      {nav.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="btn-wrap pc-only">
              <button type="button" className="btn primary">
                {apply_button.text}
              </button>
              <p className="guide-txt" dangerouslySetInnerHTML={{ __html: apply_button.sub_text }} />
            </div>
          </div>
          <div className="conts-detail-wrap">
            {/* real contents */}
            <div className="conts-wrap scroll-check">
              {/* 서비스 개요 섹션 */}
              <div className="conts-wrap section-link" id="section_01">
                <h3 className="sec-tit">서비스 개요</h3>
                <div className="tbl-wrap">
                  <dl className="tbl def-list">
                    <dt>서비스 대상</dt>
                    <dd>{sections.overview.service_target}</dd>
                    <dt>서비스 유형</dt>
                    <dd>{sections.overview.service_type}</dd>
                    <dt>선정 기준</dt>
                    <dd>{sections.overview.selection_criteria}</dd>
                    <dt>신청 방법</dt>
                    <dd>
                      <ul>
                        {sections.overview.application_methods.map((method, index) => (
                          <li key={index}>{method}</li>
                        ))}
                      </ul>
                    </dd>
                    <dt>문의처</dt>
                    <dd>{sections.overview.contact}</dd>
                  </dl>
                </div>
              </div>
              {/* 서비스 상세 섹션 */}
              <div className="conts-wrap section-link" id="section_02">
                <h3 className="sec-tit">서비스 상세</h3>
                <div className="conts-wrap">
                  <h4 className="sec-tit">제공 내용</h4>
                  <div className="conts-desc">{sections.detail.provision_content}</div>
                  <div className="tbl-wrap">
                    <table className="tbl col data">
                      <caption>서비스 상세 제공 내용</caption>
                      <colgroup>
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          {sections.detail.payment_table.headers.map((header, index) => (
                            <th 
                              key={index} 
                              scope="col" 
                              className={index === 0 ? '' : 'ar'}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sections.detail.payment_table.rows.map((row, index) => (
                          <tr key={index}>
                            <th scope="row">{row[0]}</th>
                            <td className="ar">{row[1]}</td>
                            <td className="ar">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* 지원 대상 선정 기준 */}
                <div className="conts-wrap">
                  <h4 className="sec-tit">지원 대상 선정 기준</h4>
                  {[
                    { key: 'disability', title: '장애' },
                    { key: 'age', title: '연령' },
                    { key: 'income', title: '소득' }
                  ].map(({ key, title }) => (
                    <div key={key} className="conts-wrap">
                      <h5 className="sec-tit">{title}</h5>
                      <ul className="info-list decimal">
                        {sections.detail.selection_criteria[key as keyof typeof sections.detail.selection_criteria]?.items.map((item, index) => 
                          renderSelectionItem(item, index)
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              {/* 신청 방법 및 절차 섹션 */}
              <div className="conts-wrap section-link" id="section_03">
                <h3 className="sec-tit">신청 방법 및 절차</h3>
                <div className="conts-wrap">
                  <h4 className="sec-tit">신청 방법</h4>
                  <ul className="info-list decimal">
                    {sections.application.methods.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
                <div className="conts-wrap">
                  <h4 className="sec-tit">신청 및 처리 절차</h4>
                  <div className="conts-expand-area step">
                    <div className="expand-wrap">
                      <ol className="service-step">
                        {sections.application.process.map((step) => (
                          <li key={step.num}>
                            <span className="num">{step.num}</span>
                            <div className="tit-area">
                              <p className="tit">{step.title}</p>
                              <span className="period">{step.period}</span>
                            </div>
                            <p className="conts-desc">{step.description}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <button 
                      type="button" 
                      className="btn-conts-expand" 
                      aria-hidden="true"
                      onClick={() => toggleExpand('process')}
                    >
                      신청 및 처리 절차 전체 보기
                    </button>
                  </div>
                </div>
              </div>
              {/* 제출 서류 섹션 */}
              <div className="conts-wrap section-link" id="section_04">
                <h3 className="sec-tit">제출 서류</h3>
                <ul className="box-group-area">
                  {sections.documents.map((doc, index) => (
                    <li key={index}>
                      <p className="tit">{doc.title}</p>
                      <div className="btn-wrap" style={{ display: 'flex', gap: '8px' }}>
                        <button type="button" className="btn sm btn-txt ico-down">
                          다운로드
                        </button>
                        <button type="button" className="btn sm btn-txt ico-go">
                          바로보기
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 함께 신청할 수 있는 서비스 섹션 */}
              <div className="conts-wrap section-link" id="section_05">
                <h3 className="sec-tit">함께 신청할 수 있는 서비스</h3>
                <p className="conts-desc" dangerouslySetInnerHTML={{ __html: sections.together_services.description }} />
                <fieldset>
                  <legend>함께 신청할 수 있는 서비스 선택</legend>
                  <div className="fieldset chk-group-area">
                    <div className="chk-all-wrap">
                      <div className="form-group chk-area">
                        <div className="form-check">
                          <input type="checkbox" name="save_id" id="chk_all" />
                          <label htmlFor="chk_all">전체선택</label>
                        </div>
                      </div>
                      <span className="chk-num">
                        {title} 외 <strong>{sections.together_services.services.filter(s => s.checked).length}건</strong> 함께 신청하기
                      </span>
                    </div>
                    <ul className="chk-group-wrap">
                      {sections.together_services.services.map((service) => (
                        <li 
                          key={service.id} 
                          className={`${service.disabled ? 'disabled' : ''} ${service.checked ? 'checked' : ''}`}
                        >
                          <div className="form-group chk-area chk-column">
                            <div className="form-check">
                              <input 
                                type="checkbox" 
                                name="save_id" 
                                id={service.id}
                                disabled={service.disabled}
                                defaultChecked={service.checked}
                              />
                              <label htmlFor={service.id}>
                                <strong className="tit">{service.title}</strong>
                                <span className="conts-desc">{service.description}</span>
                              </label>
                            </div>
                          </div>
                          <div className="btn-wrap">
                            <button 
                              type="button" 
                              className="btn sm btn-txt ico-arr"
                              onClick={() => handleLinkClick('/service-detail')}
                            >
                              자세히보기
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </fieldset>
              </div>
              {/* 부가정보 섹션 */}
              <div className="conts-wrap section-link" id="section_06">
                <h3 className="sec-tit">부가정보</h3>
                {sections.additional_info.reference_forms && sections.additional_info.reference_forms.length > 0 && (
                  <div className="conts-wrap">
                    <h4 className="sec-tit">참고서식</h4>
                    <ul className="box-group-area">
                      {sections.additional_info.reference_forms.map((form, index) => (
                        <li key={index}>
                          <p className="tit">{form.title}</p>
                          <div className="btn-wrap" style={{ display: 'flex', gap: '8px' }}>
                            <button type="button" className="btn sm btn-txt ico-down">
                              다운로드
                            </button>
                            <button type="button" className="btn sm btn-txt ico-go">
                              바로보기
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {sections.additional_info.related_websites && sections.additional_info.related_websites.length > 0 && (
                  <div className="conts-wrap">
                    <h4 className="sec-tit">관련 웹사이트</h4>
                    <ul className="info-list decimal btn-txt-list" style={{ textAlign: 'left' }}>
                      {sections.additional_info.related_websites.map((site, index) => (
                        <li key={index} style={{ textAlign: 'left' }}>
                          <a 
                            href={site.url} 
                            className="btn sm btn-txt ico-go" 
                            target="_blank" 
                            rel="noreferrer"
                            title="새 창 열림" 
                            style={{ display: 'inline-block' }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleLinkClick(site.url);
                            }}
                          >
                            {site.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {sections.additional_info.legal_basis && sections.additional_info.legal_basis.length > 0 && (
                  <div className="conts-wrap">
                    <h4 className="sec-tit">근거 법령</h4>
                    <ul className="info-list decimal btn-txt-list" style={{ textAlign: 'left' }}>
                      {sections.additional_info.legal_basis.map((law, index) => (
                        <li key={index} style={{ textAlign: 'left' }}>
                          <a 
                            href={law.url} 
                            className="btn sm btn-txt ico-go" 
                            target="_blank" 
                            rel="noreferrer"
                            title="새 창 열림" 
                            style={{ display: 'inline-block' }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleLinkClick(law.url);
                            }}
                          >
                            {law.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {sections.additional_info.welfare_case && (
                  <div className="conts-wrap">
                    <h4 className="sec-tit">복지 사례 알아보기</h4>
                    <div className="conts-desc" dangerouslySetInnerHTML={{ __html: sections.additional_info.welfare_case }} />
                  </div>
                )}
              </div>
              {/* 정보 변경 내역 섹션 */}
              <div className="conts-wrap section-link" id="section_07">
                <h3 className="sec-tit">정보 변경 내역</h3>
                <div className="tbl-wrap">
                  <table className="tbl col data">
                    <caption>정보 변경 내역</caption>
                    <colgroup>
                      <col style={{ width: '30%' }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">변경일자</th>
                        <th scope="col">변경 내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sections.change_history.map((history, index) => (
                        <tr key={index}>
                          <td>{history.date}</td>
                          <td>{history.content}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 페이지 버튼 영역 */}
        <div className="page-btn-wrap guide mob-only">
          <button type="button" className="btn primary">
            {apply_button.text}
          </button>
          <p className="guide-txt" dangerouslySetInnerHTML={{ __html: apply_button.sub_text }} />
        </div>
      </div>
    </div>
  );
};

// CardContents Component
export const CardContents = ({
  title,
  cards,
  moreLink,
  moreText = '더보기',
  desktopLimit = 3,
  className = ''
}: CardContentsProps) => {
  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const displayCards = cards.slice(0, desktopLimit);
  const renderCard = (card: CardContentsCard) => (
    <li key={card.id}>
      <a 
        href={card.url}
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(card.url);
        }}
      >
        <div className="d-card line">
          <div className={`im ${card.imageClass}`}>
            {card.imageUrl && (
              <img 
                src={card.imageUrl} 
                alt={card.imageAlt || card.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
          <div className="in">
            <div className="text">
              {card.badge && (
                <p className="c-badge">
                  <span className="badge">{card.badge}</span>
                </p>
              )}
              <p className="c-tit">{card.title}</p>
              <p className="c-txt">{card.description}</p>
            </div>
            <p className="c-btn">
              <span className="btn sm btn-txt ico-more contents-btn-tl">{card.buttonText}</span>
            </p>
          </div>
        </div>
      </a>
    </li>
  );
  return (
    <div className={`main-sect ${className}`}>
      <div className="inner">
        <div className="main-tit-wrap">
          <h2 className="tit">{title}</h2>
          {moreLink && (
            <a 
              href={moreLink} 
              className="btn sm btn-txt ico-plus contents-btn-tl"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(moreLink);
              }}
            >
              {moreText}
            </a>
          )}
        </div>
        <ul className="policy-list">
          {displayCards.map(renderCard)}
        </ul>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    Swiper: any;
  }
}
// ComplexFeaturesCarousel Component
export const ComplexFeaturesCarousel = ({
  title,
  intro,
  cards,
  swiperId,
  autoplay = true,
  autoplayDelay = 4000,
  speed = 400,
  loop = true,
  className = ''
}: ComplexFeaturesCarouselProps) => {
  const swiperRef = useRef<any>(null);
  const swiperInstanceRef = useRef<any>(null);
  useEffect(() => {
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper && swiperRef.current) {
        if (swiperInstanceRef.current) {
          swiperInstanceRef.current.destroy(true, true);
        }
        const swiperConfig: any = {
          slidesPerView: 1,
          spaceBetween: 24,
          speed: speed,
          loop: loop,
          breakpoints: {
            640: {
              slidesPerView: 1,   // 모바일: 1개
            },
            768: {
              slidesPerView: 2,   // 태블릿: 2개
            },
            1024: {
              slidesPerView: 3,   // 데스크탑: 3개
            },
          },
          navigation: {
            nextEl: `.${swiperId} .swiper-button-next`,
            prevEl: `.${swiperId} .swiper-button-prev`,
          },
          pagination: {
            el: `.${swiperId}-pagination`,
            clickable: true,
            type: 'bullets',
          },
        };
        if (autoplay) {
          swiperConfig.autoplay = {
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          };
        }
        swiperInstanceRef.current = new window.Swiper(swiperRef.current, swiperConfig);
      }
    };
    if (!window.Swiper) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.onload = initSwiper;
      document.head.appendChild(script);
    } else {
      initSwiper();
    }
    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, [swiperId, autoplay, autoplayDelay, speed, loop, cards]);
  const handleIntroClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const handleCardClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  return (
    <div className={`main-sect ${className}`}>
      <div className="inner">
        <div className="main-tit-wrap">
          <h2 className="tit">{title}</h2>
        </div>
        <div className="contents-wrap">
          {/* 소개 텍스트 섹션 */}
          <div className="contents-text">
            <p 
              className="tit"
              dangerouslySetInnerHTML={{ __html: intro.title }}
            />
            <p 
              className="txt"
              dangerouslySetInnerHTML={{ __html: intro.description }}
            />
            <a 
              href={intro.buttonUrl} 
              className="btn sm btn-txt ico-plus contents-btn-tl"
              onClick={(e) => {
                e.preventDefault();
                handleIntroClick(intro.buttonUrl);
              }}
            >
              {intro.buttonText}
            </a>
          </div>
          {/* 카드 슬라이더 섹션 */}
          <div className="contents-list">
            <div className={`contents-swiper-in ${swiperId}`}>
              <div className="swiper" ref={swiperRef}>
                <ul className="swiper-wrapper">
                  {cards.map((card) => (
                    <li key={card.id} className="swiper-slide">
                      <a 
                        href={card.url}
                        onClick={(e) => {
                          e.preventDefault();
                          handleCardClick(card.url);
                        }}
                      >
                        <div className="d-card">
                          <div className={`im ${card.imageClass}`}>
                            {card.imageUrl && (
                              <img 
                                src={card.imageUrl} 
                                alt={card.imageAlt || card.title}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            )}
                          </div>
                          <div className="in">
                            <div className="text">
                              <p className="c-tit">{card.title}</p>
                              <p className="c-txt">{card.description}</p>
                            </div>
                            <p className="c-btn">
                              <span className="btn sm btn-txt ico-more contents-btn-tl">자세히보기</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <button type="button" className="swiper-button-prev">
                <span className="sr-only">이전</span>
              </button>
              <button type="button" className="swiper-button-next">
                <span className="sr-only">다음</span>
              </button>
            </div>
            <div className={`swiper-pagination ${swiperId}-pagination`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    Swiper: any;
  }
}
// ContentsCardCarousel Component
export const ContentsCardCarousel = ({
  title,
  cards,
  swiperId,
  autoplay = false,
  autoplayDelay = 4000,
  speed = 400,
  loop = true,
  moreLink,
  moreText = '더보기',
  showBadges = true,
  className = ''
}: ContentsCardCarouselProps) => {
  const swiperRef = useRef<any>(null);
  const swiperInstanceRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  useEffect(() => {
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper && swiperRef.current) {
        if (swiperInstanceRef.current) {
          swiperInstanceRef.current.destroy(true, true);
        }
        const swiperConfig: any = {
          slidesPerView: 1,
          spaceBetween: 24,
          speed: speed,
          loop: loop,
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
          navigation: {
            nextEl: `.${swiperId}-indicator .swiper-button-next`,
            prevEl: `.${swiperId}-indicator .swiper-button-prev`,
          },
          pagination: {
            el: `.${swiperId}-pagination`,
            type: 'fraction',
          },
        };
        if (autoplay) {
          swiperConfig.autoplay = {
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          };
        }
        swiperInstanceRef.current = new window.Swiper(swiperRef.current, swiperConfig);
      }
    };
    if (!window.Swiper) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.onload = initSwiper;
      document.head.appendChild(script);
    } else {
      initSwiper();
    }
    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, [swiperId, autoplay, autoplayDelay, speed, loop, cards]);
  const handleMoreClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const handleCardClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const handlePlayClick = () => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };
  const handleStopClick = () => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.autoplay.stop();
      setIsPlaying(false);
    }
  };
  return (
    <div className={`main-sect ${className}`}>
      <div className="inner">
        <div className="main-tit-wrap">
          <h2 className="tit">{title}</h2>
          {moreLink && (
            <a 
              href={moreLink} 
              className="btn sm btn-txt ico-plus contents-btn-tl"
              onClick={(e) => {
                e.preventDefault();
                handleMoreClick(moreLink);
              }}
            >
              {moreText}
            </a>
          )}
        </div>
        <div className="service-list">
          <div className={`service-swiper-in ${swiperId}`}>
            <div className="swiper" ref={swiperRef}>
              <ul className="swiper-wrapper">
                {cards.map((card) => (
                  <li key={card.id} className="swiper-slide">
                    <a 
                      href={card.url}
                      onClick={(e) => {
                        e.preventDefault();
                        handleCardClick(card.url);
                      }}
                    >
                      <div className="d-card line">
                        <div className="in">
                          <div className="text">
                            {showBadges && card.badge && (
                              <p className="c-badge">
                                <span className="badge">{card.badge}</span>
                              </p>
                            )}
                            <p className="c-tit">{card.title}</p>
                            <p className="c-txt">{card.description}</p>
                          </div>
                          <p className="c-btn">
                            <span className="btn sm btn-txt ico-more contents-btn-tl">
                              {card.buttonText || '자세히보기'}
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`swiper-indicator ${swiperId}-indicator`}>
            <div className={`swiper-pagination ${swiperId}-pagination`}></div>
            <div className="swiper-controller">
              <button 
                type="button" 
                className="swiper-button-play"
                style={{ display: isPlaying ? 'none' : '' }}
                onClick={handlePlayClick}
              >
                <span className="sr-only">슬라이드 재생</span>
              </button>
              <button 
                type="button" 
                className="swiper-button-stop"
                style={{ display: isPlaying ? '' : 'none' }}
                onClick={handleStopClick}
              >
                <span className="sr-only">슬라이드 멈춤</span>
              </button>
            </div>
            <div className="swiper-navigation">
              <button type="button" className="swiper-button-prev">
                <span className="sr-only">이전</span>
              </button>
              <button type="button" className="swiper-button-next">
                <span className="sr-only">다음</span>
              </button>
              {moreLink && (
                <a 
                  href={moreLink} 
                  className="swiper-button-more"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMoreClick(moreLink);
                  }}
                >
                  <span className="sr-only">더보기</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ContentsListPage Component
export const ContentsListPage = ({
  breadcrumb,
  page,
  description,
  controls,
  items,
  pagination,
  currentUrl = '',
  className = ''
}: ContentsListPageProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [interactions, setInteractions] = useState<ContentsListPageInteractions | null>(null);
  const [activeSortOption, setActiveSortOption] = useState<string>(
    controls?.sortOptions.find(opt => opt.active)?.value || ''
  );
  const [currentPageSize, setCurrentPageSize] = useState<number>(
    controls?.pageSize || 10
  );
  useEffect(() => {
    const pageInteractions = initializeContentsListPageInteractions();
    setInteractions(pageInteractions);
    return () => {
      pageInteractions.cleanup();
    };
  }, []);
  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const handleDropdownItemClick = (url: string) => {
    setDropdownOpen(false);
    handleLinkClick(url);
  };
  const handleSortChange = (sortValue: string) => {
    setActiveSortOption(sortValue);
    console.log('Sort changed to:', sortValue);
  };
  const handlePageSizeChange = (size: number) => {
    setCurrentPageSize(size);
    console.log('Page size changed to:', size);
  };
  const renderListItem = (item: ListItem) => (
    <li key={item.id} className="li">
      <p className="info-top">
        {item.meta.badge && (
          <span className={`badge ${item.meta.badge.className || ''}`}>
            {item.meta.badge.text}
          </span>
        )}
        <span className="i-date">{item.meta.date}</span>
      </p>
      <div className="info-body">
        <a href={item.content.url} onClick={(e) => {
          e.preventDefault();
          handleLinkClick(item.content.url);
        }}>
          <p className="tit w-hide">
            {item.content.title}
          </p>
          <div className="in">
            <div className="text">
              <p className="tit m-hide">
                {item.content.title}
              </p>
              <p className="txt">
                {item.content.description}
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="info-btm">
        <div>
          {item.meta.url ? (
            <a href={item.meta.url} target="_blank" rel="noopener noreferrer" className="url-link">
              {item.meta.url}
            </a>
          ) : (
            <span className="url-link">
              {item.meta.views ? `조회 ${item.meta.views.toLocaleString()}` : ''}
              {item.meta.views && item.meta.attachments ? ' | ' : ''}
              {item.meta.attachments ? `첨부 ${item.meta.attachments}` : ''}
            </span>
          )}
        </div>
        <div>
          <div className="btn-area">
            <button 
              type="button" 
              className="btn sm btn-txt ico-go"
              onClick={() => handleLinkClick(item.content.url)}
            >
              바로가기
            </button>
          </div>
        </div>
      </div>
    </li>
  );
  return (
    <div id="container" className={className}>
      <div className="inner in-between">
        {/* 좌측 빈 공간 */}
        <div className="left-space" style={{ width: '29.6rem' }}></div>
        {/* 메인 콘텐츠 영역 */}
        <div className="contents">
          {/* 브레드크럼 */}
          <nav className="breadcrumb-wrap" aria-label="브레드크럼">
            <ol className="breadcrumb">
              {breadcrumb.map((crumb, index) => (
                <li key={index} className={index === 0 ? 'home' : ''}>
                  {crumb.url ? (
                    <a 
                      href={crumb.url} 
                      className="txt"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(crumb.url!);
                      }}
                    >
                      {crumb.text}
                    </a>
                  ) : (
                    <span className="txt">{crumb.text}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {/* 페이지 타이틀 영역 */}
          <div className="page-title-wrap" data-type="responsive">
            <h2 className="h-tit">{page.title}</h2>
            {page.dropdown && (
              <div className="drop-wrap h-tit-drop">
                <button 
                  type="button" 
                  className="h-tit drop-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {page.dropdown.current}
                  <span className="sr-only">열기</span>
                </button>
                <div className={`drop-menu${dropdownOpen ? ' active' : ''}`}>
                  <div className="drop-in">
                    <ul className="drop-list">
                      {page.dropdown.items.map((dropItem, index) => (
                        <li key={index}>
                          <a 
                            href={dropItem.url} 
                            className="item-link"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDropdownItemClick(dropItem.url);
                            }}
                          >
                            {dropItem.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* 페이지 설명 */}
          {description && (
            <div className="conts-desc">
              <p>{description}</p>
            </div>
          )}
          {/* 콘텐츠 리스트 */}
          <div className="conts-wrap">
            <div className="list-wrap">
              {/* 검색 정보 및 정렬 컨트롤 */}
              {controls && (
                <div className="search-list-top type2">
                  {controls.searchInfo && (
                    <div className="sch-info" role="region" aria-live="polite">
                      총 <span className="keyword">{controls.searchInfo.totalResults.toLocaleString()}</span>개
                    </div>
                  )}
                  <ul className="sch-sort">
                    {/* 페이지 크기 선택 */}
                    {controls.pageSizeOptions && (
                      <li className="li1 m-hide">
                        <strong className="sort-label">
                          <label htmlFor="search_result_count">목록 표시 개수</label>
                        </strong>
                        <select 
                          className="sort-select" 
                          id="search_result_count"
                          value={currentPageSize}
                          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                        >
                          {controls.pageSizeOptions.map(size => (
                            <option key={size} value={size}>{size}개</option>
                          ))}
                        </select>
                      </li>
                    )}
                    {/* 정렬 옵션 */}
                    <li className="li2">
                      <strong className="sort-label">
                        <label htmlFor="sort">정렬기준</label>
                      </strong>
                      <div className="w-sort-btn">
                        {controls.sortOptions.map((option, index) => (
                          <button 
                            key={option.value}
                            type="button" 
                            className={activeSortOption === option.value ? 'active' : ''}
                            onClick={() => handleSortChange(option.value)}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      <div className="m-sort-btn">
                        <button type="button" className="btn btn-txt ico-filter">
                          <span className="span">필터</span>
                          <span className="num">{controls.sortOptions.length}</span>
                        </button>
                        <select 
                          className="sort-select" 
                          id="sort"
                          value={activeSortOption}
                          onChange={(e) => handleSortChange(e.target.value)}
                        >
                          {controls.sortOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {/* 리스트 아이템들 */}
              <ul className="info-list total-search-list">
                {items.map(renderListItem)}
              </ul>
              {/* 페이지네이션 */}
              {pagination && (
                <div className="pagination-wrap">
                  <nav className="pagination" aria-label="페이지 네비게이션">
                    <a 
                      href="#" 
                      className={`page-btn prev ${!pagination.hasPrev ? 'disabled' : ''}`}
                      aria-label="이전 페이지"
                      onClick={(e) => e.preventDefault()}
                    >
                      이전
                    </a>
                    <div className="page-numbers">
                      {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                        const pageNum = Math.max(1, pagination.currentPage - 2) + i;
                        if (pageNum > pagination.totalPages) return null;
                        return (
                          <a 
                            key={pageNum}
                            href="#" 
                            className={`page-number ${pageNum === pagination.currentPage ? 'active' : ''}`}
                            aria-current={pageNum === pagination.currentPage ? 'page' : undefined}
                            onClick={(e) => e.preventDefault()}
                          >
                            {pageNum}
                          </a>
                        );
                      })}
                      {pagination.totalPages > 5 && pagination.currentPage < pagination.totalPages - 2 && (
                        <>
                          <span className="page-dots">...</span>
                          <a 
                            href="#" 
                            className="page-number"
                            onClick={(e) => e.preventDefault()}
                          >
                            {pagination.totalPages}
                          </a>
                        </>
                      )}
                    </div>
                    <a 
                      href="#" 
                      className={`page-btn next ${!pagination.hasNext ? 'disabled' : ''}`}
                      aria-label="다음 페이지"
                      onClick={(e) => e.preventDefault()}
                    >
                      다음
                    </a>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 외부 클릭 시 드롭다운 닫기 */}
      {dropdownOpen && (
        <div 
          className="dropdown-overlay"
          onClick={() => setDropdownOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 5
          }}
        />
      )}
    </div>
  );
};

// ContentsPage Component
export const ContentsPage = ({
  breadcrumb,
  page,
  content,
  className = ''
}: ContentsPageProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const handleDropdownItemClick = (url: string) => {
    setDropdownOpen(false);
    handleLinkClick(url);
  };
  return (
    <div id="container" className={className}>
      <div className="inner in-between">
        {/* 좌측 공백 영역 (ContentsListPage와 동일) */}
        <div className="left-space" style={{ width: '29.6rem' }}></div>
        {/* 메인 콘텐츠 영역 */}
        <div className="contents">
          {/* 브레드크럼 */}
          <nav className="breadcrumb-wrap" aria-label="브레드크럼">
            <ol className="breadcrumb">
              {breadcrumb.map((crumb, index) => (
                <li key={index} className={index === 0 ? 'home' : ''}>
                  {crumb.url ? (
                    <a 
                      href={crumb.url} 
                      className="txt"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(crumb.url!);
                      }}
                    >
                      {crumb.text}
                    </a>
                  ) : (
                    <span className="txt">{crumb.text}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {/* 페이지 헤더 영역 */}
          <div className="page-title-wrap" data-type="responsive">
            <h1 className="h-tit">{page.title}</h1>
            {page.dropdown && (
              <div className="krds-drop-wrap h-tit-drop">
                <button 
                  type="button" 
                  className="h-tit drop-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {page.dropdown.current}
                  <span className="sr-only">열기</span>
                </button>
                <div className={`drop-menu${dropdownOpen ? ' active' : ''}`}>
                  <div className="drop-in">
                    <ul className="drop-list">
                      {page.dropdown.items.map((dropItem, index) => (
                        <li key={index}>
                          <a 
                            href={dropItem.url} 
                            className="item-link"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDropdownItemClick(dropItem.url);
                            }}
                          >
                            {dropItem.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* 콘텐츠 본문 컨테이너 */}
          <div className="content-container">
            <div className="content-body conts-wrap" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
      {/* 외부 클릭 시 드롭다운 닫기 */}
      {dropdownOpen && (
        <div 
          className="dropdown-overlay"
          onClick={() => setDropdownOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 5
          }}
        />
      )}
    </div>
  );
};

// ContentsSearchPage Component
export const ContentsSearchPage = ({
  sidebar,
  breadcrumb,
  page,
  content,
  currentUrl = '',
  className = ''
}: ContentsPageWithSidebarProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [interactions, setInteractions] = useState<ContentsListPageInteractions | null>(null);
  useEffect(() => {
    const pageInteractions = initializeContentsListPageInteractions();
    setInteractions(pageInteractions);
    return () => {
      pageInteractions.cleanup();
    };
  }, []);
  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const handleDropdownItemClick = (url: string) => {
    setDropdownOpen(false);
    handleLinkClick(url);
  };
  return (
    <div id="container" className={className}>
      <div className="inner in-between">
        {/* 좌측 사이드바 메뉴 */}
        <ContentsSidebar
          title={sidebar.title}
          menu={sidebar.menu}
          currentUrl={currentUrl}
        />
        {/* 메인 콘텐츠 영역 */}
        <div className="contents">
          {/* 브레드크럼 */}
          <nav className="breadcrumb-wrap" aria-label="브레드크럼">
            <ol className="breadcrumb">
              {breadcrumb.map((crumb, index) => (
                <li key={index} className={index === 0 ? 'home' : ''}>
                  {crumb.url ? (
                    <a 
                      href={crumb.url} 
                      className="txt"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(crumb.url!);
                      }}
                    >
                      {crumb.text}
                    </a>
                  ) : (
                    <span className="txt">{crumb.text}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {/* 페이지 타이틀 영역 */}
          <div className="page-title-wrap" data-type="responsive">
            <h2 className="h-tit">{page.title}</h2>
            {page.dropdown && (
              <div className="drop-wrap h-tit-drop">
                <button 
                  type="button" 
                  className="h-tit drop-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {page.dropdown.current}
                  <span className="sr-only">열기</span>
                </button>
                <div className={`drop-menu${dropdownOpen ? ' active' : ''}`}>
                  <div className="drop-in">
                    <ul className="drop-list">
                      {page.dropdown.items.map((dropItem, index) => (
                        <li key={index}>
                          <a 
                            href={dropItem.url} 
                            className="item-link"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDropdownItemClick(dropItem.url);
                            }}
                          >
                            {dropItem.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* 콘텐츠 본문 */}
          <div className="conts-wrap">
            <div className="conts-wrap">
              <div className="conts-wrap">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 외부 클릭 시 드롭다운 닫기 */}
      {dropdownOpen && (
        <div 
          className="dropdown-overlay"
          onClick={() => setDropdownOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 5
          }}
        />
      )}
    </div>
  );
};

export interface ContentsSidebarProps {
  title: string;
  menu: SidebarCategory[];
  currentUrl?: string;
  className?: string;
}
// ContentsSidebar Component
export const ContentsSidebar = ({
  title,
  menu,
  currentUrl = '',
  className = ''
}: ContentsSidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [expandedDepth3, setExpandedDepth3] = useState<Set<string>>(new Set());
  const isMenuActive = (url: string): boolean => {
    if (!currentUrl) return false;
    return currentUrl.includes(url) || currentUrl === url.replace(/^\/+|\/+$/g, '');
  };
  const categoryHasActive = (category: SidebarCategory): boolean => {
    return category.items.some(item => {
      if (isMenuActive(item.url)) return true;
      if (item.subitems) {
        return item.subitems.some(subitem => isMenuActive(subitem.url));
      }
      return false;
    });
  };
  const itemHasActiveSubitem = (item: SidebarMenuItem): boolean => {
    if (!item.subitems) return false;
    return item.subitems.some(subitem => isMenuActive(subitem.url));
  };
  useEffect(() => {
    const initialExpandedCategories = new Set<number>();
    const initialExpandedDepth3 = new Set<string>();
    menu.forEach((category, index) => {
      if (category.expanded || categoryHasActive(category)) {
        initialExpandedCategories.add(index);
      }
      category.items.forEach((item, itemIndex) => {
        if (item.subitems && itemHasActiveSubitem(item)) {
          initialExpandedDepth3.add(`${index}-${itemIndex}`);
        }
      });
    });
    setExpandedCategories(prev => {
      const prevArray = Array.from(prev).sort();
      const newArray = Array.from(initialExpandedCategories).sort();
      if (JSON.stringify(prevArray) !== JSON.stringify(newArray)) {
        return initialExpandedCategories;
      }
      return prev;
    });
    setExpandedDepth3(prev => {
      const prevArray = Array.from(prev).sort();
      const newArray = Array.from(initialExpandedDepth3).sort();
      if (JSON.stringify(prevArray) !== JSON.stringify(newArray)) {
        return initialExpandedDepth3;
      }
      return prev;
    });
  }, [currentUrl]); // menu 의존성 제거하여 무한 루프 방지
  const toggleCategory = (categoryIndex: number) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryIndex)) {
        newSet.delete(categoryIndex);
      } else {
        newSet.add(categoryIndex);
      }
      return newSet;
    });
  };
  const toggleDepth3 = (key: string) => {
    setExpandedDepth3(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };
  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  return (
    <nav className={`left-menu ${className}`}>
      <div className="left-in">
        <h2 className="lnb-tit">{title}</h2>
        <ul className="acco-list lnb-list" data-action="accordion">
          {menu.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.has(categoryIndex);
            const hasActive = categoryHasActive(category);
            return (
              <li 
                key={categoryIndex} 
                className="li" 
                data-has-active={hasActive ? 'true' : 'false'}
              >
                <button 
                  type="button" 
                  className="acco-head acco-btn"
                  aria-expanded={isExpanded}
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  <h3 className="tit">{category.title}</h3>
                  <span className="sr-only">{isExpanded ? '접기' : '펼침'}</span>
                </button>
                <div 
                  className="acco-body transitions-enabled" 
                  style={{ display: isExpanded ? 'block' : 'none' }}
                >
                  <div className="acco-in">
                    <ul className="sub-ul">
                      {category.items.map((item, itemIndex) => {
                        const itemActive = isMenuActive(item.url);
                        const hasActiveSubitem = itemHasActiveSubitem(item);
                        const isActive = itemActive || hasActiveSubitem;
                        const depth3Key = `${categoryIndex}-${itemIndex}`;
                        const isDepth3Expanded = expandedDepth3.has(depth3Key);
                        return (
                          <li key={itemIndex}>
                            {item.subitems ? (
                              <div className="depth3-container">
                                <button 
                                  type="button" 
                                  className={`subm has-depth3${isActive ? ' active' : ''}`}
                                  aria-expanded={isDepth3Expanded}
                                  onClick={() => toggleDepth3(depth3Key)}
                                >
                                  <span className="subm-text">{item.title}</span>
                                  <span className="btn-ico depth3-toggle"></span>
                                </button>
                                <ul 
                                  className="depth3-ul"
                                  style={{ 
                                    display: isDepth3Expanded ? '' : 'none',
                                    maxHeight: isDepth3Expanded ? '500px' : '0',
                                    opacity: isDepth3Expanded ? '1' : '0'
                                  }}
                                >
                                  {item.subitems.map((subitem, subIndex) => {
                                    const subitemActive = isMenuActive(subitem.url);
                                    return (
                                      <li key={subIndex}>
                                        <a 
                                          href={subitem.url}
                                          className={`depth3-link${subitemActive ? ' active' : ''}`}
                                          aria-current={subitemActive ? 'page' : undefined}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(subitem.url);
                                          }}
                                        >
                                          {subitem.title}
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ) : (
                              <a 
                                href={item.url}
                                className={`subm${isActive ? ' active' : ''}`}
                                aria-current={isActive ? 'page' : undefined}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleLinkClick(item.url);
                                }}
                              >
                                {item.title}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

// FootContents Component
export const FootContents = ({
  title,
  description,
  image,
  imageAlt = '이미지',
  buttonText,
  buttonUrl,
  hasBackground = false,
  className = ''
}: FootContentsProps) => {
  const handleButtonClick = () => {
    if (buttonUrl && buttonUrl !== '#') {
      window.open(buttonUrl, '_self');
    }
  };
  return (
    <div className={`main-sect${hasBackground ? ' bg' : ''} ${className}`}>
      <div className="inner">
        <div className="d-card d-responsive">
          {image && (
            <div className="im">
              <img src={image} alt={imageAlt} />
            </div>
          )}
          <div className="in">
            <div className="text">
              <p 
                className="c-tit"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="c-txt">{description}</p>
            </div>
            {buttonText && (
              <p className="c-btn">
                {buttonUrl ? (
                  <a 
                    href={buttonUrl} 
                    className="btn sm btn-txt ico-more contents-btn-tl"
                    onClick={(e) => {
                      e.preventDefault();
                      handleButtonClick();
                    }}
                  >
                    {buttonText}
                  </a>
                ) : (
                  <button 
                    type="button" 
                    className="btn sm btn-txt ico-more contents-btn-tl"
                    onClick={handleButtonClick}
                  >
                    {buttonText}
                  </button>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    Swiper: any;
  }
}
// FullBannerCarousel Component
export const FullBannerCarousel = ({
  slides,
  className = '',
  swiperId,
  autoplayDelay = 5000,
  speed = 400,
  loop = true,
  backgroundColor = '#D8E4F2'
}: FullBannerCarouselProps) => {
  const swiperRef = useRef<any>(null);
  const swiperInstanceRef = useRef<any>(null);
  useEffect(() => {
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper && swiperRef.current) {
        if (swiperInstanceRef.current) {
          swiperInstanceRef.current.destroy(true, true);
        }
        const swiperConfig: any = {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: speed,
          loop: loop,
          navigation: {
            nextEl: `.vb-swiper.${swiperId} .swiper-button-next`,
            prevEl: `.vb-swiper.${swiperId} .swiper-button-prev`,
          },
          pagination: {
            el: `.vb-swiper.${swiperId} .swiper-pagination`,
            clickable: true,
          },
        };
        if (autoplayDelay > 0) {
          swiperConfig.autoplay = {
            delay: autoplayDelay,
            disableOnInteraction: false,
          };
        }
        swiperInstanceRef.current = new window.Swiper(swiperRef.current, swiperConfig);
      }
    };
    if (!window.Swiper) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.onload = initSwiper;
      document.head.appendChild(script);
    } else {
      initSwiper();
    }
    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, [swiperId, autoplayDelay, speed, loop, slides]);
  const handleSlideClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  return (
    <div className={`main-vban-wrap ${className}`} style={{ backgroundColor }}>
      <div className="inner">
        <div className={`vb-swiper ${swiperId}`}>
          <div className="swiper" ref={swiperRef}>
            <ul className="swiper-wrapper">
              {slides.map((slide) => (
                <li key={slide.id} className="swiper-slide">
                  <div className="in">
                    <div className="text">
                      <p 
                        className="tit"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <p 
                        className="txt"
                        dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                      />
                      <button 
                        type="button"
                        className="btn primary xlg"
                        onClick={() => handleSlideClick(slide.buttonUrl)}
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                    <div className="im">
                      <img 
                        src={slide.image} 
                        alt={slide.imageAlt}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIiBzdHJva2U9IiNkZWUyZTYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZjNzU3ZCI+8J+PliBJbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button type="button" className="swiper-button-prev">
            <span className="sr-only">이전</span>
          </button>
          <button type="button" className="swiper-button-next">
            <span className="sr-only">다음</span>
          </button>
          <div className="swiper-indicator text-center">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// GovernmentFooter Component
export const GovernmentFooter = ({
  quickLinks,
  logoInfo,
  contactInfo,
  serviceLinks,
  socialLinks,
  footerMenus,
  copyright,
  banner
}: GovernmentFooterProps) => {
  const [openQuickLink, setOpenQuickLink] = useState<string | null>(null);
  const toggleQuickLink = (title: string) => {
    setOpenQuickLink(openQuickLink === title ? null : title);
  };
  const getSocialIconClass = (platform: string) => {
    const iconMap = {
      youtube: 'youtube',
      instagram: 'instagram', 
      facebook: 'facebook',
      twitter: 'twitter',
      blog: 'blog'
    };
    return iconMap[platform as keyof typeof iconMap] || platform;
  };
  return (
    <footer id="footer">
      {/* 퀵링크 영역 */}
      <div className="foot-quick">
        <div className="inner">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              type="button"
              className="link"
              title={link.layerTitle}
              onClick={() => toggleQuickLink(link.title)}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
      <div className="inner">
        {/* 로고 영역 */}
        <div 
          className="f-logo" 
          data-logo-image={logoInfo.imageUrl}
          style={{ '--logo-image': `url('${logoInfo.imageUrl}')` } as React.CSSProperties}
        >
          <span className="logo-text">{logoInfo.text}</span>
        </div>
        {/* 콘텐츠 영역 */}
        <div className="f-cnt">
          {/* 연락처 정보 */}
          <div className="f-info">
            <p className="info-addr">{contactInfo.address}</p>
            <ul className="info-cs">
              {contactInfo.contacts.map((contact, index) => (
                <li key={index}>
                  <strong className="strong">{contact.number}</strong>
                  {contact.description && (
                    <span className="span">{contact.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* 링크 영역 */}
          <div className="f-link">
            {/* 서비스 링크 */}
            {serviceLinks.length > 0 && (
              <div className="link-go">
                {serviceLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="btn btn-txt sm ico-arr"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
            {/* 소셜 링크 */}
            {socialLinks.length > 0 && (
              <div className="link-sns">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={getSocialIconClass(social.platform)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">
                      {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* 하단 영역 */}
        <div className="f-btm">
          <div className="f-btm-text">
            {/* 푸터 메뉴 */}
            {footerMenus.length > 0 && (
              <div className="f-menu">
                {footerMenus.map((menu, index) => (
                  <a
                    key={index}
                    href={menu.url}
                    className={menu.isHighlighted ? 'point' : ''}
                  >
                    {menu.text}
                  </a>
                ))}
              </div>
            )}
            {/* 저작권 */}
            <p className="f-copy">{copyright}</p>
          </div>
          {/* 배너 */}
          {banner && (
            <div className="f-btm-ban">
              <span className="sr-only">{banner.organization}</span>
              <span className="ban-txt">{banner.description}</span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

// GovernmentHeader Component
export const GovernmentHeader = ({
  etcMenus,
  siteInfo,
  isLoggedIn,
  myGovMenu,
  menuStructure,
  submenuInteraction = 'hover'
}: GovernmentHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(isLoggedIn ? 'mGnb-myGov' : 'mGnb-anchor1');
  const [activeSubmenu, setActiveSubmenu] = useState<Record<string, string>>({});
  const [hoveredMainMenu, setHoveredMainMenu] = useState<number | null>(null);
  const [clickedMainMenu, setClickedMainMenu] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMyGovDropdownOpen, setIsMyGovDropdownOpen] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const initialActiveSubmenu: Record<string, string> = {};
    menuStructure.forEach((mainMenu, index) => {
      if (mainMenu.submenu && mainMenu.submenu.length > 0) {
        const firstInternalSubmenu = mainMenu.submenu.find(sub => sub.type === 'internal');
        if (firstInternalSubmenu) {
          initialActiveSubmenu[`menu-${index}`] = firstInternalSubmenu.id;
        }
      }
    });
    setActiveSubmenu(initialActiveSubmenu);
  }, [menuStructure]);
  useEffect(() => {
    const currentActiveMenu = submenuInteraction === 'click' ? clickedMainMenu : hoveredMainMenu;
    if (currentActiveMenu !== null) {
      const currentMenu = menuStructure[currentActiveMenu];
      if (currentMenu?.submenu && currentMenu.submenu.length > 0) {
        const firstInternalSubmenu = currentMenu.submenu.find(sub => sub.type === 'internal');
        if (firstInternalSubmenu) {
          setActiveSubmenu(prev => ({
            ...prev,
            [`menu-${currentActiveMenu}`]: firstInternalSubmenu.id
          }));
        }
      }
    }
  }, [hoveredMainMenu, clickedMainMenu, submenuInteraction, menuStructure]);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  const handleSubmenuClick = (menuIndex: number, submenuId: string) => {
    setActiveSubmenu(prev => ({
      ...prev,
      [`menu-${menuIndex}`]: submenuId
    }));
  };
  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };
  const toggleMyGovDropdown = () => {
    setIsMyGovDropdownOpen(!isMyGovDropdownOpen);
  };
  const handleMainMenuClick = (menuIndex: number, event: React.MouseEvent) => {
    if (submenuInteraction === 'click') {
      event.preventDefault();
      setClickedMainMenu(clickedMainMenu === menuIndex ? null : menuIndex);
    }
  };
  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setIsMyGovDropdownOpen(false);
    setHoveredMainMenu(null);
    setClickedMainMenu(null);
  };
  const toggleMobileSubmenu = (submenuId: string) => {
    setOpenMobileSubmenus(prev => ({
      ...prev,
      [submenuId]: !prev[submenuId]
    }));
  };
  const openTotalSearch = () => {
    console.log('통합검색 열기');
  };
  const extendSession = () => {
    console.log('세션 연장');
  };
  const logout = () => {
    console.log('로그아웃');
  };
  const activeMainMenu = submenuInteraction === 'click' ? clickedMainMenu : hoveredMainMenu;
  const isAnyMenuOpen = activeMainMenu !== null || openDropdown !== null || isMyGovDropdownOpen;
  return (
    <>
      {/* 오버레이 배경 */}
      {isAnyMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={closeAllDropdowns}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: '998',
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
      <header id="header" style={{ position: 'relative', zIndex: 999 }}>
      {/* 헤더 컨텐츠 영역 */}
      <div className="header-in">
        {/* 헤더 상단 기타메뉴 */}
        <div className="head-body">
          <div className="inner">
            <div className="head-etc">
              <ul className="etc-ul">
                {/* 상단 링크 */}
                {etcMenus.topLinks.map((link, index) => (
                  <li key={index} className="li">
                    <a 
                      href={link.url} 
                      className={`btn btn-txt ${link.icon || ''} xsm`}
                      {...(link.target && { target: link.target })}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
                {/* 드롭다운 메뉴들 */}
                {etcMenus.dropdowns.map((dropdown, index) => (
                  <li key={index} className="li">
                    <div className={`drop-wrap ${dropdown.class || ''} ${openDropdown === `dropdown-${index}` ? 'active' : ''}`}>
                      <button 
                        type="button" 
                        className="btn btn-txt ico-arr-down xsm drop-btn"
                        onClick={() => toggleDropdown(`dropdown-${index}`)}
                      >
                        {dropdown.title}
                      </button>
                      <div className={`drop-menu ${openDropdown === `dropdown-${index}` ? 'show' : ''}`}>
                        <div className="drop-in">
                          <ul className="drop-list">
                            {dropdown.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a 
                                  href={item.url}
                                  className={`item-link ${item.class || ''} ${item.icon || ''}`}
                                  {...(item.target && { target: item.target })}
                                >
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="head-in">
              <h1 className="logo">
                <a href={siteInfo.homepage_url}>
                  {siteInfo.title}
                  <img 
                    src={siteInfo.slogan_image} 
                    className="logo-slogan"
                    alt={siteInfo.slogan} 
                    style={{ paddingLeft: '30px' }}
                  />
                </a>
              </h1>
              <div className="right">
                <button 
                  type="button" 
                  className="btn-navi sch" 
                  title="통합검색 레이어"
                  onClick={openTotalSearch}
                >
                  통합검색
                </button>
                {!isLoggedIn ? (
                  <>
                    <a href="#" className="btn-navi login">로그인</a>
                    <button type="button" className="btn-navi join">회원가입</button>
                  </>
                ) : (
                  <div className={`drop-wrap my-drop ${isMyGovDropdownOpen ? 'active' : ''}`}>
                    <button 
                      type="button" 
                      className="btn-navi my drop-btn"
                      onClick={toggleMyGovDropdown}
                    >
                      나의 GOV
                    </button>
                    <div className={`drop-menu ${isMyGovDropdownOpen ? 'show' : ''}`}>
                      <div className="drop-in">
                        <div className="drop-top-info">
                          <p className="my-name">{myGovMenu?.user_name}님</p>
                          <dl className="my-time">
                            <dt>로그아웃까지 남은 시간</dt>
                            <dd>
                              <span className="time">12:00</span>
                              <button type="button" className="btn sm btn-txt" onClick={extendSession}>
                                시간 연장
                              </button>
                            </dd>
                          </dl>
                        </div>
                        <ul className="drop-list">
                          {myGovMenu?.items.map((item, index) => (
                            <li key={index}>
                              <a href={item.url} className="item-link">{item.text}</a>
                            </li>
                          ))}
                        </ul>
                        <div className="drop-btm-btn">
                          <button 
                            type="button" 
                            className="btn sm btn-txt ico-log ico-before"
                            onClick={logout}
                          >
                            로그아웃
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <button 
                  type="button" 
                  className="btn-navi all" 
                  id="m-gnb-open"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  전체메뉴
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* //헤더 상단 기타메뉴 */}
        {/* 웹 : 메뉴 영역 */}
        <nav className="head-gnb">
          <div className="inner">
            <ul className="gnb">
              {menuStructure.map((mainMenu, index) => (
                <li 
                  key={index} 
                  className="li"
                  {...(submenuInteraction === 'hover' && {
                    onMouseEnter: () => setHoveredMainMenu(index),
                    onMouseLeave: () => setHoveredMainMenu(null)
                  })}
                >
                  <a 
                    href={mainMenu.url} 
                    className="mn"
                    onClick={(e) => handleMainMenuClick(index, e)}
                  >
                    {mainMenu.title}
                  </a>
                  {mainMenu.submenu && mainMenu.submenu.length > 0 && (
                    <div className={`w-gnb-wrap ${activeMainMenu === index ? 'is-open' : ''}`}>
                      <div className="inner">
                        <div className="w-gnb-menu">
                          <div className="menu-wrap">
                            <ul className="ul">
                              {mainMenu.submenu.map((subMenu, subIndex) => (
                                <li key={subIndex}>
                                  {subMenu.type === 'external' ? (
                                    <a href={subMenu.url} className="sm ico-go" target="_blank" rel="noopener noreferrer">
                                      {subMenu.title}
                                    </a>
                                  ) : (
                                    <button 
                                      type="button" 
                                      className={`sm ${activeSubmenu[`menu-${index}`] === subMenu.id ? 'active' : ''}`}
                                      data-id={subMenu.id}
                                      onClick={() => handleSubmenuClick(index, subMenu.id)}
                                    >
                                      {subMenu.title}
                                    </button>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="submenu-wrap">
                            {mainMenu.submenu.map((subMenu) => {
                              if (subMenu.type === 'internal' && subMenu.items && subMenu.items.length > 0) {
                                return (
                                  <div 
                                    key={subMenu.id}
                                    className={`submenu-in ${subMenu.items.length > 6 ? 'between' : ''}`}
                                    id={subMenu.id}
                                    style={{
                                      display: (activeMainMenu === index && activeSubmenu[`menu-${index}`] === subMenu.id) ? 'block' : 'none'
                                    }}
                                  >
                                    <div className="sub-in">
                                      <h3 className="sub-tit">
                                        <a href={subMenu.url} className="btn btn-txt ico-arr lg">
                                          {subMenu.title}
                                        </a>
                                      </h3>
                                      <ul className="sub-ul">
                                        {subMenu.items.map((item, itemIndex) => (
                                          <li key={itemIndex}>
                                            <a href={item.url}>{item.title}</a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    {subMenu.banner && (
                                      <div className="sub-ban">
                                        <span className={`badge ${subMenu.banner.badge_class}`}>
                                          {subMenu.banner.badge}
                                        </span>
                                        <a href={subMenu.banner.url} className="btn btn-txt ico-arr sm">
                                          {subMenu.banner.text}
                                        </a>
                                      </div>
                                    )}
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* //웹 : 메뉴 영역 */}
      </div>
      {/* //헤더 컨텐츠 영역 */}
      {/* 모바일 : 전체메뉴 */}
      <div 
        id="m-gnb" 
        className={`m-gnb-wrap ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div className="m-gnb-in">
          <div className="m-gnb-head">
            <div className="m-gnb-top-etc">
              <ul className="etc-ul">
                <li><button type="button" className="btn btn-txt xsm">화면크기</button></li>
                <li><button type="button" className="btn btn-txt xsm">Language</button></li>
              </ul>
              <button 
                type="button" 
                className="btn btn-ico ico-close"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">전체메뉴 닫기</span>
              </button>
            </div>
            {!isLoggedIn ? (
              <div className="m-gnb-login">
                <a href="#" className="btn-navi navi-row login">로그인을 해주세요.</a>
              </div>
            ) : (
              <>
                <div className="m-gnb-login">
                  <a href="#" className="btn-navi navi-row login">{myGovMenu?.user_name}님</a>
                </div>
                <div className="etc-menu">
                  {myGovMenu?.items.map((item, index) => (
                    <a key={index} href={item.url} className="link">{item.text}</a>
                  ))}
                </div>
              </>
            )}
            <div className="etc-sch">
              <div className="sch-input">
                <input 
                  type="text" 
                  className="form-control md" 
                  placeholder="찾고자 하는 메뉴명을 입력해 주세요"
                />
                <button type="button" className="btn btn-ico ico-sch">
                  <span className="sr-only">검색</span>
                </button>
              </div>
            </div>
          </div>
          <div className="m-gnb-body">
            <div className="m-gnb-menu">
              <div className="menu-wrap">
                <ul className="ul">
                  {isLoggedIn && (
                    <li>
                      <a 
                        href="#mGnb-myGov" 
                        className={`mn ${activeMobileMenu === 'mGnb-myGov' ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveMobileMenu('mGnb-myGov');
                        }}
                      >
                        MyGOV
                      </a>
                    </li>
                  )}
                  {menuStructure.map((mainMenu, index) => (
                    <li key={index}>
                      <a 
                        href={`#mGnb-anchor${index + 1}`}
                        className={`mn ${activeMobileMenu === `mGnb-anchor${index + 1}` ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveMobileMenu(`mGnb-anchor${index + 1}`);
                        }}
                      >
                        {mainMenu.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="submenu-wrap">
                {/* MyGOV 섹션 - 로그인 상태일 때만 표시 */}
                {isLoggedIn && (
                  <div 
                    className="dl" 
                    id="mGnb-myGov"
                    style={{ display: activeMobileMenu === 'mGnb-myGov' ? 'block' : 'none' }}
                  >
                    <dl>
                      <dt className="dt">MyGOV</dt>
                      {myGovMenu?.items.map((item, index) => (
                        <dd key={index} className="dd">
                          <a href={item.url} className="sm">{item.text}</a>
                        </dd>
                      ))}
                    </dl>
                  </div>
                )}
                {/* 메인 메뉴 섹션들 */}
                {menuStructure.map((mainMenu, index) => (
                  <div 
                    key={index}
                    className="dl" 
                    id={`mGnb-anchor${index + 1}`}
                    style={{ display: activeMobileMenu === `mGnb-anchor${index + 1}` ? 'block' : 'none' }}
                  >
                    <dl>
                      <dt className="dt">{mainMenu.title}</dt>
                      {mainMenu.submenu.map((subMenu, subIndex) => {
                        if (subMenu.type === 'internal') {
                          return (
                            <dd key={subIndex} className="dd">
                              {subMenu.items && subMenu.items.length > 0 ? (
                                <>
                                  {/* 3depth가 있는 경우 토글 버튼으로 */}
                                  <button 
                                    type="button" 
                                    className={`sm mobile-toggle-btn ${openMobileSubmenus[`mobile-sub-${index}-${subIndex}`] ? 'active' : ''}`}
                                    onClick={() => toggleMobileSubmenu(`mobile-sub-${index}-${subIndex}`)}
                                  >
                                    <span className="toggle-text">{subMenu.title}</span>
                                    <span className="toggle-icon"></span>
                                  </button>
                                  <ul 
                                    className="sub-ul mobile-sub-menu" 
                                    id={`mobile-sub-${index}-${subIndex}`} 
                                    style={{ display: openMobileSubmenus[`mobile-sub-${index}-${subIndex}`] ? 'block' : 'none' }}
                                  >
                                    {subMenu.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <a href={item.url} className="subm">{item.title}</a>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              ) : (
                                <a href={subMenu.url} className="sm">{subMenu.title}</a>
                              )}
                            </dd>
                          );
                        } else if (subMenu.type === 'external') {
                          return (
                            <dd key={subIndex} className="dd">
                              <a href={subMenu.url} className="sm ico-go" target="_blank" rel="noopener noreferrer">
                                {subMenu.title}
                              </a>
                            </dd>
                          );
                        }
                        return null;
                      })}
                    </dl>
                  </div>
                ))}
              </div>
            </div>
            <div className="m-gnb-body-btm">
              <a href="#" className="btn btn-txt sm">인증 센터</a>
              <a href="#" className="btn btn-txt sm ico-go">어린이 정부포털</a>
            </div>
          </div>
        </div>
      </div>
      {/* //모바일 : 전체메뉴 */}
      </header>
    </>
  );
};

declare global {
  interface Window {
    Swiper: any;
  }
}
// IconFeaturesCarousel Component
export const IconFeaturesCarousel = ({
  title,
  items,
  swiperId,
  autoplay = false,
  autoplayDelay = 3000,
  speed = 400,
  className = ''
}: IconFeaturesCarouselProps) => {
  const swiperRef = useRef<any>(null);
  const swiperInstanceRef = useRef<any>(null);
  useEffect(() => {
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper && swiperRef.current) {
        if (swiperInstanceRef.current) {
          swiperInstanceRef.current.destroy(true, true);
        }
        const swiperConfig: any = {
          slidesPerView: 1,
          spaceBetween: 16,
          speed: speed,
          loop: false,
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          },
          navigation: {
            nextEl: `.${swiperId} .swiper-button-next`,
            prevEl: `.${swiperId} .swiper-button-prev`,
          },
        };
        if (autoplay) {
          swiperConfig.autoplay = {
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          };
        }
        swiperInstanceRef.current = new window.Swiper(swiperRef.current, swiperConfig);
      }
    };
    if (!window.Swiper) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.onload = initSwiper;
      document.head.appendChild(script);
    } else {
      initSwiper();
    }
    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, [swiperId, autoplay, autoplayDelay, speed, items]);
  const handleItemClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  return (
    <div className={`main-sect ${className}`}>
      <div className="inner">
        <div className="main-tit-wrap">
          <h2 className="tit">{title}</h2>
        </div>
        <div className="menu-list type2">
          <div className={`menu-swiper-in ${swiperId}`}>
            <div className="swiper" ref={swiperRef}>
              <ul className="swiper-wrapper">
                {items.map((item) => (
                  <li key={item.id} className="swiper-slide">
                    <a 
                      href={item.url} 
                      className="menu-item d-row"
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item.url);
                      }}
                    >
                      {item.iconSvg ? (
                        <span 
                          className="ico" 
                          style={{ display: 'flex', alignItems: 'center' }}
                          dangerouslySetInnerHTML={{ __html: item.iconSvg }}
                        />
                      ) : (
                        <span className={`ico ${item.iconClass || ''}`}></span>
                      )}
                      <div className="text">
                        <p className="tit">{item.title}</p>
                        <p className="txt">{item.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" className="swiper-button-prev">
              <span className="sr-only">이전</span>
            </button>
            <button type="button" className="swiper-button-next">
              <span className="sr-only">다음</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// StepProcessPage Component
export const StepProcessPage = ({
  type,
  title,
  breadcrumb,
  steps = [],
  currentStep = 1,
  content = '',
  stepContents = {},
  buttons = {},
  success,
  className = ''
}: StepProcessPageProps) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const handleFieldChange = (name: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCheckboxGroupChange = (name: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentValues = prev[name] || [];
      if (checked) {
        return {
          ...prev,
          [name]: [...currentValues, value]
        };
      } else {
        return {
          ...prev,
          [name]: currentValues.filter((v: string) => v !== value)
        };
      }
    });
  };
  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const defaultButtons = {
    prev: { text: '이전으로', show: false },
    save: { text: '임시저장', show: false },
    next: { text: '다음으로', show: false },
    cancel: { text: '취소하기', show: false },
    submit: { text: '신청하기', show: false }
  };
  const finalButtons = { ...defaultButtons, ...buttons };
  const updateFileList = (input: HTMLInputElement) => {
    const listElement = document.getElementById(input.id + '_list');
    if (!listElement) return;
    listElement.innerHTML = '';
    if (input.files && input.files.length > 0) {
      const fileList = document.createElement('ul');
      fileList.style.listStyle = 'none';
      fileList.style.padding = '0';
      fileList.style.marginTop = '10px';
      for (let i = 0; i < input.files.length; i++) {
        const li = document.createElement('li');
        li.style.padding = '5px 0';
        li.style.color = '#666';
        li.innerHTML = '📎 ' + input.files[i].name + ' (' + formatFileSize(input.files[i].size) + ')';
        fileList.appendChild(li);
      }
      listElement.appendChild(fileList);
    }
  };
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };
  const renderFormField = (field: FormField, index: number) => {
    const fieldId = field.name || `field-${index}`;
    switch (field.type) {
      case 'text':
      case 'tel':
      case 'email':
      case 'number':
      case 'date':
      case 'time':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <input
                type={field.type}
                className="form-control"
                name={field.name}
                id={fieldId}
                value={formData[field.name!] || field.value || ''}
                placeholder={field.placeholder}
                required={field.required}
                readOnly={field.readonly}
                title={field.label}
                onChange={(e) => handleFieldChange(field.name!, e.target.value)}
              />
              {field.help && (
                <small className="form-text text-muted">{field.help}</small>
              )}
            </div>
          </div>
        );
      case 'select':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <select
                className="form-control"
                name={field.name}
                id={fieldId}
                value={formData[field.name!] || field.value || ''}
                required={field.required}
                onChange={(e) => handleFieldChange(field.name!, e.target.value)}
              >
                {field.placeholder && (
                  <option value="">{field.placeholder}</option>
                )}
                {(field.options as SelectOption[])?.map((option, optIndex) => (
                  <option
                    key={optIndex}
                    value={option.value}
                    selected={option.selected}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {field.help && (
                <small className="form-text text-muted">{field.help}</small>
              )}
            </div>
          </div>
        );
      case 'textarea':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <textarea
                className="form-control"
                name={field.name}
                id={fieldId}
                rows={field.rows || 4}
                placeholder={field.placeholder}
                required={field.required}
                readOnly={field.readonly}
                value={formData[field.name!] || field.value || ''}
                onChange={(e) => handleFieldChange(field.name!, e.target.value)}
              />
              {field.help && (
                <small className="form-text text-muted">{field.help}</small>
              )}
            </div>
          </div>
        );
      case 'file':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <div className="file-upload">
                <p className="txt">첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</p>
                <button
                  type="button"
                  className="btn primary ico-before ico-upload md"
                  onClick={() => {
                    const input = document.getElementById(fieldId) as HTMLInputElement;
                    input?.click();
                  }}
                >
                  파일선택
                </button>
                <input
                  type="file"
                  id={fieldId}
                  style={{ display: 'none' }}
                  name={field.name}
                  accept={field.accept}
                  multiple={field.multiple}
                  required={field.required}
                  onChange={(e) => updateFileList(e.target)}
                />
              </div>
              {field.help && (
                <small className="form-text text-muted">{field.help}</small>
              )}
              <div id={`${fieldId}_list`} className="file-list mt-2"></div>
            </div>
          </div>
        );
      case 'checkbox_single':
        return (
          <div className="form-group" key={index}>
            <div className="form-conts">
              <div className="form-check lg">
                <input
                  type="checkbox"
                  name={field.name}
                  id={fieldId}
                  checked={formData[field.name!] !== undefined ? formData[field.name!] : field.checked}
                  required={field.required}
                  onChange={(e) => handleFieldChange(field.name!, e.target.checked)}
                />
                <label htmlFor={fieldId}>
                  {field.label}
                  {field.required && <span style={{ color: '#dc3545' }}>*</span>}
                </label>
              </div>
            </div>
          </div>
        );
      case 'checkbox_group':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <div className="row chk-area chk-column">
                {(field.options as CheckboxOption[])?.map((option, optIndex) => (
                  <div key={optIndex} className="form-check lg">
                    <input
                      type="checkbox"
                      name={`${field.name}[]`}
                      id={`${fieldId}-${optIndex + 1}`}
                      value={option.value}
                      checked={(formData[field.name!] || []).includes(option.value)}
                      onChange={(e) => handleCheckboxGroupChange(field.name!, option.value, e.target.checked)}
                    />
                    <label htmlFor={`${fieldId}-${optIndex + 1}`}>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'radio_group':
        return (
          <div key={index}>
            {field.subsection_title && (
              <h5 className="box-tit2">{field.subsection_title}</h5>
            )}
            <div className="form-group">
              {!field.subsection_title && field.label && (
                <div className="form-tit">
                  {field.label}
                  {field.required && <span style={{ color: '#dc3545' }}>*</span>}
                </div>
              )}
              <div className="form-conts">
                <div className="row chk-area chk-column">
                  {(field.options as RadioOption[])?.map((option, optIndex) => (
                    <div key={optIndex} className="form-check lg">
                      <input
                        type="radio"
                        name={field.name || 'radio_field'}
                        id={`${fieldId}-${optIndex + 1}`}
                        value={option.value}
                        checked={formData[field.name!] === option.value || (!formData[field.name!] && option.checked)}
                        onChange={(e) => handleFieldChange(field.name!, e.target.value)}
                      />
                      <label htmlFor={`${fieldId}-${optIndex + 1}`}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'terms_box':
        return (
          <div key={index} className="box-sec">
            <div className="terms-content-box">
              {field.title && <h5>{field.title}</h5>}
              <div>
                {field.sections?.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    {section.heading && (
                      <p><strong>{section.heading}</strong></p>
                    )}
                    {section.paragraphs?.map((paragraph, pIndex) => (
                      <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                    {section.list && (
                      <ul>
                        {section.list.map((item, listIndex) => (
                          <li key={listIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'custom_html':
        return (
          <div key={index} className="box-sec">
            <div dangerouslySetInnerHTML={{ __html: field.html || '' }} />
          </div>
        );
      case 'section_title':
        return null;
      default:
        return null;
    }
  };
  const renderFormSection = (section: FormSection, sectionIndex: number) => {
    const checkboxCount = section.fields.filter(field => field.type === 'checkbox_single').length;
    const isCheckboxGroup = checkboxCount >= 2;
    return (
      <div key={sectionIndex} className="txt-box bg-white">
        <h4 className="box-tit1">{section.section_title}</h4>
        <div className={`box-cnt${isCheckboxGroup ? ' checkbox-group-compact' : ''}`}>
          <div className="box-sec">
            {isCheckboxGroup ? (
              <>
                {/* 체크박스 외 필드들 먼저 렌더링 */}
                {section.fields
                  .filter(field => field.type !== 'checkbox_single')
                  .map((field, fieldIndex) => renderFormField(field, fieldIndex))}
                {/* 체크박스들을 하나의 그룹으로 렌더링 */}
                {checkboxCount > 0 && (
                  <div style={{ paddingTop: '15px' }}>
                    {section.fields
                      .filter(field => field.type === 'checkbox_single')
                      .map((field, fieldIndex, checkboxFields) => (
                        <div
                          key={fieldIndex}
                          className="form-check lg"
                          style={{ marginBottom: fieldIndex === checkboxFields.length - 1 ? '0' : '10px' }}
                        >
                          <input
                            type="checkbox"
                            name={field.name}
                            id={field.name}
                            checked={formData[field.name!] !== undefined ? formData[field.name!] : field.checked}
                            required={field.required}
                            onChange={(e) => handleFieldChange(field.name!, e.target.checked)}
                          />
                          <label htmlFor={field.name}>
                            {field.label}
                            {field.required && <span style={{ color: '#dc3545' }}>*</span>}
                          </label>
                        </div>
                      ))}
                  </div>
                )}
              </>
            ) : (
              section.fields.map((field, fieldIndex) => renderFormField(field, fieldIndex))
            )}
          </div>
        </div>
      </div>
    );
  };
  const renderStepIndicator = () => {
    if (steps.length === 0) return null;
    const stepItems = steps.map((step, index) => {
      const stepNumber = index + 1;
      const isActive = stepNumber === currentStep;
      const isDone = stepNumber < currentStep;
      return (
        <li key={step.num} className={`${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}>
          <span>
            {isActive && <em className="sr-only">현재단계</em>}
            <i className="step">{step.num}단계</i>
            <span className="step-tit">{step.title}</span>
          </span>
        </li>
      );
    });
    return (
      <ol className="step-wrap">
        {stepItems}
      </ol>
    );
  };
  const renderSuccessPage = () => {
    if (!success) return null;
    return (
      <div className="inner">
        {/* 완료 메시지 */}
        <div className="comp-msg-wrap">
          <div 
            dangerouslySetInnerHTML={{ 
              __html: success.message.replace('완료', '<span class="point">완료</span>') 
            }} 
          />
        </div>
        {/* 신청 정보 */}
        {(success.applicant || success.info) && (
          <ul className="comp-info-box">
            {success.applicant && (
              <li>
                <div className="key">신청인</div>
                <div className="value">{success.applicant}</div>
              </li>
            )}
            {success.info && (
              <li>
                <div className="key">신청정보</div>
                <div className="value">
                  {success.info.map((info, index) => (
                    <p key={index} className="p">{info}</p>
                  ))}
                </div>
              </li>
            )}
          </ul>
        )}
        {/* 버튼 */}
        <div className="comp-btn-wrap">
          <button type="button" className="btn xlg tertiary">다른 민원신청하기</button>
          <button type="button" className="btn xlg">신청 내역/결과보기</button>
        </div>
        {/* 기타 링크 */}
        {success.relatedServices && success.relatedServices.length > 0 && (
          <dl className="comp-link-box">
            <dt>
              <p className="tit">이런 서비스는 어떠세요?</p>
              <p className="txt">{success.relatedTitle || '함께 이용하면 좋은 민원입니다.'}</p>
            </dt>
            <dd>
              {success.relatedServices.map((service, index) => (
                <a
                  key={index}
                  href={service.url}
                  className={`btn sm btn-txt ${index === 0 ? 'ico-go' : 'ico-arr'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(service.url);
                  }}
                >
                  {service.text}
                </a>
              ))}
              <a href="#" className="btn sm btn-txt ico-arr">모든 민원 서비스 목록 보기</a>
            </dd>
          </dl>
        )}
      </div>
    );
  };
  const renderRegularPage = () => {
    return (
      <div className={`inner narrow ${type !== 'nostep' ? 'page-step' : ''}`}>
        {/* 페이지 타이틀 영역 */}
        <div className={`page-title-wrap ${type === 'single' ? 'between' : ''}`}>
          <h2 className="h-tit">{title}</h2>
          {/* 싱글 스텝 (타이틀 우측) */}
          {type === 'single' && renderStepIndicator()}
        </div>
        {/* 멀티 스텝 (타이틀 하단) */}
        {type === 'multi' && renderStepIndicator()}
        {/* 컨텐츠 영역 */}
        <div className={`conts-area ${type !== 'nostep' ? 'step-type' : ''}`}>
          <div className="conts-wrap">
            {/* 스텝 제목 */}
            {type !== 'nostep' && steps[currentStep - 1] && (
              <h3 className="sec-tit">
                <span className="step-now">
                  <strong className="active">{currentStep}단계</strong> / {steps.length}단계
                </span>
                {steps[currentStep - 1].title}
              </h3>
            )}
            {/* 사용자 정의 콘텐츠 */}
            {stepContents[currentStep] ? (
              <div className="dynamic-form">
                {/* 전체 항목 필수 입력 메시지 */}
                <p className="fieldset-msg">전체 항목 필수 입력 사항입니다.</p>
                {/* 동적 폼 필드 렌더링 */}
                {stepContents[currentStep].fields && (
                  <>
                    {Array.isArray(stepContents[currentStep].fields) && 
                     stepContents[currentStep].fields!.length > 0 && 
                     'section_title' in stepContents[currentStep].fields![0] ? (
                      (stepContents[currentStep].fields as FormSection[]).map((section, index) => 
                        renderFormSection(section, index)
                      )
                    ) : (
                      <div className="txt-box bg-white">
                        <h4 className="box-tit1">정보 입력</h4>
                        <div className="box-cnt">
                          <div className="box-sec">
                            {(stepContents[currentStep].fields as FormField[]).map((field, index) => 
                              renderFormField(field, index)
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
                {/* HTML 콘텐츠 */}
                {stepContents[currentStep].html && (
                  <div dangerouslySetInnerHTML={{ __html: stepContents[currentStep].html! }} />
                )}
              </div>
            ) : content ? (
              <div className="content-body" dangerouslySetInnerHTML={{ __html: content }} />
            ) : null}
          </div>
        </div>
        {/* 페이지 버튼 영역 */}
        {(finalButtons.cancel?.show || finalButtons.prev?.show || 
          finalButtons.save?.show || finalButtons.next?.show || finalButtons.submit?.show) && (
          <div className="page-btn-wrap both">
            {/* 왼쪽 버튼 영역 */}
            {(finalButtons.cancel?.show || finalButtons.prev?.show) && (
              <>
                {finalButtons.cancel?.show && (
                  <button type="button" className="btn xlg tertiary btn-cancel">
                    {finalButtons.cancel.text}
                  </button>
                )}
                {!finalButtons.cancel?.show && finalButtons.prev?.show && (
                  <button type="button" className="btn xlg tertiary btn-prev">
                    {finalButtons.prev.text}
                  </button>
                )}
              </>
            )}
            {/* 오른쪽 버튼 영역 */}
            {(finalButtons.save?.show || finalButtons.next?.show || finalButtons.submit?.show) && (
              <div className="btn-wrap">
                {finalButtons.save?.show && (
                  <button type="button" className="btn xlg tertiary btn-save">
                    {finalButtons.save.text}
                  </button>
                )}
                {finalButtons.next?.show && (
                  <button type="button" className="btn xlg btn-next">
                    {finalButtons.next.text}
                  </button>
                )}
                {!finalButtons.next?.show && finalButtons.submit?.show && (
                  <button type="button" className="btn xlg btn-submit">
                    {finalButtons.submit.text}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  return (
    <div id="container" className={className}>
      {/* breadcrumb */}
      {breadcrumb.length > 0 && (
        <nav className="breadcrumb-wrap" aria-label="브레드크럼">
          <ol className="breadcrumb">
            {breadcrumb.map((crumb, index) => (
              <li key={index} className={index === 0 ? 'home' : ''}>
                {crumb.url ? (
                  <a 
                    href={crumb.url} 
                    className="txt"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(crumb.url!);
                    }}
                  >
                    {crumb.text}
                  </a>
                ) : (
                  <span className="txt">{crumb.text}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {/* 페이지 콘텐츠 */}
      {type === 'success' ? renderSuccessPage() : renderRegularPage()}
    </div>
  );
};

// TabContents Component
export const TabContents = ({
  title,
  tabs,
  moreLink,
  moreText = '더보기',
  className = ''
}: TabContentsProps) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    tabs.find(tab => tab.active)?.id || tabs[0]?.id || ''
  );
  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };
  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };
  const handleMoreLinkClick = () => {
    if (moreLink && moreLink !== '#') {
      window.open(moreLink, '_self');
    }
  };
  const renderTabItem = (item: TabItem) => (
    <li key={item.id}>
      <a 
        href={item.url}
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(item.url);
        }}
      >
        <div className="d-card line d-row">
          {item.image && (
            <div className="im">
              <img 
                src={item.image} 
                alt={item.imageAlt || '썸네일 이미지'}
              />
            </div>
          )}
          <div className="in">
            <div className="text">
              <p className="c-tit">{item.title}</p>
              <p className="c-txt">{item.description}</p>
            </div>
            <p className="c-btn">
              <span className="btn sm btn-txt ico-more contents-btn-card">{item.buttonText}</span>
            </p>
          </div>
        </div>
      </a>
    </li>
  );
  const renderTabPanel = (tab: Tab) => {
    const isActive = tab.id === activeTabId;
    return (
      <section 
        key={tab.panelId}
        id={tab.panelId}
        role="tabpanel"
        aria-labelledby={tab.id}
        className={`tab-conts ${isActive ? 'active' : ''}`}
      >
        <h3 className="sr-only">{tab.label}</h3>
        {tab.items && tab.items.length > 0 ? (
          <ul className="news-list">
            {tab.items.map(renderTabItem)}
          </ul>
        ) : (
          <p>{tab.emptyMessage || `탭 ${tabs.findIndex(t => t.id === tab.id) + 1} 내용`}</p>
        )}
      </section>
    );
  };
  return (
    <div className={`main-sect ${className}`}>
      <div className="inner">
        <div className="main-tit-wrap">
          <h2 className="tit">{title}</h2>
        </div>
        {/* 탭 */}
        <div className="tab-area layer">
          {/* tab list */}
          <div className="tab line">
            <ul role="tablist">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <li 
                    key={tab.id}
                    id={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={tab.panelId}
                    className={isActive ? 'active' : ''}
                  >
                    <button 
                      type="button" 
                      className="btn-tab"
                      onClick={() => handleTabClick(tab.id)}
                    >
                      {tab.label}
                      {isActive && (
                        <i className="sr-only created">선택됨</i>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            {moreLink && (
              <a 
                href={moreLink} 
                className="btn sm btn-txt ico-plus contents-btn-tl"
                onClick={(e) => {
                  e.preventDefault();
                  handleMoreLinkClick();
                }}
              >
                {moreText}
              </a>
            )}
          </div>
          {/* //tab list */}
          {/* tab contents */}
          <div className="tab-conts-wrap">
            {tabs.map(renderTabPanel)}
          </div>
          {/* //tab contents */}
        </div>
        {/* //탭 */}
      </div>
    </div>
  );
};
// Export all components
export default {
  ApplyPage,
  CardContents,
  ComplexFeaturesCarousel,
  ContentsCardCarousel,
  ContentsListPage,
  ContentsPage,
  ContentsSearchPage,
  ContentsSidebar,
  FootContents,
  FullBannerCarousel,
  GovernmentFooter,
  GovernmentHeader,
  IconFeaturesCarousel,
  StepProcessPage,
  TabContents
};