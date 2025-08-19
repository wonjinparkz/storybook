# Government Design System - Storybook API Reference

## 🌐 Live Demo
**URL**: https://wonjinparkz.github.io/storybook/

## 📦 Standalone Components
컴포넌트를 독립적으로 복제해서 사용할 수 있습니다:
- **StepProcessPage**: [`packages/StepProcessPage/`](./packages/StepProcessPage/) - 완전히 독립적인 버전
- **포함 파일**: 컴포넌트, 타입, 스타일, 사용 가이드 포함
- **의존성**: React만 필요 (Provider 불필요)

## 📚 Component Library

### Header & Footer
- [GovernmentHeader](https://wonjinparkz.github.io/storybook/?path=/docs/government-governmentheader--docs) - 정부 웹사이트 헤더
- [GovernmentFooter](https://wonjinparkz.github.io/storybook/?path=/docs/government-governmentfooter--docs) - 정부 웹사이트 푸터

### Carousel Components
- [FullBannerCarousel](https://wonjinparkz.github.io/storybook/?path=/docs/government-fullbannercarousel--docs) - 메인 배너 캐러셀
- [IconFeaturesCarousel](https://wonjinparkz.github.io/storybook/?path=/docs/government-iconfeaturescarousel--docs) - 아이콘 특징 캐러셀
- [ComplexFeaturesCarousel](https://wonjinparkz.github.io/storybook/?path=/docs/government-complexfeaturescarousel--docs) - 복합 특징 캐러셀
- [ContentsCardCarousel](https://wonjinparkz.github.io/storybook/?path=/docs/government-contentscarduousel--docs) - 콘텐츠 카드 캐러셀

### Page Components
- [ApplyPage](https://wonjinparkz.github.io/storybook/?path=/docs/government-z-page-applypage--docs) - 신청 페이지
- [ContentsPage](https://wonjinparkz.github.io/storybook/?path=/docs/government-z-page-contentspage--docs) - 콘텐츠 페이지
- [ContentsListPage](https://wonjinparkz.github.io/storybook/?path=/docs/government-z-page-contentslistpage--docs) - 콘텐츠 목록 페이지
- [StepProcessPage](https://wonjinparkz.github.io/storybook/?path=/docs/government-z-page-stepprocesspage--docs) - 스텝 프로세스 페이지

### Content Components
- [CardContents](https://wonjinparkz.github.io/storybook/?path=/docs/government-x-content-cardcontents--docs) - 카드형 콘텐츠
- [FootContents](https://wonjinparkz.github.io/storybook/?path=/docs/government-x-content-footcontents--docs) - 푸터 콘텐츠
- [TabContents](https://wonjinparkz.github.io/storybook/?path=/docs/government-x-content-tabcontents--docs) - 탭형 콘텐츠

### Navigation
- [ContentsSidebar](https://wonjinparkz.github.io/storybook/?path=/docs/government-y-navigation-contentssidebar--docs) - 콘텐츠 사이드바

## 🔧 Interactive Examples

### StepProcessPage - 동적 폼 시스템
- [기본 회원가입 폼](https://wonjinparkz.github.io/storybook/?path=/story/government-z-page-stepprocesspage--dynamic-form-basic)
- [섹션별 사업자 등록 폼](https://wonjinparkz.github.io/storybook/?path=/story/government-z-page-stepprocesspage--dynamic-form-with-sections)
- [복합 민원 접수 폼](https://wonjinparkz.github.io/storybook/?path=/story/government-z-page-stepprocesspage--dynamic-form-complex)
- [라디오/체크박스 설문조사](https://wonjinparkz.github.io/storybook/?path=/story/government-z-page-stepprocesspage--dynamic-form-with-radio)
- [4단계 전입신고 프로세스](https://wonjinparkz.github.io/storybook/?path=/story/government-z-page-stepprocesspage--full-step-process)
- [완료 페이지](https://wonjinparkz.github.io/storybook/?path=/story/government-z-page-stepprocesspage--completed-process)

## 📋 Form Field Types (StepProcessPage)

총 14가지 동적 폼 필드 타입 지원:
1. `text` - 텍스트 입력
2. `tel` - 전화번호 입력
3. `email` - 이메일 입력
4. `number` - 숫자 입력
5. `date` - 날짜 선택
6. `time` - 시간 선택
7. `select` - 드롭다운 선택
8. `textarea` - 여러줄 텍스트
9. `file` - 파일 업로드
10. `checkbox_single` - 단일 체크박스
11. `checkbox_group` - 체크박스 그룹
12. `radio_group` - 라디오 버튼 그룹
13. `terms_box` - 약관 동의 박스
14. `custom_html` - 커스텀 HTML

## 🎨 Design System

### Design Tokens
- [Typography, Colors, Spacing](https://wonjinparkz.github.io/storybook/?path=/docs/design-system-design-tokens--docs)

### CSS Classes
정부 디자인 시스템의 표준 CSS 클래스들:
- `.contents-btn-tl` - 통일된 버튼 스타일
- `.government-header` - 헤더 레이아웃
- `.government-footer` - 푸터 레이아웃
- `.step-process-page` - 스텝 프로세스 레이아웃

## 🔗 직접 링크 생성 방법

Storybook에서 원하는 컴포넌트/스토리 페이지에서:
1. 우측 상단 "⋯" 메뉴 클릭
2. "Copy link" 선택
3. URL을 다른 AI 서버에 전달

## 📱 모바일 접근
모든 컴포넌트는 반응형 디자인으로 구현되어 모바일에서도 확인 가능합니다.

## 🚀 실시간 업데이트
이 Storybook은 `main` 브랜치에 변경사항이 푸시될 때마다 자동으로 업데이트됩니다.

---

**마지막 업데이트**: 자동 배포 시스템으로 실시간 업데이트
**버전**: 실시간 반영
**문의**: GitHub Issues