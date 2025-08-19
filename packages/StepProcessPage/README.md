# StepProcessPage - Standalone Component

Korean Government Design System의 StepProcessPage 컴포넌트의 독립 실행 버전입니다.

## 📦 포함된 파일

```
packages/StepProcessPage/
├── StepProcessPage.tsx    # 메인 컴포넌트
├── types.ts              # TypeScript 타입 정의
├── styles.css            # 모든 필요한 스타일
├── index.ts              # Export 파일
└── README.md             # 이 파일
```

## 🚀 빠른 시작

### 1. 파일 복사
위의 4개 파일을 프로젝트에 복사합니다.

### 2. 의존성 추가
```bash
npm install react react-dom
# TypeScript 사용시
npm install -D typescript @types/react @types/react-dom
```

### 3. 스타일 import
```tsx
import StepProcessPage from './StepProcessPage/StepProcessPage';
import './StepProcessPage/styles.css';
```

### 4. 기본 사용 예시

```tsx
import React from 'react';
import StepProcessPage from './StepProcessPage/StepProcessPage';
import './StepProcessPage/styles.css';

function App() {
  return (
    <StepProcessPage
      type="single"
      title="회원가입"
      breadcrumb={[
        { text: '홈', url: '/' },
        { text: '회원가입', url: '' }
      ]}
      steps={[
        { num: 1, title: '정보입력' },
        { num: 2, title: '완료' }
      ]}
      currentStep={1}
      stepContents={{
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
              required: true
            }
          ]
        }
      }}
      buttons={{
        next: { text: '다음', show: true },
        cancel: { text: '취소', show: true }
      }}
    />
  );
}

export default App;
```

## 🔧 주요 기능

### 14가지 폼 필드 타입
1. `text` - 텍스트 입력
2. `tel` - 전화번호
3. `email` - 이메일
4. `number` - 숫자
5. `date` - 날짜
6. `time` - 시간
7. `select` - 드롭다운
8. `textarea` - 여러줄 텍스트
9. `file` - 파일 업로드
10. `checkbox_single` - 단일 체크박스
11. `checkbox_group` - 체크박스 그룹
12. `radio_group` - 라디오 버튼 그룹
13. `terms_box` - 약관 박스
14. `custom_html` - 커스텀 HTML

### 스텝 타입
- `nostep` - 스텝 없음
- `single` - 타이틀 우측에 스텝 표시
- `multi` - 타이틀 하단에 스텝 표시  
- `success` - 완료 페이지

## 📋 복합 예시

### 섹션별 폼
```tsx
stepContents: {
  1: {
    fields: [
      {
        section_title: '개인 정보',
        fields: [
          {
            type: 'text',
            name: 'name',
            label: '성명',
            required: true
          },
          {
            type: 'tel',
            name: 'phone',
            label: '연락처',
            required: true
          }
        ]
      }
    ]
  }
}
```

### 체크박스 그룹
```tsx
{
  type: 'checkbox_group',
  name: 'interests',
  label: '관심분야',
  options: [
    { value: 'tech', label: '기술', checked: false },
    { value: 'design', label: '디자인', checked: false },
    { value: 'business', label: '비즈니스', checked: false }
  ]
}
```

### 약관 동의
```tsx
{
  type: 'terms_box',
  title: '서비스 이용약관',
  sections: [
    {
      heading: '개인정보 처리방침',
      paragraphs: [
        '개인정보를 안전하게 처리합니다.',
        '필요한 최소한의 정보만 수집합니다.'
      ]
    }
  ]
}
```

### 완료 페이지
```tsx
<StepProcessPage
  type="success"
  title="신청 완료"
  breadcrumb={breadcrumb}
  success={{
    message: '회원가입이 완료되었습니다.',
    applicant: '홍길동',
    info: [
      '이메일: test@example.com',
      '가입일: 2025-01-19'
    ],
    relatedServices: [
      { text: '프로필 설정', url: '/profile' },
      { text: '서비스 둘러보기', url: '/tour' }
    ]
  }}
/>
```

## 🎨 스타일 커스터마이징

### CSS 변수 오버라이드
```css
:root {
  --primary-color: #007bff;
  --border-color: #dee2e6;
  --background-color: #f8f9fa;
}
```

### 클래스 오버라이드
```css
.your-custom-class .form-control {
  border-radius: 8px;
  border: 2px solid var(--primary-color);
}
```

## 🔄 상태 관리

컴포넌트는 내부적으로 `useState`를 사용하여 폼 상태를 관리합니다:
- 텍스트 필드: 문자열 값
- 체크박스 그룹: 배열 값  
- 라디오 그룹: 선택된 값
- 단일 체크박스: boolean 값

## 📱 반응형 지원

모든 스타일은 반응형으로 구현되어 있습니다:
- 데스크톱: 전체 기능
- 태블릿: 적응형 레이아웃
- 모바일: 세로 스택 레이아웃

## 🔗 원본 참조

이 컴포넌트의 라이브 데모는 다음에서 확인할 수 있습니다:
https://wonjinparkz.github.io/storybook/?path=/docs/government-z-page-stepprocesspage--docs

## ⚠️ 주의사항

1. **React 18 이상** 권장
2. **CSS 스타일이 필수**로 포함되어야 함
3. **정부 디자인 시스템** 가이드라인 준수
4. **접근성(a11y)** 속성이 포함됨

## 📄 라이선스

이 컴포넌트는 정부 디자인 시스템의 일부로, 공공 목적으로 자유롭게 사용할 수 있습니다.