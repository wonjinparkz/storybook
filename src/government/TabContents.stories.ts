import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TabContents from './TabContents';
import { TabContentsProps, Tab, TabItem } from './types';

const meta: Meta<typeof TabContents> = {
  title: 'Government/C. Components/TabContents',
  component: TabContents,
  parameters: {
    docs: {
      description: {
        component: `
### TabContents 컴포넌트

정부 웹사이트의 탭 형태 콘텐츠 섹션 컴포넌트입니다. 다음과 같은 기능을 제공합니다:

- **탭 인터페이스**: 여러 카테고리의 콘텐츠를 탭으로 구분하여 표시
- **뉴스 리스트**: 각 탭에 카드 형태의 뉴스/콘텐츠 아이템 표시
- **이미지 지원**: 썸네일 이미지가 있는 카드와 텍스트만 있는 카드 모두 지원
- **접근성 준수**: ARIA 속성과 키보드 네비게이션 지원
- **더보기 링크**: 전체 목록으로 이동하는 링크 지원
- **반응형 디자인**: 데스크톱과 모바일에 최적화된 레이아웃

#### 주요 특징
- PHP 템플릿과 동일한 HTML 구조 및 JavaScript 동작 유지
- 정부 디자인 시스템 완전 적용
- TypeScript 타입 안전성
- React useState를 이용한 탭 상태 관리
- 접근성 준수 (ARIA 속성, 스크린 리더 지원)

#### 사용 사례
- 공지사항/보도자료 탭 섹션
- 정책 카테고리별 콘텐츠 분류
- 서비스별 관련 뉴스 표시
- 부서별 소식 구분 표시
        `
      }
    }
  },
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
    className: {
      control: 'text',
      description: '추가 CSS 클래스'
    }
  }
};

export default meta;
type Story = StoryObj<typeof TabContents>;

// 공지사항 탭 데이터
const noticeItems: TabItem[] = [
  {
    id: 'notice-001',
    title: '2024년 하반기 정부 정책 방향 발표',
    description: '국민의 안전과 복지 증진을 위한 새로운 정책 방향을 발표합니다. 디지털 혁신과 탄소중립 정책을 중심으로...',
    url: '/notice/2024-policy-direction',
    image: 'https://via.placeholder.com/120x90/0066cc/ffffff?text=정책+발표',
    imageAlt: '정책 발표 이미지',
    buttonText: '자세히 보기'
  },
  {
    id: 'notice-002',
    title: '국민 참여 온라인 설문조사 실시',
    description: '정부 서비스 개선을 위한 국민 의견을 수렴합니다. 참여해주신 모든 분께 소정의 기념품을 증정합니다.',
    url: '/notice/survey-2024',
    image: 'https://via.placeholder.com/120x90/28a745/ffffff?text=설문조사',
    imageAlt: '설문조사 이미지',
    buttonText: '참여하기'
  },
  {
    id: 'notice-003',
    title: '시스템 점검 안내 (8월 20일)',
    description: '서비스 안정성 향상을 위한 정기 점검을 실시합니다. 점검 시간: 02:00~06:00 (4시간)',
    url: '/notice/maintenance-0820',
    buttonText: '상세 일정'
  }
];

// 보도자료 탭 데이터
const pressItems: TabItem[] = [
  {
    id: 'press-001',
    title: '디지털 정부혁신 성과 발표',
    description: '지난 1년간 추진된 디지털 정부혁신 정책의 성과와 향후 계획을 발표했습니다.',
    url: '/press/digital-innovation-results',
    image: 'https://via.placeholder.com/120x90/17a2b8/ffffff?text=디지털+혁신',
    imageAlt: '디지털 혁신 성과',
    buttonText: '보도자료 보기'
  },
  {
    id: 'press-002',
    title: '탄소중립 실현을 위한 새로운 정책 발표',
    description: '2030년 탄소중립 목표 달성을 위한 구체적인 실행 계획과 지원 방안을 마련했습니다.',
    url: '/press/carbon-neutral-policy',
    image: 'https://via.placeholder.com/120x90/28a745/ffffff?text=탄소중립',
    imageAlt: '탄소중립 정책',
    buttonText: '보도자료 보기'
  }
];

