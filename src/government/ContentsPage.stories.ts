import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ContentsPage from './ContentsPage';
import { ContentsPageProps } from './types';

const meta: Meta<typeof ContentsPage> = {
  title: 'Government/Z. Page/ContentsPage',
  component: ContentsPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### ContentsPage 컴포넌트

정부 웹사이트의 콘텐츠 페이지 컴포넌트입니다. 다음과 같은 기능을 제공합니다:

- **좌측 공백**: 독립적인 콘텐츠 레이아웃 (29.6rem 너비)
- **브레드크럼**: 현재 위치 표시
- **페이지 헤더**: 제목과 선택적 드롭다운 메뉴
- **콘텐츠 컨테이너**: 에디터 콘텐츠 렌더링 영역
- **반응형 디자인**: 모바일/태블릿 지원

#### 주요 특징
- 간소화된 props 기반 구조
- 데이터베이스 에디터 콘텐츠 지원
- 접근성 준수 (ARIA 속성)
- 드롭다운 메뉴 지원
- 클린한 콘텐츠 중심 레이아웃
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    breadcrumb: {
      control: 'object',
      description: '브레드크럼 네비게이션 데이터'
    },
    page: {
      control: 'object',
      description: '페이지 정보 (제목, 드롭다운)'
    },
    content: {
      control: 'text',
      description: 'HTML 콘텐츠 (에디터에서 생성)'
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
    <div class="conts-wrap">
      <h3 class="sec-tit">주요 서비스</h3>
      
      <ul class="info-list decimal">
        <li><strong>노인돌봄서비스</strong>: 혼자 힘으로 일상생활을 영위하기 어려운 노인에게 가사·활동 지원 등 종합적인 돌봄서비스를 제공합니다.</li>
        <li><strong>노인일자리사업</strong>: 어르신의 경험과 능력을 활용한 다양한 일자리를 제공하여 활기찬 노후생활을 지원합니다.</li>
        <li><strong>경로우대제도</strong>: 대중교통, 공공시설 이용 시 요금 할인 등 다양한 경로우대 혜택을 제공합니다.</li>
      </ul>
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
  `
};

// 스토리 정의
export const Default: Story = {
  args: baseContentsPageData,
  parameters: {
    docs: {
      description: {
        story: '기본 콘텐츠 페이지입니다. 브레드크럼, 페이지 헤더, 콘텐츠 영역으로 구성되어 있습니다.'
      }
    }
  }
};

export const SimpleContent: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '기관소개', url: '' }
    ],
    page: {
      title: '기관 소개'
    },
    content: `
      <div class="conts-wrap">
        <h3 class="sec-tit">주요 업무</h3>
        <ul class="info-list decimal">
          <li>정책 수립 및 시행</li>
          <li>국민 서비스 제공</li>
          <li>관련 기관 협력 및 조정</li>
        </ul>
      </div>
      
      <div class="conts-wrap">
        <h3 class="sec-tit">연락처</h3>
        <p>전화: 02-1234-5678<br>
        이메일: info@government.go.kr</p>
      </div>
    `
  },
  parameters: {
    docs: {
      description: {
        story: '간단한 콘텐츠 페이지입니다. 드롭다운 없이 기본적인 구조만 보여줍니다.'
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

export const NoDescription: Story = {
  args: {
    ...baseContentsPageData,
  },
  parameters: {
    docs: {
      description: {
        story: '기본 콘텐츠 페이지와 동일한 구조입니다. 제목 바로 아래에 콘텐츠가 표시됩니다.'
      }
    }
  }
};

export const EditorContent: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '공지사항', url: '/notice' },
      { text: '상세보기', url: '' }
    ],
    page: {
      title: '2024년 정부 서비스 개선 계획 안내'
    },
    content: `
      <div class="conts-wrap">
        <p>안녕하세요. 2024년도 정부 서비스 개선 계획에 대해 안내드립니다.</p>
        
        <h3 class="sec-tit">주요 개선 사항</h3>
        <ul class="info-list decimal">
          <li>온라인 민원 처리 시간 단축 (기존 3일 → 1일)</li>
          <li>모바일 앱 사용성 개선</li>
          <li>AI 챗봇 도입으로 24시간 상담 서비스 제공</li>
        </ul>
        
        <h3 class="sec-tit">추진 일정</h3>
        <p>2024년 3월부터 단계적으로 적용될 예정입니다.</p>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #0066cc;">
          <strong>참고사항:</strong> 서비스 개선 과정에서 일시적인 불편이 있을 수 있습니다. 양해 부탁드립니다.
        </div>
      </div>
    `
  },
  parameters: {
    docs: {
      description: {
        story: '에디터에서 생성된 콘텐츠의 예시입니다. 데이터베이스에서 로드된 HTML 콘텐츠를 렌더링합니다.'
      }
    }
  }
};