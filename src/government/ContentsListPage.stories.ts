import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ContentsListPage from './ContentsListPage';
import { ContentsListPageProps, ListItem } from './types';

const meta: Meta<typeof ContentsListPage> = {
  title: 'Government/Z. Page/ContentsListPage',
  component: ContentsListPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### ContentsListPage 컴포넌트

정부 웹사이트의 콘텐츠 리스트 페이지 컴포넌트입니다. 다음과 같은 기능을 제공합니다:

- **좌측 빈 공간**: 사이드바 영역은 빈 공간으로 처리
- **브레드크럼**: 현재 위치 표시
- **페이지 타이틀**: 드롭다운 메뉴 지원
- **검색 및 정렬**: 검색 정보, 정렬 옵션, 페이지 크기 설정
- **콘텐츠 리스트**: 구조화된 데이터 기반 리스트 아이템 렌더링
- **페이지네이션**: 페이지 네비게이션 지원
- **반응형 디자인**: 모바일/태블릿 지원

#### 주요 특징
- props 기반의 유연한 데이터 구조
- 정렬 및 페이지 크기 변경 상호작용
- 접근성 준수 (ARIA 속성)
- 애니메이션 효과
- TypeScript 타입 안전성

#### 데이터 구조
리스트 아이템은 다음과 같은 구조를 가집니다:
- **meta**: 배지, 날짜, 조회수, 첨부파일 수 등
- **content**: 제목, 설명, URL 등
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    currentUrl: {
      control: 'text',
      description: '현재 페이지 URL (활성 메뉴 표시용)'
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ContentsListPage>;

// 샘플 리스트 아이템 데이터
const samplePressReleaseItems: ListItem[] = [
  {
    id: 'press-001',
    meta: {
      badge: { text: '기획재정부' },
      date: '2024.08.17',
      views: 1234,
      attachments: 3
    },
    content: {
      title: '2024년 하반기 경제정책방향 발표',
      description: '정부는 하반기 경제정책 방향을 발표하며, 민생경제 안정과 구조개혁을 통한 역동경제 구현에 중점을 둔다고 밝혔습니다. 주요 내용으로는 물가안정, 고용창출, 산업혁신 등이 포함되어 있습니다.',
      url: '/press/detail/12345'
    }
  },
  {
    id: 'press-002',
    meta: {
      badge: { text: '교육부' },
      date: '2024.08.16',
      views: 987,
      attachments: 2
    },
    content: {
      title: '2025학년도 대입제도 개선방안 확정',
      description: '교육부는 학생과 학부모의 대입 부담을 줄이고 공정성을 강화하기 위한 2025학년도 대입제도 개선방안을 확정했다고 발표했습니다. 전형 간소화와 평가의 투명성 제고가 주요 골자입니다.',
      url: '/press/detail/12344'
    }
  },
  {
    id: 'press-003',
    meta: {
      badge: { text: '과학기술정보통신부' },
      date: '2024.08.15',
      views: 756,
      attachments: 1
    },
    content: {
      title: 'K-디지털 플랫폼 2.0 구축 계획 발표',
      description: '과기정통부는 디지털 대전환 시대에 대응하여 K-디지털 플랫폼 2.0 구축을 통해 국가 디지털 경쟁력을 높이겠다고 발표했습니다. AI, 빅데이터, 클라우드 등 핵심 기술 육성에 집중합니다.',
      url: '/press/detail/12343'
    }
  },
  {
    id: 'press-004',
    meta: {
      badge: { text: '외교부' },
      date: '2024.08.14',
      views: 654,
      attachments: 5
    },
    content: {
      title: '한-아세안 특별정상회의 개최 결과',
      description: '외교부는 한-아세안 특별정상회의가 성공적으로 개최되어 양측 간 전략적 동반자 관계를 더욱 강화하는 계기가 되었다고 발표했습니다. 경제협력, 기후변화 대응, 디지털 전환 등에서 협력을 확대하기로 했습니다.',
      url: '/press/detail/12342'
    }
  },
  {
    id: 'press-005',
    meta: {
      badge: { text: '통일부' },
      date: '2024.08.13',
      views: 432,
      attachments: 2
    },
    content: {
      title: '북한이탈주민 정착지원 종합계획 발표',
      description: '통일부는 북한이탈주민의 성공적 정착을 위한 종합적인 지원방안을 마련하여 사회통합에 기여하겠다고 밝혔습니다. 주거, 교육, 취업 등 전 분야에 걸친 정착지원 서비스를 제공합니다.',
      url: '/press/detail/12341'
    }
  }
];

const samplePolicyItems: ListItem[] = [
  {
    id: 'policy-001',
    meta: {
      badge: { text: '경제정책' },
      date: '2024.08.17',
      url: 'https://moef.go.kr'
    },
    content: {
      title: '2024년 하반기 경제정책방향 발표',
      description: '민생경제 안정과 구조개혁을 통한 역동경제 구현에 중점을 둔 하반기 경제정책 방향을 발표했습니다. 물가안정, 고용창출, 산업혁신 등이 주요 내용입니다.',
      url: '/news/policy/economy/2024-h2'
    }
  },
  {
    id: 'policy-002',
    meta: {
      badge: { text: '중소기업' },
      date: '2024.08.10',
      url: 'https://mss.go.kr'
    },
    content: {
      title: '중소기업 지원방안 확대 발표',
      description: '중소기업의 경쟁력 강화와 지속가능한 성장을 위한 종합적인 지원방안을 발표했습니다. 금융지원, 기술개발, 판로개척 등 전방위적 지원을 확대합니다.',
      url: '/news/policy/economy/sme-support'
    }
  },
  {
    id: 'policy-003',
    meta: {
      badge: { text: '디지털경제' },
      date: '2024.08.05',
      url: 'https://msit.go.kr'
    },
    content: {
      title: '디지털 경제 활성화 종합계획 발표',
      description: '디지털 전환 가속화와 혁신성장 동력 확충을 위한 종합계획을 발표했습니다. AI, 빅데이터, IoT 등 핵심 기술 생태계 조성에 집중합니다.',
      url: '/news/policy/economy/digital-plan'
    }
  }
];

const sampleNoticeItems: ListItem[] = [
  {
    id: 'notice-001',
    meta: {
      badge: { text: '중요', className: 'important' },
      date: '2024.08.17',
      views: 2345
    },
    content: {
      title: '개인정보처리방침 개정 안내',
      description: '개인정보 보호 강화를 위해 개인정보처리방침이 개정됩니다. 주요 변경사항을 확인하시기 바랍니다.',
      url: '/notice/privacy-policy'
    }
  },
  {
    id: 'notice-002',
    meta: {
      badge: { text: '시스템' },
      date: '2024.08.15',
      views: 1876
    },
    content: {
      title: '정기점검 일정 안내',
      description: '시스템 안정성 향상을 위한 정기점검이 예정되어 있습니다. 서비스 이용에 참고하시기 바랍니다.',
      url: '/notice/maintenance'
    }
  },
  {
    id: 'notice-003',
    meta: {
      badge: { text: '서비스' },
      date: '2024.08.10',
      views: 1543
    },
    content: {
      title: '새로운 기능 업데이트 안내',
      description: '사용자 편의성 향상을 위한 새로운 기능이 추가되었습니다. 업데이트된 기능을 확인해보세요.',
      url: '/notice/update'
    }
  }
];

// 기본 스토리
export const Default: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '정부 발표자료', url: '/news' },
      { text: '보도자료', url: '/press' },
      { text: '부처별 보도자료', url: '' }
    ],
    page: {
      title: '부처별 보도자료',
      dropdown: {
        current: '2024년',
        items: [
          { text: '2024년', url: '/press/department?year=2024' },
          { text: '2023년', url: '/press/department?year=2023' },
          { text: '2022년', url: '/press/department?year=2022' },
          { text: '2021년', url: '/press/department?year=2021' }
        ]
      }
    },
    controls: {
      searchInfo: {
        totalResults: 2847
      },
      sortOptions: [
        { label: '관련도순', value: 'relevance', active: true },
        { label: '최신순', value: 'date' },
        { label: '인기순', value: 'popular' }
      ],
      pageSize: 10,
      pageSizeOptions: [10, 20, 50]
    },
    items: samplePressReleaseItems,
    pagination: {
      currentPage: 1,
      totalPages: 285,
      hasNext: true,
      hasPrev: false
    },
    currentUrl: '/press/department'
  },
  parameters: {
    docs: {
      description: {
        story: '기본 콘텐츠 리스트 페이지입니다. 부처별 보도자료 리스트를 예시로 보여줍니다.'
      }
    }
  }
};