// 행사/이벤트 탭 데이터
const eventItems: TabItem[] = [
  {
    id: 'event-001',
    title: '국민과의 대화 온라인 토론회',
    description: '정부 정책에 대한 국민 의견을 직접 듣는 온라인 토론회를 개최합니다.',
    url: '/event/online-discussion',
    image: 'https://via.placeholder.com/120x90/6f42c1/ffffff?text=온라인+토론회',
    imageAlt: '온라인 토론회',
    buttonText: '참가 신청'
  },
  {
    id: 'event-002',
    title: '2024 정부혁신 박람회',
    description: '정부혁신 사례와 미래 비전을 소개하는 박람회가 개최됩니다.',
    url: '/event/innovation-expo-2024',
    image: 'https://via.placeholder.com/120x90/dc3545/ffffff?text=혁신+박람회',
    imageAlt: '정부혁신 박람회',
    buttonText: '행사 정보'
  },
  {
    id: 'event-003',
    title: '청년 정책 아이디어 공모전',
    description: '창의적인 청년 정책 아이디어를 발굴하는 공모전을 진행합니다.',
    url: '/event/youth-policy-contest',
    buttonText: '공모전 참여'
  }
];

// 기본 탭 구성
const defaultTabs: Tab[] = [
  {
    id: 'tab-notice',
    label: '공지사항',
    panelId: 'panel-notice',
    active: true,
    items: noticeItems
  },
  {
    id: 'tab-press',
    label: '보도자료',
    panelId: 'panel-press',
    active: false,
    items: pressItems
  },
  {
    id: 'tab-event',
    label: '행사/이벤트',
    panelId: 'panel-event',
    active: false,
    items: eventItems
  }
];

// 기본 스토리
export const Default: Story = {
  args: {
    title: '최신 소식',
    tabs: defaultTabs,
    moreLink: '/news/all',
    moreText: '전체 소식 보기'
  },
  parameters: {
    docs: {
      description: {
        story: '기본 탭 콘텐츠입니다. 공지사항, 보도자료, 행사/이벤트 탭으로 구성되어 있습니다.'
      }
    }
  }
};

// 정책 분야별 탭
export const PolicyTabs: Story = {
  args: {
    title: '분야별 정책',
    tabs: [
      {
        id: 'tab-economy',
        label: '경제',
        panelId: 'panel-economy',
        active: true,
        items: [
          {
            id: 'economy-001',
            title: '2024년 경제 정책 방향',
            description: '혁신성장과 포용성장을 통한 지속가능한 경제 발전 방안을 제시합니다.',
            url: '/policy/economy/2024-direction',
            image: 'https://via.placeholder.com/120x90/0066cc/ffffff?text=경제+정책',
            imageAlt: '경제 정책',
            buttonText: '정책 보기'
          },
          {
            id: 'economy-002',
            title: '중소기업 지원 확대 방안',
            description: '중소기업의 경쟁력 강화를 위한 다양한 지원 정책을 마련했습니다.',
            url: '/policy/economy/sme-support',
            buttonText: '지원 정책'
          }
        ]
      },
      {
        id: 'tab-social',
        label: '사회',
        panelId: 'panel-social',
        active: false,
        items: [
          {
            id: 'social-001',
            title: '사회보장제도 개선 방안',
            description: '모든 국민이 혜택받을 수 있는 포용적 사회보장제도를 구축합니다.',
            url: '/policy/social/welfare-reform',
            image: 'https://via.placeholder.com/120x90/28a745/ffffff?text=사회보장',
            imageAlt: '사회보장제도',
            buttonText: '정책 상세'
          }
        ]
      },
      {
        id: 'tab-environment',
        label: '환경',
        panelId: 'panel-environment',
        active: false,
        items: [
          {
            id: 'env-001',
            title: '그린뉴딜 2.0 추진 계획',
            description: '탄소중립 실현과 녹색경제 전환을 위한 그린뉴딜 정책을 확대합니다.',
            url: '/policy/environment/green-new-deal',
            image: 'https://via.placeholder.com/120x90/198754/ffffff?text=그린뉴딜',
            imageAlt: '그린뉴딜',
            buttonText: '계획 보기'
          }
        ]
      }
    ],
    moreLink: '/policy',
    moreText: '전체 정책 보기'
  },
  parameters: {
    docs: {
      description: {
        story: '정책 분야별로 구성된 탭 콘텐츠입니다. 경제, 사회, 환경 분야로 구분되어 있습니다.'
      }
    }
  }
};

