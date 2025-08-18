import type { Meta, StoryObj } from '@storybook/react-webpack5';
import StepProcessPage from './StepProcessPage';

const meta: Meta<typeof StepProcessPage> = {
  title: 'Government/Z. Page/StepProcessPage',
  component: StepProcessPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### StepProcessPage 컴포넌트

정부 웹사이트의 스텝 프로세스 페이지 컴포넌트입니다. 다음과 같은 기능을 제공합니다:

- **스텝 타입**: nostep, single, multi, success 4가지 타입 지원
- **브레드크럼**: 현재 위치 표시
- **스텝 표시기**: 현재 단계와 전체 진행 상황 시각화
- **동적 콘텐츠**: HTML 콘텐츠 및 동적 폼 필드 렌더링 지원
- **버튼 시스템**: 이전/다음/저장/취소/신청 버튼 제어
- **성공 페이지**: 완료 메시지와 관련 서비스 안내
- **반응형 디자인**: 모바일/태블릿 지원

#### 스텝 타입별 특징
- **nostep**: 스텝 없는 일반 페이지
- **single**: 타이틀 우측에 스텝 표시
- **multi**: 타이틀 하단에 스텝 표시
- **success**: 완료 페이지 (신청 정보, 관련 서비스)
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['nostep', 'single', 'multi', 'success'],
      description: '스텝 프로세스 타입'
    },
    title: {
      control: 'text',
      description: '페이지 제목'
    },
    breadcrumb: {
      control: 'object',
      description: '브레드크럼 네비게이션 데이터'
    },
    steps: {
      control: 'object',
      description: '스텝 정보 배열'
    },
    currentStep: {
      control: 'number',
      description: '현재 스텝 번호'
    },
    content: {
      control: 'text',
      description: '페이지 콘텐츠 HTML'
    },
    stepContents: {
      control: 'object',
      description: '스텝별 동적 폼 콘텐츠'
    },
    buttons: {
      control: 'object',
      description: '버튼 설정'
    },
    success: {
      control: 'object',
      description: '성공 페이지 정보'
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스'
    }
  }
};

export default meta;
type Story = StoryObj<typeof StepProcessPage>;

// 기본 데이터
const baseBreadcrumb = [
  { text: '홈', url: '/' },
  { text: '민원서비스', url: '/services' },
  { text: '전입신고', url: '' }
];

const baseSteps = [
  { num: 1, title: '유의사항 확인' },
  { num: 2, title: '신청인 정보' },
  { num: 3, title: '이사 전 살던 곳' },
  { num: 4, title: '이사 온 곳' }
];

// === 동적 폼 예시 ===

export const DynamicFormBasic: Story = {
  args: {
    type: 'single',
    title: '회원가입 신청',
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '회원서비스', url: '/member' },
      { text: '회원가입', url: '' }
    ],
    steps: [
      { num: 1, title: '개인정보 입력' },
      { num: 2, title: '가입 완료' }
    ],
    currentStep: 1,
    stepContents: {
      1: {
        fields: [
          {
            type: 'text',
            name: 'name',
            label: '성명',
            placeholder: '성명을 입력하세요',
            required: true
          },
          {
            type: 'email',
            name: 'email',
            label: '이메일',
            placeholder: 'example@domain.com',
            required: true,
            help: '이메일 주소는 로그인 아이디로 사용됩니다.'
          },
          {
            type: 'tel',
            name: 'phone',
            label: '연락처',
            placeholder: '010-0000-0000',
            required: true
          },
          {
            type: 'select',
            name: 'region',
            label: '거주지역',
            placeholder: '지역을 선택하세요',
            required: true,
            options: [
              { value: 'seoul', label: '서울특별시' },
              { value: 'busan', label: '부산광역시' },
              { value: 'daegu', label: '대구광역시' },
              { value: 'incheon', label: '인천광역시' },
              { value: 'etc', label: '기타 지역' }
            ]
          }
        ]
      }
    },
    buttons: {
      cancel: { text: '취소', show: true },
      next: { text: '다음으로', show: true }
    }
  },
  parameters: {
    docs: {
      description: {
        story: '동적 폼 필드를 사용한 기본 예시입니다. 텍스트, 이메일, 전화번호, 셀렉트 박스를 포함합니다.'
      }
    }
  }
};

