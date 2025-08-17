import type { Meta, StoryObj } from '@storybook/react';
import ContentsPage from './ContentsPage';
import { ContentsPageProps } from './types';

const meta: Meta<typeof ContentsPage> = {
  title: 'Government/Pages/ContentsPage',
  component: ContentsPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### ContentsPage 컴포넌트

정부 웹사이트의 콘텐츠 페이지 컴포넌트입니다. 다음과 같은 기능을 제공합니다:

- **좌측 사이드바**: 계층형 네비게이션 메뉴 (최대 3depth)
- **브레드크럼**: 현재 위치 표시
- **페이지 타이틀**: 드롭다운 메뉴 지원
- **콘텐츠 영역**: HTML 콘텐츠 렌더링
- **반응형 디자인**: 모바일/태블릿 지원

#### 주요 특징
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
type Story = StoryObj<typeof ContentsPage>;

// 기본 콘텐츠 페이지 데이터
const baseContentsPageData: ContentsPageProps = {
  sidebar: {
    title: '정부 서비스',
    menu: [
      {
        title: '생활 서비스',
        expanded: true,
        items: [
          {
            title: '출생·육아',
            url: '/services/birth-child'
          },
          {
            title: '교육',
            url: '/services/education',
            subitems: [
              { title: '유아교육', url: '/services/education/early-childhood' },
              { title: '초중등교육', url: '/services/education/primary-secondary' },
              { title: '고등교육', url: '/services/education/higher' },
              { title: '평생교육', url: '/services/education/lifelong' }
            ]
          },
          {
            title: '취업·창업',
            url: '/services/employment'
          },
          {
            title: '주거·부동산',
            url: '/services/housing',
            subitems: [
              { title: '임대주택', url: '/services/housing/rental' },
              { title: '분양주택', url: '/services/housing/sale' },
              { title: '부동산 거래', url: '/services/housing/transaction' }
            ]
          }
        ]
      },
      {
        title: '복지 서비스',
        expanded: false,
        items: [
          {
            title: '사회보장',
            url: '/welfare/social-security',
            subitems: [
              { title: '기초생활보장', url: '/welfare/social-security/basic-living' },
              { title: '긴급복지지원', url: '/welfare/social-security/emergency' },
              { title: '자활지원', url: '/welfare/social-security/self-support' }
            ]
          },
          {
            title: '장애인복지',
            url: '/welfare/disability'
          },
          {
            title: '노인복지',
            url: '/welfare/elderly',
            subitems: [
              { title: '노인돌봄', url: '/welfare/elderly/care' },
              { title: '경로우대', url: '/welfare/elderly/preferential' },
              { title: '노인일자리', url: '/welfare/elderly/employment' }
            ]
          },
          {
            title: '아동·청소년',
            url: '/welfare/youth'
          }
        ]
      },
      {
        title: '행정 서비스',
        expanded: false,
        items: [
          {
            title: '민원신청',
            url: '/admin/civil-petition'
          },
          {
            title: '증명서 발급',
            url: '/admin/certificate',
            subitems: [
              { title: '주민등록등본', url: '/admin/certificate/resident-registration' },
              { title: '가족관계증명서', url: '/admin/certificate/family-relation' },
              { title: '출입국사실증명서', url: '/admin/certificate/immigration' }
            ]
          },
          {
            title: '보건·의료',
            url: '/admin/health'
          }
        ]
      }
    ]
  },
  breadcrumb: [
    { text: '홈', url: '/' },
    { text: '정부 서비스', url: '/services' },
    { text: '복지 서비스', url: '/welfare' },
    { text: '노인복지', url: '' }
  ],
  page: {
    title: '노인복지 서비스',
    dropdown: {
      current: '2024년도',
      items: [
        { text: '2024년도', url: '/welfare/elderly?year=2024' },
        { text: '2023년도', url: '/welfare/elderly?year=2023' },
        { text: '2022년도', url: '/welfare/elderly?year=2022' }
      ]
    }
  },
  content: `
    <div class="conts-desc">
      <p>노인복지 서비스는 만 65세 이상 어르신들의 건강하고 안정적인 노후생활을 지원하기 위한 다양한 정부 지원 프로그램입니다.</p>
    </div>
    
    <div class="conts-wrap">
      <h3 class="sec-tit">주요 서비스</h3>
      
      <div class="card-wrap">
        <div class="card-item">
          <h4 class="card-tit">노인돌봄서비스</h4>
          <p class="card-desc">혼자 힘으로 일상생활을 영위하기 어려운 노인에게 가사·활동 지원 등 종합적인 돌봄서비스를 제공합니다.</p>
          <div class="btn-wrap">
            <a href="/welfare/elderly/care" class="btn primary sm">자세히보기</a>
          </div>
        </div>
        
        <div class="card-item">
          <h4 class="card-tit">노인일자리사업</h4>
          <p class="card-desc">어르신의 경험과 능력을 활용한 다양한 일자리를 제공하여 활기찬 노후생활을 지원합니다.</p>
          <div class="btn-wrap">
            <a href="/welfare/elderly/employment" class="btn primary sm">자세히보기</a>
          </div>
        </div>
        
        <div class="card-item">
          <h4 class="card-tit">경로우대제도</h4>
          <p class="card-desc">대중교통, 공공시설 이용 시 요금 할인 등 다양한 경로우대 혜택을 제공합니다.</p>
          <div class="btn-wrap">
            <a href="/welfare/elderly/preferential" class="btn primary sm">자세히보기</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="conts-wrap">
      <h3 class="sec-tit">신청 안내</h3>
      
      <div class="tbl-wrap">
        <table class="tbl col data">
          <caption>노인복지 서비스 신청 안내</caption>
          <colgroup>
            <col style="width: 25%;">
            <col style="width: 25%;">
            <col style="width: 25%;">
            <col style="width: 25%;">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">서비스명</th>
              <th scope="col">신청대상</th>
              <th scope="col">신청방법</th>
              <th scope="col">문의처</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>노인돌봄서비스</td>
              <td>만 65세 이상 기초생활수급자 등</td>
              <td>읍·면·동 주민센터</td>
              <td>1577-1389</td>
            </tr>
            <tr>
              <td>노인일자리사업</td>
              <td>만 60세 이상 (일부 65세 이상)</td>
              <td>대한노인회, 시니어클럽 등</td>
              <td>1544-9999</td>
            </tr>
            <tr>
              <td>기초연금</td>
              <td>만 65세 이상 소득하위 70%</td>
              <td>국민연금공단, 읍·면·동</td>
              <td>1355</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="conts-wrap">
      <h3 class="sec-tit">관련 법령</h3>
      <ul class="info-list decimal">
        <li>노인복지법</li>
        <li>기초연금법</li>
        <li>노인장기요양보험법</li>
        <li>고용상 연령차별금지 및 고령자고용촉진에 관한 법률</li>
      </ul>
    </div>
  `,
  currentUrl: '/welfare/elderly'
};

// 스토리 정의
export const Default: Story = {
  args: baseContentsPageData,
  parameters: {
    docs: {
      description: {
        story: '기본 콘텐츠 페이지입니다. 노인복지 서비스 페이지를 예시로 보여줍니다.'
      }
    }
  }
};

export const WithActiveSubmenu: Story = {
  args: {
    ...baseContentsPageData,
    currentUrl: '/services/education/higher'
  },
  parameters: {
    docs: {
      description: {
        story: '서브메뉴가 활성화된 상태의 콘텐츠 페이지입니다. "교육 > 고등교육" 메뉴가 활성화되어 있습니다.'
      }
    }
  }
};

export const SimpleMenuStructure: Story = {
  args: {
    sidebar: {
      title: '간단한 메뉴',
      menu: [
        {
          title: '일반 정보',
          expanded: true,
          items: [
            { title: '소개', url: '/intro' },
            { title: '연혁', url: '/history' },
            { title: '조직도', url: '/organization' }
          ]
        },
        {
          title: '서비스',
          expanded: false,
          items: [
            { title: '온라인 서비스', url: '/services/online' },
            { title: '오프라인 서비스', url: '/services/offline' }
          ]
        }
      ]
    },
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '소개', url: '' }
    ],
    page: {
      title: '기관 소개'
    },
    content: `
      <div class="conts-desc">
        <p>우리 기관은 국민의 편익 증진을 위해 최선을 다하고 있습니다.</p>
      </div>
      
      <div class="conts-wrap">
        <h3 class="sec-tit">주요 업무</h3>
        <ul class="info-list decimal">
          <li>정책 수립 및 시행</li>
          <li>국민 서비스 제공</li>
          <li>관련 기관 협력 및 조정</li>
        </ul>
      </div>
    `,
    currentUrl: '/intro'
  },
  parameters: {
    docs: {
      description: {
        story: '단순한 메뉴 구조의 콘텐츠 페이지입니다. 서브메뉴가 없는 평면적인 구조를 보여줍니다.'
      }
    }
  }
};

