# React Storybook Project Documentation

이 문서는 독립 에이전트가 프로젝트를 이해하고 작업할 수 있도록 구조, 로직, 규칙을 상세히 기록한 종합 가이드입니다.

## 📑 문서 구조

### 핵심 문서
- [프로젝트 개요](./01-project-overview.md) - 전체적인 프로젝트 구조와 목적
- [Government 컴포넌트 시스템](./02-government-components.md) - 정부 표준 컴포넌트 라이브러리
- [Storybook 설정](./03-storybook-configuration.md) - Storybook 구성 및 설정
- [개발 가이드](./04-development-guide.md) - 개발 규칙 및 베스트 프랙티스
- [컴포넌트 카탈로그](./05-component-catalog.md) - 사용 가능한 모든 컴포넌트 목록

### 참조 문서
- [파일 구조](./reference/file-structure.md) - 디렉토리 및 파일 구조 상세
- [타입 정의](./reference/type-definitions.md) - TypeScript 인터페이스 및 타입
- [스타일 시스템](./reference/styling-system.md) - CSS 변수 및 스타일 가이드
- [빌드 프로세스](./reference/build-process.md) - 빌드 및 배포 과정

## 🎯 독립 에이전트 작업 가이드

### 시작하기 전에
1. [프로젝트 개요](./01-project-overview.md)를 먼저 읽어 전체 구조를 파악
2. [Government 컴포넌트 시스템](./02-government-components.md)에서 핵심 아키텍처 이해
3. [개발 가이드](./04-development-guide.md)에서 코딩 규칙 및 패턴 확인

### 작업 시 참고사항
- 모든 새로운 컴포넌트는 Government 표준을 따라야 함
- Storybook 스토리는 필수적으로 작성
- TypeScript 타입 안전성 유지
- 접근성(a11y) 표준 준수

### 긴급 참조
- **컴포넌트 생성**: [개발 가이드 - 새 컴포넌트 추가](./04-development-guide.md#새-컴포넌트-추가)
- **스타일링**: [스타일 시스템](./reference/styling-system.md)
- **타입 정의**: [타입 정의](./reference/type-definitions.md)
- **문제 해결**: [개발 가이드 - 문제 해결](./04-development-guide.md#문제-해결)

## 📋 체크리스트

### 새 컴포넌트 작성 시
- [ ] Government 디자인 시스템 준수
- [ ] TypeScript 인터페이스 정의
- [ ] Storybook 스토리 작성
- [ ] 접근성 표준 준수
- [ ] 반응형 디자인 적용

### 기존 컴포넌트 수정 시
- [ ] 기존 API 호환성 유지
- [ ] 관련 스토리 업데이트
- [ ] 타입 정의 확인
- [ ] 스타일 가이드 준수

## 🔗 외부 링크
- [Storybook 공식 문서](https://storybook.js.org/)
- [React 공식 문서](https://react.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [한국 정부 디자인 시스템](https://www.gov.kr/portal/main)

---

**마지막 업데이트**: 2025-01-17  
**버전**: 1.0.0