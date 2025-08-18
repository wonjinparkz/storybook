import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ContentsSearchPage from './ContentsSearchPage';
import { ContentsPageProps } from './types';

const meta: Meta<typeof ContentsSearchPage> = {
  title: 'Government/Z. Page/ContentsSearchPage',
  component: ContentsSearchPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### ContentsSearchPage 컴포넌트

정부 웹사이트의 콘텐츠 검색 페이지 컴포넌트입니다. 다음과 같은 기능을 제공합니다:

- **좌측 사이드바**: 계층형 네비게이션 메뉴 (최대 3depth)
- **브레드크럼**: 현재 위치 표시
- **페이지 타이틀**: 드롭다운 메뉴 지원
- **검색 결과**: 검색 키워드와 필터링된 결과 표시
- **반응형 디자인**: 모바일/태블릿 지원

#### 주요 특징
- ContentsListPage 기반으로 검색 기능에 특화
- 검색어 하이라이트 및 결과 개수 표시
- 정렬 및 필터링 옵션
- 접근성 준수 (ARIA 속성)
- 검색 결과 최적화된 리스트 형태
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
type Story = StoryObj<typeof ContentsSearchPage>;

// 기본 콘텐츠 검색 페이지 데이터
const baseContentsSearchPageData: ContentsPageProps = {
  sidebar: {
    title: '통합검색',
    menu: [
      {
        title: '전체검색',
        expanded: true,
        items: [
          {
            title: '통합검색',
            url: '/search/all'
          },
          {
            title: '상세검색',
            url: '/search/advanced'
          },
          {
            title: '분야별 검색',
            url: '/search/category',
            subitems: [
              { title: '정책자료', url: '/search/category/policy' },
              { title: '보도자료', url: '/search/category/press' },
              { title: '법령정보', url: '/search/category/law' },
              { title: '통계자료', url: '/search/category/statistics' }
            ]
          }
        ]
      },
      {
        title: '인기검색어',
        expanded: false,
        items: [
          {
            title: '실시간',
            url: '/search/trending/realtime'
          },
          {
            title: '일간',
            url: '/search/trending/daily'
          },
          {
            title: '주간',
            url: '/search/trending/weekly'
          }
        ]
      },
      {
        title: '검색도움말',
        expanded: false,
        items: [
          {
            title: '검색 가이드',
            url: '/search/help/guide'
          },
          {
            title: 'FAQ',
            url: '/search/help/faq'
          }
        ]
      }
    ]
  },
  breadcrumb: [
    { text: '홈', url: '/' },
    { text: '통합검색', url: '/search' },
    { text: '검색결과', url: '' }
  ],
  page: {
    title: '검색결과',
    dropdown: {
      current: '전체',
      items: [
        { text: '전체', url: '/search?category=all' },
        { text: '정책자료', url: '/search?category=policy' },
        { text: '보도자료', url: '/search?category=press' },
        { text: '법령정보', url: '/search?category=law' },
        { text: '통계자료', url: '/search?category=statistics' }
      ]
    }
  },
  content: `
    <div class="conts-wrap">
      <div class="search-form-area">
        <div class="search-input-wrap">
          <input type="text" class="search-input" value="디지털 전환" placeholder="검색어를 입력하세요">
          <button type="button" class="btn search-btn">검색</button>
        </div>
        <div class="search-options">
          <label class="checkbox-label">
            <input type="checkbox" checked> 제목+내용
          </label>
          <label class="checkbox-label">
            <input type="checkbox"> 첨부파일 포함
          </label>
        </div>
      </div>
    </div>

    <div class="conts-wrap">
      <div class="list-wrap">
        <div class="search-list-top type2">
          <div class="sch-info" role="region" aria-live="polite">
            적용된 검색어 '<span class="keyword">디지털 전환</span>' / 검색 결과 <span class="keyword">1,247</span>개
          </div>
          <ul class="sch-sort">
            <li class="li1 m-hide">
              <strong class="sort-label"><label for="search_result_count">목록 표시 개수</label></strong>
              <select class="sort-select" id="search_result_count">
                <option>10개</option>
                <option>20개</option>
                <option>50개</option>
              </select>
            </li>
            <li class="li2">
              <strong class="sort-label"><label for="sort">정렬기준</label></strong>
              <div class="w-sort-btn">
                <button type="button" class="active">관련도순</button>
                <button type="button">최신순</button>
                <button type="button">인기순</button>
              </div>
              <div class="m-sort-btn">
                <button type="button" class="btn btn-txt ico-filter">
                  <span class="span">필터</span>
                  <span class="num">3</span>
                </button>
                <select class="sort-select" id="sort">
                  <option>관련도순</option>
                  <option>최신순</option>
                  <option>인기순</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        
        <ul class="info-list total-search-list">
          <li class="li">
            <p class="info-top">
              <span class="badge">과학기술정보통신부</span>
              <span class="i-date">2024.08.15</span>
            </p>
            <div class="info-body">
              <a href="/policy/digital-transformation-plan">
                <p class="tit w-hide"><span class="keyword">디지털 전환</span> 가속화 종합계획 발표</p>
                <div class="in">
                  <div class="text">
                    <p class="tit m-hide"><span class="keyword">디지털 전환</span> 가속화 종합계획 발표</p>
                    <p class="txt">
                      정부는 <span class="keyword">디지털 전환</span> 가속화를 통한 국가 경쟁력 강화를 위해 종합계획을 발표했습니다. 
                      AI, 빅데이터, 클라우드 등 핵심 기술을 활용한 <span class="keyword">디지털</span> 혁신을 추진합니다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="info-btm">
              <div>
                <a href="https://msit.go.kr/digital-plan" target="_blank" class="url-link">https://msit.go.kr/digital-plan</a>
              </div>
              <div>
                <div class="btn-area">
                  <button type="button" class="btn sm btn-txt ico-go">바로가기</button>
                </div>
              </div>
            </div>
          </li>
          
          <li class="li">
            <p class="info-top">
              <span class="badge">기획재정부</span>
              <span class="i-date">2024.08.12</span>
            </p>
            <div class="info-body">
              <a href="/policy/digital-economy-policy">
                <p class="tit w-hide"><span class="keyword">디지털</span> 경제 정책 방향</p>
                <div class="in">
                  <div class="text">
                    <p class="tit m-hide"><span class="keyword">디지털</span> 경제 정책 방향</p>
                    <p class="txt">
                      <span class="keyword">디지털</span> 경제 활성화를 위한 정책 방향을 제시하고, 
                      <span class="keyword">디지털 전환</span>을 통한 경제 혁신 동력을 확충하겠다고 발표했습니다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="info-btm">
              <div>
                <span class="url-link">조회 2,145 | 첨부 4</span>
              </div>
              <div>
                <div class="btn-area">
                  <button type="button" class="btn sm btn-txt ico-go">바로가기</button>
                </div>
              </div>
            </div>
          </li>
          
          <li class="li">
            <p class="info-top">
              <span class="badge">중소벤처기업부</span>
              <span class="i-date">2024.08.10</span>
            </p>
            <div class="info-body">
              <a href="/policy/sme-digital-support">
                <p class="tit w-hide">중소기업 <span class="keyword">디지털 전환</span> 지원방안</p>
                <div class="in">
                  <div class="text">
                    <p class="tit m-hide">중소기업 <span class="keyword">디지털 전환</span> 지원방안</p>
                    <p class="txt">
                      중소기업의 <span class="keyword">디지털 전환</span>을 지원하기 위한 종합적인 방안을 마련했습니다. 
                      <span class="keyword">디지털</span> 기술 도입과 인력 양성에 집중 지원하겠습니다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="info-btm">
              <div>
                <span class="url-link">조회 1,876 | 첨부 2</span>
              </div>
              <div>
                <div class="btn-area">
                  <button type="button" class="btn sm btn-txt ico-go">바로가기</button>
                </div>
              </div>
            </div>
          </li>
          
          <li class="li">
            <p class="info-top">
              <span class="badge">교육부</span>
              <span class="i-date">2024.08.08</span>
            </p>
            <div class="info-body">
              <a href="/policy/digital-education">
                <p class="tit w-hide"><span class="keyword">디지털</span> 교육 혁신 방안</p>
                <div class="in">
                  <div class="text">
                    <p class="tit m-hide"><span class="keyword">디지털</span> 교육 혁신 방안</p>
                    <p class="txt">
                      교육 분야의 <span class="keyword">디지털 전환</span>을 위한 혁신 방안을 발표했습니다. 
                      AI 기반 맞춤형 학습과 <span class="keyword">디지털</span> 리터러시 교육을 강화합니다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="info-btm">
              <div>
                <span class="url-link">조회 1,543 | 첨부 3</span>
              </div>
              <div>
                <div class="btn-area">
                  <button type="button" class="btn sm btn-txt ico-go">바로가기</button>
                </div>
              </div>
            </div>
          </li>
          
          <li class="li">
            <p class="info-top">
              <span class="badge">산업통상자원부</span>
              <span class="i-date">2024.08.05</span>
            </p>
            <div class="info-body">
              <a href="/policy/industry-digital">
                <p class="tit w-hide">제조업 <span class="keyword">디지털 전환</span> 로드맵</p>
                <div class="in">
                  <div class="text">
                    <p class="tit m-hide">제조업 <span class="keyword">디지털 전환</span> 로드맵</p>
                    <p class="txt">
                      제조업의 <span class="keyword">디지털 전환</span>을 위한 로드맵을 제시하고, 
                      스마트팩토리 확산과 <span class="keyword">디지털</span> 혁신을 지원하겠다고 밝혔습니다.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="info-btm">
              <div>
                <span class="url-link">조회 1,321 | 첨부 5</span>
              </div>
              <div>
                <div class="btn-area">
                  <button type="button" class="btn sm btn-txt ico-go">바로가기</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        
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
              <a href="#" class="page-number">125</a>
            </div>
            <a href="#" class="page-btn next" aria-label="다음 페이지">다음</a>
          </nav>
        </div>
      </div>
    </div>
  `,
  currentUrl: '/search'
};

// 스토리 정의
export const Default: Story = {
  args: baseContentsSearchPageData,
  parameters: {
    docs: {
      description: {
        story: '기본 콘텐츠 검색 페이지입니다. "디지털 전환" 검색 결과를 예시로 보여줍니다.'
      }
    }
  }
};

export const AdvancedSearch: Story = {
  args: {
    ...baseContentsSearchPageData,
    sidebar: {
      title: '통합검색',
      menu: [
        {
          title: '전체검색',
          expanded: true,
          items: [
            {
              title: '통합검색',
              url: '/search/all'
            },
            {
              title: '상세검색',
              url: '/search/advanced'
            },
            {
              title: '분야별 검색',
              url: '/search/category',
              subitems: [
                { title: '정책자료', url: '/search/category/policy' },
                { title: '보도자료', url: '/search/category/press' },
                { title: '법령정보', url: '/search/category/law' },
                { title: '통계자료', url: '/search/category/statistics' }
              ]
            }
          ]
        }
      ]
    },
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '통합검색', url: '/search' },
      { text: '상세검색', url: '/search/advanced' },
      { text: '검색결과', url: '' }
    ],
    page: {
      title: '상세검색 결과',
      dropdown: {
        current: '정책자료',
        items: [
          { text: '전체', url: '/search/advanced?category=all' },
          { text: '정책자료', url: '/search/advanced?category=policy' },
          { text: '보도자료', url: '/search/advanced?category=press' },
          { text: '법령정보', url: '/search/advanced?category=law' }
        ]
      }
    },
    content: `
      <div class="conts-wrap">
        <div class="advanced-search-form">
          <div class="search-field-group">
            <label for="all-words">모든 단어 포함</label>
            <input type="text" id="all-words" value="기후변화" placeholder="모든 단어가 포함된 문서">
          </div>
          <div class="search-field-group">
            <label for="exact-phrase">정확한 구문</label>
            <input type="text" id="exact-phrase" value="탄소중립" placeholder="정확한 구문이 포함된 문서">
          </div>
          <div class="search-field-group">
            <label for="any-words">다음 중 아무 단어</label>
            <input type="text" id="any-words" placeholder="이 중 아무 단어나 포함된 문서">
          </div>
          <div class="search-field-group">
            <label for="exclude-words">제외할 단어</label>
            <input type="text" id="exclude-words" placeholder="이 단어는 제외">
          </div>
          <div class="search-options-row">
            <div class="field-group">
              <label for="file-type">파일형식</label>
              <select id="file-type">
                <option value="">전체</option>
                <option value="pdf">PDF</option>
                <option value="doc">DOC</option>
                <option value="hwp">HWP</option>
              </select>
            </div>
            <div class="field-group">
              <label for="date-range">기간</label>
              <select id="date-range">
                <option value="">전체기간</option>
                <option value="1month">최근 1개월</option>
                <option value="3month">최근 3개월</option>
                <option value="1year">최근 1년</option>
              </select>
            </div>
          </div>
          <div class="search-btn-area">
            <button type="button" class="btn primary">검색</button>
            <button type="button" class="btn secondary">초기화</button>
          </div>
        </div>
      </div>

      <div class="conts-wrap">
        <div class="list-wrap">
          <div class="search-list-top type2">
            <div class="sch-info" role="region" aria-live="polite">
              적용된 검색어 '<span class="keyword">기후변화</span>' + '<span class="keyword">탄소중립</span>' / 검색 결과 <span class="keyword">847</span>개
            </div>
            <ul class="sch-sort">
              <li class="li1 m-hide">
                <strong class="sort-label"><label for="search_result_count2">목록 표시 개수</label></strong>
                <select class="sort-select" id="search_result_count2">
                  <option>10개</option>
                  <option>20개</option>
                  <option>50개</option>
                </select>
              </li>
              <li class="li2">
                <strong class="sort-label"><label for="sort2">정렬기준</label></strong>
                <div class="w-sort-btn">
                  <button type="button" class="active">관련도순</button>
                  <button type="button">최신순</button>
                  <button type="button">인기순</button>
                </div>
                <div class="m-sort-btn">
                  <button type="button" class="btn btn-txt ico-filter">
                    <span class="span">필터</span>
                    <span class="num">5</span>
                  </button>
                  <select class="sort-select" id="sort2">
                    <option>관련도순</option>
                    <option>최신순</option>
                    <option>인기순</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          
          <ul class="info-list total-search-list">
            <li class="li">
              <p class="info-top">
                <span class="badge">환경부</span>
                <span class="i-date">2024.08.14</span>
              </p>
              <div class="info-body">
                <a href="/policy/carbon-neutral-plan">
                  <p class="tit w-hide"><span class="keyword">탄소중립</span> 추진 전략 및 <span class="keyword">기후변화</span> 대응방안</p>
                  <div class="in">
                    <div class="text">
                      <p class="tit m-hide"><span class="keyword">탄소중립</span> 추진 전략 및 <span class="keyword">기후변화</span> 대응방안</p>
                      <p class="txt">
                        2050 <span class="keyword">탄소중립</span> 달성을 위한 추진 전략을 발표하고, 
                        <span class="keyword">기후변화</span> 대응을 위한 종합적인 정책 방안을 제시했습니다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="info-btm">
                <div>
                  <a href="https://me.go.kr/carbon-neutral" target="_blank" class="url-link">https://me.go.kr/carbon-neutral</a>
                </div>
                <div>
                  <div class="btn-area">
                    <button type="button" class="btn sm btn-txt ico-go">바로가기</button>
                  </div>
                </div>
              </div>
            </li>
            
            <li class="li">
              <p class="info-top">
                <span class="badge">산업통상자원부</span>
                <span class="i-date">2024.08.11</span>
              </p>
              <div class="info-body">
                <a href="/policy/green-energy">
                  <p class="tit w-hide">녹색에너지 전환과 <span class="keyword">기후변화</span> 대응</p>
                  <div class="in">
                    <div class="text">
                      <p class="tit m-hide">녹색에너지 전환과 <span class="keyword">기후변화</span> 대응</p>
                      <p class="txt">
                        <span class="keyword">탄소중립</span> 실현을 위한 녹색에너지 전환 로드맵을 발표하고, 
                        재생에너지 확대를 통한 <span class="keyword">기후변화</span> 대응을 강화하겠다고 밝혔습니다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="info-btm">
                <div>
                  <span class="url-link">조회 1,654 | 첨부 3</span>
                </div>
                <div>
                  <div class="btn-area">
                    <button type="button" class="btn sm btn-txt ico-go">바로가기</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `,
    currentUrl: '/search/advanced'
  },
  parameters: {
    docs: {
      description: {
        story: '상세검색 페이지입니다. 복합 검색어 조건과 필터링 옵션을 제공합니다.'
      }
    }
  }
};