export const NoDropdown: Story = {
  args: {
    ...baseContentsPageData,
    page: {
      title: '노인복지 서비스'
      // dropdown 제거
    }
  },
  parameters: {
    docs: {
      description: {
        story: '드롭다운이 없는 콘텐츠 페이지입니다. 페이지 타이틀만 표시됩니다.'
      }
    }
  }
};

export const DeepMenuStructure: Story = {
  args: {
    sidebar: {
      title: '종합 포털',
      menu: [
        {
          title: '정책·제도',
          expanded: true,
          items: [
            {
              title: '사회보장정책',
              url: '/policy/social-security',
              subitems: [
                { title: '기초생활보장제도', url: '/policy/social-security/basic-living' },
                { title: '의료급여제도', url: '/policy/social-security/medical-aid' },
                { title: '긴급복지지원제도', url: '/policy/social-security/emergency' },
                { title: '자활지원제도', url: '/policy/social-security/self-support' }
              ]
            },
            {
              title: '고용정책',
              url: '/policy/employment',
              subitems: [
                { title: '고용보험제도', url: '/policy/employment/insurance' },
                { title: '직업능력개발', url: '/policy/employment/skill-development' },
                { title: '취업지원서비스', url: '/policy/employment/job-support' }
              ]
            },
            {
              title: '교육정책',
              url: '/policy/education',
              subitems: [
                { title: '유아교육정책', url: '/policy/education/early-childhood' },
                { title: '초중등교육정책', url: '/policy/education/k12' },
                { title: '고등교육정책', url: '/policy/education/higher' },
                { title: '평생교육정책', url: '/policy/education/lifelong' }
              ]
            }
          ]
        },
        {
          title: '통계·연구',
          expanded: false,
          items: [
            {
              title: '사회통계',
              url: '/statistics/social',
              subitems: [
                { title: '인구통계', url: '/statistics/social/population' },
                { title: '가구통계', url: '/statistics/social/household' },
                { title: '복지통계', url: '/statistics/social/welfare' }
              ]
            },
            {
              title: '경제통계',
              url: '/statistics/economic',
              subitems: [
                { title: '고용통계', url: '/statistics/economic/employment' },
                { title: '소득통계', url: '/statistics/economic/income' }
              ]
            },
            { title: '연구보고서', url: '/research/reports' }
          ]
        },
        {
          title: '소통·참여',
          expanded: false,
          items: [
            { title: '공지사항', url: '/communication/notice' },
            { title: '보도자료', url: '/communication/press' },
            {
              title: '정책제안',
              url: '/communication/policy-suggestion',
              subitems: [
                { title: '국민제안', url: '/communication/policy-suggestion/public' },
                { title: '전문가제안', url: '/communication/policy-suggestion/expert' }
              ]
            },
            { title: 'FAQ', url: '/communication/faq' }
          ]
        }
      ]
    },
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '통계·연구', url: '/statistics' },
      { text: '사회통계', url: '/statistics/social' },
      { text: '복지통계', url: '' }
    ],
    page: {
      title: '복지통계',
      dropdown: {
        current: '2024년 4분기',
        items: [
          { text: '2024년 4분기', url: '/statistics/social/welfare?quarter=2024-4' },
          { text: '2024년 3분기', url: '/statistics/social/welfare?quarter=2024-3' },
          { text: '2024년 2분기', url: '/statistics/social/welfare?quarter=2024-2' },
          { text: '2024년 1분기', url: '/statistics/social/welfare?quarter=2024-1' }
        ]
      }
    },
    content: `
      <div class="conts-desc">
        <p>복지통계는 우리나라의 사회복지 현황과 정책 효과를 객관적으로 파악할 수 있는 핵심 지표입니다.</p>
      </div>
      
      <div class="conts-wrap">
        <h3 class="sec-tit">주요 통계 지표</h3>
        
        <div class="tbl-wrap">
          <table class="tbl col data">
            <caption>2024년 4분기 복지통계 주요 지표</caption>
            <colgroup>
              <col style="width: 40%;">
              <col style="width: 30%;">
              <col style="width: 30%;">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">지표명</th>
                <th scope="col">수치</th>
                <th scope="col">전년 동기 대비</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>기초생활보장 수급자 수</td>
                <td class="ar">2,234,567명</td>
                <td class="ar">▲2.3%</td>
              </tr>
              <tr>
                <td>의료급여 수급자 수</td>
                <td class="ar">1,456,789명</td>
                <td class="ar">▲1.8%</td>
              </tr>
              <tr>
                <td>긴급복지 지원 건수</td>
                <td class="ar">124,567건</td>
                <td class="ar">▼5.2%</td>
              </tr>
              <tr>
                <td>노인돌봄서비스 이용자 수</td>
                <td class="ar">345,678명</td>
                <td class="ar">▲7.1%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="conts-wrap">
        <h3 class="sec-tit">통계 자료 다운로드</h3>
        <ul class="box-group-area">
          <li>
            <p class="tit">2024년 4분기 복지통계 종합보고서</p>
            <div class="btn-wrap">
              <button type="button" class="btn sm btn-txt ico-down">다운로드</button>
            </div>
          </li>
          <li>
            <p class="tit">복지통계 시계열 데이터 (2020-2024)</p>
            <div class="btn-wrap">
              <button type="button" class="btn sm btn-txt ico-down">다운로드</button>
            </div>
          </li>
        </ul>
      </div>
    `,
    currentUrl: '/statistics/social/welfare'
  },
  parameters: {
    docs: {
      description: {
        story: '복잡한 3단계 메뉴 구조의 콘텐츠 페이지입니다. 깊은 네비게이션과 활성 서브메뉴를 보여줍니다.'
      }
    }
  }
};

export const MobileResponsive: Story = {
  args: baseContentsPageData,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: '모바일 화면에서의 콘텐츠 페이지입니다. 반응형 레이아웃이 적용됩니다.'
      }
    }
  }
};