export const DynamicFormWithSections: Story = {
  args: {
    type: 'multi',
    title: '사업자 등록 신청',
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '사업서비스', url: '/business' },
      { text: '사업자등록', url: '' }
    ],
    steps: [
      { num: 1, title: '사업자 정보' },
      { num: 2, title: '사업장 정보' },
      { num: 3, title: '서류 첨부' },
      { num: 4, title: '신청 완료' }
    ],
    currentStep: 1,
    stepContents: {
      1: {
        fields: [
          {
            section_title: '사업자 기본 정보',
            fields: [
              {
                type: 'text',
                name: 'business_name',
                label: '상호명',
                placeholder: '사업체 상호명을 입력하세요',
                required: true
              },
              {
                type: 'text',
                name: 'representative',
                label: '대표자명',
                placeholder: '대표자 성명을 입력하세요',
                required: true
              },
              {
                type: 'select',
                name: 'business_type',
                label: '업종',
                placeholder: '업종을 선택하세요',
                required: true,
                options: [
                  { value: 'retail', label: '소매업' },
                  { value: 'service', label: '서비스업' },
                  { value: 'manufacturing', label: '제조업' },
                  { value: 'construction', label: '건설업' },
                  { value: 'etc', label: '기타' }
                ]
              }
            ]
          },
          {
            section_title: '연락처 정보',
            fields: [
              {
                type: 'tel',
                name: 'business_phone',
                label: '사업장 전화번호',
                placeholder: '02-0000-0000',
                required: true
              },
              {
                type: 'email',
                name: 'business_email',
                label: '사업장 이메일',
                placeholder: 'business@company.com',
                required: false
              }
            ]
          }
        ]
      }
    },
    buttons: {
      cancel: { text: '취소하기', show: true },
      save: { text: '임시저장', show: true },
      next: { text: '다음으로', show: true }
    }
  },
  parameters: {
    docs: {
      description: {
        story: '섹션으로 그룹화된 동적 폼의 예시입니다. 여러 섹션으로 필드를 체계적으로 분류합니다.'
      }
    }
  }
};