// 더보기 링크 없는 버전
export const WithoutMoreLink: Story = {
  args: {
    title: '주요 알림',
    tabs: [
      {
        id: 'tab-urgent',
        label: '긴급 공지',
        panelId: 'panel-urgent',
        active: true,
        items: noticeItems.slice(0, 2)
      },
      {
        id: 'tab-general',
        label: '일반 공지',
        panelId: 'panel-general',
        active: false,
        items: [
          {
            id: 'general-001',
            title: '정기 점검 안내',
            description: '월례 정기 점검이 예정되어 있습니다.',
            url: '/notice/monthly-maintenance',
            buttonText: '상세 보기'
          }
        ]
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: '더보기 링크가 없는 버전입니다. 제한된 콘텐츠만 표시할 때 사용합니다.'
      }
    }
  }
};

// 이미지 없는 버전
export const TextOnly: Story = {
  args: {
    title: '텍스트 콘텐츠',
    tabs: [
      {
        id: 'tab-text1',
        label: 'FAQ',
        panelId: 'panel-text1',
        active: true,
        items: [
          {
            id: 'faq-001',
            title: '자주 묻는 질문 1',
            description: '정부24 서비스 이용 방법에 대한 자주 묻는 질문입니다.',
            url: '/faq/service-usage',
            buttonText: '답변 보기'
          },
          {
            id: 'faq-002',
            title: '자주 묻는 질문 2',
            description: '공인인증서 관련 자주 묻는 질문입니다.',
            url: '/faq/certificate',
            buttonText: '답변 보기'
          }
        ]
      },
      {
        id: 'tab-text2',
        label: '도움말',
        panelId: 'panel-text2',
        active: false,
        items: [
          {
            id: 'help-001',
            title: '서비스 이용 안내',
            description: '정부 온라인 서비스 이용 방법을 안내합니다.',
            url: '/help/service-guide',
            buttonText: '안내 보기'
          }
        ]
      }
    ],
    moreLink: '/help',
    moreText: '도움말 전체보기'
  },
  parameters: {
    docs: {
      description: {
        story: '이미지가 없는 텍스트 중심의 탭 콘텐츠입니다. FAQ나 도움말 섹션에 적합합니다.'
      }
    }
  }
};

// 빈 탭 포함 버전
export const WithEmptyTab: Story = {
  args: {
    title: '서비스 현황',
    tabs: [
      {
        id: 'tab-active',
        label: '운영 중',
        panelId: 'panel-active',
        active: true,
        items: [
          {
            id: 'active-001',
            title: '정부24 서비스',
            description: '온라인 민원 처리 서비스가 정상 운영 중입니다.',
            url: '/service/gov24',
            buttonText: '서비스 이용'
          }
        ]
      },
      {
        id: 'tab-maintenance',
        label: '점검 중',
        panelId: 'panel-maintenance',
        active: false,
        items: [],
        emptyMessage: '현재 점검 중인 서비스가 없습니다.'
      },
      {
        id: 'tab-planned',
        label: '예정',
        panelId: 'panel-planned',
        active: false,
        items: [],
        emptyMessage: '예정된 서비스가 없습니다.'
      }
    ],
    moreLink: '/service/status',
    moreText: '전체 현황 보기'
  },
  parameters: {
    docs: {
      description: {
        story: '빈 탭이 포함된 버전입니다. 콘텐츠가 없는 탭에는 커스텀 메시지를 표시할 수 있습니다.'
      }
    }
  }
};

// 단일 탭 버전
export const SingleTab: Story = {
  args: {
    title: '중요 공지',
    tabs: [
      {
        id: 'tab-single',
        label: '전체',
        panelId: 'panel-single',
        active: true,
        items: noticeItems
      }
    ],
    moreLink: '/notice',
    moreText: '공지사항 전체보기'
  },
  parameters: {
    docs: {
      description: {
        story: '단일 탭으로 구성된 버전입니다. 카테고리 구분이 필요 없을 때 사용합니다.'
      }
    }
  }
};