export const PolicySearch: Story = {
  args: {
    ...baseContentsSearchPageData,
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '통합검색', url: '/search' },
      { text: '분야별 검색', url: '/search/category' },
      { text: '정책자료', url: '' }
    ],
    page: {
      title: '정책자료 검색',
      dropdown: {
        current: '전체정책',
        items: [
          { text: '전체정책', url: '/search/category/policy?type=all' },
          { text: '경제정책', url: '/search/category/policy?type=economy' },
          { text: '사회정책', url: '/search/category/policy?type=society' },
          { text: '외교안보', url: '/search/category/policy?type=foreign' }
        ]
      }
    },
    content: `
      <div class="conts-wrap">
        <div class="category-filter">
          <div class="filter-title">정책 분야</div>
          <div class="filter-options">
            <label class="checkbox-label">
              <input type="checkbox" checked> 경제 (245)
            </label>
            <label class="checkbox-label">
              <input type="checkbox"> 사회 (189)
            </label>
            <label class="checkbox-label">
              <input type="checkbox"> 외교 (67)
            </label>
            <label class="checkbox-label">
              <input type="checkbox"> 환경 (134)
            </label>
          </div>
        </div>
      </div>

      <div class="conts-wrap">
        <div class="list-wrap">
          <div class="search-list-top type2">
            <div class="sch-info" role="region" aria-live="polite">
              분야 '<span class="keyword">경제정책</span>' / 검색 결과 <span class="keyword">245</span>개
            </div>
            <ul class="sch-sort">
              <li class="li1 m-hide">
                <strong class="sort-label"><label for="search_result_count3">목록 표시 개수</label></strong>
                <select class="sort-select" id="search_result_count3">
                  <option>10개</option>
                  <option>20개</option>
                  <option>50개</option>
                </select>
              </li>
              <li class="li2">
                <strong class="sort-label"><label for="sort3">정렬기준</label></strong>
                <div class="w-sort-btn">
                  <button type="button" class="active">최신순</button>
                  <button type="button">제목순</button>
                  <button type="button">조회순</button>
                </div>
                <div class="m-sort-btn">
                  <button type="button" class="btn btn-txt ico-filter">
                    <span class="span">필터</span>
                    <span class="num">1</span>
                  </button>
                  <select class="sort-select" id="sort3">
                    <option>최신순</option>
                    <option>제목순</option>
                    <option>조회순</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          
          <ul class="info-list total-search-list">
            <li class="li">
              <p class="info-top">
                <span class="badge">기획재정부</span>
                <span class="i-date">2024.08.17</span>
              </p>
              <div class="info-body">
                <a href="/policy/economy-2024-h2">
                  <p class="tit w-hide">2024년 하반기 <span class="keyword">경제정책</span> 방향</p>
                  <div class="in">
                    <div class="text">
                      <p class="tit m-hide">2024년 하반기 <span class="keyword">경제정책</span> 방향</p>
                      <p class="txt">
                        하반기 <span class="keyword">경제정책</span> 운용 방향을 발표하며, 
                        민생안정과 성장동력 확충에 중점을 둔 정책을 추진하겠다고 밝혔습니다.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="info-btm">
                <div>
                  <span class="url-link">조회 3,245 | 첨부 7</span>
                </div>
                <div>
                  <div class="btn-area">
                    <button type="button" class="btn sm btn-txt ico-go">바로가기</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `,
    currentUrl: '/search/category/policy'
  },
  parameters: {
    docs: {
      description: {
        story: '정책자료 분야별 검색 페이지입니다. 카테고리 필터링 기능을 제공합니다.'
      }
    }
  }
};

