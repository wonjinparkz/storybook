import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ContentsSidebar from './ContentsSidebar';
import { SidebarCategory } from './types';

const meta: Meta<typeof ContentsSidebar> = {
  title: 'Government/C. Components/ContentsSidebar',
  component: ContentsSidebar,
  decorators: [
    (Story) => {
      return (
        <div style={{ height: '500px', overflow: 'hidden' }}>
          {Story()}
        </div>
      );
    },
  ],
  parameters: {
    layout: 'fullscreen', // DOM 구조를 위해 fullscreen으로 변경
    docs: {
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '사이드바 상단에 표시되는 제목'
    },
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
type Story = StoryObj<typeof ContentsSidebar>;

// 기본 메뉴 데이터
const defaultMenuData: SidebarCategory[] = [
  {
    title: '정책뉴스',
    expanded: true,
    items: [
      {
        title: '정부브리핑',
        url: '/news/briefing'
      },
      {
        title: '정책발표',
        url: '/news/policy',
        subitems: [
          { title: '경제정책', url: '/news/policy/economy' },
          { title: '사회정책', url: '/news/policy/society' },
          { title: '외교안보', url: '/news/policy/foreign' },
          { title: '행정개혁', url: '/news/policy/reform' }
        ]
      },
      {
        title: '입법예고',
        url: '/news/legislation'
      }
    ]
  },
  {
    title: '보도자료',
    expanded: false,
    items: [
      {
        title: '부처별 보도자료',
        url: '/press/department',
        subitems: [
          { title: '기획재정부', url: '/press/department/moef' },
          { title: '교육부', url: '/press/department/moe' },
          { title: '과학기술정보통신부', url: '/press/department/msit' },
          { title: '외교부', url: '/press/department/mofa' },
          { title: '통일부', url: '/press/department/mou' }
        ]
      },
      {
        title: '합동브리핑',
        url: '/press/joint'
      },
      {
        title: '기자회견',
        url: '/press/conference'
      }
    ]
  },
  {
    title: '정책자료',
    expanded: false,
    items: [
      {
        title: '정책연구',
        url: '/policy/research'
      },
      {
        title: '백서·연감',
        url: '/policy/whitepaper',
        subitems: [
          { title: '정부업무보고서', url: '/policy/whitepaper/government-report' },
          { title: '부처별 백서', url: '/policy/whitepaper/department' },
          { title: '통계연감', url: '/policy/whitepaper/statistics' }
        ]
      },
      {
        title: '법령정보',
        url: '/policy/law'
      }
    ]
  }
];

// 간단한 테스트용 메뉴 데이터
const simpleMenuData: SidebarCategory[] = [
  {
    title: '테스트 메뉴',
    expanded: true,
    items: [
      {
        title: '첫 번째 메뉴',
        url: '/test/first'
      },
      {
        title: '두 번째 메뉴',
        url: '/test/second'
      }
    ]
  }
];

// 스토리 정의
export const Default: Story = {
  args: {
    title: '정부 발표자료',
    menu: simpleMenuData,
    currentUrl: '/test/first'
  },
  parameters: {
    docs: {
      description: {
        story: '기본 사이드바입니다. 간단한 메뉴 구조로 테스트합니다.'
      }
    }
  }
};

export const FullMenuExample: Story = {
  args: {
    title: '정부 발표자료',
    menu: defaultMenuData.slice(0, 1), // 첫 번째 카테고리만 사용
    currentUrl: '/news/briefing'
  },
  parameters: {
    docs: {
      description: {
        story: '전체 메뉴 구조의 일부를 보여주는 예시입니다.'
      }
    }
  }
};

export const WithSubmenus: Story = {
  args: {
    title: '정부 발표자료',
    menu: [
      {
        title: '정책뉴스',
        expanded: true,
        items: [
          {
            title: '정부브리핑',
            url: '/news/briefing'
          },
          {
            title: '정책발표',
            url: '/news/policy',
            subitems: [
              { title: '경제정책', url: '/news/policy/economy' },
              { title: '사회정책', url: '/news/policy/society' }
            ]
          }
        ]
      }
    ],
    currentUrl: '/news/policy/economy'
  },
  parameters: {
    docs: {
      description: {
        story: '서브메뉴가 있는 사이드바입니다. "정책발표 > 경제정책" 메뉴가 활성화되어 있습니다.'
      }
    }
  }
};