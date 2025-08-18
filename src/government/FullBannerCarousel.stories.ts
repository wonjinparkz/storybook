import type { Meta, StoryObj } from '@storybook/react-webpack5';
import FullBannerCarousel from './FullBannerCarousel';

const meta: Meta<typeof FullBannerCarousel> = {
  title: 'Government/D. Carousel/Full Banner Carousel',
  component: FullBannerCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '정부 웹사이트용 풀배너 캐러셀 컴포넌트입니다. Swiper.js를 사용하여 자동 슬라이드, 네비게이션, 페이지네이션 기능을 제공합니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    slides: {
      description: '캐러셀에 표시할 슬라이드 데이터 배열',
      control: { type: 'object' }
    },
    className: {
      description: '추가 CSS 클래스명',
      control: { type: 'text' }
    },
    swiperId: {
      description: 'Swiper 인스턴스 식별을 위한 고유 ID',
      control: { type: 'text' }
    },
    autoplayDelay: {
      description: '자동 슬라이드 전환 시간 (밀리초)',
      control: { type: 'number', min: 1000, max: 10000, step: 500 }
    },
    speed: {
      description: '슬라이드 전환 속도 (밀리초)',
      control: { type: 'number', min: 200, max: 1000, step: 100 }
    },
    loop: {
      description: '무한 루프 활성화',
      control: { type: 'boolean' }
    },
    backgroundColor: {
      description: '캐러셀 배경색상',
      control: { type: 'color' }
    },
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// 예제 슬라이드 데이터
const mockSlides = [
  {
    id: 'slide-1',
    title: '고양이와 함께하는<br><strong>행복한 사회</strong>',
    subtitle: '고양이관리위원회에서 제공하는<br>다양한 서비스를 만나보세요',
    buttonText: '서비스 둘러보기',
    buttonUrl: '/services',
    image: '/assets/img_visual.png',
    imageAlt: '고양이와 함께하는 행복한 사회 이미지'
  },
  {
    id: 'slide-2',
    title: '묘민증 발급<br><strong>간편하게</strong>',
    subtitle: '온라인으로 손쉽게<br>묘민증을 발급받으세요',
    buttonText: '묘민증 발급하기',
    buttonUrl: '/cat-id',
    image: '/assets/img_visual.png',
    imageAlt: '묘민증 발급 서비스 이미지'
  },
  {
    id: 'slide-3',
    title: '입양 지원<br><strong>프로그램</strong>',
    subtitle: '사랑이 필요한 고양이들을<br>가족으로 맞이해주세요',
    buttonText: '입양 안내 보기',
    buttonUrl: '/adoption',
    image: '/assets/img_visual.png',
    imageAlt: '고양이 입양 프로그램 이미지'
  }
];

export const Default: Story = {
  args: {
    slides: mockSlides,
    swiperId: 'main-banner-swiper',
    autoplayDelay: 5000,
    speed: 400,
    loop: true,
    backgroundColor: '#D8E4F2'
  },
};


export const FastTransition: Story = {
  args: {
    slides: mockSlides,
    swiperId: 'banner-fast',
    autoplayDelay: 3000,
    speed: 200,
    loop: true,
    className: 'fast-transition',
    backgroundColor: '#E8F4F8'
  },
};

export const SingleSlide: Story = {
  args: {
    slides: [mockSlides[0]],
    swiperId: 'banner-single',
    autoplayDelay: 5000,
    speed: 400,
    loop: false,
    backgroundColor: '#F0F8FF'
  },
};

export const NoAutoplay: Story = {
  args: {
    slides: mockSlides,
    swiperId: 'banner-manual',
    autoplayDelay: 0, // autoplay 비활성화
    speed: 400,
    loop: true,
    backgroundColor: '#FFF8E7'
  },
};