/**
 * Government Components Feature Scripts
 * 정부 컴포넌트들의 핵심 기능을 담당하는 스크립트 (TypeScript 버전)
 */

// 전역 변수들
let winSize: 'pc' | 'mob';
let quickNavObserver: IntersectionObserver | null = null;

/**
 * 윈도우 사이즈 체크 (반응형)
 */
function winSizeSet(): void {
  const breakpoint = 1024;
  if (window.innerWidth >= breakpoint) {
    winSize = 'pc';
  } else {
    winSize = 'mob';
  }
}

/**
 * 퀵 네비게이션 기능
 * 스크롤에 따라 현재 섹션을 감지하고 네비게이션 상태를 업데이트
 */
function initQuickNavigation(): void {
  const quickNavArea = document.querySelector('.quick-nav-area');
  const quickNavLinks = document.querySelectorAll('.quick-list a');
  const sections = document.querySelectorAll('.section-link');
  
  if (!quickNavArea || !quickNavLinks.length || !sections.length) {
    return;
  }

  // Intersection Observer 설정
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  // 현재 활성 섹션 추적
  let currentSection = '';

  quickNavObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentSection = entry.target.id;
        updateQuickNavigation(currentSection);
      }
    });
  }, observerOptions);

  // 모든 섹션 관찰 시작
  sections.forEach(section => {
    quickNavObserver?.observe(section);
  });

  // 퀵 네비게이션 클릭 이벤트
  quickNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href) {
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          // 스무스 스크롤
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // 네비게이션 상태 업데이트
          updateQuickNavigation(targetId);
        }
      }
    });
  });
}

/**
 * 퀵 네비게이션 상태 업데이트
 */
