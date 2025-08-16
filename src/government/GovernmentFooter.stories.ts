import type { Meta, StoryObj } from '@storybook/react-webpack5';
import GovernmentFooter from './GovernmentFooter';

const meta: Meta<typeof GovernmentFooter> = {
  title: 'Government/GovernmentFooter',
  component: GovernmentFooter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 예제 데이터
const mockQuickLinks = [
  { title: '소속기관', layerTitle: '소속기관 레이어' },
  { title: '업무별 누리집', layerTitle: '업무별 누리집 레이어' },
  { title: '산하기관', layerTitle: '산하기관 레이어' },
  { title: '정부기관', layerTitle: '정부기관 레이어' },
];

const mockLogoInfo = {
  imageUrl: '/assets/head_logo.svg',
  text: '고양이관리위원회'
};

const mockContactInfo = {
  address: '(03925) 서울특별시 마포구 냥냥로 100 고양이타워 고양이관리위원회',
  contacts: [
    {
      number: '대표전화 1588-2828',
      description: '(유료, 평일 09시~18시)'
    },
    {
      number: '해외이용 +82-2-2828-1000',
      description: '(유료, 평일 09시~18시)'
    }
  ]
};

const mockServiceLinks = [
  { url: '#', text: '묘민증 발급' },
  { url: '#', text: '중성화 지원' },
  { url: '#', text: '입양 안내' },
];

const mockSocialLinks = [
  { platform: 'youtube' as const, url: 'https://youtube.com/@catmanagement' },
  { platform: 'instagram' as const, url: 'https://instagram.com/catmanagement' },
  { platform: 'facebook' as const, url: 'https://facebook.com/catmanagement' },
];

const mockFooterMenus = [
  { url: '#', text: '개인정보처리방침', isHighlighted: true },
  { url: '#', text: '이용약관' },
  { url: '#', text: '저작권정책' },
  { url: '#', text: '웹접근성' },
];

const mockBanner = {
  organization: '보건복지부',
  description: '이 누리집은 보건복지부 산하기관 누리집입니다.'
};

export const Default: Story = {
  args: {
    quickLinks: mockQuickLinks,
    logoInfo: mockLogoInfo,
    contactInfo: mockContactInfo,
    serviceLinks: mockServiceLinks,
    socialLinks: mockSocialLinks,
    footerMenus: mockFooterMenus,
    copyright: '© 2025 Organization. All rights reserved.',
    banner: mockBanner,
  },
};

export const WithoutBanner: Story = {
  args: {
    quickLinks: mockQuickLinks,
    logoInfo: mockLogoInfo,
    contactInfo: mockContactInfo,
    serviceLinks: mockServiceLinks,
    socialLinks: mockSocialLinks,
    footerMenus: mockFooterMenus,
    copyright: '© 2025 Organization. All rights reserved.',
  },
};

export const MinimalFooter: Story = {
  args: {
    quickLinks: [],
    logoInfo: mockLogoInfo,
    contactInfo: {
      address: '(03925) 서울특별시 마포구 냥냥로 100 고양이타워 고양이관리위원회',
      contacts: [
        {
          number: '대표전화 1588-2828',
          description: '(유료, 평일 09시~18시)'
        }
      ]
    },
    serviceLinks: [],
    socialLinks: [],
    footerMenus: [
      { url: '#', text: '개인정보처리방침', isHighlighted: true },
      { url: '#', text: '이용약관' },
    ],
    copyright: '© 2025 Organization. All rights reserved.',
  },
};