// 정책뉴스 페이지
export const PolicyNews: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '정부 발표자료', url: '/news' },
      { text: '정책뉴스', url: '/news/policy' },
      { text: '경제정책', url: '' }
    ],
    page: {
      title: '경제정책 발표',
      dropdown: {
        current: '2024년 8월',
        items: [
          { text: '2024년 8월', url: '/news/policy/economy?month=2024-08' },
          { text: '2024년 7월', url: '/news/policy/economy?month=2024-07' },
          { text: '2024년 6월', url: '/news/policy/economy?month=2024-06' }
        ]
      }
    },
    description: '정부의 주요 경제정책 발표 및 브리핑 자료를 제공합니다. 경제동향, 정책방향, 주요 이슈에 대한 정부의 공식 입장을 확인하실 수 있습니다.',
    controls: {
      searchInfo: {
        totalResults: 147
      },
      sortOptions: [
        { label: '관련도순', value: 'relevance', active: true },
        { label: '최신순', value: 'date' },
        { label: '인기순', value: 'popular' }
      ],
      pageSize: 10,
      pageSizeOptions: [10, 20, 50]
    },
    items: samplePolicyItems,
    pagination: {
      currentPage: 1,
      totalPages: 15,
      hasNext: true,
      hasPrev: false
    },
    currentUrl: '/news/policy/economy'
  },
  parameters: {
    docs: {
      description: {
        story: '정책뉴스 페이지입니다. 경제정책 발표 내용을 중심으로 구성되어 있습니다.'
      }
    }
  }
};