export const DynamicFormComplex: Story = {
  args: {
    type: 'multi',
    title: '민원 접수',
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '민원서비스', url: '/civil' },
      { text: '민원접수', url: '' }
    ],
    steps: [
      { num: 1, title: '유의사항 동의' },
      { num: 2, title: '민원 정보' },
      { num: 3, title: '접수 완료' }
    ],
    currentStep: 1,
    stepContents: {
      1: {
        fields: [
          {
            section_title: '민원 접수 유의사항',
            fields: [
              {
                type: 'terms_box',
                title: '민원 처리 절차 및 유의사항',
                sections: [
                  {
                    heading: '처리 절차',
                    paragraphs: [
                      '민원 접수 후 담당 부서에서 검토를 진행합니다.',
                      '처리 기간은 민원 종류에 따라 3~7일 소요됩니다.'
                    ]
                  },
                  {
                    heading: '준비 서류',
                    list: [
                      '신분증 사본',
                      '관련 증빙서류',
                      '기타 필요 서류'
                    ]
                  },
                  {
                    heading: '문의처',
                    paragraphs: [
                      '전화: 02-1234-5678',
                      '이메일: civil@government.go.kr'
                    ]
                  }
                ]
              },
              {
                type: 'checkbox_single',
                name: 'agree_process',
                label: '민원 처리 절차를 확인하였으며 이에 동의합니다.',
                required: true,
                checked: false
              },
              {
                type: 'checkbox_single',
                name: 'agree_privacy',
                label: '개인정보 수집·이용에 동의합니다.',
                required: true,
                checked: false
              },
              {
                type: 'checkbox_single',
                name: 'agree_terms',
                label: '민원 처리 약관에 동의합니다.',
                required: true,
                checked: false
              }
            ]
          }
        ]
      },
      2: {
        fields: [
          {
            section_title: '민원인 정보',
            fields: [
              {
                type: 'text',
                name: 'applicant_name',
                label: '신청인 성명',
                placeholder: '성명을 입력하세요',
                required: true
              },
              {
                type: 'text',
                name: 'applicant_ssn',
                label: '주민등록번호',
                placeholder: '000000-0000000',
                required: true
              },
              {
                type: 'tel',
                name: 'applicant_phone',
                label: '연락처',
                placeholder: '010-0000-0000',
                required: true
              }
            ]
          },
          {
            section_title: '민원 내용',
            fields: [
              {
                type: 'select',
                name: 'civil_type',
                label: '민원 종류',
                placeholder: '민원 종류를 선택하세요',
                required: true,
                options: [
                  { value: 'certificate', label: '각종 증명서 발급' },
                  { value: 'registration', label: '등록·신고' },
                  { value: 'consultation', label: '상담·문의' },
                  { value: 'complaint', label: '민원·신고' },
                  { value: 'etc', label: '기타' }
                ]
              },
              {
                type: 'textarea',
                name: 'civil_content',
                label: '민원 내용',
                placeholder: '민원 내용을 상세히 작성해주세요',
                required: true,
                rows: 5,
                help: '구체적인 내용을 작성하시면 더 정확한 처리가 가능합니다.'
              },
              {
                type: 'file',
                name: 'attachments',
                label: '첨부파일',
                accept: '.pdf,.jpg,.png,.doc,.docx',
                multiple: true,
                required: false,
                help: 'PDF, 이미지, 문서 파일만 업로드 가능합니다. (최대 10MB)'
              }
            ]
          }
        ]
      }
    },
    buttons: {
      prev: { text: '이전으로', show: true },
      save: { text: '임시저장', show: true },
      next: { text: '다음으로', show: true }
    }
  },
  parameters: {
    docs: {
      description: {
        story: '복합적인 동적 폼의 예시입니다. 약관 박스, 체크박스 그룹, 파일 업로드 등 다양한 필드 타입을 포함합니다.'
      }
    }
  }
};

export const DynamicFormWithRadio: Story = {
  args: {
    type: 'single',
    title: '설문조사 참여',
    breadcrumb: [
      { text: '홈', url: '/' },
      { text: '설문조사', url: '/survey' },
      { text: '참여하기', url: '' }
    ],
    steps: [
      { num: 1, title: '설문 응답' },
      { num: 2, title: '참여 완료' }
    ],
    currentStep: 1,
    stepContents: {
      1: {
        fields: [
          {
            section_title: '기본 정보',
            fields: [
              {
                type: 'radio_group',
                name: 'gender',
                label: '성별',
                required: true,
                options: [
                  { value: 'male', label: '남성', checked: false },
                  { value: 'female', label: '여성', checked: false },
                  { value: 'other', label: '기타', checked: false }
                ]
              },
              {
                type: 'radio_group',
                name: 'age_group',
                label: '연령대',
                required: true,
                options: [
                  { value: '20s', label: '20대', checked: false },
                  { value: '30s', label: '30대', checked: false },
                  { value: '40s', label: '40대', checked: false },
                  { value: '50s', label: '50대', checked: false },
                  { value: '60plus', label: '60대 이상', checked: false }
                ]
              }
            ]
          },
          {
            section_title: '만족도 조사',
            fields: [
              {
                type: 'radio_group',
                name: 'service_satisfaction',
                label: '정부 서비스 만족도',
                required: true,
                options: [
                  { value: 'very_satisfied', label: '매우 만족', checked: false },
                  { value: 'satisfied', label: '만족', checked: false },
                  { value: 'neutral', label: '보통', checked: false },
                  { value: 'dissatisfied', label: '불만족', checked: false },
                  { value: 'very_dissatisfied', label: '매우 불만족', checked: false }
                ]
              },
              {
                type: 'checkbox_group',
                name: 'improvement_areas',
                label: '개선이 필요한 분야 (복수선택 가능)',
                required: false,
                options: [
                  { value: 'speed', label: '처리 속도', checked: false },
                  { value: 'convenience', label: '이용 편의성', checked: false },
                  { value: 'accuracy', label: '정확성', checked: false },
                  { value: 'kindness', label: '친절도', checked: false },
                  { value: 'accessibility', label: '접근성', checked: false }
                ]
              },
              {
                type: 'textarea',
                name: 'suggestions',
                label: '기타 의견 및 제안사항',
                placeholder: '자유롭게 의견을 작성해주세요',
                required: false,
                rows: 4
              }
            ]
          }
        ]
      }
    },
    buttons: {
      cancel: { text: '취소', show: true },
      submit: { text: '설문 제출', show: true }
    }
  },
  parameters: {
    docs: {
      description: {
        story: '라디오 버튼과 체크박스 그룹을 활용한 설문조사 폼 예시입니다.'
      }
    }
  }
};

