import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ComplexFeaturesCarousel from './ComplexFeaturesCarousel';

const meta: Meta<typeof ComplexFeaturesCarousel> = {
  title: 'Government/D. Carousel/Complex Features Carousel',
  component: ComplexFeaturesCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '정부 웹사이트용 복합 기능 캐러셀 컴포넌트입니다. 소개 텍스트와 카드 슬라이더를 결합한 형태로, 페이지네이션과 반응형 레이아웃을 지원합니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '메인 제목',
      control: { type: 'text' }
    },
    intro: {
      description: '소개 섹션 데이터 (제목, 설명, 버튼)',
      control: { type: 'object' }
    },
    cards: {
      description: '카드 데이터 배열',
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
    loop: {
      description: '무한 루프 활성화',
      control: { type: 'boolean' }
    },
    className: {
      description: '추가 CSS 클래스명',
      control: { type: 'text' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// 예제 소개 데이터
const mockIntro = {
  title: '고양이와 함께하는 <strong>스마트한 생활</strong>',
  description: '고양이관리위원회에서 제공하는 다양한 디지털 서비스를 통해<br>더욱 편리하고 안전한 반려생활을 경험해보세요.',
  buttonText: '서비스 전체보기',
  buttonUrl: '/services/all'
};

// 예제 카드 데이터
const mockCards = [
  {
    id: 'card-1',
    title: '묘민증 모바일 앱',
    description: '언제 어디서나 묘민증을 확인하고 관리할 수 있는 공식 모바일 앱입니다.',
    url: '/services/mobile-app',
    imageClass: 'bg-gradient-blue',
    imageUrl: '/assets/service-mobile.png',
    imageAlt: '묘민증 모바일 앱 서비스'
  },
  {
    id: 'card-2',
    title: '온라인 건강상담',
    description: '전문 수의사와 24시간 온라인으로 상담받을 수 있는 서비스입니다.',
    url: '/services/health-consultation',
    imageClass: 'bg-gradient-green',
    imageUrl: '/assets/service-health.png',
    imageAlt: '온라인 건강상담 서비스'
  },
  {
    id: 'card-3',
    title: 'AI 행동분석',
    description: '인공지능 기술로 고양이의 행동 패턴을 분석하고 건강상태를 예측합니다.',
    url: '/services/ai-analysis',
    imageClass: 'bg-gradient-purple',
    imageUrl: '/assets/service-ai.png',
    imageAlt: 'AI 행동분석 서비스'
  },
  {
    id: 'card-4',
    title: '스마트 IoT 관리',
    description: 'IoT 기기를 통해 원격으로 급식기, 정수기 등을 관리할 수 있습니다.',
    url: '/services/iot-management',
    imageClass: 'bg-gradient-orange',
    imageUrl: '/assets/service-iot.png',
    imageAlt: '스마트 IoT 관리 서비스'
  }
];

export const Default: Story = {
  args: {
    title: '스마트 고양이 관리 서비스',
    intro: mockIntro,
    cards: mockCards,
    swiperId: 'complex-features-swiper',
    autoplay: true,
    autoplayDelay: 4000,
    speed: 400,
    loop: true
  },
};

export const WithoutAutoplay: Story = {
  args: {
    title: '디지털 정부 서비스',
    intro: {
      title: '정부 <strong>디지털 혁신</strong>의 시작',
      description: '국민 중심의 디지털 정부 서비스로<br>더욱 편리하고 투명한 행정 서비스를 제공합니다.',
      buttonText: '정책 자세히보기',
      buttonUrl: '/policies'
    },
    cards: [
      {
        id: 'digital-1',
        title: '정부24 통합서비스',
        description: '모든 정부 서비스를 하나의 플랫폼에서 이용할 수 있습니다.',
        url: '/services/gov24',
        imageClass: 'bg-primary',
        imageUrl: '/assets/digital-gov.png',
        imageAlt: '정부24 통합서비스'
      },
      {
        id: 'digital-2',
        title: '전자문서 시스템',
        description: '종이 없는 업무환경으로 효율성과 환경보호를 동시에 실현합니다.',
        url: '/services/edoc',
        imageClass: 'bg-secondary',
        imageUrl: '/assets/digital-doc.png',
        imageAlt: '전자문서 시스템'
      },
      {
        id: 'digital-3',
        title: '빅데이터 분석',
        description: '국정 현안을 데이터 기반으로 분석하여 정책 결정을 지원합니다.',
        url: '/services/bigdata',
        imageClass: 'bg-success',
        imageUrl: '/assets/digital-data.png',
        imageAlt: '빅데이터 분석 서비스'
      }
    ],
    swiperId: 'digital-government-swiper',
    autoplay: false,
    speed: 600,
    loop: false
  },
};

export const MinimalCards: Story = {
  args: {
    title: '필수 고양이 서비스',
    intro: {
      title: '고양이 관리 <strong>필수 서비스</strong>',
      description: '반드시 알아야 할 핵심 서비스들을 소개합니다.',
      buttonText: '더 알아보기',
      buttonUrl: '/essential-services'
    },
    cards: mockCards.slice(0, 2),
    swiperId: 'minimal-features-swiper',
    autoplay: true,
    autoplayDelay: 5000,
    speed: 300,
    loop: true
  },
};

export const FastTransition: Story = {
  args: {
    title: '빠른 서비스 둘러보기',
    intro: mockIntro,
    cards: mockCards,
    swiperId: 'fast-features-swiper',
    autoplay: true,
    autoplayDelay: 2500,
    speed: 200,
    loop: true,
    className: 'fast-carousel'
  },
};

export const NoLoop: Story = {
  args: {
    title: '단계별 서비스 안내',
    intro: {
      title: '고양이 등록부터 관리까지 <strong>단계별 안내</strong>',
      description: '처음 고양이를 키우시는 분들을 위한<br>단계별 서비스 이용 가이드입니다.',
      buttonText: '가이드 전체보기',
      buttonUrl: '/guide/step-by-step'
    },
    cards: [
      {
        id: 'step-1',
        title: '1단계: 고양이 등록',
        description: '새로운 가족이 된 고양이를 공식 등록하세요.',
        url: '/guide/registration',
        imageClass: 'bg-step-1',
        imageUrl: '/assets/step-registration.png',
        imageAlt: '고양이 등록 단계'
      },
      {
        id: 'step-2',
        title: '2단계: 건강검진',
        description: '정기 건강검진으로 건강한 반려생활을 시작하세요.',
        url: '/guide/health-check',
        imageClass: 'bg-step-2',
        imageUrl: '/assets/step-health.png',
        imageAlt: '건강검진 단계'
      },
      {
        id: 'step-3',
        title: '3단계: 일상관리',
        description: '다양한 서비스로 편리한 일상관리를 경험하세요.',
        url: '/guide/daily-care',
        imageClass: 'bg-step-3',
        imageUrl: '/assets/step-daily.png',
        imageAlt: '일상관리 단계'
      }
    ],
    swiperId: 'step-guide-swiper',
    autoplay: false,
    speed: 400,
    loop: false
  },
};