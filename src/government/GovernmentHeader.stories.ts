import type { Meta, StoryObj } from '@storybook/react-webpack5';
import GovernmentHeader from './GovernmentHeader';

const meta: Meta<typeof GovernmentHeader> = {
  title: 'Government/B. Header & Footer/Header',
  component: GovernmentHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 예제 데이터
const mockEtcMenus = {
  topLinks: [
    { url: '#', text: '화면크기', icon: '' },
    { url: '#', text: 'Language', icon: '' },
    { url: '#', text: '즐겨찾기', icon: 'ico-star' },
  ],
  dropdowns: [
    {
      title: '관련사이트',
      class: 'related-sites',
      items: [
        { url: '#', text: '정부24', class: '', icon: '' },
        { url: '#', text: '국민신문고', class: '', icon: '' },
        { url: '#', text: '청와대', class: '', icon: 'ico-go', target: '_blank' },
      ],
      footer: {
        text: '더보기',
        icon: 'ico-plus'
      }
    },
    {
      title: '빠른서비스',
      class: 'quick-services',
      items: [
        { url: '#', text: '민원서류 발급', class: '', icon: '' },
        { url: '#', text: '온라인 신고', class: '', icon: '' },
        { url: '#', text: '정부 공지사항', class: '', icon: '' },
      ]
    }
  ]
};

const mockSiteInfo = {
  homepage_url: '/',
  title: '고양이관리위원회',
  slogan_image: '/assets/head_logo_slogan.svg',
  slogan: '고양이와 함께하는 행복한 사회'
};

const mockMyGovMenu = {
  user_name: '홍길동',
  items: [
    { url: '#', text: '내 정보' },
    { url: '#', text: '신청 내역' },
    { url: '#', text: '관심 서비스' },
    { url: '#', text: '알림 설정' },
  ]
};

const mockMenuStructure = [
  {
    title: '고양이 등록',
    url: '/cat-registration',
    submenu: [
      {
        id: 'cat-reg-basic',
        title: '기본 등록',
        url: '/cat-registration/basic',
        type: 'internal' as const,
        items: [
          { title: '새 고양이 등록', url: '/cat-registration/basic/new' },
          { title: '등록 현황 조회', url: '/cat-registration/basic/status' },
          { title: '등록증 재발급', url: '/cat-registration/basic/reissue' },
        ]
      },
      {
        id: 'cat-reg-special',
        title: '특수 고양이',
        url: '/cat-registration/special',
        type: 'internal' as const,
        items: [
          { title: '품종묘 등록', url: '/cat-registration/special/breed' },
          { title: '의료진 고양이', url: '/cat-registration/special/medical' },
          { title: '구조묘 등록', url: '/cat-registration/special/rescue' },
        ]
      },
      {
        id: 'cat-reg-guide',
        title: '등록 안내',
        url: '/cat-registration/guide',
        type: 'internal' as const,
        items: [
          { title: '등록 절차', url: '/cat-registration/guide/process' },
          { title: '필요 서류', url: '/cat-registration/guide/documents' },
          { title: '수수료 안내', url: '/cat-registration/guide/fees' },
        ]
      }
    ]
  },
  {
    title: '고양이 관리',
    url: '/cat-management',
    submenu: [
      {
        id: 'cat-mgmt-health',
        title: '건강 관리',
        url: '/cat-management/health',
        type: 'internal' as const,
        items: [
          { title: '예방접종', url: '/cat-management/health/vaccination' },
          { title: '건강검진', url: '/cat-management/health/checkup' },
          { title: '질병 신고', url: '/cat-management/health/disease-report' },
          { title: '응급처치', url: '/cat-management/health/emergency' },
        ]
      },
      {
        id: 'cat-mgmt-safety',
        title: '안전 관리',
        url: '/cat-management/safety',
        type: 'internal' as const,
        items: [
          { title: '실종신고', url: '/cat-management/safety/missing' },
          { title: '안전 교육', url: '/cat-management/safety/education' },
          { title: '사고 신고', url: '/cat-management/safety/accident-report' },
        ],
        banner: {
          badge: 'NEW',
          badge_class: 'badge-new',
          url: '/cat-management/safety/campaign',
          text: '고양이 안전 캠페인'
        }
      }
    ]
  },
  {
    title: '정책정보',
    url: '/policy',
    submenu: [
      {
        id: 'policy-news',
        title: '정책 뉴스',
        url: '/policy/news',
        type: 'internal' as const,
        items: [
          { title: '공지사항', url: '/policy/news/notices' },
          { title: '정책 발표', url: '/policy/news/announcements' },
          { title: '보도자료', url: '/policy/news/press' },
        ]
      },
      {
        id: 'policy-data',
        title: '통계자료',
        url: '/policy/data',
        type: 'internal' as const,
        items: [
          { title: '등록 현황', url: '/policy/data/registration-stats' },
          { title: '건강 통계', url: '/policy/data/health-stats' },
          { title: '연간 보고서', url: '/policy/data/annual-report' },
        ]
      },
      {
        id: 'policy-external',
        title: '관련 기관',
        url: 'https://www.animal.go.kr',
        type: 'external' as const,
      }
    ]
  },
  {
    title: '참여소통',
    url: '/communication',
    submenu: [
      {
        id: 'comm-community',
        title: '커뮤니티',
        url: '/communication/community',
        type: 'internal' as const,
        items: [
          { title: '자유게시판', url: '/communication/community/free' },
          { title: '질문답변', url: '/communication/community/qna' },
          { title: '후기공유', url: '/communication/community/reviews' },
        ]
      },
      {
        id: 'comm-feedback',
        title: '의견수렴',
        url: '/communication/feedback',
        type: 'internal' as const,
        items: [
          { title: '정책제안', url: '/communication/feedback/proposals' },
          { title: '설문조사', url: '/communication/feedback/surveys' },
          { title: '온라인토론', url: '/communication/feedback/discussions' },
        ]
      }
    ]
  }
];

export const LoggedOut: Story = {
  args: {
    etcMenus: mockEtcMenus,
    siteInfo: mockSiteInfo,
    isLoggedIn: false,
    menuStructure: mockMenuStructure,
    submenuInteraction: 'hover',
  },
};

export const LoggedIn: Story = {
  args: {
    etcMenus: mockEtcMenus,
    siteInfo: mockSiteInfo,
    isLoggedIn: true,
    myGovMenu: mockMyGovMenu,
    menuStructure: mockMenuStructure,
    submenuInteraction: 'hover',
  },
};

export const ClickMode: Story = {
  args: {
    etcMenus: mockEtcMenus,
    siteInfo: mockSiteInfo,
    isLoggedIn: false,
    menuStructure: mockMenuStructure,
    submenuInteraction: 'click',
  },
};

export const MobileView: Story = {
  args: {
    etcMenus: mockEtcMenus,
    siteInfo: mockSiteInfo,
    isLoggedIn: false,
    menuStructure: mockMenuStructure,
    submenuInteraction: 'hover',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  args: {
    etcMenus: mockEtcMenus,
    siteInfo: mockSiteInfo,
    isLoggedIn: true,
    myGovMenu: mockMyGovMenu,
    menuStructure: mockMenuStructure,
    submenuInteraction: 'hover',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};