// === 완전한 스텝 프로세스 테스트 ===

export const FullStepProcess: Story = {
  args: {
    type: 'multi',
    title: '전입신고 신청',
    breadcrumb: baseBreadcrumb,
    steps: baseSteps,
    currentStep: 1,
    stepContents: {
      1: {
        fields: [
          {
            section_title: '전입신고 유의사항',
            fields: [
              {
                type: 'terms_box',
                title: '전입신고 처리 절차 및 유의사항',
                sections: [
                  {
                    heading: '신고 대상',
                    paragraphs: [
                      '주소를 이전한 사람은 이전한 날부터 14일 이내에 전입신고를 하여야 합니다.',
                      '세대주 또는 세대원이 신고할 수 있습니다.'
                    ]
                  },
                  {
                    heading: '신고 방법',
                    list: [
                      '온라인 신고 (정부24)',
                      '방문 신고 (주민센터)',
                      '우편 신고'
                    ]
                  },
                  {
                    heading: '필요 서류',
                    list: [
                      '신분증 (주민등록증, 운전면허증 등)',
                      '전입신고서',
                      '임대차계약서 등 거주사실을 확인할 수 있는 서류'
                    ]
                  },
                  {
                    heading: '문의처',
                    paragraphs: [
                      '전화: 1588-2188',
                      '이메일: help@gov.kr'
                    ]
                  }
                ]
              },
              {
                type: 'checkbox_single',
                name: 'agree_terms',
                label: '위 유의사항을 모두 확인하였으며 이에 동의합니다.',
                required: true,
                checked: false
              },
              {
                type: 'checkbox_single',
                name: 'agree_privacy',
                label: '개인정보 수집·이용에 동의합니다.',
                required: true,
                checked: false
              }
            ]
          }
        ]
      },
      2: {
        fields: [
          {
            section_title: '신청인 정보',
            fields: [
              {
                type: 'text',
                name: 'applicant_name',
                label: '성명',
                placeholder: '성명을 입력하세요',
                required: true
              },
              {
                type: 'text',
                name: 'applicant_ssn',
                label: '주민등록번호',
                placeholder: '000000-0000000',
                required: true
              },
              {
                type: 'tel',
                name: 'applicant_phone',
                label: '연락처',
                placeholder: '010-0000-0000',
                required: true
              },
              {
                type: 'email',
                name: 'applicant_email',
                label: '이메일',
                placeholder: 'example@domain.com',
                required: false,
                help: '처리 결과를 이메일로 받고 싶으시면 입력해주세요.'
              }
            ]
          },
          {
            section_title: '세대 관계',
            fields: [
              {
                type: 'radio_group',
                name: 'relationship',
                label: '신고인과의 관계',
                required: true,
                options: [
                  { value: 'self', label: '본인', checked: true },
                  { value: 'spouse', label: '배우자', checked: false },
                  { value: 'child', label: '자녀', checked: false },
                  { value: 'parent', label: '부모', checked: false },
                  { value: 'other', label: '기타', checked: false }
                ]
              }
            ]
          }
        ]
      },
      3: {
        fields: [
          {
            section_title: '이사 전 주소',
            fields: [
              {
                type: 'text',
                name: 'old_address_full',
                label: '이전 주소 (전체)',
                placeholder: '예: 서울특별시 강남구 테헤란로 123',
                required: true
              },
              {
                type: 'text',
                name: 'old_address_detail',
                label: '상세 주소',
                placeholder: '동, 호수 등 상세 주소',
                required: false
              },
              {
                type: 'date',
                name: 'old_residence_period_from',
                label: '거주 시작일',
                required: true
              },
              {
                type: 'date',
                name: 'old_residence_period_to',
                label: '거주 종료일',
                required: true
              }
            ]
          }
        ]
      },
      4: {
        fields: [
          {
            section_title: '이사 온 주소',
            fields: [
              {
                type: 'text',
                name: 'new_address_full',
                label: '새 주소 (전체)',
                placeholder: '예: 서울특별시 서초구 반포대로 456',
                required: true
              },
              {
                type: 'text',
                name: 'new_address_detail',
                label: '상세 주소',
                placeholder: '동, 호수 등 상세 주소',
                required: false
              },
              {
                type: 'date',
                name: 'move_in_date',
                label: '전입일',
                required: true,
                help: '실제로 이사한 날짜를 입력해주세요.'
              },
              {
                type: 'select',
                name: 'house_type',
                label: '주택 유형',
                placeholder: '주택 유형을 선택하세요',
                required: true,
                options: [
                  { value: 'apartment', label: '아파트' },
                  { value: 'villa', label: '빌라/연립주택' },
                  { value: 'house', label: '단독주택' },
                  { value: 'officetel', label: '오피스텔' },
                  { value: 'etc', label: '기타' }
                ]
              }
            ]
          },
          {
            section_title: '첨부 서류',
            fields: [
              {
                type: 'file',
                name: 'residence_proof',
                label: '거주 증명 서류',
                accept: '.pdf,.jpg,.png,.doc,.docx',
                multiple: true,
                required: true,
                help: '임대차계약서, 등기부등본 등 거주사실을 증명할 수 있는 서류를 첨부해주세요.'
              }
            ]
          }
        ]
      }
    },
    buttons: {
      cancel: { text: '취소하기', show: true },
      next: { text: '다음으로', show: true }
    }
  },
  parameters: {
    docs: {
      description: {
        story: `
완전한 4단계 전입신고 프로세스입니다. Storybook Controls에서 currentStep을 1~4로 변경하여 각 스텝을 테스트해볼 수 있습니다.

**테스트 방법:**
1. Controls 패널에서 "currentStep"을 1부터 4까지 변경해보세요
2. 각 스텝의 폼 필드와 버튼이 올바르게 표시되는지 확인하세요
3. type을 "success"로 변경하고 아래 CompletedProcess 스토리를 참고하여 완료 페이지를 테스트하세요

**스텝별 내용:**
- **1단계**: 유의사항 확인 및 동의
- **2단계**: 신청인 정보 입력
- **3단계**: 이사 전 주소 정보
- **4단계**: 이사 온 주소 및 서류 첨부
        `
      }
    }
  }
};

export const CompletedProcess: Story = {
  args: {
    type: 'success',
    title: '전입신고 신청 완료',
    breadcrumb: baseBreadcrumb,
    success: {
      message: '전입신고 민원 신청이 완료되었습니다.',
      applicant: '홍길동',
      info: [
        '신청인 정보 입력 완료',
        '이사 전 주소: 서울특별시 강남구 테헤란로 123',
        '이사 온 주소: 서울특별시 서초구 반포대로 456',
        '거주 증명 서류 첨부 완료'
      ],
      relatedServices: [
        { text: '우편물 주거이전서비스 신청', url: '/services/postal-redirect' },
        { text: '요금감면일괄신청', url: '/services/fee-reduction' },
        { text: '지방세납세증명서 발급', url: '/services/tax-certificate' }
      ],
      relatedTitle: '함께 이용하면 좋은 서비스입니다.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '전입신고 신청이 완료된 후 보여지는 성공 페이지입니다. 신청 정보와 관련 서비스를 안내합니다.'
      }
    }
  }
};