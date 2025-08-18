import type { Meta, StoryObj } from '@storybook/react-webpack5';
import IconFeaturesCarousel from './IconFeaturesCarousel';

const meta: Meta<typeof IconFeaturesCarousel> = {
  title: 'Government/D. Carousel/Icon Features Carousel',
  component: IconFeaturesCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '정부 웹사이트용 아이콘 기능 캐러셀 컴포넌트입니다. 반응형 설계로 화면 크기에 따라 슬라이드 개수가 자동 조정됩니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '캐러셀 제목',
      control: { type: 'text' }
    },
    items: {
      description: '캐러셀에 표시할 아이템 데이터 배열',
      control: { type: 'object' }
    },
    swiperId: {
      description: 'Swiper 인스턴스 식별을 위한 고유 ID',
      control: { type: 'text' }
    },
    autoplay: {
      description: '자동 슬라이드 활성화',
      control: { type: 'boolean' }
    },
    autoplayDelay: {
      description: '자동 슬라이드 전환 시간 (밀리초)',
      control: { type: 'number', min: 1000, max: 10000, step: 500 }
    },
    speed: {
      description: '슬라이드 전환 속도 (밀리초)',
      control: { type: 'number', min: 200, max: 1000, step: 100 }
    },
    className: {
      description: '추가 CSS 클래스명',
      control: { type: 'text' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// 예제 아이템 데이터
const mockItems = [
  {
    id: 'item-1',
    title: '묘민증 발급',
    description: '온라인으로 간편하게 묘민증을 발급받으세요',
    url: '/cat-id-issue',
    iconClass: 'ico-id-card'
  },
  {
    id: 'item-2',
    title: '중성화 지원',
    description: '고양이 중성화 수술비 지원 신청',
    url: '/neutering-support',
    iconSvg: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#0066CC" stroke-width="2" fill="#E8F4F8"/><path d="M18 24l6 6 12-12" stroke="#0066CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    id: 'item-3',
    title: '입양 안내',
    description: '사랑이 필요한 고양이들을 만나보세요',
    url: '/adoption-guide',
    iconClass: 'ico-heart'
  },
  {
    id: 'item-4',
    title: '건강검진',
    description: '정기 건강검진 예약 및 상담',
    url: '/health-checkup',
    iconSvg: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="12" width="32" height="28" rx="4" stroke="#0066CC" stroke-width="2" fill="#F0F8FF"/><path d="M24 18v12M18 24h12" stroke="#0066CC" stroke-width="2" stroke-linecap="round"/></svg>'
  },
  {
    id: 'item-5',
    title: '실종신고',
    description: '잃어버린 고양이를 신고하고 찾아보세요',
    url: '/missing-report',
    iconClass: 'ico-search'
  },
  {
    id: 'item-6',
    title: '온라인 상담',
    description: '전문가와 1:1 온라인 상담 서비스',
    url: '/online-consultation',
    iconSvg: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="18" r="8" stroke="#0066CC" stroke-width="2" fill="#E8F4F8"/><path d="M8 40c0-8 7-12 16-12s16 4 16 12" stroke="#0066CC" stroke-width="2" stroke-linecap="round"/></svg>'
  }
];

export const Default: Story = {
  args: {
    title: '주요 서비스',
    items: mockItems,
    swiperId: 'icon-features-swiper',
    autoplay: false,
    autoplayDelay: 3000,
    speed: 400
  },
};

export const WithAutoplay: Story = {
  args: {
    title: '인기 서비스',
    items: mockItems.slice(0, 4),
    swiperId: 'autoplay-features-swiper',
    autoplay: true,
    autoplayDelay: 4000,
    speed: 600
  },
};

export const FastTransition: Story = {
  args: {
    title: '빠른 서비스',
    items: mockItems,
    swiperId: 'fast-features-swiper',
    autoplay: true,
    autoplayDelay: 2000,
    speed: 200,
    className: 'fast-carousel'
  },
};

export const LimitedItems: Story = {
  args: {
    title: '필수 서비스',
    items: mockItems.slice(0, 3),
    swiperId: 'limited-features-swiper',
    autoplay: false,
    speed: 400
  },
};

export const IconClassOnly: Story = {
  args: {
    title: 'CSS 아이콘 서비스',
    items: [
      {
        id: 'css-1',
        title: '묘민증 발급',
        description: 'CSS 클래스 아이콘 사용',
        url: '/cat-id',
        iconClass: 'ico-id-card'
      },
      {
        id: 'css-2',
        title: '입양 안내',
        description: 'CSS 클래스 아이콘 사용',
        url: '/adoption',
        iconClass: 'ico-heart'
      },
      {
        id: 'css-3',
        title: '실종신고',
        description: 'CSS 클래스 아이콘 사용',
        url: '/missing',
        iconClass: 'ico-search'
      }
    ],
    swiperId: 'css-icon-swiper',
    autoplay: false,
    speed: 400
  },
};