/**
 * Contents List Page Interactive Functionality
 * Based on PHP reference file scripts
 */

export interface ContentsListPageInteractions {
  initializeAccordionMenus: () => void;
  initializeDepth3Menus: () => void;
  initializeDropdownMenus: () => void;
  enableTransitions: () => void;
  cleanup: () => void;
}

export const createContentsListPageInteractions = (): ContentsListPageInteractions => {
  // 활성화된 카테고리 상태를 저장
  const activeCategories = new Set<number>();
  const activeDepth3 = new Set<string>();
  
  // 이벤트 리스너 참조 저장 (cleanup용)
  const eventListeners: Array<{
    element: Element | Document;
    event: string;
    handler: EventListener;
  }> = [];

  // 이벤트 리스너 추가 헬퍼
  const addEventListenerWithCleanup = (
    element: Element | Document,
    event: string,
    handler: EventListener
  ) => {
    element.addEventListener(event, handler);
    eventListeners.push({ element, event, handler });
  };

  // 아코디언 메뉴 동작 초기화
  const initializeAccordionMenus = (): void => {
    const accoButtons = document.querySelectorAll('.acco-btn');
    
    accoButtons.forEach((button, index) => {
      const clickHandler = function(this: Element, e: Event) {
        e.preventDefault();
        e.stopPropagation();
        
        const accoHead = this.closest('.acco-head');
        const accoBody = accoHead?.nextElementSibling as HTMLElement;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        const srOnlySpan = this.querySelector('.sr-only') as HTMLElement;
        
        if (isExpanded) {
          // 닫기
          this.setAttribute('aria-expanded', 'false');
          if (srOnlySpan) srOnlySpan.textContent = '펼침';
          if (accoBody) accoBody.style.display = 'none';
          activeCategories.delete(index);
        } else {
          // 열기
          this.setAttribute('aria-expanded', 'true');
          if (srOnlySpan) srOnlySpan.textContent = '접기';
          if (accoBody) accoBody.style.display = 'block';
          activeCategories.add(index);
        }
      };
      
      addEventListenerWithCleanup(button, 'click', clickHandler);
    });
  };

  // 3depth 메뉴 동작 초기화
  const initializeDepth3Menus = (): void => {
    const depth3Buttons = document.querySelectorAll('.has-depth3');
    
    depth3Buttons.forEach((button, index) => {
      const clickHandler = function(this: Element, e: Event) {
        e.preventDefault();
        
        const expanded = this.getAttribute('aria-expanded') === 'true';
        const depth3Ul = this.nextElementSibling as HTMLElement;
        const buttonKey = `depth3-${index}`;
        
        if (expanded) {
          // 접기
          this.setAttribute('aria-expanded', 'false');
          if (depth3Ul) {
            // 애니메이션을 위해 setTimeout 사용
            depth3Ul.style.maxHeight = '0';
            depth3Ul.style.opacity = '0';
            setTimeout(() => {
              depth3Ul.style.display = 'none';
            }, 300);
          }
          activeDepth3.delete(buttonKey);
        } else {
          // 펼치기
          this.setAttribute('aria-expanded', 'true');
          if (depth3Ul) {
            depth3Ul.style.display = '';
            // 리플로우를 강제하여 애니메이션 적용
            void depth3Ul.offsetHeight;
            depth3Ul.style.maxHeight = '500px';
            depth3Ul.style.opacity = '1';
          }
          activeDepth3.add(buttonKey);
        }
      };
      
      addEventListenerWithCleanup(button, 'click', clickHandler);
    });
  };

  // 드롭다운 메뉴 동작 초기화
  const initializeDropdownMenus = (): void => {
    const dropBtns = document.querySelectorAll('.drop-btn');
    
    dropBtns.forEach(dropBtn => {
      const clickHandler = function(this: Element) {
        const dropMenu = this.nextElementSibling as HTMLElement;
        if (dropMenu) {
          dropMenu.classList.toggle('active');
        }
      };
      
      addEventListenerWithCleanup(dropBtn, 'click', clickHandler);
    });
    
    // 외부 클릭시 드롭다운 닫기
    const documentClickHandler = function(e: Event) {
      const target = e.target as Element;
      if (!target.closest('.krds-drop-wrap')) {
        document.querySelectorAll('.drop-menu.active').forEach(menu => {
          menu.classList.remove('active');
        });
      }
    };
    
    addEventListenerWithCleanup(document, 'click', documentClickHandler);
  };

  // 페이지 로드 완료 후 애니메이션 활성화 (깜빡임 방지)
  const enableTransitions = (): void => {
    setTimeout(() => {
      document.querySelectorAll('.acco-body').forEach(el => {
        el.classList.add('transitions-enabled');
      });
    }, 100);
  };

  // 이벤트 리스너 정리
  const cleanup = (): void => {
    eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    eventListeners.length = 0;
    activeCategories.clear();
    activeDepth3.clear();
  };

  return {
    initializeAccordionMenus,
    initializeDepth3Menus,
    initializeDropdownMenus,
    enableTransitions,
    cleanup
  };
};

// 자동 초기화 함수
export const initializeContentsListPageInteractions = (): ContentsListPageInteractions => {
  const interactions = createContentsListPageInteractions();
  
  // DOM이 로드되면 자동으로 초기화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      interactions.initializeAccordionMenus();
      interactions.initializeDepth3Menus();
      interactions.initializeDropdownMenus();
      interactions.enableTransitions();
    });
  } else {
    // 이미 로드된 경우 즉시 실행
    interactions.initializeAccordionMenus();
    interactions.initializeDepth3Menus();
    interactions.initializeDropdownMenus();
    interactions.enableTransitions();
  }
  
  return interactions;
};

// 기본 내보내기
export default initializeContentsListPageInteractions;