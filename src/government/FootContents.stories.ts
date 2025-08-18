import type { Meta, StoryObj } from '@storybook/react-webpack5';
import FootContents from './FootContents';
import { FootContentsProps } from './types';

const meta: Meta<typeof FootContents> = {
  title: 'Government/C. Components/FootContents',
  component: FootContents,
  parameters: {
    docs: {
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '제목 (HTML 태그 지원)'
    },
    description: {
      control: 'text', 
      description: '설명 텍스트'
    },
    image: {
      control: 'text',
      description: '이미지 URL'
    },
    imageAlt: {
      control: 'text',
      description: '이미지 대체 텍스트'
    },
    buttonText: {
      control: 'text',
      description: '버튼 텍스트'
    },
    buttonUrl: {
      control: 'text',
      description: '버튼 링크 URL'
    },
    hasBackground: {
      control: 'boolean',
      description: '배경색 적용 여부'
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FootContents>;

// 기본 스토리
export const Default: Story = {
  args: {
    title: '정부24 모바일 앱',
    description: '언제 어디서나 스마트폰으로 정부서비스를 이용하세요. 500여 개 기관의 4,000여 개 서비스를 제공합니다.',
    image: 'https://via.placeholder.com/200x150/0066cc/ffffff?text=Gov24+App',
    imageAlt: '정부24 모바일 앱',
    buttonText: '앱 다운로드',
    buttonUrl: '/mobile-app',
    hasBackground: false
  },
  parameters: {
    docs: {
      description: {
        story: '기본 FootContents 컴포넌트입니다. 이미지, 제목, 설명, 버튼이 모두 포함된 기본 레이아웃입니다.'
      }
    }
  }
};

// 배경 있는 버전
export const WithBackground: Story = {
  args: {
    title: '<strong>디지털</strong> 정부 서비스',
    description: '디지털 기술을 활용한 혁신적인 정부 서비스를 경험해보세요. 더욱 편리하고 안전한 온라인 행정서비스를 제공합니다.',
    image: 'https://via.placeholder.com/200x150/28a745/ffffff?text=Digital+Gov',
    imageAlt: '디지털 정부 서비스',
    buttonText: '서비스 살펴보기',
    buttonUrl: '/digital-services',
    hasBackground: true
  },
  parameters: {
    docs: {
      description: {
        story: '배경색이 적용된 버전입니다. 제목에 HTML 태그가 포함되어 강조 표시됩니다.'
      }
    }
  }
};

// 이미지 없는 버전
export const WithoutImage: Story = {
  args: {
    title: '정책 브리핑',
    description: '정부 정책에 대한 최신 소식과 브리핑을 확인하고 정책에 대한 의견을 나누세요.',
    buttonText: '브리핑 보기',
    buttonUrl: '/policy-briefing',
    hasBackground: false
  },
  parameters: {
    docs: {
      description: {
        story: '이미지가 없는 텍스트 중심의 버전입니다. 간단한 안내나 링크 제공에 적합합니다.'
      }
    }
  }
};

// 버튼 없는 버전
export const WithoutButton: Story = {
  args: {
    title: '정부 혁신',
    description: '투명하고 효율적인 정부를 만들기 위해 지속적으로 혁신하고 있습니다. 국민과 함께하는 열린 정부를 지향합니다.',
    image: 'https://via.placeholder.com/200x150/6c757d/ffffff?text=Innovation',
    imageAlt: '정부 혁신',
    hasBackground: true
  },
  parameters: {
    docs: {
      description: {
        story: '버튼이 없는 정보 제공용 버전입니다. 단순 안내나 소개 목적으로 사용됩니다.'
      }
    }
  }
};

// HTML 제목 사용
export const WithHtmlTitle: Story = {
  args: {
    title: '국민을 위한 <em>스마트</em> 정부',
    description: 'AI와 빅데이터를 활용한 맞춤형 정부서비스를 제공합니다. 국민의 편의를 최우선으로 하는 디지털 정부를 구현합니다.',
    image: 'https://via.placeholder.com/200x150/17a2b8/ffffff?text=Smart+Gov',
    imageAlt: '스마트 정부',
    buttonText: '자세히 알아보기',
    buttonUrl: '/smart-government',
    hasBackground: false
  },
  parameters: {
    docs: {
      description: {
        story: '제목에 HTML 태그를 사용한 버전입니다. 특정 단어나 구문을 강조할 때 유용합니다.'
      }
    }
  }
};

// 공지사항 스타일
export const NoticeStyle: Story = {
  args: {
    title: '중요 공지사항',
    description: '시스템 점검으로 인해 2024년 8월 20일(화) 02:00~06:00 서비스 이용이 일시 중단됩니다.',
    buttonText: '공지사항 전체보기',
    buttonUrl: '/notices',
    hasBackground: true
  },
  parameters: {
    docs: {
      description: {
        story: '공지사항이나 알림 용도로 사용할 수 있는 버전입니다. 배경색과 함께 중요한 정보를 강조합니다.'
      }
    }
  }
};

// 서비스 소개 스타일
export const ServiceIntro: Story = {
  args: {
    title: '온라인 <strong>원스톱</strong> 서비스',
    description: '여러 기관에 개별적으로 신청해야 했던 업무를 한 번에 처리할 수 있습니다. 시간과 비용을 절약하세요.',
    image: 'https://via.placeholder.com/200x150/dc3545/ffffff?text=One+Stop',
    imageAlt: '원스톱 서비스',
    buttonText: '서비스 신청',
    buttonUrl: '/one-stop-service',
    hasBackground: false
  },
  parameters: {
    docs: {
      description: {
        story: '서비스 소개에 특화된 버전입니다. 서비스의 핵심 가치를 강조하여 표현합니다.'
      }
    }
  }
};

// 버튼만 있는 최소 버전
export const MinimalWithButton: Story = {
  args: {
    title: '정부 정책 제안',
    description: '국민의 목소리로 더 나은 정책을 만들어갑니다.',
    buttonText: '정책 제안하기',
    buttonUrl: '/policy-suggestion'
  },
  parameters: {
    docs: {
      description: {
        story: '최소한의 정보와 버튼만 포함된 간결한 버전입니다.'
      }
    }
  }
};