// 단순 리스트 페이지
export const SimpleNotice: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '공지사항', url: '/notice' },
      { text: '전체공지', url: '' }
    ],
    page: {
      title: '전체 공지사항'
    },
    description: '사이트 이용과 관련된 공지사항을 안내해드립니다.',
    controls: {
      searchInfo: {
        totalResults: 156
      },
      sortOptions: [
        { label: '최신순', value: 'date', active: true },
        { label: '제목순', value: 'title' },
        { label: '조회순', value: 'views' }
      ],
      pageSize: 10,
      pageSizeOptions: [10, 20, 50]
    },
    items: sampleNoticeItems,
    pagination: {
      currentPage: 1,
      totalPages: 16,
      hasNext: true,
      hasPrev: false
    },
    currentUrl: '/notice/all'
  },
  parameters: {
    docs: {
      description: {
        story: '단순한 리스트 형태의 콘텐츠 페이지입니다. 공지사항 등에 적합한 구조입니다.'
      }
    }
  }
};

// 드롭다운 없는 페이지
export const NoDropdown: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '정부 발표자료', url: '/news' },
      { text: '보도자료', url: '/press' },
      { text: '부처별 보도자료', url: '' }
    ],
    page: {
      title: '부처별 보도자료'
      // dropdown 제거
    },
    controls: {
      searchInfo: {
        totalResults: 2847
      },
      sortOptions: [
        { label: '관련도순', value: 'relevance', active: true },
        { label: '최신순', value: 'date' },
        { label: '인기순', value: 'popular' }
      ]
    },
    items: samplePressReleaseItems.slice(0, 3),
    currentUrl: '/press/department'
  },
  parameters: {
    docs: {
      description: {
        story: '드롭다운이 없는 콘텐츠 리스트 페이지입니다. 페이지 타이틀만 표시됩니다.'
      }
    }
  }
};

// 페이지네이션 없는 페이지
export const NoPagination: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '공지사항', url: '/notice' },
      { text: '긴급공지', url: '' }
    ],
    page: {
      title: '긴급 공지사항'
    },
    items: sampleNoticeItems.slice(0, 2),
    currentUrl: '/notice/urgent'
  },
  parameters: {
    docs: {
      description: {
        story: '컨트롤 및 페이지네이션이 없는 단순한 리스트 페이지입니다.'
      }
    }
  }
};

// 모바일 반응형
export const MobileResponsive: Story = {
  args: {
    ...Default.args
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: '모바일 화면에서의 콘텐츠 리스트 페이지입니다. 반응형 레이아웃이 적용됩니다.'
      }
    }
  }
};