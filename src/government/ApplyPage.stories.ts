import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ApplyPage from './ApplyPage';

const meta: Meta<typeof ApplyPage> = {
  title: 'Government/Z. Page/Apply Page',
  component: ApplyPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '정부 웹사이트용 서비스 신청 페이지 컴포넌트입니다. 브레드크럼, 퀵 네비게이션, 7개 섹션(개요, 상세, 신청절차, 서류, 연관서비스, 부가정보, 변경내역)을 포함한 복합 페이지입니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    breadcrumb: {
      description: '브레드크럼 네비게이션 데이터',
      control: { type: 'object' }
    },
    title: {
      description: '페이지 제목',
      control: { type: 'text' }
    },
    description: {
      description: '페이지 설명',
      control: { type: 'text' }
    },
    quick_nav: {
      description: '퀵 네비게이션 메뉴 데이터',
      control: { type: 'object' }
    },
    apply_button: {
      description: '신청 버튼 데이터',
      control: { type: 'object' }
    },
    sections: {
      description: '페이지 섹션들의 데이터',
      control: { type: 'object' }
    },
    className: {
      description: '추가 CSS 클래스명',
      control: { type: 'text' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 신청 페이지 데이터
const defaultPageData = {
  breadcrumb: [
    { text: '홈', url: '#' },
    { text: '서비스 신청', url: '#' },
    { text: '장애아동수당', url: undefined }
  ],
  title: '장애아동수당',
  description: '장애로 인하여 생활이 어려운 장애아동이 보다 편안한 생활을 할 수 있도록 지원합니다.',
  quick_nav: [
    { id: 'section_01', text: '서비스 개요', active: true },
    { id: 'section_02', text: '서비스 상세', active: false },
    { id: 'section_03', text: '신청 방법 및 절차', active: false },
    { id: 'section_04', text: '제출 서류', active: false },
    { id: 'section_05', text: '함께 신청할 수 있는 서비스', active: false },
    { id: 'section_06', text: '부가정보', active: false },
    { id: 'section_07', text: '정보 변경 내역', active: false },
  ],
  apply_button: {
    text: '장애아동수당 온라인 신청하기',
    sub_text: '장애아동수당 외 <strong>1건</strong>'
  },
  sections: {
    overview: {
      service_target: '18세~20세 미만 등록 장애인',
      service_type: '현금 지급 (매 월)',
      selection_criteria: '장애 · 연령 · 소득',
      application_methods: [
        '복지로 모바일 앱 온라인 신청',
        '복지로 모바일 앱 온라인 신청',
        '오프라인 신청'
      ],
      contact: '국번 없이 129 (보건복지부 장애인자립기반과)'
    },
    detail: {
      provision_content: '장애아동수당은 현금 지급형 서비스로 한 달에 한 번, 현금으로 지급합니다. 지급 금액은 장애 유형이나 소득 수준에 따라 달라질 수 있습니다.',
      payment_table: {
        headers: ['대상인 구분', '중증 장애인', '경증 장애인'],
        rows: [
          ['국민기초생활보장 생계 또는 의료급여 수급자', '22 만원', '11 만원'],
          ['국민기초생활보장 주거 또는 교육급여 수급자 및 차상위계층', '17 만원', '11 만원'],
          ['보장시설수급자(생계, 의료)', '9 만원', '3 만원']
        ]
      },
      selection_criteria: {
        disability: {
          items: [
            '[장애인복지법] 제32조에 따라 등록한 장애인(중증장애인, 경증장애인)을 대상으로 합니다.',
            {
              text: '신청일을 기준으로 장애인 등록이 완료되어 있어야 합니다.',
              sub_items: [
                '중증장애인: 장애인연금법상 중증장애인에 해당',
                {
                  text: '경증장애인: 장애인연금법상 <strong>중증장애인에 해당하지 않음</strong>',
                  note: {
                    title: '참고',
                    content: '중증장애인은 장애인연금법상 중증장애인으로 장애유형별 의학적 판정기준에 부합하거나 장애 정도를 2개 이상 받은 사람으로서 그 장애 정도 중 하나가 심한 경우를 의미합니다.'
                  }
                }
              ]
            }
          ]
        },
        age: {
          items: [
            '신청하는 달을 기준으로 18세 미만이어야 합니다. 신청일이 속하는 월의 말일까지 18세가 되는 경우 대상에서 제외됩니다. <br class="br">예) 9월 15일에 신청하고 신청인이 10월 1일 이전에 18세가 되는 경우 선정에서 제외함',
            {
              text: '「초중등교육법」 제2조에 따른 학교에 재학/휴학 중인 경우 20세까지 지원 가능합니다. 이 때, 장애인연금을 받는 경우에는 대상에서 제외됩니다.',
              note: {
                title: '참고',
                content: '「초중등교육법」 제2조에 따른 학교에 특수학교의 전공과정도 포함됩니다. 자세한 내용은 법령을 참고하세요.'
              }
            }
          ]
        },
        income: {
          items: [
            '국민기초생활보장 수급자 또는 차상위계층에 해당해야 합니다.',
            {
              text: '가구의 범위는 국민기초생활보장제도의 가구 범위와 동일하게 적용합니다. 가구 해체 방지를 위하여 별도의 가구 특례 적용이 가능합니다.',
              sub_items: [
                {
                  text: '<strong>소득인정액 산정방식:</strong> 국민기초생활보장제도의 방식을 적용합니다.',
                  note: {
                    title: '참고: 소득인정액 산정식',
                    content: {
                      formula: '소득인정액 = 소득평가액(❶) + 재산의 소득환산액(❷)',
                      details: [
                        '❶ 소득평가액 = 실제소득 - 가구특성별 지출 - 근로소득공제',
                        '❷ 재산의 소득환산액 = {(일반/금융재산의 종류별가액-기본재산액-부채)+승용차 재산가액} × 재산의 종류별 소득환산액'
                      ]
                    }
                  }
                },
                '<strong>차상위계층 선정 기준:</strong> 차상위 계층 선정 기준은 소득인정액이 기준 중위소득 50% 이하인 경우로, 4인 가구 기준 2,700,482원 이하입니다. 부양의무자의 기준은 적용하지 않습니다.'
              ]
            }
          ]
        }
      }
    },
    application: {
      methods: [
        '방문 신청(읍면동 주민센터)',
        '온라인 신청(복지로 PC/모바일웹, 모바일앱)'
      ],
      process: [
        {
          num: '1',
          title: '초기 상담 및 서비스 신청',
          period: '1-5일 소요',
          description: '읍면동에서 서비스 신청을 접수합니다.'
        },
        {
          num: '2',
          title: '대상자 통합조사 및 심사',
          period: '5-30일 소요',
          description: '시군구에서 서비스에 대한 조사 및 심사를 진행합니다.'
        },
        {
          num: '3',
          title: '대상자 확정',
          period: '5일 소요',
          description: '시군구에서 서비스 지급을 위한 대상자를 선정합니다.'
        },
        {
          num: '4',
          title: '서비스 지급',
          period: '매월',
          description: '매월 정해진 날짜에 현금을 지급합니다.'
        },
        {
          num: '5',
          title: '사후 관리',
          period: '지속',
          description: '자격 변동사항 확인 및 관리를 진행합니다.'
        }
      ]
    },
    documents: [
      {
        title: '사회보장급여 신청(변경)서 [hwp, 328KB]',
        file_size: '328KB',
        file_type: 'hwp'
      },
      {
        title: '금융정보 등(금융ㆍ신용ㆍ보험정보) 제공 동의서 [hwp, 17KB]',
        file_size: '17KB',
        file_type: 'hwp'
      }
    ],
    together_services: {
      description: '장애아동수당과 함께 신청할 수 있는 서비스입니다. <br class="br">목록에서 원하는 서비스를 선택하여 한 번에 신청하시면 공통으로 입력해야 할 정보를 한 번만 입력하기 때문에 보다 편리하게 이용할 수 있습니다.',
      services: [
        {
          id: 'chk_01',
          title: '장애아동수당',
          description: '장애로 인하여 생활이 어려운 장애아동이 보다 편안한 생활을 할 수 있도록 지원합니다.',
          disabled: true,
          checked: false
        },
        {
          id: 'chk_02',
          title: '청소년 발달장애인 방과후활동서비스',
          description: '만 6세 이상~만 18세 미만의 청소년이 방과후에도 돌봄을 지원받을 수 있도록 방과후활동 이용권을 지급합니다.',
          disabled: false,
          checked: true
        },
        {
          id: 'chk_03',
          title: '아동발달지원계좌(디딤씨앗통장)지원',
          description: '취약계층 아동의 사회진출 시 학자금･취업･창업･주거마련 등에 소요되는 초기비용 마련을 위한 자산형성을 지원합니다.',
          disabled: false,
          checked: false
        }
      ]
    },
    additional_info: {
      reference_forms: [
        {
          title: '2023년 장애인연금 사업안내 [pdf, 1.2MB]',
          file_size: '1.2MB',
          file_type: 'pdf'
        }
      ],
      related_websites: [
        { text: '보건복지상담센터 웹사이트', url: '#' },
        { text: '보건복지부 대표 웹사이트', url: '#' }
      ],
      legal_basis: [
        { text: '장애인복지법(국가법령통합관리시스템)', url: '#' }
      ],
      welfare_case: '몸이나 마음에 불편함을 갖고 사는 아이들에게 조금이나마 위로가 되어드리고 싶습니다. 장애아동들을 위해 장애아동수당으로 당신께 힘을 보태드립니다. <br class="br"><br class="br">인터넷 장애아동 학부모 카페 모임의 글. "그럼 장애아동수당 서비스를 모르고 계셨던 거에요?" 의사 선생님이 말씀해주시기 전까지 진짜 몰랐었습니다. 몸이 불편한 아이를 키우는 엄마로서 아이를 위해 돈을 벌고 항상 신경이 곤두서있다보니 누군가 도움을 준다는 게 익숙치 않았죠.'
    },
    change_history: [
      { date: '2023년 12월 4일', content: '2024년 기준 소득 금액 반영' },
      { date: '2021년 11월 12일', content: '최초 등록' }
    ]
  }
};

export const Default: Story = {
  args: {
    ...defaultPageData
  }
};

export const CatServiceApplication: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '#' },
      { text: '고양이 서비스', url: '#' },
      { text: '건강관리 지원', url: undefined }
    ],
    title: '고양이 건강관리 지원',
    description: '등록된 고양이의 건강한 삶을 위해 예방접종, 건강검진, 응급치료 등을 지원합니다.',
    quick_nav: [
      { id: 'section_01', text: '서비스 개요', active: true },
      { id: 'section_02', text: '서비스 상세', active: true },
      { id: 'section_03', text: '신청 방법 및 절차', active: false },
      { id: 'section_04', text: '제출 서류', active: false },
      { id: 'section_05', text: '함께 신청할 수 있는 서비스', active: false },
      { id: 'section_06', text: '부가정보', active: false },
      { id: 'section_07', text: '정보 변경 내역', active: false },
    ],
    apply_button: {
      text: '고양이 건강관리 지원 신청하기',
      sub_text: '건강관리 지원 외 <strong>2건</strong>'
    },
    sections: {
      overview: {
        service_target: '등록된 반려고양이 (1세 이상)',
        service_type: '의료비 지원 (연간)',
        selection_criteria: '고양이 등록 · 연령 · 건강상태',
        application_methods: [
          '온라인 신청 (고양이관리위원회 웹사이트)',
          '모바일 앱 신청',
          '방문 신청 (지역 동물병원)'
        ],
        contact: '1588-9999 (고양이관리위원회 건강지원과)'
      },
      detail: {
        provision_content: '등록된 반려고양이의 건강관리를 위해 예방접종, 정기검진, 응급치료비를 지원합니다. 지원 금액은 고양이의 연령과 건강상태에 따라 차등 지급됩니다.',
        payment_table: {
          headers: ['지원 항목', '1-3세 고양이', '4세 이상 고양이'],
          rows: [
            ['예방접종 (연간)', '15만원', '12만원'],
            ['정기검진 (연 2회)', '20만원', '25만원'],
            ['응급치료비 (연간)', '50만원', '70만원']
          ]
        },
        selection_criteria: {
          disability: {
            items: [
              '고양이관리위원회에 정식 등록된 반려고양이를 대상으로 합니다.',
              {
                text: '신청일 기준으로 고양이 등록이 완료되어 있어야 합니다.',
                sub_items: [
                  '마이크로칩 등록 완료',
                  {
                    text: '예방접종 기본 이력 보유 (광견병, 종합백신)',
                    note: {
                      title: '참고',
                      content: '기본 예방접종은 생후 8주 이후 접종한 것만 인정됩니다.'
                    }
                  }
                ]
              }
            ]
          },
          age: {
            items: [
              '신청하는 달을 기준으로 1세 이상이어야 합니다.',
              {
                text: '노령묘(7세 이상)의 경우 추가 지원 혜택이 있습니다.',
                note: {
                  title: '참고',
                  content: '노령묘는 치료비 지원한도가 20% 추가됩니다.'
                }
              }
            ]
          },
          income: {
            items: [
              '보호자의 소득 수준에 따라 차등 지원됩니다.',
              {
                text: '기초생활수급자 및 차상위계층은 100% 지원, 일반 가구는 70% 지원됩니다.',
                sub_items: [
                  {
                    text: '<strong>소득 기준:</strong> 가구 소득 중위 150% 이하',
                    note: {
                      title: '참고: 소득 산정 기준',
                      content: {
                        formula: '월 평균 소득 = (연간 총소득 - 필요 경비) ÷ 12',
                        details: [
                          '연간 총소득: 근로소득, 사업소득, 재산소득 합계',
                          '필요 경비: 사업자의 경우 사업 관련 경비 인정'
                        ]
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      },
      application: {
        methods: [
          '온라인 신청 (고양이관리위원회 홈페이지)',
          '모바일 앱 신청',
          '방문 신청 (지정 동물병원)'
        ],
        process: [
          {
            num: '1',
            title: '서비스 신청 및 접수',
            period: '1-3일 소요',
            description: '온라인 또는 방문을 통해 서비스를 신청합니다.'
          },
          {
            num: '2',
            title: '서류 검토 및 자격 확인',
            period: '3-7일 소요',
            description: '제출된 서류를 바탕으로 자격 요건을 확인합니다.'
          },
          {
            num: '3',
            title: '승인 및 카드 발급',
            period: '7-10일 소요',
            description: '승인 시 건강관리 지원카드를 발급합니다.'
          },
          {
            num: '4',
            title: '서비스 이용',
            period: '즉시 가능',
            description: '지정 병원에서 카드를 사용하여 서비스를 이용합니다.'
          }
        ]
      },
      documents: [
        {
          title: '고양이 건강관리 지원 신청서 [pdf, 245KB]',
          file_size: '245KB',
          file_type: 'pdf'
        },
        {
          title: '수의사 건강진단서 [hwp, 156KB]',
          file_size: '156KB',
          file_type: 'hwp'
        },
        {
          title: '소득증명서류 [pdf, 89KB]',
          file_size: '89KB',
          file_type: 'pdf'
        }
      ],
      together_services: {
        description: '고양이 건강관리 지원과 함께 신청할 수 있는 서비스입니다. <br class="br">여러 서비스를 한 번에 신청하면 중복 서류 제출을 피할 수 있어 더욱 편리합니다.',
        services: [
          {
            id: 'chk_01',
            title: '고양이 건강관리 지원',
            description: '등록된 반려고양이의 건강한 삶을 위해 예방접종, 건강검진, 응급치료 등을 지원합니다.',
            disabled: true,
            checked: false
          },
          {
            id: 'chk_02',
            title: '고양이 중성화 수술 지원',
            description: '개체수 조절과 건강관리를 위한 중성화 수술비를 지원합니다.',
            disabled: false,
            checked: true
          },
          {
            id: 'chk_03',
            title: '고양이 행동교정 상담',
            description: '문제행동 개선을 위한 전문가 상담 서비스를 제공합니다.',
            disabled: false,
            checked: true
          }
        ]
      },
      additional_info: {
        reference_forms: [
          {
            title: '2024년 반려동물 의료비 지원 가이드 [pdf, 2.1MB]',
            file_size: '2.1MB',
            file_type: 'pdf'
          }
        ],
        related_websites: [
          { text: '고양이관리위원회 공식 홈페이지', url: '#' },
          { text: '전국 지정 동물병원 찾기', url: '#' }
        ],
        legal_basis: [
          { text: '동물보호법 (국가법령정보센터)', url: '#' },
          { text: '반려동물 등록 및 관리에 관한 법률', url: '#' }
        ],
        welfare_case: '작년에 우리 나비가 갑자기 아파서 병원에 갔는데 수술비가 너무 비싸서 고민이 많았어요. <br class="br"><br class="br">그런데 고양이관리위원회에서 지원해주는 프로그램이 있다는 걸 알고 신청했더니 정말 큰 도움이 됐어요. 덕분에 나비도 건강하게 회복할 수 있었고, 정기검진도 받을 수 있게 되어서 너무 감사해요.'
      },
      change_history: [
        { date: '2024년 1월 15일', content: '2024년 지원 금액 인상 반영' },
        { date: '2023년 8월 10일', content: '노령묘 추가 지원 혜택 신설' },
        { date: '2023년 3월 1일', content: '서비스 최초 개시' }
      ]
    }
  }
};

export const MinimalSections: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '#' },
      { text: '간편 서비스', url: undefined }
    ],
    title: '간편 신청 서비스',
    description: '복잡한 절차 없이 간단하게 신청할 수 있는 서비스입니다.',
    quick_nav: [
      { id: 'section_01', text: '서비스 개요', active: true },
      { id: 'section_02', text: '서비스 상세', active: true },
      { id: 'section_03', text: '신청 방법', active: false }
    ],
    apply_button: {
      text: '간편 신청하기',
      sub_text: '1분이면 <strong>완료</strong>'
    },
    sections: {
      overview: {
        service_target: '모든 시민',
        service_type: '온라인 서비스',
        selection_criteria: '특별한 조건 없음',
        application_methods: ['온라인 신청'],
        contact: '1588-0000 (고객센터)'
      },
      detail: {
        provision_content: '간단한 정보 입력만으로 서비스를 이용할 수 있습니다.',
        payment_table: {
          headers: ['서비스', '이용료'],
          rows: [
            ['기본 서비스', '무료']
          ]
        },
        selection_criteria: {
          disability: { items: ['특별한 조건이 없습니다.'] },
          age: { items: ['연령 제한이 없습니다.'] },
          income: { items: ['소득 조건이 없습니다.'] }
        }
      },
      application: {
        methods: ['온라인 신청'],
        process: [
          {
            num: '1',
            title: '온라인 신청',
            period: '즉시',
            description: '웹사이트에서 간단한 정보를 입력합니다.'
          },
          {
            num: '2',
            title: '서비스 이용',
            period: '즉시',
            description: '신청 후 바로 서비스를 이용할 수 있습니다.'
          }
        ]
      },
      documents: [],
      together_services: {
        description: '현재 연관된 서비스가 없습니다.',
        services: []
      },
      additional_info: {},
      change_history: [
        { date: '2024년 1월 1일', content: '서비스 시작' }
      ]
    }
  }
};

export const ComplexApplication: Story = {
  args: {
    breadcrumb: [
      { text: '홈', url: '#' },
      { text: '복합 서비스', url: '#' },
      { text: '기업 지원', url: '#' },
      { text: '스타트업 종합 지원', url: undefined }
    ],
    title: '스타트업 종합 지원 프로그램',
    description: '초기 스타트업의 성공적인 정착을 위해 자금, 공간, 멘토링, 마케팅 등을 종합 지원합니다.',
    quick_nav: [
      { id: 'section_01', text: '프로그램 개요', active: true },
      { id: 'section_02', text: '지원 내용 상세', active: true },
      { id: 'section_03', text: '신청 절차', active: false },
      { id: 'section_04', text: '필요 서류', active: false },
      { id: 'section_05', text: '연계 프로그램', active: false },
      { id: 'section_06', text: '추가 정보', active: false },
      { id: 'section_07', text: '변경 이력', active: false },
    ],
    apply_button: {
      text: '스타트업 종합 지원 신청하기',
      sub_text: '종합 지원 외 <strong>5건</strong> 연계 가능'
    },
    sections: {
      overview: {
        service_target: '설립 3년 이내 스타트업',
        service_type: '종합 지원 (자금, 공간, 멘토링)',
        selection_criteria: '사업 아이템 · 성장성 · 혁신성',
        application_methods: [
          '온라인 신청 (스타트업지원센터)',
          '방문 상담 신청',
          '투자기관 추천'
        ],
        contact: '02-1234-5678 (스타트업지원센터)'
      },
      detail: {
        provision_content: '초기 스타트업의 성장을 위해 자금 지원, 사무공간 제공, 전문 멘토링, 마케팅 지원 등을 종합적으로 제공합니다.',
        payment_table: {
          headers: ['지원 분야', '초기 단계', '성장 단계'],
          rows: [
            ['사업화 자금', '최대 5천만원', '최대 2억원'],
            ['사무공간 (월)', '무료 (6개월)', '50% 할인 (12개월)'],
            ['멘토링 (월)', '월 4회', '월 2회'],
            ['마케팅 지원', '300만원', '1천만원']
          ]
        },
        selection_criteria: {
          disability: {
            items: [
              '혁신적인 기술 또는 비즈니스 모델을 보유한 스타트업을 대상으로 합니다.',
              {
                text: '다음 조건을 모두 만족해야 합니다.',
                sub_items: [
                  '법인 설립 후 3년 이내',
                  {
                    text: '상시근로자 20명 이하',
                    note: {
                      title: '참고',
                      content: '대표자 및 임원은 상시근로자 수에 포함되지 않습니다.'
                    }
                  }
                ]
              }
            ]
          },
          age: {
            items: [
              '기업 설립일 기준 3년 이내여야 합니다.',
              {
                text: '예비창업자의 경우 사업계획서 심사를 통해 선발합니다.',
                note: {
                  title: '참고',
                  content: '예비창업자는 6개월 내 법인 설립을 조건으로 지원받을 수 있습니다.'
                }
              }
            ]
          },
          income: {
            items: [
              '연매출 30억원 이하 기업을 대상으로 합니다.',
              {
                text: '자금 지원 규모는 매출액과 성장성을 종합 고려하여 결정됩니다.',
                sub_items: [
                  {
                    text: '<strong>매출 기준:</strong> 최근 3년 평균 매출액',
                    note: {
                      title: '참고: 매출 산정 기준',
                      content: {
                        formula: '평균 매출액 = (최근 3년 매출 합계) ÷ 3',
                        details: [
                          '신설법인: 설립 후 매출 실적으로 계산',
                          '개인사업자 전환: 개인사업 기간 매출 포함'
                        ]
                      }
                    }
                  },
                  '<strong>성장성 평가:</strong> 매출 증가율, 시장 규모, 기술 혁신성 등을 종합 평가'
                ]
              }
            ]
          }
        }
      },
      application: {
        methods: [
          '온라인 신청 (스타트업지원포털)',
          '방문 신청 (스타트업지원센터)',
          '투자기관/엑셀러레이터 추천'
        ],
        process: [
          {
            num: '1',
            title: '사전 상담 및 신청',
            period: '1-2주 소요',
            description: '사업계획서 검토 및 멘토와의 사전 상담을 진행합니다.'
          },
          {
            num: '2',
            title: '서류 심사',
            period: '2-3주 소요',
            description: '제출된 사업계획서와 재무제표를 바탕으로 1차 심사합니다.'
          },
          {
            num: '3',
            title: '발표 평가 (피칭)',
            period: '1주 소요',
            description: '전문가 패널 앞에서 사업 아이템을 발표합니다.'
          },
          {
            num: '4',
            title: '최종 선정 및 계약',
            period: '1주 소요',
            description: '최종 선정 후 지원 협약을 체결합니다.'
          },
          {
            num: '5',
            title: '프로그램 참여',
            period: '6-24개월',
            description: '단계별 지원 프로그램에 참여하며 성과를 관리합니다.'
          }
        ]
      },
      documents: [
        {
          title: '스타트업 지원 신청서 [pdf, 1.2MB]',
          file_size: '1.2MB',
          file_type: 'pdf'
        },
        {
          title: '사업계획서 템플릿 [pptx, 3.5MB]',
          file_size: '3.5MB',
          file_type: 'pptx'
        },
        {
          title: '재무제표 양식 [xlsx, 245KB]',
          file_size: '245KB',
          file_type: 'xlsx'
        },
        {
          title: '법인등기부등본 및 사업자등록증',
          file_size: '',
          file_type: 'pdf'
        }
      ],
      together_services: {
        description: '스타트업 종합 지원과 함께 신청할 수 있는 연계 프로그램입니다. <br class="br">여러 프로그램을 동시에 신청하면 심사 과정에서 우대 혜택을 받을 수 있습니다.',
        services: [
          {
            id: 'startup_01',
            title: '스타트업 종합 지원',
            description: '초기 스타트업의 성공적인 정착을 위해 자금, 공간, 멘토링, 마케팅 등을 종합 지원합니다.',
            disabled: true,
            checked: false
          },
          {
            id: 'startup_02',
            title: 'K-스타트업 글로벌 진출 지원',
            description: '해외 시장 진출을 위한 마케팅, 현지화, 파트너십 연결 등을 지원합니다.',
            disabled: false,
            checked: true
          },
          {
            id: 'startup_03',
            title: '기술혁신 R&D 지원',
            description: '혁신 기술 개발을 위한 연구개발비와 특허 출원비를 지원합니다.',
            disabled: false,
            checked: true
          },
          {
            id: 'startup_04',
            title: '인재채용 지원',
            description: '우수 인재 채용 시 인건비 일부를 지원하고 채용 프로세스를 도와드립니다.',
            disabled: false,
            checked: false
          }
        ]
      },
      additional_info: {
        reference_forms: [
          {
            title: '2024년 스타트업 지원 가이드북 [pdf, 8.2MB]',
            file_size: '8.2MB',
            file_type: 'pdf'
          },
          {
            title: '성공 사례집 [pdf, 5.1MB]',
            file_size: '5.1MB',
            file_type: 'pdf'
          }
        ],
        related_websites: [
          { text: '창업진흥원 공식 홈페이지', url: '#' },
          { text: 'K-스타트업 플랫폼', url: '#' },
          { text: '중소벤처기업부', url: '#' }
        ],
        legal_basis: [
          { text: '중소기업창업 지원법', url: '#' },
          { text: '벤처기업육성에 관한 특별조치법', url: '#' }
        ],
        welfare_case: '작년에 AI 기반 펫케어 서비스로 창업을 시작했는데, 초기 자금과 사무공간 문제로 많은 어려움이 있었습니다. <br class="br"><br class="br">스타트업 종합 지원 프로그램에 선정되면서 자금 지원은 물론 전문 멘토들의 조언과 네트워킹 기회까지 얻을 수 있었어요. 특히 마케팅 지원 덕분에 고객 확보에 큰 도움이 되었고, 현재는 시리즈 A 투자 유치까지 성공했습니다.'
      },
      change_history: [
        { date: '2024년 2월 1일', content: '2024년 지원 규모 확대 (자금 지원 한도 상향)' },
        { date: '2023년 9월 15일', content: '글로벌 진출 지원 프로그램 연계' },
        { date: '2023년 6월 1일', content: '예비창업자 지원 대상 확대' },
        { date: '2023년 1월 1일', content: '프로그램 최초 개시' }
      ]
    }
  }
};