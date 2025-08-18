import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ContentsCardCarousel from './ContentsCardCarousel';

const meta: Meta<typeof ContentsCardCarousel> = {
  title: 'Government/D. Carousel/Contents Card Carousel',
  component: ContentsCardCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '정부 웹사이트용 콘텐츠 카드 캐러셀 컴포넌트입니다. 라인 스타일 카드, 배지 시스템, 재생/정지 컨트롤, fraction 페이지네이션을 지원합니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '캐러셀 제목',
      control: { type: 'text' }
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
    moreLink: {
      description: '더보기 링크 URL',
      control: { type: 'text' }
    },
    moreText: {
      description: '더보기 버튼 텍스트',
      control: { type: 'text' }
    },
    className: {
      description: '추가 CSS 클래스명',
      control: { type: 'text' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// 예제 카드 데이터
const mockCards = [
  {
    id: 'content-1',
    title: '온라인 묘민증 발급',
    description: '집에서 간편하게 묘민증을 신청하고 발급받을 수 있는 온라인 서비스입니다.',
    url: '/services/cat-id-online',
    badge: 'NEW',
    buttonText: '신청하기'
  },
  {
    id: 'content-2',
    title: '24시간 응급상담',
    description: '응급상황 발생 시 전문 수의사와 실시간으로 상담받을 수 있습니다.',
    url: '/services/emergency-consultation',
    badge: 'HOT',
    buttonText: '상담신청'
  },
  {
    id: 'content-3',
    title: '예방접종 스케줄링',
    description: '고양이의 나이와 건강상태에 맞는 맞춤형 예방접종 일정을 관리합니다.',
    url: '/services/vaccination-schedule',
    buttonText: '일정확인'
  },
  {
    id: 'content-4',
    title: '건강검진 예약',
    description: '정기 건강검진 예약을 온라인으로 간편하게 신청할 수 있습니다.',
    url: '/services/health-checkup',
    badge: '인기',
    buttonText: '예약하기'
  },
  {
    id: 'content-5',
    title: '행동교정 상담',
    description: '고양이의 문제행동 개선을 위한 전문가 상담 서비스를 제공합니다.',
    url: '/services/behavior-consultation',
    buttonText: '상담받기'
  },
  {
    id: 'content-6',
    title: '영양 관리 가이드',
    description: '연령별, 체중별 맞춤 영양 관리 가이드와 사료 추천 서비스입니다.',
    url: '/services/nutrition-guide',
    badge: '추천',
    buttonText: '가이드보기'
  }
];

export const Default: Story = {
  args: {
    title: '인기 고양이 서비스',
    cards: mockCards,
    swiperId: 'contents-card-swiper',
    autoplay: false,
    autoplayDelay: 4000,
    speed: 400,
    loop: true,
    moreLink: '/services/all',
    moreText: '전체 서비스 보기'
  },
};

export const WithAutoplay: Story = {
  args: {
    title: '실시간 정부 서비스',
    cards: [
      {
        id: 'gov-1',
        title: '전자민원 처리',
        description: '각종 민원을 온라인으로 신청하고 처리현황을 실시간으로 확인하세요.',
        url: '/gov-services/civil-affairs',
        badge: '실시간',
        buttonText: '민원신청'
      },
      {
        id: 'gov-2',
        title: '세금 납부',
        description: '지방세, 국세를 온라인으로 간편하게 납부할 수 있습니다.',
        url: '/gov-services/tax-payment',
        buttonText: '납부하기'
      },
      {
        id: 'gov-3',
        title: '부동산 정보',
        description: '실거래가, 공시지가 등 부동산 관련 정보를 제공합니다.',
        url: '/gov-services/real-estate',
        badge: '업데이트',
        buttonText: '조회하기'
      },
      {
        id: 'gov-4',
        title: '취업 지원',
        description: '일자리 정보, 취업 교육 프로그램을 안내합니다.',
        url: '/gov-services/employment',
        badge: '신규',
        buttonText: '지원하기'
      }
    ],
    swiperId: 'autoplay-contents-swiper',
    autoplay: true,
    autoplayDelay: 3500,
    speed: 600,
    loop: true,
    moreLink: '/government-services',
    moreText: '정부서비스 더보기'
  },
};

export const MinimalCards: Story = {
  args: {
    title: '필수 서비스',
    cards: mockCards.slice(0, 3),
    swiperId: 'minimal-contents-swiper',
    autoplay: false,
    speed: 400,
    loop: false,
    moreLink: '/essential-services'
  },
};

export const NoBadges: Story = {
  args: {
    title: '기본 서비스 안내',
    cards: [
      {
        id: 'basic-1',
        title: '고양이 등록',
        description: '새로운 가족이 된 고양이를 공식 등록하는 서비스입니다.',
        url: '/services/registration',
        buttonText: '등록하기'
      },
      {
        id: 'basic-2',
        title: '건강 관리',
        description: '고양이의 건강상태를 체계적으로 관리할 수 있습니다.',
        url: '/services/health-management',
        buttonText: '관리하기'
      },
      {
        id: 'basic-3',
        title: '교육 프로그램',
        description: '초보 집사를 위한 고양이 돌봄 교육을 제공합니다.',
        url: '/services/education',
        buttonText: '교육신청'
      }
    ],
    swiperId: 'no-badge-swiper',
    autoplay: false,
    speed: 400,
    loop: true
  },
};

export const FastTransition: Story = {
  args: {
    title: '빠른 서비스 둘러보기',
    cards: mockCards,
    swiperId: 'fast-contents-swiper',
    autoplay: true,
    autoplayDelay: 2000,
    speed: 200,
    loop: true,
    moreLink: '/quick-tour',
    moreText: '전체 둘러보기',
    className: 'fast-carousel'
  },
};

export const WithoutMoreLink: Story = {
  args: {
    title: '완료된 서비스',
    cards: [
      {
        id: 'complete-1',
        title: '마이크로칩 등록',
        description: '고양이 마이크로칩 등록이 완료되었습니다.',
        url: '/services/microchip-status',
        badge: '완료',
        buttonText: '확인하기'
      },
      {
        id: 'complete-2',
        title: '예방접종 완료',
        description: '필수 예방접종이 모두 완료되었습니다.',
        url: '/services/vaccination-status',
        badge: '완료',
        buttonText: '증명서보기'
      },
      {
        id: 'complete-3',
        title: '건강검진 완료',
        description: '정기 건강검진 결과를 확인하실 수 있습니다.',
        url: '/services/checkup-results',
        badge: '완료',
        buttonText: '결과보기'
      }
    ],
    swiperId: 'complete-services-swiper',
    autoplay: false,
    speed: 400,
    loop: false
  },
};