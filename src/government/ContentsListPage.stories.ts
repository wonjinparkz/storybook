import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ContentsListPage from './ContentsListPage';
import { ContentsPageProps } from './types';

const meta: Meta<typeof ContentsListPage> = {
  title: 'Government/D. Page/ContentsListPage',
  component: ContentsListPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### ContentsListPage 컴포넌트

정부 웹사이트의 콘텐츠 리스트 페이지 컴포넌트입니다. 다음과 같은 기능을 제공합니다:

- **좌측 사이드바**: 계층형 네비게이션 메뉴 (최대 3depth)
- **브레드크럼**: 현재 위치 표시
- **페이지 타이틀**: 드롭다운 메뉴 지원
- **콘텐츠 영역**: HTML 콘텐츠 렌더링 (리스트 형태 콘텐츠에 최적화)
- **반응형 디자인**: 모바일/태블릿 지원

#### 주요 특징
- PHP 참조 파일 구조 완전 재현
- 아코디언 방식의 사이드바 메뉴
- 현재 페이지 기반 자동 메뉴 확장
- 접근성 준수 (ARIA 속성)
- 애니메이션 효과
- 드롭다운 메뉴 지원
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

// 기본 콘텐츠 리스트 페이지 데이터
const baseContentsListPageData: ContentsPageProps = {
  sidebar: {
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
    ]
  },
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
  content: `
    <div class="conts-desc">
      <p>각 부처에서 발표하는 주요 정책 및 사업 관련 보도자료를 제공합니다. 최신 정부 정책과 주요 이슈에 대한 공식 입장을 확인하실 수 있습니다.</p>
    </div>
    
    <div class="conts-wrap">
      <h3 class="sec-tit">최신 보도자료</h3>
      
      <div class="board-wrap">
        <div class="board-head">
          <div class="total-info">
            <span class="total">전체 <strong>2,847</strong>건</span>
            <span class="page-info">1/285페이지</span>
          </div>
          <div class="sort-wrap">
            <select class="sort-select">
              <option value="date">등록일순</option>
              <option value="view">조회순</option>
              <option value="title">제목순</option>
            </select>
          </div>
        </div>
        
        <div class="board-list">
          <ul class="board-ul">
            <li class="board-item">
              <div class="item-header">
                <span class="item-category">기획재정부</span>
                <span class="item-date">2024.08.17</span>
              </div>
              <h4 class="item-title">
                <a href="/press/detail/12345">2024년 하반기 경제정책방향 발표</a>
              </h4>
              <p class="item-summary">
                정부는 하반기 경제정책 방향을 발표하며, 민생경제 안정과 구조개혁을 통한 역동경제 구현에 중점을 둔다고 밝혔습니다.
              </p>
              <div class="item-meta">
                <span class="item-views">조회 1,234</span>
                <span class="item-attachments">첨부 3</span>
              </div>
            </li>
            
            <li class="board-item">
              <div class="item-header">
                <span class="item-category">교육부</span>
                <span class="item-date">2024.08.16</span>
              </div>
              <h4 class="item-title">
                <a href="/press/detail/12344">2025학년도 대입제도 개선방안 확정</a>
              </h4>
              <p class="item-summary">
                교육부는 학생과 학부모의 대입 부담을 줄이고 공정성을 강화하기 위한 2025학년도 대입제도 개선방안을 확정했다고 발표했습니다.
              </p>
              <div class="item-meta">
                <span class="item-views">조회 987</span>
                <span class="item-attachments">첨부 2</span>
              </div>
            </li>
            
            <li class="board-item">
              <div class="item-header">
                <span class="item-category">과학기술정보통신부</span>
                <span class="item-date">2024.08.15</span>
              </div>
              <h4 class="item-title">
                <a href="/press/detail/12343">K-디지털 플랫폼 2.0 구축 계획 발표</a>
              </h4>
              <p class="item-summary">
                과기정통부는 디지털 대전환 시대에 대응하여 K-디지털 플랫폼 2.0 구축을 통해 국가 디지털 경쟁력을 높이겠다고 발표했습니다.
              </p>
              <div class="item-meta">
                <span class="item-views">조회 756</span>
                <span class="item-attachments">첨부 1</span>
              </div>
            </li>
            
            <li class="board-item">
              <div class="item-header">
                <span class="item-category">외교부</span>
                <span class="item-date">2024.08.14</span>
              </div>
              <h4 class="item-title">
                <a href="/press/detail/12342">한-아세안 특별정상회의 개최 결과</a>
              </h4>
              <p class="item-summary">
                외교부는 한-아세안 특별정상회의가 성공적으로 개최되어 양측 간 전략적 동반자 관계를 더욱 강화하는 계기가 되었다고 발표했습니다.
              </p>
              <div class="item-meta">
                <span class="item-views">조회 654</span>
                <span class="item-attachments">첨부 5</span>
              </div>
            </li>
            
            <li class="board-item">
              <div class="item-header">
                <span class="item-category">통일부</span>
                <span class="item-date">2024.08.13</span>
              </div>
              <h4 class="item-title">
                <a href="/press/detail/12341">북한이탈주민 정착지원 종합계획 발표</a>
              </h4>
              <p class="item-summary">
                통일부는 북한이탈주민의 성공적 정착을 위한 종합적인 지원방안을 마련하여 사회통합에 기여하겠다고 밝혔습니다.
              </p>
              <div class="item-meta">
                <span class="item-views">조회 432</span>
                <span class="item-attachments">첨부 2</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="pagination-wrap">
          <nav class="pagination" aria-label="페이지 네비게이션">
            <a href="#" class="page-btn prev" aria-label="이전 페이지">이전</a>
            <div class="page-numbers">
              <a href="#" class="page-number active" aria-current="page">1</a>
              <a href="#" class="page-number">2</a>
              <a href="#" class="page-number">3</a>
              <a href="#" class="page-number">4</a>
              <a href="#" class="page-number">5</a>
              <span class="page-dots">...</span>
              <a href="#" class="page-number">285</a>
            </div>
            <a href="#" class="page-btn next" aria-label="다음 페이지">다음</a>
          </nav>
        </div>
      </div>
    </div>
    
    <div class="conts-wrap">
      <h3 class="sec-tit">검색 옵션</h3>
      
      <div class="search-wrap">
        <div class="search-form">
          <div class="search-fields">
            <div class="field-group">
              <label for="search-category">부처선택</label>
              <select id="search-category" class="form-select">
                <option value="">전체부처</option>
                <option value="moef">기획재정부</option>
                <option value="moe">교육부</option>
                <option value="msit">과학기술정보통신부</option>
                <option value="mofa">외교부</option>
                <option value="mou">통일부</option>
              </select>
            </div>
            
            <div class="field-group">
              <label for="search-period">기간선택</label>
              <select id="search-period" class="form-select">
                <option value="">전체기간</option>
                <option value="1week">최근 1주일</option>
                <option value="1month">최근 1개월</option>
                <option value="3month">최근 3개월</option>
                <option value="6month">최근 6개월</option>
                <option value="1year">최근 1년</option>
              </select>
            </div>
            
            <div class="field-group search-input-group">
              <label for="search-keyword">검색어</label>
              <div class="input-with-button">
                <input type="text" id="search-keyword" class="form-input" placeholder="검색어를 입력하세요">
                <button type="button" class="btn primary">검색</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  currentUrl: '/press/department'
};

// 스토리 정의
export const Default: Story = {
  args: baseContentsListPageData,
  parameters: {
    docs: {
      description: {
        story: '기본 콘텐츠 리스트 페이지입니다. 부처별 보도자료 리스트를 예시로 보여줍니다.'
      }
    }
  }
};

export const PolicyNews: Story = {
  args: {
    ...baseContentsListPageData,
    sidebar: {
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
        }
      ]
    },
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
    content: `
      <div class="conts-desc">
        <p>정부의 주요 경제정책 발표 및 브리핑 자료를 제공합니다. 경제동향, 정책방향, 주요 이슈에 대한 정부의 공식 입장을 확인하실 수 있습니다.</p>
      </div>
      
      <div class="conts-wrap">
        <h3 class="sec-tit">이번 달 주요 발표</h3>
        
        <div class="highlight-list">
          <ul class="info-list decimal">
            <li><strong>8월 17일</strong>: 2024년 하반기 경제정책방향 발표</li>
            <li><strong>8월 10일</strong>: 중소기업 지원방안 확대 발표</li>
            <li><strong>8월 5일</strong>: 디지털 경제 활성화 종합계획 발표</li>
            <li><strong>8월 1일</strong>: 8월 경제동향 브리핑</li>
          </ul>
        </div>
      </div>
      
      <div class="conts-wrap">
        <h3 class="sec-tit">관련 부처</h3>
        
        <div class="tbl-wrap">
          <table class="tbl col data">
            <caption>경제정책 관련 부처 및 담당업무</caption>
            <colgroup>
              <col style="width: 30%;">
              <col style="width: 70%;">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">부처명</th>
                <th scope="col">주요 담당업무</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>기획재정부</td>
                <td>거시경제정책, 재정정책, 세제개편, 금융정책</td>
              </tr>
              <tr>
                <td>산업통상자원부</td>
                <td>산업정책, 통상정책, 에너지정책, 중소기업정책</td>
              </tr>
              <tr>
                <td>중소벤처기업부</td>
                <td>중소기업 육성, 창업지원, 벤처기업 지원</td>
              </tr>
              <tr>
                <td>국토교통부</td>
                <td>부동산정책, 건설산업정책, 교통정책</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
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

export const SimpleListPage: Story = {
  args: {
    sidebar: {
      title: '공지사항',
      menu: [
        {
          title: '일반공지',
          expanded: true,
          items: [
            { title: '전체공지', url: '/notice/all' },
            { title: '시스템공지', url: '/notice/system' },
            { title: '서비스공지', url: '/notice/service' }
          ]
        },
        {
          title: '긴급공지',
          expanded: false,
          items: [
            { title: '긴급알림', url: '/notice/urgent' },
            { title: '점검공지', url: '/notice/maintenance' }
          ]
        }
      ]
    },
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '공지사항', url: '/notice' },
      { text: '전체공지', url: '' }
    ],
    page: {
      title: '전체 공지사항'
    },
    content: `
      <div class="conts-desc">
        <p>사이트 이용과 관련된 공지사항을 안내해드립니다.</p>
      </div>
      
      <div class="conts-wrap">
        <h3 class="sec-tit">최신 공지사항</h3>
        
        <div class="simple-list">
          <ul class="info-list decimal">
            <li><strong>[중요]</strong> 개인정보처리방침 개정 안내 (2024.08.17)</li>
            <li><strong>[시스템]</strong> 정기점검 일정 안내 (2024.08.15)</li>
            <li><strong>[서비스]</strong> 새로운 기능 업데이트 안내 (2024.08.10)</li>
            <li>사이트 이용약관 변경 안내 (2024.08.05)</li>
            <li>모바일 앱 버전 업데이트 안내 (2024.08.01)</li>
          </ul>
        </div>
      </div>
    `,
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

export const WithActiveSubmenu: Story = {
  args: {
    ...baseContentsListPageData,
    currentUrl: '/press/department/moef'
  },
  parameters: {
    docs: {
      description: {
        story: '서브메뉴가 활성화된 상태의 콘텐츠 리스트 페이지입니다. "부처별 보도자료 > 기획재정부" 메뉴가 활성화되어 있습니다.'
      }
    }
  }
};

export const NoDropdown: Story = {
  args: {
    ...baseContentsListPageData,
    page: {
      title: '부처별 보도자료'
      // dropdown 제거
    }
  },
  parameters: {
    docs: {
      description: {
        story: '드롭다운이 없는 콘텐츠 리스트 페이지입니다. 페이지 타이틀만 표시됩니다.'
      }
    }
  }
};

export const MobileResponsive: Story = {
  args: baseContentsListPageData,
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