function updateQuickNavigation(activeId: string): void {
  const quickNavLinks = document.querySelectorAll('.quick-list a');
  
  quickNavLinks.forEach(link => {
    const href = (link as HTMLAnchorElement).getAttribute('href');
    if (href === `#${activeId}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * 확장 가능한 컨텐츠 기능
 * "자세히 보기" 버튼으로 컨텐츠를 펼치고 접는 기능
 */
function initExpandableContent(): void {
  const expandButtons = document.querySelectorAll('.btn-conts-expand');
  
  expandButtons.forEach(button => {
    button.addEventListener('click', function(this: HTMLElement) {
      const expandArea = this.closest('.conts-expand-area');
      const expandWrap = expandArea?.querySelector('.expand-wrap') as HTMLElement;
      
      if (!expandArea || !expandWrap) return;
      
      const isExpanded = expandArea.classList.contains('expanded');
      
      if (isExpanded) {
        // 접기
        expandArea.classList.remove('expanded');
        expandWrap.style.maxHeight = '200px';
        expandWrap.style.overflow = 'hidden';
        this.textContent = this.textContent?.replace('접기', '전체 보기') || '';
        this.setAttribute('aria-expanded', 'false');
      } else {
        // 펼치기
        expandArea.classList.add('expanded');
        expandWrap.style.maxHeight = 'none';
        expandWrap.style.overflow = 'visible';
        this.textContent = this.textContent?.replace('전체 보기', '접기') || '';
        this.setAttribute('aria-expanded', 'true');
      }
    });
    
    // 초기 상태 설정
    button.setAttribute('aria-expanded', 'false');
    const expandWrap = button.closest('.conts-expand-area')?.querySelector('.expand-wrap') as HTMLElement;
    if (expandWrap) {
      expandWrap.style.maxHeight = '200px';
      expandWrap.style.overflow = 'hidden';
    }
  });
}

/**
 * 체크박스 전체 선택 기능
 */
function initCheckboxGroups(): void {
  const checkAllButtons = document.querySelectorAll('#chk_all') as NodeListOf<HTMLInputElement>;
  
  checkAllButtons.forEach(checkAll => {
    const checkGroup = checkAll.closest('.chk-group-area');
    const individualChecks = checkGroup?.querySelectorAll('input[type="checkbox"]:not(#chk_all)') as NodeListOf<HTMLInputElement>;
    const checkNum = checkGroup?.querySelector('.chk-num strong');
    
    if (!checkGroup || !individualChecks.length) return;
    
    // 전체 선택 체크박스 이벤트
    checkAll.addEventListener('change', function(this: HTMLInputElement) {
      individualChecks.forEach(check => {
        if (!check.disabled) {
          check.checked = this.checked;
          updateCheckboxState(check);
        }
      });
      updateCheckCount(checkGroup, checkNum || null);
    });
    
    // 개별 체크박스 이벤트들
    individualChecks.forEach(check => {
      check.addEventListener('change', function(this: HTMLInputElement) {
        updateCheckboxState(this);
        updateCheckAllState(checkAll, individualChecks);
        updateCheckCount(checkGroup, checkNum || null);
      });
    });
    
    // 초기 상태 설정
    updateCheckCount(checkGroup, checkNum || null);
  });
}

/**
 * 체크박스 상태 업데이트
 */
function updateCheckboxState(checkbox: HTMLInputElement): void {
  const listItem = checkbox.closest('li');
  if (listItem) {
    if (checkbox.checked) {
      listItem.classList.add('checked');
    } else {
      listItem.classList.remove('checked');
    }
  }
}

/**
 * 전체 선택 체크박스 상태 업데이트
 */
function updateCheckAllState(checkAll: HTMLInputElement, individualChecks: NodeListOf<HTMLInputElement>): void {
  const enabledChecks = Array.from(individualChecks).filter(check => !check.disabled);
  const checkedCount = enabledChecks.filter(check => check.checked).length;
  
  if (checkedCount === enabledChecks.length) {
    checkAll.checked = true;
    checkAll.indeterminate = false;
  } else if (checkedCount > 0) {
    checkAll.checked = false;
    checkAll.indeterminate = true;
  } else {
    checkAll.checked = false;
    checkAll.indeterminate = false;
  }
}

/**
 * 선택된 항목 수 업데이트
 */
function updateCheckCount(checkGroup: Element, checkNumElement: Element | null): void {
  if (!checkNumElement) return;
  
  const checkedBoxes = checkGroup.querySelectorAll('input[type="checkbox"]:not(#chk_all):checked');
  checkNumElement.textContent = checkedBoxes.length + '건';
}

/**
 * 테이블 반응형 기능
 */
function initResponsiveTables(): void {
  const tables = document.querySelectorAll('.tbl.col.data');
  
  tables.forEach(table => {
    // 테이블이 부모 컨테이너를 넘칠 때 스크롤 추가
    const wrapper = document.createElement('div');
    wrapper.classList.add('table-responsive');
    wrapper.style.overflowX = 'auto';
    wrapper.style.marginBottom = '1rem';
    
    table.parentNode?.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

/**
 * 파일 다운로드 기능 (시뮬레이션)
 */
function initFileDownloads(): void {
  const downloadButtons = document.querySelectorAll('.btn-txt.ico-down');
  const viewButtons = document.querySelectorAll('.btn-txt.ico-go');
  
  downloadButtons.forEach(button => {
    button.addEventListener('click', function(this: HTMLElement, e) {
      e.preventDefault();
      const fileName = this.closest('li')?.querySelector('.tit')?.textContent || '파일';
      alert(`${fileName}을(를) 다운로드합니다.`);
    });
  });
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function(this: HTMLElement, e) {
      e.preventDefault();
      const fileName = this.closest('li')?.querySelector('.tit')?.textContent || '파일';
      alert(`${fileName}을(를) 새 창에서 미리보기합니다.`);
    });
  });
}

/**
 * 링크 처리 기능
 */
function initLinkHandlers(): void {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  
  externalLinks.forEach(link => {
    link.addEventListener('click', function(this: HTMLAnchorElement, e) {
      e.preventDefault();
      const url = this.href;
      if (url && url !== '#') {
        alert(`외부 링크로 이동합니다: ${this.textContent}`);
      }
    });
  });
}

/**
 * 메인 초기화 함수
 */
function initGovernmentUI(): void {
  console.log('Government UI initialization started');
  
  // 윈도우 사이즈 설정
  winSizeSet();
  window.addEventListener('resize', winSizeSet);
  
  // 기능별 초기화
  initQuickNavigation();
  initExpandableContent();
  initCheckboxGroups();
  initResponsiveTables();
  initFileDownloads();
  initLinkHandlers();
  
  console.log('Government UI initialization completed');
}

/**
 * 정리 함수
 */
function cleanupGovernmentUI(): void {
  // Intersection Observer 정리
  if (quickNavObserver) {
    quickNavObserver.disconnect();
    quickNavObserver = null;
  }
  
  // 이벤트 리스너 정리
  window.removeEventListener('resize', winSizeSet);
  
  console.log('Government UI cleanup completed');
}

// 전역 함수로 등록
declare global {
  interface Window {
    initGovernmentUI: () => void;
    cleanupGovernmentUI: () => void;
    initQuickNavigation: () => void;
    initExpandableContent: () => void;
  }
}

window.initGovernmentUI = initGovernmentUI;
window.cleanupGovernmentUI = cleanupGovernmentUI;
window.initQuickNavigation = initQuickNavigation;
window.initExpandableContent = initExpandableContent;

// DOM 로드 완료 시 자동 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGovernmentUI);
} else {
  // 이미 로드 완료된 경우
  setTimeout(initGovernmentUI, 100);
}

// ES6 모듈로 export
export { initGovernmentUI, cleanupGovernmentUI, initQuickNavigation, initExpandableContent };