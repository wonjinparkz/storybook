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