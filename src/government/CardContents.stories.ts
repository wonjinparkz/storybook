import type { Meta, StoryObj } from '@storybook/react-webpack5';
import CardContents from './CardContents';
import { CardContentsProps, CardContentsCard } from './types';

const meta: Meta<typeof CardContents> = {
  title: 'Government/C. Components/CardContents',
  component: CardContents,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '섹션 제목'
    },
    moreLink: {
      control: 'text',
      description: '더보기 링크 URL'
    },
    moreText: {
      control: 'text',
      description: '더보기 버튼 텍스트'
    },
    desktopLimit: {
      control: { type: 'number', min: 1, max: 10 },
      description: '데스크톱에서 표시할 카드 개수'
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CardContents>;

// 정책 서비스 카드 데이터
const policyServiceCards: CardContentsCard[] = [
  {
    id: 'policy-001',
    title: '국민연금 서비스',
    description: '국민연금 가입, 납부, 급여 신청 등 국민연금 관련 모든 서비스를 온라인으로 이용하실 수 있습니다.',
    url: '/services/pension',
    badge: '인기',
    buttonText: '서비스 이용',
    imageClass: 'policy-pension',
    imageAlt: '국민연금 서비스'
  },
  {
    id: 'policy-002',
    title: '건강보험 서비스',
    description: '건강보험료 조회, 급여 내역 확인, 각종 증명서 발급 등의 서비스를 제공합니다.',
    url: '/services/health-insurance',
    badge: '필수',
    buttonText: '서비스 이용',
    imageClass: 'policy-health',
    imageAlt: '건강보험 서비스'
  },
  {
    id: 'policy-003',
    title: '고용보험 서비스',
    description: '실업급여 신청, 직업훈련 신청, 고용보험 관련 각종 서비스를 이용하실 수 있습니다.',
    url: '/services/employment-insurance',
    badge: '신규',
    buttonText: '서비스 이용',
    imageClass: 'policy-employment',
    imageAlt: '고용보험 서비스'
  }
];

// 디지털 서비스 카드 데이터
const digitalServiceCards: CardContentsCard[] = [
  {
    id: 'digital-001',
    title: '모바일 정부24',
    description: '언제 어디서나 스마트폰으로 정부서비스를 이용하세요. 500여 개 기관의 4,000여 개 서비스를 제공합니다.',
    url: '/services/mobile-gov',
    badge: '추천',
    buttonText: '앱 다운로드',
    imageClass: 'digital-mobile',
    imageAlt: '모바일 정부24 서비스'
  },
  {
    id: 'digital-002', 
    title: '전자문서 지갑',
    description: '각종 증명서와 서류를 디지털로 안전하게 보관하고 필요할 때 언제든 활용할 수 있습니다.',
    url: '/services/digital-wallet',
    badge: '편리',
    buttonText: '서비스 이용',
    imageClass: 'digital-wallet',
    imageAlt: '전자문서 지갑 서비스'
  },
  {
    id: 'digital-003',
    title: '공인인증서 센터',
    description: '공인인증서 발급, 갱신, 폐기 등의 업무를 온라인으로 처리할 수 있습니다.',
    url: '/services/certificate',
    badge: '보안',
    buttonText: '서비스 이용',
    imageClass: 'digital-cert',
    imageAlt: '공인인증서 센터 서비스'
  }
];

// 시민 참여 카드 데이터
const participationCards: CardContentsCard[] = [
  {
    id: 'participation-001',
    title: '국민신문고',
    description: '정부 정책에 대한 제안이나 불편사항을 신고하여 더 나은 정부를 만드는데 참여하세요.',
    url: '/participation/epeople',
    badge: 'HOT',
    buttonText: '참여하기',
    imageClass: 'participation-epeople',
    imageAlt: '국민신문고 서비스'
  },
  {
    id: 'participation-002',
    title: '정책브리핑',
    description: '정부 정책에 대한 최신 소식과 브리핑을 확인하고 정책에 대한 의견을 나누세요.',
    url: '/participation/briefing',
    badge: '소통',
    buttonText: '참여하기',
    imageClass: 'participation-briefing',
    imageAlt: '정책브리핑 서비스'
  },
  {
    id: 'participation-003',
    title: '온라인 투표',
    description: '각종 정책 관련 설문조사와 투표에 참여하여 정책 결정에 목소리를 내세요.',
    url: '/participation/voting',
    badge: '투표',
    buttonText: '참여하기',
    imageClass: 'participation-voting',
    imageAlt: '온라인 투표 서비스'
  }
];

// 기본 스토리
export const Default: Story = {
  args: {
    title: '주요 정책 서비스',
    cards: policyServiceCards,
    moreLink: '/services/all',
    moreText: '전체 서비스 보기',
    desktopLimit: 3
  },
  parameters: {
    docs: {
      description: {
        story: '기본 카드 콘텐츠입니다. 정책 서비스를 소개하는 카드들을 보여줍니다.'
      }
    }
  }
};

// 디지털 서비스
export const DigitalServices: Story = {
  args: {
    title: '디지털 정부 서비스',
    cards: digitalServiceCards,
    moreLink: '/services/digital',
    moreText: '디지털 서비스 전체보기',
    desktopLimit: 3
  },
  parameters: {
    docs: {
      description: {
        story: '디지털 정부 서비스를 소개하는 카드 섹션입니다.'
      }
    }
  }
};

// 시민 참여
export const CitizenParticipation: Story = {
  args: {
    title: '시민 참여',
    cards: participationCards,
    moreLink: '/participation',
    moreText: '참여 프로그램 더보기',
    desktopLimit: 3
  },
  parameters: {
    docs: {
      description: {
        story: '시민 참여 프로그램을 소개하는 카드 섹션입니다.'
      }
    }
  }
};

// 더보기 링크 없는 버전
export const WithoutMoreLink: Story = {
  args: {
    title: '주요 서비스',
    cards: policyServiceCards.slice(0, 2),
    desktopLimit: 2
  },
  parameters: {
    docs: {
      description: {
        story: '더보기 링크가 없는 버전입니다. 카드 개수도 2개로 제한되어 있습니다.'
      }
    }
  }
};

// 배지 없는 버전
export const WithoutBadges: Story = {
  args: {
    title: '기본 서비스',
    cards: digitalServiceCards.map(card => ({
      ...card,
      badge: undefined
    })),
    moreLink: '/services',
    moreText: '더보기',
    desktopLimit: 3
  },
  parameters: {
    docs: {
      description: {
        story: '배지가 없는 깔끔한 버전의 카드 콘텐츠입니다.'
      }
    }
  }
};

// 카드 1개만 표시
export const SingleCard: Story = {
  args: {
    title: '추천 서비스',
    cards: policyServiceCards.slice(0, 1),
    moreLink: '/services/pension',
    moreText: '자세히 보기',
    desktopLimit: 1
  },
  parameters: {
    docs: {
      description: {
        story: '카드 1개만 표시하는 버전입니다. 특별 추천 서비스 등에 활용할 수 있습니다.'
      }
    }
  }
};

// 많은 카드 (4개)
export const FourCards: Story = {
  args: {
    title: '전체 서비스',
    cards: [
      ...policyServiceCards,
      {
        id: 'extra-001',
        title: '세무 서비스',
        description: '세금 신고, 납부, 환급 등 세무 관련 모든 업무를 온라인으로 처리하실 수 있습니다.',
        url: '/services/tax',
        badge: '국세',
        buttonText: '서비스 이용',
        imageClass: 'policy-tax',
        imageAlt: '세무 서비스'
      }
    ],
    moreLink: '/services/all',
    moreText: '전체 서비스',
    desktopLimit: 4
  },
  parameters: {
    docs: {
      description: {
        story: '4개 카드를 표시하는 버전입니다. 더 많은 서비스를 한 번에 보여줄 때 사용합니다.'
      }
    }
  }
};