export const NoResults: Story = {
  args: {
    ...baseContentsSearchPageData,
    content: `
      <div class="conts-wrap">
        <div class="search-form-area">
          <div class="search-input-wrap">
            <input type="text" class="search-input" value="존재하지않는검색어12345" placeholder="검색어를 입력하세요">
            <button type="button" class="btn search-btn">검색</button>
          </div>
        </div>
      </div>

      <div class="conts-wrap">
        <div class="no-results">
          <div class="no-results-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <h3 class="no-results-title">검색 결과가 없습니다</h3>
          <p class="no-results-desc">
            '<span class="keyword">존재하지않는검색어12345</span>'에 대한 검색 결과가 없습니다.<br>
            다른 검색어로 다시 검색해보세요.
          </p>
          <div class="search-suggestions">
            <h4>검색 도움말</h4>
            <ul>
              <li>• 단어의 철자가 정확한지 확인해보세요</li>
              <li>• 보다 일반적인 검색어로 검색해보세요</li>
              <li>• 검색어의 단어 수를 줄여보세요</li>
              <li>• 유사한 의미의 다른 검색어를 사용해보세요</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  parameters: {
    docs: {
      description: {
        story: '검색 결과가 없는 경우의 페이지입니다. 검색 도움말을 제공합니다.'
      }
    }
  }
};

export const MobileResponsive: Story = {
  args: baseContentsSearchPageData,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: '모바일 화면에서의 콘텐츠 검색 페이지입니다. 반응형 레이아웃이 적용됩니다.'
      }
    }
  }
};