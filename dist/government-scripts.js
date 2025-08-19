/**
 * Korean Government Design System - Scripts Bundle
 * Auto-generated on 2025-08-19T01:17:57.186Z
 * 
 * 사용법:
 * <script src="government-scripts.js"></script>
 * <script>
 *   // 정부 디자인 시스템 스크립트 자동 초기화
 *   GovernmentScripts.init();
 * </script>
 */

(function(window) {
  'use strict';
  
  const GovernmentScripts = {
    version: '1.0.0',
    initialized: false,
    
    // 자동 초기화
    init: function() {
      if (this.initialized) return;
      
      console.log('🏛️ Government Design System Scripts initialized');
      
      // 각 스크립트 모듈 초기화
      this.initializeCarousels();
      this.initializeForms();
      this.initializeInteractions();
      
      this.initialized = true;
    },
    
    // 스크립트별 초기화 함수들이 여기에 추가됨

    // ===== CONTENTS-LIST-PAGE-INTERACTIONS =====
    contents-list-page-interactions: (function() {
      /**
       * Contents List Page Interactive Functionality
       * Based on PHP reference file scripts
       */
      
      export 
      
      export const createContentsListPageInteractions = () => {
        // 활성화된 카테고리 상태를 저장
        const activeCategories = new Set<number>();
        const activeDepth3 = new Set<string>();
        
        // 이벤트 리스너 참조 저장 (cleanup용)
        const eventListeners<{
          element | Document;
          event;
          handler;
        }> = [];
      
        // 이벤트 리스너 추가 헬퍼
        const addEventListenerWithCleanup = (
          element | Document,
          event,
          handler
        ) => {
          element.addEventListener(event, handler);
          eventListeners.push({ element, event, handler });
        };
      
        // 아코디언 메뉴 동작 초기화
        const initializeAccordionMenus = () => {
          const accoButtons = document.querySelectorAll('.acco-btn');
          
          accoButtons.forEach((button, index) => {
            const clickHandler = function(this, e) {
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
        const initializeDepth3Menus = () => {
          const depth3Buttons = document.querySelectorAll('.has-depth3');
          
          depth3Buttons.forEach((button, index) => {
            const clickHandler = function(this, e) {
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
        const initializeDropdownMenus = () => {
          const dropBtns = document.querySelectorAll('.drop-btn');
          
          dropBtns.forEach(dropBtn => {
            const clickHandler = function(this) {
              const dropMenu = this.nextElementSibling as HTMLElement;
              if (dropMenu) {
                dropMenu.classList.toggle('active');
              }
            };
            
            addEventListenerWithCleanup(dropBtn, 'click', clickHandler);
          });
          
          // 외부 클릭시 드롭다운 닫기
          const documentClickHandler = function(e) {
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
        const enableTransitions = () => {
          setTimeout(() => {
            document.querySelectorAll('.acco-body').forEach(el => {
              el.classList.add('transitions-enabled');
            });
          }, 100);
        };
      
        // 이벤트 리스너 정리
        const cleanup = () => {
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
      export const initializeContentsListPageInteractions = () => {
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
    })(),

    // ===== GOVERNMENT-FEATURES =====
    government-features: (function() {
      /**
       * Government Components Feature Scripts
       * 정부 컴포넌트들의 핵심 기능을 담당하는 스크립트
       */
      
      // 전역 변수들
      let winSize;
      let quickNavObserver;
      let expandableObserver;
      
      /**
       * 윈도우 사이즈 체크 (반응형)
       */
      function winSizeSet() {
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
      function initQuickNavigation() {
        const quickNavArea = document.querySelector('.quick-nav-area');
        const quickNavLinks = document.querySelectorAll('.quick-list a');
        const sections = document.querySelectorAll('.section-link');
        
        if (!quickNavArea || !quickNavLinks.length || !sections.length) {
          return;
        }
      
        // Intersection Observer 설정
        const observerOptions = {
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
          quickNavObserver.observe(section);
        });
      
        // 퀵 네비게이션 클릭 이벤트
        quickNavLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
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
          });
        });
      }
      
      /**
       * 퀵 네비게이션 상태 업데이트
       */
      function updateQuickNavigation(activeId) {
        const quickNavLinks = document.querySelectorAll('.quick-list a');
        
        quickNavLinks.forEach(link => {
          const href = link.getAttribute('href');
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
      function initExpandableContent() {
        const expandButtons = document.querySelectorAll('.btn-conts-expand');
        
        expandButtons.forEach(button => {
          button.addEventListener('click', function() {
            const expandArea = this.closest('.conts-expand-area');
            const expandWrap = expandArea.querySelector('.expand-wrap');
            
            if (!expandArea || !expandWrap) return;
            
            const isExpanded = expandArea.classList.contains('expanded');
            
            if (isExpanded) {
              // 접기
              expandArea.classList.remove('expanded');
              expandWrap.style.maxHeight = '200px';
              expandWrap.style.overflow = 'hidden';
              this.textContent = this.textContent.replace('접기', '전체 보기');
              this.setAttribute('aria-expanded', 'false');
            } else {
              // 펼치기
              expandArea.classList.add('expanded');
              expandWrap.style.maxHeight = 'none';
              expandWrap.style.overflow = 'visible';
              this.textContent = this.textContent.replace('전체 보기', '접기');
              this.setAttribute('aria-expanded', 'true');
            }
          });
          
          // 초기 상태 설정
          button.setAttribute('aria-expanded', 'false');
          const expandWrap = button.closest('.conts-expand-area')?.querySelector('.expand-wrap');
          if (expandWrap) {
            expandWrap.style.maxHeight = '200px';
            expandWrap.style.overflow = 'hidden';
          }
        });
      }
      
      /**
       * 체크박스 전체 선택 기능
       */
      function initCheckboxGroups() {
        const checkAllButtons = document.querySelectorAll('#chk_all');
        
        checkAllButtons.forEach(checkAll => {
          const checkGroup = checkAll.closest('.chk-group-area');
          const individualChecks = checkGroup?.querySelectorAll('input[type="checkbox"]:not(#chk_all)');
          const checkNum = checkGroup?.querySelector('.chk-num strong');
          
          if (!checkGroup || !individualChecks.length) return;
          
          // 전체 선택 체크박스 이벤트
          checkAll.addEventListener('change', function() {
            individualChecks.forEach(check => {
              if (!check.disabled) {
                check.checked = this.checked;
                updateCheckboxState(check);
              }
            });
            updateCheckCount(checkGroup, checkNum);
          });
          
          // 개별 체크박스 이벤트들
          individualChecks.forEach(check => {
            check.addEventListener('change', function() {
              updateCheckboxState(this);
              updateCheckAllState(checkAll, individualChecks);
              updateCheckCount(checkGroup, checkNum);
            });
          });
          
          // 초기 상태 설정
          updateCheckCount(checkGroup, checkNum);
        });
      }
      
      /**
       * 체크박스 상태 업데이트
       */
      function updateCheckboxState(checkbox) {
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
      function updateCheckAllState(checkAll, individualChecks) {
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
      function updateCheckCount(checkGroup, checkNumElement) {
        if (!checkNumElement) return;
        
        const checkedBoxes = checkGroup.querySelectorAll('input[type="checkbox"]:not(#chk_all):checked');
        checkNumElement.textContent = checkedBoxes.length + '건';
      }
      
      /**
       * 테이블 반응형 기능
       */
      function initResponsiveTables() {
        const tables = document.querySelectorAll('.tbl.col.data');
        
        tables.forEach(table => {
          // 테이블이 부모 컨테이너를 넘칠 때 스크롤 추가
          const wrapper = document.createElement('div');
          wrapper.classList.add('table-responsive');
          wrapper.style.overflowX = 'auto';
          wrapper.style.marginBottom = '1rem';
          
          table.parentNode.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        });
      }
      
      /**
       * 파일 다운로드 기능 (시뮬레이션)
       */
      function initFileDownloads() {
        const downloadButtons = document.querySelectorAll('.btn-txt.ico-down');
        const viewButtons = document.querySelectorAll('.btn-txt.ico-go');
        
        downloadButtons.forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            const fileName = this.closest('li')?.querySelector('.tit')?.textContent || '파일';
            alert(`${fileName}을(를) 다운로드합니다.`);
          });
        });
        
        viewButtons.forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            const fileName = this.closest('li')?.querySelector('.tit')?.textContent || '파일';
            alert(`${fileName}을(를) 새 창에서 미리보기합니다.`);
          });
        });
      }
      
      /**
       * 링크 처리 기능
       */
      function initLinkHandlers() {
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        
        externalLinks.forEach(link => {
          link.addEventListener('click', function(e) {
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
      function initGovernmentUI() {
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
      function cleanupGovernmentUI() {
        // Intersection Observer 정리
        if (quickNavObserver) {
          quickNavObserver.disconnect();
          quickNavObserver = null;
        }
        
        if (expandableObserver) {
          expandableObserver.disconnect();
          expandableObserver = null;
        }
        
        // 이벤트 리스너 정리
        window.removeEventListener('resize', winSizeSet);
        
        console.log('Government UI cleanup completed');
      }
      
      // 전역 함수로 등록
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
    })(),

    // ===== GOVERNMENT-FEATURES =====
    government-features: (function() {
      /**
       * Government Components Feature Scripts
       * 정부 컴포넌트들의 핵심 기능을 담당하는 스크립트 (TypeScript 버전)
       */
      
      // 전역 변수들
      let winSize: 'pc' | 'mob';
      let quickNavObserver | null = null;
      
      /**
       * 윈도우 사이즈 체크 (반응형)
       */
      function winSizeSet() {
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
      function initQuickNavigation() {
        const quickNavArea = document.querySelector('.quick-nav-area');
        const quickNavLinks = document.querySelectorAll('.quick-list a');
        const sections = document.querySelectorAll('.section-link');
        
        if (!quickNavArea || !quickNavLinks.length || !sections.length) {
          return;
        }
      
        // Intersection Observer 설정
        const observerOptions = {
          root,
          rootMargin: '-20% 0px -70% 0px',
          threshold
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
      function updateQuickNavigation(activeId) {
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
      function initExpandableContent() {
        const expandButtons = document.querySelectorAll('.btn-conts-expand');
        
        expandButtons.forEach(button => {
          button.addEventListener('click', function(this) {
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
      function initCheckboxGroups() {
        const checkAllButtons = document.querySelectorAll('#chk_all') as NodeListOf<HTMLInputElement>;
        
        checkAllButtons.forEach(checkAll => {
          const checkGroup = checkAll.closest('.chk-group-area');
          const individualChecks = checkGroup?.querySelectorAll('input[type="checkbox"](#chk_all)') as NodeListOf<HTMLInputElement>;
          const checkNum = checkGroup?.querySelector('.chk-num strong');
          
          if (!checkGroup || !individualChecks.length) return;
          
          // 전체 선택 체크박스 이벤트
          checkAll.addEventListener('change', function(this) {
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
            check.addEventListener('change', function(this) {
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
      function updateCheckboxState(checkbox) {
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
      function updateCheckAllState(checkAll, individualChecks<HTMLInputElement>) {
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
      function updateCheckCount(checkGroup, checkNumElement | null) {
        if (!checkNumElement) return;
        
        const checkedBoxes = checkGroup.querySelectorAll('input[type="checkbox"](#chk_all)');
        checkNumElement.textContent = checkedBoxes.length + '건';
      }
      
      /**
       * 테이블 반응형 기능
       */
      function initResponsiveTables() {
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
      function initFileDownloads() {
        const downloadButtons = document.querySelectorAll('.btn-txt.ico-down');
        const viewButtons = document.querySelectorAll('.btn-txt.ico-go');
        
        downloadButtons.forEach(button => {
          button.addEventListener('click', function(this, e) {
            e.preventDefault();
            const fileName = this.closest('li')?.querySelector('.tit')?.textContent || '파일';
            alert(`${fileName}을(를) 다운로드합니다.`);
          });
        });
        
        viewButtons.forEach(button => {
          button.addEventListener('click', function(this, e) {
            e.preventDefault();
            const fileName = this.closest('li')?.querySelector('.tit')?.textContent || '파일';
            alert(`${fileName}을(를) 새 창에서 미리보기합니다.`);
          });
        });
      }
      
      /**
       * 링크 처리 기능
       */
      function initLinkHandlers() {
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        
        externalLinks.forEach(link => {
          link.addEventListener('click', function(this, e) {
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
      function initGovernmentUI() {
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
      function cleanupGovernmentUI() {
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
    })(),

    // ===== INCLUDE-SAFE =====
    include-safe: (function() {
      /* KDS Script - Safe Version */
      (function() {
          // Check if variables already exist in window scope
          if (!window.$kds_html) {
              window.$kds_html = document.querySelector('html');
          }
          if (!window.$kds_body) {
              window.$kds_body = document.querySelector('body');
          }
          
          // Use the window scope variables
          const $kds_html = window.$kds_html;
          const $kds_body = window.$kds_body;
      
          const headerHeight = {
              pc: () => {
                  const $header = document.querySelector('#header');
                  if ($header != null) {
                      const $inner = $header.querySelector('.head-body .inner');
                      const $nav = $header.querySelector('.head-gnb');
                      if ($inner && $nav) {
                          const _pcHeight = $inner.offsetHeight + $nav.offsetHeight;
                          $kds_html.style.setProperty('--header-pc-height', `${_pcHeight}px`);
                      }
                  }
              },
              mob: () => {
                  const $header = document.querySelector('#header');
                  if ($header != null) {
                      const $inner = $header.querySelector('.head-body .inner');
                      if ($inner) {
                          const _mobHeight = $inner.offsetHeight;
                          $kds_html.style.setProperty('--header-mob-height', `${_mobHeight}px`);
                      }
                  }
              }
          }
      
          const lnbActive = {
              listToggle: () => {
                  const $lnb = document.querySelector('.g-aside');
                  if ($lnb != null) {
                      const $menu = $lnb.querySelectorAll('.lnb-menu');
                      const $list = $lnb.querySelectorAll('.ul1 > .d1');
      
                      $list.forEach((item) => {
                          const isActiveChild = item.querySelector('.d2.active') || item.querySelector('.ul2 .d3.active');
                          
                          if (isActiveChild) {
                              item.classList.add('active');
                              
                              const $ul2 = item.querySelector('.ul2');
                              if ($ul2) {
                                  $ul2.style.display = 'block';
                              }
                          }
                      });
      
                      $menu.forEach((menu) => {
                          menu.addEventListener('click', (e) => {
                              const $target = e.target;
                              const $targetParent = $target.closest('.d1');
      
                              if ($targetParent != null && $target.classList.contains('m1')) {
                                  if (!$targetParent.classList.contains('active')) {
                                      $targetParent.classList.add('active');
                                      const $siblingUl = $targetParent.querySelector('.ul2');
                                      if ($siblingUl) {
                                          $siblingUl.style.display = 'block';
                                      }
                                  } else {
                                      $targetParent.classList.remove('active');
                                      const $siblingUl = $targetParent.querySelector('.ul2');
                                      if ($siblingUl) {
                                          $siblingUl.style.display = 'none';
                                      }
                                  }
                              }
                          });
                      });
                  }
              }
          }
      
          // Safe version - check for elements before adding listeners
          const lnbRes = {
              init: () => {
                  lnbRes.open();
                  lnbRes.close();
              },
              open: () => {
                  const $mobMenu = document.querySelector('#g-header .mob-menu') || document.querySelector('#m-gnb-open');
                  const $lnb = document.querySelector('.g-aside') || document.querySelector('#m-gnb');
      
                  if ($mobMenu && $lnb) {
                      $mobMenu.addEventListener('click', () => {
                          if (!$lnb.classList.contains('active')) {
                              $lnb.classList.add('active');
                              $kds_body.classList.add('scroll-no');
                          }
                      });
                  }
              },
              close: () => {
                  const $lnb = document.querySelector('.g-aside') || document.querySelector('#m-gnb');
                  if ($lnb != null) {
                      const $lnbClose = $lnb.querySelector('.btn.ico-close');
      
                      if ($lnbClose) {
                          $lnbClose.addEventListener('click', () => {
                              $lnb.classList.remove('active');
                              $kds_body.classList.remove('scroll-no');
                          });
                      }
                  }
              }
          }
      
          /* top button create - safe version */
          function createTopButton() {
              const contentArea = document.querySelector('#g-container .g-content') || document.querySelector('main');
              
              if (contentArea) {
                  // Check if button already exists
                  if (!contentArea.querySelector('.go-top')) {
                      const goTopText = document.createTextNode('TOP');
                      const goTopTag = document.createElement('button');
                      goTopTag.setAttribute('class', 'btn tertiary sm go-top');
                      goTopTag.setAttribute('type', 'button');
                      goTopTag.appendChild(goTopText);
                      contentArea.append(goTopTag);
                      
                      window.addEventListener('scroll', () => {
                          if (window.scrollY > (window.innerHeight * 2 - (window.innerHeight / 2))) {
                              goTopTag.classList.add('active');
                          }
                          else {
                              goTopTag.classList.remove('active');
                          }
                      });
                      
                      goTopTag.addEventListener('click', () => {
                          window.scrollTo({
                              top: 0,
                              behavior: 'smooth'
                          });
                      });
                  }
              }
          }
      
          function goTopBtn() {
              // This function is kept for compatibility but the actual implementation is in createTopButton
              createTopButton();
          }
      
          // Make functions available globally if needed
          window.headerHeight = headerHeight;
          window.lnbActive = lnbActive;
          window.lnbRes = lnbRes;
          window.goTopBtn = goTopBtn;
      
          window.addEventListener('DOMContentLoaded', () => {
              setTimeout(() => {
                  headerHeight.pc();
                  headerHeight.mob();
                  lnbActive.listToggle();
                  lnbRes.init();
                  goTopBtn();
              }, 100);
          });
      
          window.addEventListener('resize', () => {
              headerHeight.pc();
              headerHeight.mob();
          });
      })();
    })(),

    // ===== INCLUDE =====
    include: (function() {
      function includeHtmlGuide() {
      	const includeTarget = document.querySelectorAll('.includeJsGuide');
      	includeTarget.forEach(function(el, idx) {
      		const targetFile = el.dataset.includeFile;
      		if(targetFile){
      			let xhttp = new XMLHttpRequest();
      
      			xhttp.onreadystatechange = function() {
      				if (this.readyState === XMLHttpRequest.DONE) {
      					this.status === 200 ? (el.innerHTML = this.responseText) : null
      					this.status === 404 ? (el.innerHTML = 'include not found.') : null
      				}
      			}
      			xhttp.open('GET', targetFile, true);
      			xhttp.send();
      			return;
      		}
      	});
      }
      
      /* lnb active */
      const lnbSet = {
      	init: () => {
      		lnbSet.linkActive();
      		lnbSet.relativeActive();
      		lnbSet.btnToggle();
      	},
      	initialize: () => {
      		const g_lnbLink = document.querySelectorAll('.g-aside .lnb li');
      		g_lnbLink.forEach(e => {
      			e.classList.remove('active');
      		});
      	},
      	linkActive: () => {
      		lnbSet.initialize();
      		const g_lnbLink = document.querySelectorAll('.g-aside .lnb li');
      		g_lnbLink.forEach(e => {
      			//lnb link 가져오기
      			const link = e.querySelector('a').getAttribute('href');
      			const linkStr = link.substring(link.lastIndexOf('/') + 1);
      
      			//page url 가져오기
      			const pageUrl = window.location.href;
      			const urlStr = pageUrl.substring(pageUrl.lastIndexOf('/') + 1);
      
      			const splitTxt = ".html";
      			const urlStrSplit = urlStr.split(splitTxt);
      			const matchUrl = urlStrSplit[0] + splitTxt;
      			
      			if (linkStr == matchUrl) { //page url과 일치하는 lnb link에 class add
      				e.classList.add('active');
      			};
      		})
      
      		//banner active
      		const lnbBn = document.querySelector('.g-aside .side-bn');
      		if (lnbBn != null) {
      			const link = lnbBn.getAttribute('href');
      			const linkStr = link.substring(link.lastIndexOf('/') + 1);
      
      			//page url 가져오기
      			const pageUrl = window.location.href;
      			const urlStr = pageUrl.substring(pageUrl.lastIndexOf('/') + 1);
      
      			const splitTxt = ".html";
      			const urlStrSplit = urlStr.split(splitTxt);
      			const matchUrl = urlStrSplit[0] + splitTxt;
      
      			if (linkStr == matchUrl) { //page url과 일치하는 lnb link에 class add
      				lnbBn.classList.add('active');
      			}
      			else {
      				lnbBn.classList.remove('active');
      			}
      		}
      	},
      	relativeActive: () => {
      		const g_lnbLink = document.querySelectorAll('.g-aside .lnb li');
      		g_lnbLink.forEach(e => {
      			const lnb3d = document.querySelectorAll('.lnb .depth3');
      			lnb3d.forEach(e => {
      				const li = Array.from(e.children);
      				li.forEach(ele => {
      					if (ele.classList.contains('active')) {
      						e.closest('li').classList.add('active');
      					}
      				});
      			});
      			const lnb2d = document.querySelectorAll('.lnb .depth2');
      			lnb2d.forEach(e => {
      				const li = Array.from(e.children);
      				li.forEach(ele => {
      					if (ele.classList.contains('active')) {
      						e.closest('li').classList.add('active');
      					}
      				});
      			});
      		});
      	},
      	btnToggle: () => {
      		const toggleBtn = document.querySelectorAll('.btn-menu-toggle');
      		toggleBtn.forEach(e => {
      			const parentLi = e.closest('li');
      			e.addEventListener('click', () => {
      				if (!parentLi.classList.contains('active')) {
      					lnbSet.initialize();
      					parentLi.classList.add('active');
      					lnbSet.relativeActive();
      				}
      				else {
      					parentLi.classList.remove('active');
      				}
      				//parentLi.classList.toggle('active');
      			})
      		});
      	},
      };
      
      /* gnb active */
      function gnbActive() {
      	const g_gnbLink = document.querySelectorAll('#g-header .gnb li');
      	g_gnbLink.forEach(e => {
      		e.classList.remove('active');
      
      		//lnb link 가져오기
      		const link = e.querySelector('a').getAttribute('href');
      		const linkSplit = link.split('/');
      		const linkDirStr = linkSplit[linkSplit.length - 2];
      
      		const pageUrl = window.location.href;
      		const urlSplit = pageUrl.split('/');
      		const urlDirStr = urlSplit[urlSplit.length - 2];
      		if (linkDirStr == urlDirStr) { //page url과 일치하는 gnb directory에 class add
      			e.classList.add('active');
      		};
      	});
      }
      
      /* responsive layout */
      
      const lnbRes = {
      	init: () => {
      		lnbRes.open();
      		lnbRes.close();
      	},
      	open: () => {
      		const $mobMenu = document.querySelector('#g-header .mob-menu');
      		const $lnb = document.querySelector('.g-aside');
      
      		$mobMenu.addEventListener('click', () => {
      			if ($lnb != null) {
      				if (!$lnb.classList.contains('active')) {
      					$lnb.classList.add('active');
      					$kds_body.classList.add('scroll-no');
      				}
      			}
      		});
      	},
      	close: () => {
      		const $lnb = document.querySelector('.g-aside');
      		if ($lnb != null) {
      			const $lnbCLose = $lnb.querySelector('.btn.ico-close');
      
      			$lnbCLose.addEventListener('click', () => {
      				if ($lnb.classList.contains('active')) {
      					$lnb.classList.remove('active');
      					$kds_body.classList.remove('scroll-no');
      				}
      			});
      		}
      	},
      	resize: () => {
      		const $lnb = document.querySelector('.g-aside');
      		if ($lnb != null) {
      			if (winSize == 'pc') {
      				if ($lnb.classList.contains('active')) {
      					$lnb.classList.remove('active');
      					$kds_body.classList.remove('scroll-no');
      				}
      			}
      		}
      	}
      };
      
      /* top button create */
      const contentArea = document.querySelector('#g-container .g-content');
      const goTopText = document.createTextNode('TOP');
      const goTopTag = document.createElement('button');
      goTopTag.setAttribute('class', 'btn tertiary sm go-top');
      goTopTag.setAttribute('type', 'button');
      goTopTag.appendChild(goTopText);
      contentArea.append(goTopTag);
      
      function goTopBtn() {
      	if (goTopTag != null) {
      		window.addEventListener('scroll', () => {
      			if (window.scrollY > (window.innerHeight * 2 - (window.innerHeight / 2))) {
      				goTopTag.classList.add('active');
      			}
      			else {
      				goTopTag.classList.remove('active');
      			}
      		});
      		goTopTag.addEventListener('click', () => {
      			window.scrollTo({
      				left: 0,
      				top: 0,
      				behavior: 'smooth',
      			});
      		});
      	}
      }
      
      window.addEventListener("DOMContentLoaded", () => {
      	includeHtmlGuide();
      	setTimeout(() => {
      		lnbSet.init();
      		gnbActive();
      		lnbRes.init();
      		goTopBtn();
      	},300);
      });
      window.addEventListener('resize', () => {
      	setTimeout(() => {
      		lnbRes.resize();
      	}, 200);
      });
    })(),

    // ===== INDEX =====
    index: (function() {
      // Government Scripts - Combined Export
      
      // UI Scripts
      export * from './ui-script.js';
      export * from './ui-pattern-script.js';
      
      // Include Scripts (safe versions preferred)
      export * from './include-safe.js';
      
      // Prism for syntax highlighting
      export * from './prism.js';
      
      // Default export for easy import
      import './ui-script.js';
      import './ui-pattern-script-safe.js';
      import './include-safe.js';
      
      console.log('Government scripts loaded successfully');
    })(),

    // ===== PRISM =====
    prism: (function() {
      /* PrismJS 1.29.0
      https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript&plugins=file-highlight+toolbar+copy-to-clipboard */
      var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var P,L=1;if(y){if(!(P=l(b,A,e,m))||P.index>=e.length)break;var S=P.index,O=P.index+P[0].length,j=A;for(j+=w.value.length;S>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(j<O||"string"==typeof C.value);C=C.next)L++,j+=C.value.length;L--,E=e.slice(A,j),P.index-=A}else if(!(P=l(b,0,E,m)))continue;S=P.index;var N=P[0],_=E.slice(0,S),M=E.slice(S+N.length),W=A+E.length;g&&W>g.reach&&(g.reach=W);var z=w.prev;if(_&&(z=u(n,z,_),A+=_.length),c(n,z,L),w=u(n,z,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),L>1){var I={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
      Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return a})),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
      !function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
      Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
      Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;
      !function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},e="data-src-status",i='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';Prism.hooks.add("before-highlightall",(function(t){t.selector+=", "+i})),Prism.hooks.add("before-sanity-check",(function(a){var n=a.element;if(n.matches(i)){a.code="",n.setAttribute(e,"loading");var s=n.appendChild(document.createElement("CODE"));s.textContent="Loading…";var r=n.getAttribute("data-src"),l=a.language;if("none"===l){var o=(/\.(\w+)$/.exec(r)||[,"none"])[1];l=t[o]||o}Prism.util.setLanguage(s,l),Prism.util.setLanguage(n,l);var h=Prism.plugins.autoloader;h&&h.loadLanguages(l),function(t,i,a){var r=new XMLHttpRequest;r.open("GET",t,!0),r.onreadystatechange=function(){4==r.readyState&&(r.status<400&&r.responseText?function(t){n.setAttribute(e,"loaded");var i=function(t){var e=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(t||"");if(e){var i=Number(e[1]),a=e[2],n=e[3];return a?n?[i,Number(n)]:[i,void 0]:[i,i]}}(n.getAttribute("data-range"));if(i){var a=t.split(/\r\n?|\n/g),r=i[0],l=null==i[1]?a.length:i[1];r<0&&(r+=a.length),r=Math.max(0,Math.min(r-1,a.length)),l<0&&(l+=a.length),l=Math.max(0,Math.min(l,a.length)),t=a.slice(r,l).join("\n"),n.hasAttribute("data-start")||n.setAttribute("data-start",String(r+1))}s.textContent=t,Prism.highlightElement(s)}(r.responseText):r.status>=400?a("✖ Error "+r.status+" while fetching file: "+r.statusText):a("✖ Error: File does not exist or is empty"))},r.send(null)}(r,0,(function(t){n.setAttribute(e,"failed"),s.textContent=t}))}})),Prism.plugins.fileHighlight={highlight:function(t){for(var e,a=(t||document).querySelectorAll(i),n=0;e=a[n++];)Prism.highlightElement(e)}};var a=!1;Prism.fileHighlight=function(){a||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),a=!0),Prism.plugins.fileHighlight.highlight.apply(this,arguments)}}}();
      !function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=[],t={},n=function(){};Prism.plugins.toolbar={};var a=Prism.plugins.toolbar.registerButton=function(n,a){var r;r="function"==typeof a?a:function(e){var t;return"function"==typeof a.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",(function(){a.onClick.call(this,e)}))):"string"==typeof a.url?(t=document.createElement("a")).href=a.url:t=document.createElement("span"),a.className&&t.classList.add(a.className),t.textContent=a.text,t},n in t?console.warn('There is a button with the key "'+n+'" registered already.'):e.push(t[n]=r)},r=Prism.plugins.toolbar.hook=function(a){var r=a.element.parentNode;if(r&&/pre/i.test(r.nodeName)&&!r.parentNode.classList.contains("code-toolbar")){var o=document.createElement("div");o.classList.add("code-toolbar"),r.parentNode.insertBefore(o,r),o.appendChild(r);var i=document.createElement("div");i.classList.add("toolbar");var l=e,d=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(a.element);d&&(l=d.map((function(e){return t[e]||n}))),l.forEach((function(e){var t=e(a);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),i.appendChild(n)}})),o.appendChild(i)}};a("label",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,a,r=t.getAttribute("data-label");try{a=document.querySelector("template#"+r)}catch(e){}return a?n=a.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=r),n}})),Prism.hooks.add("complete",r)}}();
      !function(){function t(t){var e=document.createElement("textarea");e.value=t.getText(),e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{var o=document.execCommand("copy");setTimeout((function(){o?t.success():t.error()}),1)}catch(e){setTimeout((function(){t.error(e)}),1)}document.body.removeChild(e)}"undefined"!=typeof Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",(function(e){var o=e.element,n=function(t){var e={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var o in e){for(var n="data-prismjs-"+o,c=t;c&&!c.hasAttribute(n);)c=c.parentElement;c&&(e[o]=c.getAttribute(n))}return e}(o),c=document.createElement("button");c.className="copy-to-clipboard-button",c.setAttribute("type","button");var r=document.createElement("span");return c.appendChild(r),u("copy"),function(e,o){e.addEventListener("click",(function(){!function(e){navigator.clipboard?navigator.clipboard.writeText(e.getText()).then(e.success,(function(){t(e)})):t(e)}(o)}))}(c,{getText:function(){return o.textContent},success:function(){u("copy-success"),i()},error:function(){u("copy-error"),setTimeout((function(){!function(t){window.getSelection().selectAllChildren(t)}(o)}),1),i()}}),c;function i(){setTimeout((function(){u("copy")}),n["copy-timeout"])}function u(t){r.textContent=n[t],c.setAttribute("data-copy-state",t)}})):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}();
      
    })(),

    // ===== UI-PATTERN-SCRIPT-SAFE =====
    ui-pattern-script-safe: (function() {
      /* Safe version of ui-pattern-script.js */
      (function() {
          // Store original functions if they exist
          const originalQuickNav = window.quickNav || {};
          
          // Override problematic quickNav functions
          window.quickNav = {
              init: function() {
                  // Safe initialization
                  const container = document.querySelector("#container") || document.querySelector("#content") || document.querySelector("main");
                  if (container) {
                      // Only initialize if container exists
                      if (originalQuickNav.init) {
                          originalQuickNav.init();
                      }
                  }
              },
              scroll: function() {
                  let _lastScrollY = 0;
                  window.addEventListener('scroll', () => {
                      const $wrap = document.querySelector("#wrap");
                      const container = document.querySelector("#container") || document.querySelector("#content") || document.querySelector("main");
                      
                      if (!container || !$wrap) return; // Exit if elements don't exist
                      
                      const _conOffsetTop = container.offsetTop;
                      const _scrollY = window.scrollY;
                      const _scrollDown = _scrollY > _lastScrollY;
                      const _scrollUp = _scrollY < _lastScrollY;
                      
                      if (_scrollY > _conOffsetTop + 50 && _scrollDown) {
                          $wrap.classList.add("scroll-down");
                          $wrap.classList.remove("scroll-up");
                      }
                      if (_scrollY > _conOffsetTop + 50 && _scrollUp) {
                          $wrap.classList.add("scroll-up");
                          $wrap.classList.remove("scroll-down");
                      }
                      if (_scrollY < _conOffsetTop + 50) {
                          $wrap.classList.remove("scroll-down");
                          $wrap.classList.remove("scroll-up");
                      }
                      
                      _lastScrollY = _scrollY;
                  });
              }
          };
          
          // Load the original script but with our overrides in place
          const script = document.createElement('script');
          script.src = '/storage/portfolio/_component/government/js/ui-pattern-script.js';
          script.onload = function() {
              // After loading, ensure our safe versions are used
              if (window.quickNav && window.quickNav.scroll) {
                  // Already overridden above
              }
          };
          
          // Don't load the original script, just use our safe implementation
          document.addEventListener('DOMContentLoaded', function() {
              setTimeout(function() {
                  // Safe initialization
                  if (window.quickNav && window.quickNav.init) {
                      window.quickNav.init();
                  }
                  if (window.quickNav && window.quickNav.scroll) {
                      window.quickNav.scroll();
                  }
              }, 100);
          });
      })();
    })(),

    // ===== UI-PATTERN-SCRIPT =====
    ui-pattern-script: (function() {
      /* 모바일 : 전체메뉴 */
      const mobGnb = {
          target: {
              header       : "#header",
              gnbOpen      : "#m-gnb-open",
              gnbWrap      : ".m-gnb-wrap",
              gnbIn        : ".m-gnb-wrap .m-gnb-in",
              gnbBody      : ".m-gnb-wrap .m-gnb-body",
              gnbMenu      : ".m-gnb-wrap .menu-wrap .mn",
              gnbMenuHori  : ".m-gnb-wrap .menu-hori",
              gnbClose     : ".m-gnb-wrap .ico-close",
              gnbAnchor    : ".m-gnb-menu .submenu-wrap .dl",
              gnbTopScroll : ".m-gnb-wrap .m-gnb-top-scroll",
          },
          init: () => {
              const $mGnbBtn = document.querySelector(mobGnb.target.gnbOpen);
              const $mGnb = document.querySelector(mobGnb.target.gnbWrap);
              const $mGnbCloseBtn = $mGnb.querySelector(mobGnb.target.gnbClose);
              const $mGnbBody = $mGnb.querySelector(mobGnb.target.gnbBody);
      
              mobGnb.anchor();
              $mGnb.setAttribute("aria-hidden", "true");
              $mGnbBtn.addEventListener("click", mobGnb.open);
              $mGnbCloseBtn.addEventListener("click", mobGnb.close);
              $mGnbBody.addEventListener("scroll", mobGnb.anchorScroll);
          },
          open: () => { 
              const $header = document.querySelector(mobGnb.target.header);
              const $mGnb = document.querySelector(mobGnb.target.gnbWrap);
              const $mGnbIn = document.querySelector(mobGnb.target.gnbIn);
      
              $header.style.zIndex="1000";
              $mGnb.setAttribute("aria-hidden", "false");
              $mGnb.classList.add("is-open");
              $mGnbIn.setAttribute("tabindex", 0);
              $mGnbIn.focus();
              document.body.classList.add("is-m-gnb");
          },
          close: () => {
              const $body = document.body;
              const $header = document.querySelector(mobGnb.target.header);
              const $mGnb = document.querySelector(mobGnb.target.gnbWrap);
              const $mGnbBtn = document.querySelector(mobGnb.target.gnbOpen);
              const $mGnbIn = document.querySelector(mobGnb.target.gnbIn);
             
              $mGnb.classList.remove("is-open");
              $mGnb.classList.add("is-close");
              $mGnbIn.removeAttribute("tabindex");
              $mGnb.setAttribute("aria-hidden", "true");
              $body.classList.remove("is-m-gnb");
              $mGnbBtn.focus();
              
              setTimeout(()=>{
                  $mGnb.classList.remove("is-close");
                  $header.style.zIndex="";
              },500);
          },
          anchormenuReset: () => {
              const $mGnbMenu = document.querySelectorAll(mobGnb.target.gnbMenu);
      
              $mGnbMenu.forEach($menu => {
                  $menu.classList.remove("active");
              });
          },
          anchor: () => { 
              const $mGnb = document.querySelector(mobGnb.target.gnbWrap);
              const $mGnbMenus = $mGnb.querySelectorAll(mobGnb.target.gnbMenu);
              const $mGnbAnchors = $mGnb.querySelectorAll(mobGnb.target.gnbAnchor);
              $mGnbMenus[0].classList.add("active");
      
              $mGnbAnchors.forEach($item => {
                  const _depth4s = $item.querySelectorAll(".is-depth4");
                  if(_depth4s.length > 0) {
                      _depth4s.forEach(($el) => {
                          $el.addEventListener("click", ($btn) => {
                              const $target = $btn.target.nextElementSibling;
                              const $btnPrev = $target.querySelector(".ico-prev");
                              const $btnClose = $target.querySelector(".ico-close");
                              
                              $target.style.display = "block"; 
                              setTimeout(function(){
                                  $target.classList.add("is-open");
                              }, 0);
                              $btnPrev.focus();
                              $btnPrev.addEventListener("click", ($prev) => {
                                  depth4Close()
                              });
                              $btnClose.addEventListener("click", ($prev) => {
                                  depth4Close()
                              });
      
                              function depth4Close() {
                                  $target.classList.remove("is-open");
                                  $btn.target.focus();
                                  setTimeout(function(){
                                      $target.style.display = ""; 
                                  }, 400);
                              }
                          });
                      });
                  }
              });
          },
          anchorScroll: () => {
              const $mGnb = document.querySelector(mobGnb.target.gnbWrap);
              const $mGnbIn = $mGnb.querySelector(mobGnb.target.gnbIn);
              const $mGnbMenuHori = $mGnb.querySelector(mobGnb.target.gnbMenuHori);
              const $mGnbBody = $mGnb.querySelector(mobGnb.target.gnbBody);
              const $mGnbAnchors = $mGnb.querySelectorAll(mobGnb.target.gnbAnchor);
              const $mGnbTopScroll = $mGnb.querySelector(mobGnb.target.gnbTopScroll);
              const _scrollTop = $mGnbBody.scrollTop;
              const _scrollH = $mGnbBody.scrollHeight;
              const _bodyH = $mGnbBody.clientHeight;
              
              $mGnbAnchors.forEach($item => {
                  const _id = $item.getAttribute("id");
                  const $mn = $mGnb.querySelector(`[href="#${_id}"]`);
                  const _offset = $item.offsetTop;
                  if (_scrollTop >= _offset || _bodyH + _scrollTop >= _scrollH) { 
                      mobGnb.anchormenuReset();
                      $mn.classList.add("active");
                      if($mGnbTopScroll) {
                          const $mGnbMenuHoriUl = $mGnbMenuHori.querySelector(".ul");
                          const _offsetLeft = $mn.offsetLeft;
                          $mGnbBody.addEventListener('scrollend', () => {
                              $mGnbMenuHoriUl.scrollLeft = _offsetLeft;
                          });
                      }
                  } 
              });
      
              //gnb type2
              if($mGnbTopScroll) {
                  let _lastBodyScrollY = 0;
                  $mGnbBody.addEventListener('scroll', (e) => {
                      const _bodyScrollY =  e.target.scrollTop;
                      if (_bodyScrollY > 0) {
                          const _mGnbMenuScrollH = $mGnbTopScroll.scrollHeight; 
                          $mGnbTopScroll.style.height = `${_mGnbMenuScrollH}px`;
                          $mGnbTopScroll.style.transition = "ease-out .4s";
                          $mGnbIn.classList.add("is-active");
                      } else if (_bodyScrollY < 50 && _bodyScrollY < _lastBodyScrollY) {
                          $mGnbTopScroll.style.height = "";
                          $mGnbTopScroll.style.transition = "ease-out .4s .2s";
                          setTimeout(() => { 
                              $mGnbIn.classList.remove("is-active"); 
                          }, 600);
                      } 
                      _lastBodyScrollY = _bodyScrollY;
                  });
              }
          },
      }
      
      /* 웹 : 전체메뉴 */
      const pcGnb = {
          target: {
              gnbArea : ".head-gnb",
              gnbWrap : ".w-gnb-wrap",
              gnbMenu : ".head-gnb .gnb .mn",
              gnbMenuAct : ".head-gnb .gnb .mn.active",
              gnbSubMenu : ".head-gnb .gnb .sm",
              gnbSubMenuAct: ".head-gnb .gnb .sm.active",
              gnbSubIn : ".head-gnb .gnb .submenu-in",
              gnbDim : ".w-gnb-dim",
          },
          init : () => {
              const $body = document.body;
              const $gnbDim = document.createElement("div");
      
              $gnbDim.classList.add("w-gnb-dim");
              $gnbDim.style.display="none";
              $body.appendChild($gnbDim);
      
              pcGnb.open();
              pcGnb.lnb();
          },
          open: () => {
              const $gnbMns = document.querySelectorAll(pcGnb.target.gnbMenu);
              const $gnbSms = document.querySelectorAll(pcGnb.target.gnbSubMenu);
              const $gnbSmsAct = document.querySelectorAll(pcGnb.target.gnbSubMenuAct);
              const $gnbDim = document.querySelector(pcGnb.target.gnbDim);
      
              $gnbMns.forEach($menu => {
                  const $srDiv = document.createElement("span");
                  const $srTxt = document.createTextNode("열기");
                  $srDiv.classList.add("sr-only");
                  $srDiv.appendChild($srTxt);
                  $menu.appendChild($srDiv);
                              
                  if($gnbSmsAct.length > 0) {
                      $gnbSmsAct.forEach($act => {
                          const _id = $act.getAttribute("data-id");
                          const $smAct = document.getElementById(_id);
                          $smAct.classList.add("active");
                      });
                  }
      
                  if($menu.nextElementSibling === null) $menu.classList.add("mn-link");
      
                  $menu.addEventListener("click", ($item) => {
                      if(!$item.target.classList.contains("active") && $item.target.nextElementSibling !== null) {
                          pcGnb.menuReset();
                          $item.target.classList.add("active");
                          $item.target.nextElementSibling.classList.add("is-open");
                          $item.target.querySelector(".sr-only").innerText ="닫기";
                          $gnbDim.style.display="block";
                          document.body.classList.add("is-w-gnb");
                          comLayout.scrollbar.open();
                      }else {
                          pcGnb.menuReset();
                          pcGnb.close();
                          $item.target.querySelector(".sr-only").innerText ="열기";
                      }
                  });
              });
      
              if($gnbSms.length > 0) {
                  $gnbSms.forEach($sub => {
                      $sub.addEventListener("click", (e) => {
                          const $smChildrens = e.target.closest("ul").querySelectorAll(".sm");
                          [...$smChildrens].forEach($sm => {
                              $sm.classList.remove("active");
                          });
                          e.target.classList.add("active");
                          
                          var _id = e.target.getAttribute("data-id");
                          if(_id) {
                              const $target = document.getElementById(_id);
                              const $childrens = $target.closest(".submenu-wrap").children;
          
                              [...$childrens].forEach($in => {
                                  $in.classList.remove("active");
                              });
          
                              $target.classList.add("active");
                          }
                      });
                  });
              }
              
              $gnbDim.addEventListener("click", () => {
                  pcGnb.close();
              });
      
              window.addEventListener("keyup", (e) => {
                  if(!e.target.closest(".head-gnb")) {
                      pcGnb.close();
                  } 
              });
          },
          close:() => {
              const $gnbLayer = document.querySelector(pcGnb.target.gnbWrap);
              const $gnbDim = document.querySelector(pcGnb.target.gnbDim);
              $gnbLayer.classList.remove("is-open");
              $gnbDim.style.display="none";
              
              pcGnb.menuReset();
              document.body.classList.remove("is-w-gnb");
              comLayout.scrollbar.close();
          },
          menuReset: () => {
              const $gnbMn = document.querySelectorAll(pcGnb.target.gnbMenu);
              const $gnbWrap = document.querySelectorAll(pcGnb.target.gnbWrap);
              
              $gnbMn.forEach(($item) => {
                  $item.classList.remove("active");
              });
      
              $gnbWrap.forEach(($item) => {
                  $item.classList.remove("is-open");
              });
          },
          lnb: () => {
              const $lnb = document.querySelector(".left-menu");
              
              if($lnb !== null) {
                  const $depth4s = $lnb.querySelectorAll(".sub-ul .is-depth4");
                  $depth4s.forEach(($menu) => {
                      $menu.addEventListener("click", ($el) => {
                          $target = $el.target.nextElementSibling;
                          $targetPrev = $target.querySelector(".depth4-tit");
                          $targetLast = $target.querySelector(".depth4-ul li:last-child a");
                          $target.style.display = "block";
                          setTimeout(function(){
                              $target.classList.add("is-open");
                          },0);
                          $targetPrev.focus();
                          $targetPrev.addEventListener("click", ($prev) => {
                              lnbClose();
                          });
                          $target.addEventListener("keydown", function(e){
                              $targetLast.onblur = function() {
                                  if (e.key === 'Tab' && !e.shiftKey) {
                                      lnbClose();
                                  }
                              }
                          });
                          $targetPrev.addEventListener("keydown", function(e){
                              e.target.onblur = function() {
                                  if (e.key === 'Tab' && e.shiftKey) {
                                      lnbClose();
                                  }
                              }
                          });
                          function lnbClose() {
                              $target.classList.remove("is-open");
                              $el.target.focus();
                              setTimeout(function(){
                                  $target.style.display = "";
                              }, 400);
                          }
                      });
                  });
              }
          },
      }
      
      /* 공통 : 레이아웃 */
      const comLayout = {
          target: {
              headerTop : document.querySelector("#header-top"),
              header : document.querySelector("#header"),
              container : "#container",
              footer : "#footer",
          },
          init : () => {
              comLayout.scroll();
              comLayout.headerEvent ();
              window.addEventListener('resize', () => {
                  comLayout.headerEvent();
              });
          },
          isTarget: ()=> {
              const $isGnbm = document.querySelector("#header");
              const _value = ($isGnbm.length) ? true : false;
      
              return _value;
          },
          scroll:  () => {
              let _lastScrollY = 0;
              window.addEventListener('scroll', () => {
                  const $wrap = document.querySelector("#wrap");
                  const _conOffsetTop= document.querySelector("#container").offsetTop;
                  const _scrollY =  window.scrollY;
                  const _scrollDown = _scrollY > _lastScrollY;
                  const _scrollUp = _scrollY < _lastScrollY;
                  if (_scrollY > _conOffsetTop + 50 && _scrollDown) {
                      $wrap.classList.add("scroll-down");
                      $wrap.classList.remove("scroll-up");
                  } else if (_scrollY > _conOffsetTop + 50 && _scrollUp) {
                      $wrap.classList.add("scroll-up");
                      $wrap.classList.remove("scroll-down");
                  } else {
                      $wrap.classList.remove("scroll-down", "scroll-up");
                  }
                  _lastScrollY = _scrollY;
              });
          },
          headerEvent : () => {
              const $header = document.querySelector("#header");
              const _headerH = document.querySelector("#header .header-in").clientHeight;
      
              $header.style.height = `${_headerH + 1}px`;
          },
          scrollbar : {
              open : () => {
                  const _hasScrollY = document.body.scrollHeight > window.innerHeight;
                  if(_hasScrollY) document.body.classList.add("hasScrollY");
              },
              close : () => {
                  document.body.classList.remove("hasScrollY");
              },
          },
      }
      
      /* 공통 : 패턴 */
      const common = {
          target: {
              header : document.querySelector("#header"),
              container : "#container",
              footer : "#footer",
              prefix : "krds",
          },
          device: {
              isMob : 1024,
          },
          init: ()=> {
              common.dropEvent ();
              common.toggleEvent();
              common.accordianEvent.init();
              const $links = document.querySelectorAll("a");
              $links.forEach($link => {
                  const _href = $link.getAttribute( 'href' );
                  $link.addEventListener("click", (el) => {
                      if(_href === "#") el.preventDefault();
                  });
              });
          },    
          dropEvent: () => {
              const _dropBtns = document.querySelectorAll(`.${common.target.prefix}-drop-wrap .drop-btn`);
      
              _dropBtns.forEach(($dropBtn) => {
                  const _span = document.createElement("span");
                  const _txt = document.createTextNode("열기");
                  _span.classList.add("sr-only");
                  _span.appendChild(_txt);
                  
                  $dropBtn.appendChild(_span);
      
                  $dropBtn.addEventListener("click", ($el) => {
                      const $menu = $el.target.nextElementSibling;
                      const $srTxt = $el.target.querySelector(".sr-only");
                      if($menu.style.display !== "block") {
                          common.dropClose();
                          $menu.style.display = "block"
                          $el.target.classList.add("active");
                          $srTxt.textContent = "닫기";
                      } else { 
                          common.dropClose();
                          $srTxt.textContent = "열기";
                      }
                  });
              });
      
              document.addEventListener("click", ($e) => {
                  if(!$e.target.closest(`.${common.target.prefix}-drop-wrap`)) common.dropClose();
              });
          },
          dropClose: () => {
              const _dropBtns = document.querySelectorAll(`.${common.target.prefix}-drop-wrap .drop-btn`);
              const _dropMenus = document.querySelectorAll(`.${common.target.prefix}-drop-wrap .drop-menu`);
              _dropMenus.forEach(($menu) => {
                  $menu.style.display = "";
              });
              _dropBtns.forEach(($btn) => {
                  $btn.classList.remove("active");
              });
          },
          popupEvent: ($id) => {
              const $clickBtn = document.activeElement;
              const $header = common.target.header;
              const $openTarget = document.querySelector($id);
              const $openTargetType = $openTarget.getAttribute('data-type');
              const $focusPopupWrap = document.querySelector(`${$id}`);
              const $focusPopup = document.querySelector(`${$id} .popup`);
              const $closeBtn = document.querySelector(`${$id} .popup-close`);
      
              $openTarget.classList.add("is-open");
              
              document.body.classList.add("scroll-no");
              common.accEvent.open();
              if($openTargetType !== 'bottom' && common.target.header !== null) {
                  $header.style.zIndex="1000";
              }
      
              if($openTargetType == 'full') {
                  $openTarget.setAttribute("tabindex", 0);
                  $focusPopupWrap.focus();
              } else {
                  $focusPopup.setAttribute("tabindex", 0);
                  $focusPopup.focus();
              }
      
              $closeBtn.addEventListener("click", () => {
                  $openTarget.classList.remove("is-open");
                  $openTarget.classList.add("is-close");
                  $focusPopup.removeAttribute("tabindex");
                  $clickBtn.focus();
      
                  if (common.target.header !== null) $header.style.zIndex="";
                  
                  common.accEvent.close();
                  setTimeout(() => {
                      $openTarget.classList.remove("is-close");
                      document.body.classList.remove("scroll-no");
                  }, 600);
              });
          },
          accEvent :  {
              open : () => {
                  const $container = document.querySelector(common.target.container);
                  const $footer = document.querySelector(common.target.footer);
                  $container.setAttribute("aria-hidden", "true");
                  $footer.setAttribute("aria-hidden", "true");
              },
              close: () => {
                  const $container = document.querySelector(common.target.container);
                  const $footer = document.querySelector(common.target.footer);
                  $container.setAttribute("aria-hidden", "false");
                  $footer.setAttribute("aria-hidden", "false");
              },
          },
          toggleEvent : () => {
              const _toggleBtns = document.querySelectorAll(".toggle-btn");
              _toggleBtns.forEach(($toggleBtn) => {
                  $toggleBtn.addEventListener("click", ($btnAct) => {
                      const $target = $btnAct.target.closest(".toggle-head");
                      const $targetBody = $target.nextElementSibling;
                      const _targetBodyH = $targetBody.querySelector(".inner").scrollHeight;
                      const $srEl = $btnAct.target.querySelector(".sr-only");
      
                      if(!$target.classList.contains("active")) {
                          $srEl.innerText = '닫힘';
                          $target.classList.add("active");
                          $targetBody.classList.add("active");
                          $targetBody.style.height = `${_targetBodyH}px`;
                          window.addEventListener("resize", () => {
                              if($targetBody.classList.contains("active")) {
                                  const _targetBodyH = $targetBody.querySelector(".inner").scrollHeight;
                                  $targetBody.style.height = `${_targetBodyH }px`;
                              }
                          });
                      } else { 
                          $srEl.innerText = '열림';
                          $target.classList.remove("active");
                          $targetBody.classList.remove("active");
                          $targetBody.style.height = '';
                      }
                      
                  })
              });
          },
          accordianEvent : { 
              init: () => {
                  const _accordians = document.querySelectorAll(".acco-list");
                  _accordians.forEach(($parent) => {
                      const _accoDataAct = $parent.getAttribute("data-action");
                      const _accoAct = _accoDataAct !== null;
                      const _lis = $parent.querySelectorAll(".li");
                      const _list = [..._lis];
                      _list.forEach(($e) => {
                          const $item = $e.closest(".li");
                          const $itemToggle = $e.querySelector(".acco-btn");
                          const $itemSr = $item.querySelector(".acco-btn .sr-only");
                          const $itemBody = $e.querySelector(".acco-body");
      
                          if($e.classList.contains("active")) common.accordianEvent.open($item);
                          if($parent.classList.contains("is-open")) {
                              common.accordianEvent.open($item);
                          } else {
                              $itemBody.style.display = 'none';
                              $itemSr.textContent = "펼침";
                          }
      
                          $itemToggle.addEventListener("click", ($el) => {
                              const $menu = $el.target.closest(".li");
      
                              common.accordianEvent[$menu.classList.contains('active') ? 'close' : 'open']($menu);
                              //(!$menu.classList.contains("active")) ? common.accordianEvent.open($menu) : common.accordianEvent.close($menu); 클릭 시 해당 버튼만 활성화 상태로 변경되어 해당 주석처리.
                              //if(_accoAct) common.accordianEvent.reset(_list, $menu); 클릭 시 해당 버튼만 활성화 상태로 변경되어 해당 주석처리.
                          });
      
                           /*** depth4가 있다면, 클릭 시 이벤트(임시적용) ***/
                           const $depth4s = $item.querySelectorAll(".is-depth4");
                           if( $depth4s ){
                             $depth4s.forEach(($btn)=>{
                               $btn.addEventListener('click', function(e){                        
                                 const $parentsWrap =  e.target.closest('li').querySelector('.depth4-wrap');
       
                                 let lastClickedButton = $parentsWrap.closest('li').querySelector('.is-depth4');
                
                                 $parentsWrap.classList.add('is-open');
                                 lastClickedButton.setAttribute("aria-expanded", "true");
       
                                 const $depth4Title = $parentsWrap.querySelector('.depth4-tit');
                                 $depth4Title.focus();
                                 $depth4Title.addEventListener('click', (e)=>{
                                   e.target.closest('.depth4-wrap').classList.remove('is-open');
                                   lastClickedButton.setAttribute("aria-expanded", "false");
       
                                 });       
                                 $parentsWrap.addEventListener("focusout", (event) => {
                                   // 포커스가 서브메뉴 밖으로 나갔는지 확인
                                   if (!$parentsWrap.contains(event.relatedTarget)) {
                                     $parentsWrap.classList.remove("is-open");
       
                                     if (lastClickedButton) {
                                       lastClickedButton.focus();
                                     }
                                   }
                                 });  
       
                               })
                             });
                           }   
      
                      });
                  });
              },
              open : ($item) => {
                  const $accoBtn = $item.querySelector(".acco-btn");
                  const $accoSr = $item.querySelector(".acco-btn .sr-only");
                  const $accoBody = $item.querySelector(".acco-body");
      
                  $item.classList.add("active");
                  $accoBody.style.display = 'block';
                  $accoSr.textContent = "접기";
                  $accoBtn.setAttribute("aria-expanded", "true");
      
                  const _accoBodyH = $item.querySelector(".acco-in").scrollHeight;
                  $accoBody.style.height = `${_accoBodyH+1}px`;
                  setTimeout(() => {
                      $accoBody.style.display = 'block';
                  },0);
                  
              },
              close : ($item) => {
                  const $accoBtn = $item.querySelector(".acco-btn");
                  const $accoSr = $item.querySelector(".acco-btn .sr-only");
                  const $accoBody = $item.querySelector(".acco-body");
      
                  $accoBtn.setAttribute("aria-expanded", "false");
                  $accoSr.textContent = "펼침";
                  $accoBody.style.height = '';
                  $accoBody.style.overflow = '';
                  $item.classList.remove("active");
                  setTimeout(() => {
                      $accoBody.style.display = 'none';
                  }, 400);
              },
              reset : (_list, $menu) => {
                  _list.forEach(($e) => {
                      const $target = $e;
                      const $accoSr = $target.querySelector(".acco-btn .sr-only");
                      const $accoBody = $target.querySelector(".acco-body");
                      if(_list.indexOf($menu) !== _list.indexOf($target)) {
                          $target.classList.remove("active");
                          $accoSr.textContent = "펼침";
                          $accoBody.style.height = '';
                          setTimeout(() => {
                              $accoBody.style.display = 'none';
                          }, 400);
                      }
                  });
              },
          },
      }
      
      //띠배너 스크롤 시 class 추가
      function lineBnScroll() {
          const $bn = document.querySelector('#header-top');
          const $bnHeight = $bn.offsetHeight;
          const $body = document.querySelector("body");
          const scrollY = window.scrollY;
          if ($bn) {
              $body.classList.add('bn-hidden');
              if (scrollY <= $bnHeight) {
                  $body.classList.remove('bn-hidden');
              }
          }
      }
      
      // tobe 임시 적용
      /*** * krds_pcGnb 웹 수정 * ***/
      const krds_pcGnb = {
        init() {
          const gnbMenu = document.querySelector(".krds-gnb .gnb-menu");
          if (!gnbMenu) return;
      
          // gnb 속성설정
          gnbMenu.setAttribute("aria-label", "메인 메뉴");
          gnbMenu.setAttribute("role", "menubar");
      
          // li 요소 role 초기화
          gnbMenu.querySelectorAll("li").forEach((li) => li.setAttribute("role", "none"));
      
          // backdrop 설정
          this.backdrop = document.querySelector(".gnb-backdrop") || this.createBackdrop();
      
          // trigger 설정 및 이벤트 등록
          const mainTriggers = gnbMenu.querySelectorAll(".gnb-main-trigger");
          const subTriggers = gnbMenu.querySelectorAll(".gnb-sub-trigger");
          mainTriggers.forEach((mainTrigger) => this.setupMainTrigger(mainTrigger));
      
          this.addEvent(mainTriggers, subTriggers);
          this.addKeyboardNavigation(mainTriggers);
        },
        setupMainTrigger(mainTrigger) {
          const toggleWrap = mainTrigger.nextElementSibling;
          if (toggleWrap) {
            const uniqueIdx = `gnb-main-menu-${Math.random().toString(36).substring(2, 9)}`;
            mainTrigger.setAttribute("role", "menuitem");
            mainTrigger.setAttribute("aria-controls", uniqueIdx);
            mainTrigger.setAttribute("aria-expanded", "false");
            mainTrigger.setAttribute("aria-haspopup", "true");
            toggleWrap.setAttribute("id", uniqueIdx);
            toggleWrap.setAttribute("role", "menu");
      
            const mainList = toggleWrap.querySelector(".gnb-main-list");
            if (mainList?.getAttribute("data-has-submenu") === "true") {
              const subTriggers = mainList.querySelectorAll(".gnb-sub-trigger");
              if (subTriggers.length > 0) {
                subTriggers[0].classList.add("active");
                subTriggers[0].nextElementSibling?.classList.add("active");
              }
              subTriggers.forEach((subTrigger) => this.setupSubTrigger(subTrigger));
            }
          }
        },
        setupSubTrigger(subTrigger) {
          const hasMenu = subTrigger.nextElementSibling;
          if (hasMenu) {
            const uniqueIdx = `gnb-sub-menu-${Math.random().toString(36).substring(2, 9)}`;
            subTrigger.setAttribute("role", "menuitem");
            subTrigger.setAttribute("aria-controls", uniqueIdx);
            subTrigger.setAttribute("aria-expanded", "false");
            subTrigger.setAttribute("aria-haspopup", "true");
            hasMenu.setAttribute("role", "menu");
            hasMenu.setAttribute("id", uniqueIdx);
          }
        },
        toggleMainMenu(mainTrigger) {
          this.menuReset();
          const isActive = mainTrigger.classList.contains("active");
          if (!isActive && mainTrigger.nextElementSibling) {
            mainTrigger.setAttribute("aria-expanded", "true");
            mainTrigger.classList.add("active");
            mainTrigger.nextElementSibling.classList.add("is-open");
            this.toggleBackdrop(true);
            this.scrollbar(true);
            this.adjustSubMenuHeight(mainTrigger.nextElementSibling.querySelector(".gnb-main-list"));
          } else {
            this.close();
          }
        },
        toggleSubMenu(subTrigger) {
          const otherSubTriggers = subTrigger.closest("ul").querySelectorAll(".gnb-sub-trigger");
          otherSubTriggers.forEach((trigger) => {
            trigger.classList.remove("active");
            trigger.setAttribute("aria-expanded", "false");
            trigger.nextElementSibling?.classList.remove("active");
          });
          subTrigger.classList.add("active");
          subTrigger.setAttribute("aria-expanded", "true");
          subTrigger.nextElementSibling?.classList.add("active");
          this.adjustSubMenuHeight(subTrigger.closest(".gnb-main-list"));
        },
        createBackdrop() {
          const backdrop = document.createElement("div");
          backdrop.classList.add("gnb-backdrop");
          backdrop.style.display = "none";
          document.body.appendChild(backdrop);
          return backdrop;
        },
        toggleBackdrop(isOpen) {
          this.backdrop.style.display = isOpen ? "block" : "none";
          document.body.classList.toggle("is-gnb-web", isOpen);
        },
        adjustSubMenuHeight(target) {
          const activeSubList = target.querySelector(".gnb-sub-list.active");
          const height = activeSubList?.scrollHeight || 0;
          target.style.minHeight = `${height}px`;
        },
        scrollbar(hasScroll) {
          const condition = hasScroll === "open" ? document.body.scrollHeight > window.innerHeight : hasScroll;
          document.body.classList.toggle("hasScrollY", condition);
        },
        menuReset() {
          document.querySelectorAll(".krds-gnb .gnb-main-trigger:not(.is-link)").forEach((mainTrigger) => {
            mainTrigger.classList.remove("active");
            mainTrigger.setAttribute("aria-expanded", "false");
          });
          document.querySelectorAll(".krds-gnb .gnb-toggle-wrap").forEach((toggleWrap) => {
            toggleWrap.classList.remove("is-open");
          });
        },
        close() {
          this.toggleBackdrop(false);
          this.menuReset();
          this.scrollbar(false);
        },
        addEvent(mainTriggers, subTriggers) {
          this.backdrop.addEventListener("click", () => this.close());
          window.addEventListener("keyup", (event) => {
            if (event.code === "Escape" || !event.target.closest(".krds-gnb")) {
              this.close();
            }
          });
          mainTriggers.forEach((mainTrigger) => {
            mainTrigger.addEventListener("click", () => this.toggleMainMenu(mainTrigger));
          });
          subTriggers.forEach((subTrigger) => {
            subTrigger.addEventListener("click", () => this.toggleSubMenu(subTrigger));
          });
        },
        addKeyboardNavigation(mainTriggers) {
          const focusMenuItem = (element) => {
            if (element) {
              element.focus();
            }
          };
          const findFocusableElement = (element, direction) => {
            const sibling = direction === "next" ? "nextElementSibling" : "previousElementSibling";
            const parent = element.closest("li")?.[sibling];
            return parent ? parent.querySelector("[data-trigger]") : null;
          };
          document.addEventListener("keydown", (event) => {
            const target = event.target;
            if (target.getAttribute("data-trigger")) {
              switch (event.key) {
                case "Home":
                  event.preventDefault();
                  focusMenuItem(mainTriggers[0]);
                  break;
                case "End":
                  event.preventDefault();
                  focusMenuItem(mainTriggers[mainTriggers.length - 1]);
                  break;
                case "ArrowRight":
                case "ArrowDown":
                  event.preventDefault();
                  const nextElement = findFocusableElement(target, "next");
                  focusMenuItem(nextElement);
                  break;
                case "ArrowLeft":
                case "ArrowUp":
                  event.preventDefault();
                  const previousElement = findFocusableElement(target, "prev");
                  focusMenuItem(previousElement);
                  break;
                default:
                  break;
              }
            }
          });
        },
      };
        
      /*** * krds_moGnb 모바일 수정 * ***/
      const krds_moGnb = {
        init() {
          const mobileGnb = document.querySelector(".krds-gnb-mobile");
          if (!mobileGnb) return;
      
          mobileGnb.setAttribute("aria-hidden", "true");
      
          // 접근성 임시
          // tab으로 설정
          const tabList = document.querySelector(".gnb-menu");
          tabList.setAttribute("role", "tablist");
          const tabs = document.querySelectorAll(".menu-wrap .gnb-main-trigger");
          tabs.forEach((item, idx) => {
            item.setAttribute("role", "tab");
            item.setAttribute("aria-selected", "false");
            item.setAttribute("aria-controls", item.getAttribute("href").substring(1));
            item.setAttribute("id", `tab-${idx}`);
          });
          const tabPanels = document.querySelectorAll(".submenu-wrap .gnb-sub-list");
          tabPanels.forEach((item, idx) => {
            item.setAttribute("role", "tabpanel");
            item.setAttribute("aria-labelledby", `tab-${idx}`);
          });
      
          this.addEvent(mobileGnb);
        },
        addEvent(mobileGnb) {
          const id = mobileGnb.getAttribute("id");
          const openGnb = document.querySelector(`[aria-controls=${id}]`);
          const closeGnb = mobileGnb.querySelector("#close-nav");
      
          openGnb.addEventListener("click", () => this.open(mobileGnb));
          closeGnb.addEventListener("click", () => this.close(mobileGnb));
          this.anchorScroll(mobileGnb);
          this.anchor(mobileGnb);
        },
        open(mobileGnb) {
          const id = mobileGnb.getAttribute("id");
          const openGnb = document.querySelector(`[aria-controls=${id}]`);
          const header = document.querySelector("#header");
          const navContainer = mobileGnb.querySelector(".gnb-wrap");
      
          openGnb.setAttribute("aria-expanded", "true");
      
          header.style.zIndex = "1000";
          mobileGnb.setAttribute("aria-hidden", "false");
          mobileGnb.classList.add("is-backdrop");
          mobileGnb.classList.add("is-open");
          navContainer.setAttribute("tabindex", 0);
          document.body.classList.add("is-gnb-mobile");
      
          mobileGnb.addEventListener("transitionend", function onTransitionEnd() {
            navContainer.focus();
            mobileGnb.removeEventListener("transitionend", onTransitionEnd);
          });
          // focusTrap 임시
          this.focusTrap(mobileGnb);
        },
        close(mobileGnb) {
          const id = mobileGnb.getAttribute("id");
          const openGnb = document.querySelector(`[aria-controls=${id}]`);
          const header = document.querySelector("#header");
          const navContainer = mobileGnb.querySelector(".gnb-wrap");
      
          openGnb.setAttribute("aria-expanded", "false");
      
          mobileGnb.classList.remove("is-open");
          mobileGnb.addEventListener("transitionend", function onTransitionEnd() {
            header.style.zIndex = "";
            navContainer.removeAttribute("tabindex");
            mobileGnb.classList.remove("is-backdrop");
            mobileGnb.setAttribute("aria-hidden", "ture");
            document.body.classList.remove("is-gnb-mobile");
            openGnb.focus();
            mobileGnb.removeEventListener("transitionend", onTransitionEnd);
          });
        },
        anchorScroll(mobileGnb) {
          const gnbBody = mobileGnb.querySelector(".gnb-body");
          const navContainer = mobileGnb.querySelector(".gnb-wrap");
          const navItems = mobileGnb.querySelectorAll(".submenu-wrap .gnb-sub-list");
          const headerTabArea = mobileGnb.querySelector(".gnb-tab-nav");
          const headerTabMenu = headerTabArea?.querySelector(".menu-wrap");
      
          gnbBody.addEventListener("scroll", () => {
            const scrollTop = gnbBody.scrollTop;
            const scrollHeight = gnbBody.scrollHeight;
            const bodyHeight = gnbBody.clientHeight;
      
            navItems.forEach((item) => {
              const id = item.getAttribute("id");
              const menuLink = mobileGnb.querySelector(`[href="#${id}"]`);
              const offset = item.offsetTop;
              if (scrollTop >= offset || bodyHeight + scrollTop >= scrollHeight) {
                this.anchormenuReset();
                menuLink.classList.add("active");
                // 접근성 임시
                menuLink.setAttribute("aria-selected", "true");
                if (headerTabArea) {
                  const headerTabMenuUl = headerTabMenu.querySelector("ul");
                  gnbBody.addEventListener("scrollend", () => {
                    headerTabMenuUl.scrollLeft = menuLink.offsetLeft;
                  });
                }
              }
            });
      
            this.handleTopScroll(headerTabArea, navContainer, gnbBody);
          });
        },
        handleTopScroll(headerTabArea, navContainer, gnbBody) {
          let lastBodyScrollY = 0;
      
          if (!headerTabArea) return; // 요소가 없을 경우 함수 종료
      
          gnbBody.addEventListener("scroll", (e) => {
            const bodyScrollY = e.target.scrollTop;
      
            if (bodyScrollY > 0) {
              headerTabArea.style.height = `${headerTabArea.scrollHeight}px`;
              headerTabArea.style.transition = "ease-out .4s";
              navContainer.classList.add("is-active");
            } else if (bodyScrollY < 50 && bodyScrollY < lastBodyScrollY) {
              headerTabArea.style.height = "";
              headerTabArea.style.transition = "ease-out .4s .2s";
              setTimeout(() => {
                navContainer.classList.remove("is-active");
              }, 600);
            }
      
            lastBodyScrollY = bodyScrollY;
          });
        },
        anchor(mobileGnb) {
          const menuItems = mobileGnb.querySelectorAll(".menu-wrap .gnb-main-trigger");
          const navItems = mobileGnb.querySelectorAll(".submenu-wrap .gnb-sub-list");
      
          menuItems[0].classList.add("active");
          // 접근성 임시
          menuItems[0].setAttribute("aria-selected", "true");
      
          navItems.forEach((item) => {
            const depth4Items = item.querySelectorAll(".is-depth4");
            if (depth4Items.length > 0) {
              depth4Items.forEach((el) => {
                el.addEventListener("click", (event) => this.handleDepth4Click(event, el));
              });
            }
          });
        },
        handleDepth4Click(event) {
          const target = event.target.nextElementSibling;
          const prevButton = target.querySelector(".trigger-prev");
          const closeButton = target.querySelector(".trigger-close");
      
          target.style.display = "block";
          setTimeout(() => {
            target.classList.add("is-open");
          }, 0);
          prevButton.focus();
      
          const depth4Close = () => {
            target.classList.remove("is-open");
            event.target.focus();
            setTimeout(() => {
              target.style.display = "";
            }, 400);
          };
      
          prevButton.addEventListener("click", depth4Close);
          closeButton.addEventListener("click", depth4Close);
        },
        anchormenuReset() {
          document.querySelectorAll(".krds-gnb-mobile .menu-wrap .gnb-main-trigger").forEach((menu) => {
            menu.classList.remove("active");
            // 접근성 임시
            menu.setAttribute("aria-selected", "false");
          });
        },
        focusTrap(mobileGnb) {
          const focusableElements = mobileGnb.querySelectorAll('a, button, [tabindex="0"], input, textarea, select');
      
          if (focusableElements.length === 0) return;
      
          const firstFocusableElement = focusableElements[0];
          const lastFocusableElement = focusableElements[focusableElements.length - 1];
      
          // 포커스 순환
          const handleFocusTrap = (event) => {
            if (event.key === "Tab") {
              if (event.shiftKey && document.activeElement === firstFocusableElement) {
                event.preventDefault();
                lastFocusableElement.focus();
              } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
                event.preventDefault();
                firstFocusableElement.focus();
              }
            }
          };
      
          firstFocusableElement.addEventListener("keydown", handleFocusTrap);
          lastFocusableElement.addEventListener("keydown", handleFocusTrap);
      
          // 모달 오픈 후 첫 초점 역방향 제어
          mobileGnb.addEventListener("keydown", (event) => {
            if (event.key === "Tab" && event.shiftKey && document.activeElement === mobileGnb) {
              event.preventDefault();
              lastFocusableElement.focus();
            }
          });
        },
      };
      
      window.addEventListener("DOMContentLoaded", () => {
          if(comLayout.target.header !== null) {
              setTimeout(() => {
                  // mobGnb.init();
                  // pcGnb.init();
      			      krds_pcGnb.init();
      			      krds_moGnb.init();
                  comLayout.init();
              }, 100);
          }
      });
      
      window.addEventListener("load", () => {
          setTimeout(() => {
              common.init();
          }, 100);
      
          if (comLayout.target.headerTop !== null) { 
              setTimeout(() => {
                  lineBnScroll();
              }, 200);
          }
      });
      
      window.addEventListener('scroll', () => {
          if (comLayout.target.headerTop !== null) { 
              setTimeout(() => {
                  lineBnScroll();
              }, 200);
          }
      });
    })(),

    // ===== UI-SCRIPT =====
    ui-script: (function() {
      /* ** 윈도우 사이즈 체크 (반응형) ** */
      let winSize;
      function winSizeSet() {
      	const brekpoint = 1024;
      	if (window.innerWidth >= brekpoint) {
      		winSize = 'pc';
      	}
      	else {
      		winSize = 'mob';
      	}
      }
      
      /* layer tab */
      function layerTab() {
      	const layerTabArea = document.querySelectorAll('.tab-area.layer');
      
      	/* 탭 접근성 텍스트 세팅 */
      	const tabAccText = document.createTextNode(' 선택됨');
      	const tabAccTag = document.createElement('i');
      	tabAccTag.setAttribute('class', 'sr-only created');
      	tabAccTag.appendChild(tabAccText);
      
      	layerTabArea.forEach(e => {
      		const layerTabEle = e.querySelectorAll('.tab > ul > li');
      		const tabPanel = e.querySelectorAll('.tab-conts');
      
      		function tab() {
      			layerTabEle.forEach(ele => {
      				const control = ele.getAttribute('aria-controls');
      				const selectedTabPanel = document.getElementById(control);
      
      				if (ele.classList.contains('active')) {
      					//선택됨 텍스트 추가
      					ele.querySelector('button').append(tabAccTag);
      				}
      
      				ele.addEventListener('click', () => {
      					layerTabInitial(); //레이어탭 초기화
      
      					ele.classList.add('active');
      					ele.querySelector('button').append(tabAccTag); //선택됨 텍스트 추가
      					ele.setAttribute('aria-selected', 'true');
      					selectedTabPanel.classList.add('active');
      				});
      			});
      		}
      
      		//레이어탭 초기화
      		function layerTabInitial() {
      			layerTabEle.forEach(ele => {
      				ele.classList.remove('active');
      				ele.setAttribute('aria-selected', 'false');
      				//ele.removeAttribute('style');
      				if (ele.classList.contains('active')) {
      					const text = ele.querySelector('.sr-only.created');
      					ele.querySelector('button').removeChild(text);
      				}
      			});
      			tabPanel.forEach(ele => {
      				ele.classList.remove('active');
      				//ele.removeAttribute('style');
      			})
      		}
      		tab();
      	});
      }
      
      /*** * DATEPICKER * ***/
      /* ** datepicker ** */
      const dateInput = document.querySelectorAll('.form-btn-datepicker');
      const kds_datepicker = {
      	init: () => {
      		kds_datepicker.open();
      		kds_datepicker.selValue();
      		kds_datepicker.closeDatepicker();
      		kds_datepicker.closeSingle();
      	},
      	tblHeightSet: () => { //datepicker table th, td height 세팅
      		const cal = document.querySelectorAll('.datepicker-area');
      		cal.forEach(e => {
      			const datepickerEl = e.querySelector('.datepicker-tbl');
      			const cell = datepickerEl.querySelectorAll('th, td');
      			cell.forEach(ele => {
      				const w = ele.clientWidth + 4; //윗간격 4px 추가
      				const wResult = w.toFixed(2); //소수점 2자리에서 반올림됨
      				ele.setAttribute('style', 'height:' + wResult + 'px');
      			});
      		});
      	},
      	contsHeightSet: () => { //datepicker contents layer height 세팅
      		const cal = document.querySelectorAll('.datepicker-area');
      		cal.forEach(e => {
      			const body = e.querySelector('.datepicker-body');
      			const bodyConts = e.querySelectorAll('.datepicker-conts');
      			bodyConts.forEach(ele => {
      				let contsHeight;
      				if (ele.classList.contains('active')) {
      					if (ele.classList.contains('datepicker-tbl-wrap')) {
      						if (e.classList.contains('range')) {
      							contsHeight = ele.querySelector('.datepicker-tbl').offsetHeight + ele.querySelector('.datepicker-btn-wrap').offsetHeight;
      						} else {
      							contsHeight = ele.querySelector('.datepicker-tbl').offsetHeight;
      						}
      					} else {
      						contsHeight = '316';
      					}
      					body.setAttribute('style', 'height: '+ contsHeight +'px');
      				}
      			});
      		});
      	},
      	open: () => { //datepicker 열기
      		dateInput.forEach(e => {
      			const cal = e.closest('.datepicker-conts').querySelector('.datepicker-area');
      			const colConts = cal.querySelector('.datepicker-wrap');
      			e.addEventListener('click', () => {
      				kds_datepicker.close();
      
      				cal.classList.add('active');
      				colConts.setAttribute('tabindex', '0');
      				colConts.setAttribute('aria-hidden', 'false');
      
      				const activeLayer = cal.querySelector('.datepicker-tbl-wrap');
      				activeLayer.classList.add('active');
      				activeLayer.setAttribute('tabindex', '0');
      				activeLayer.setAttribute('aria-hidden', 'false');
      
      				kds_datepicker.tblHeightSet();
      				kds_datepicker.contsHeightSet();
      
      				setTimeout(() => {
      					colConts.focus();
      				}, 50);
      			});
      		});
      	},
      	close: () => { //datepicker 닫기
      		const cal = document.querySelectorAll('.datepicker-area');
      		cal.forEach(e => {
      			const colConts = e.querySelector('.datepicker-wrap');
      			e.classList.remove('active');
      			colConts.setAttribute('tabindex', '-1');
      			colConts.setAttribute('aria-hidden', 'true');
      		});
      	},
      	contentsInitialize: () => {
      		const cal = document.querySelectorAll('.datepicker-area');
      		cal.forEach(e => {
      			const bodyConts = e.querySelectorAll('.datepicker-conts');
      			bodyConts.forEach(ele => {
      				ele.classList.remove('active');
      				ele.setAttribute('tabindex', '-1');
      				ele.setAttribute('aria-hidden', 'true');
      			});
      		});
      	},
      	selValue: () => {
      		const cal = document.querySelectorAll('.datepicker-area');
      		cal.forEach(e => {
      			const changeCalBtn = e.querySelectorAll('.datepicker-conts .sel .btn');
      			const setBtn = e.querySelectorAll('.datepicker-btn-wrap .btn');
      
      			const yearBtn = e.querySelector('.btn-cal-switch.year');
      			const monBtn = e.querySelector('.btn-cal-switch.month');
      
      			let activeLayer;
      			yearBtn.addEventListener('click', () => { //년도 레이어 활성화
      				kds_datepicker.contentsInitialize();
      				activeLayer = e.querySelector('.datepicker-year-wrap');
      				activeLayer.classList.add('active');
      				activeLayer.setAttribute('tabindex', '0');
      				activeLayer.setAttribute('aria-hidden', 'false');
      				setTimeout(() => {
      					activeLayer.focus();
      				}, 50);
      				kds_datepicker.contsHeightSet();
      			});
      			monBtn.addEventListener('click', () => { //월 레이어 활성화
      				kds_datepicker.contentsInitialize();
      				activeLayer = e.querySelector('.datepicker-mon-wrap');
      				activeLayer.classList.add('active');
      				activeLayer.setAttribute('tabindex', '0');
      				activeLayer.setAttribute('aria-hidden', 'false');
      				setTimeout(() => {
      					activeLayer.focus();
      				}, 50);
      				kds_datepicker.contsHeightSet();
      			});
      			setBtn.forEach(ele => { //확인 취소버튼 클릭하면 datepicker 닫힘
      				ele.addEventListener('click', () => {
      					kds_datepicker.close();
      				});
      			});
      			changeCalBtn.forEach(ele => { //년도 또는 월 선택하면 캘린더 레이어 활성화
      				ele.addEventListener('click', () => {
      					kds_datepicker.contentsInitialize();
      					activeLayer = e.querySelector('.datepicker-tbl-wrap');
      					activeLayer.classList.add('active');
      					activeLayer.setAttribute('tabindex', '0');
      					activeLayer.setAttribute('aria-hidden', 'false');
      					setTimeout(() => {
      						activeLayer.focus();
      					}, 50);
      					kds_datepicker.contsHeightSet();
      				});
      			});
      		});
      	},
      	closeDatepicker: () => {
      		const cal = document.querySelectorAll('.datepicker-area');
      		cal.forEach(e => {
      			const bodyConts = e.querySelectorAll('.datepicker-conts');
      			let lastElement;
      			bodyConts.forEach(ele => {
      				if (ele.classList.contains('datepicker-tbl-wrap')) {
      					if (e.classList.contains('range')) {
      						lastElement = ele.querySelector('.datepicker-btn-wrap > .btn:last-child');
      					} else {
      						lastElement = ele.querySelector('.datepicker-tbl tbody tr:last-child > td:last-child .btn-set-date');
      					}
      				} else {
      					lastElement = ele.querySelector('.sel > li:last-child > .btn');
      				}
      				lastElement.addEventListener('blur', () => {
      					kds_datepicker.close();
      				});
      			});
      		});
      	},
      	closeSingle: () => {
      		const cal = document.querySelectorAll('.datepicker-area');
      		cal.forEach(e => {
      			const colConts = e.querySelector('.datepicker-wrap');
      
      			if (colConts.classList.contains('single')) {
      				const calBtn = colConts.querySelectorAll('.datepicker-tbl .btn-set-date');
      				calBtn.forEach(ele => {
      					ele.addEventListener('click', () => {
      						kds_datepicker.close();
      					});
      				});
      			}
      		});
      	}
      }
      document.addEventListener('click', (e) => {
      	if(!e.target.closest(".datepicker-conts")) {
      		kds_datepicker.close();
      	};
      });
      
      /*** * accordion * ***/
      const $accordionBtn = document.querySelectorAll('.btn-accordion');
      const kds_accordion = {
      	init: () => {
      		kds_accordion.expand();
      	},
      	expand: () => {
      		$accordionBtn.forEach(e => {
      			const $wrapper = e.closest('.accordion');
      			const $wrapAll = $wrapper.querySelectorAll('.accordion-item');
      			const $wrap = e.closest('.accordion-item');
      
      			e.addEventListener('click', () => {
      				if (!$wrap.classList.contains('active')) {
      					$wrapAll.forEach(ele => {
      						ele.classList.remove('active');
      						ele.querySelector('.btn-accordion').classList.remove('active');
      					});
      
      					$wrap.classList.add('active');
      					e.classList.add('active');
      				}
      				else {
      					$wrap.classList.remove('active');
      					e.classList.remove('active');
      				}
      			});
      
      		});
      	},
      }
      
      /*** * modal * ***/
      const $modalTrigger = document.querySelectorAll('.open-modal');
      const $modalCloseTrigger = document.querySelectorAll('.close-modal');
      const $kds_body = document.querySelector('body');
      const kds_modal = {
      	init: () => {
      		kds_modal.open();
      		kds_modal.close();
      	},
      	open: () => {
      		$modalTrigger.forEach(e => {
      			e.addEventListener('click', ele => {
      				const id = e.getAttribute('data-target');
      
      				e.classList.add('modal-opened');
      				e.setAttribute('tabindex', '-1');
      
      				kds_modal.modalOpen(id);
      				ele.preventDefault();
      			});
      		});
      	},
      	modalOpen: (id) => {
      		const $idVal = document.getElementById(id);
      		const $dialog = $idVal.querySelector('.modal-content');
      		const $modalBack = $idVal.querySelector('.modal-back');
      		const $modalOpened = document.querySelectorAll('.modal.in:not(.sample)');
      		const $modalOpenedLen = $modalOpened.length + 1;
      		$kds_body.classList.add('scroll-no');
      		$idVal.setAttribute('aria-hidden', 'false');
      		$modalBack.classList.add('in');
      		$idVal.classList.add('shown');
      		setTimeout(() => {
      			$idVal.classList.add('in');
      		},150);
      
      		//열린 팝업창 포커스
      		$dialog.setAttribute('tabindex', '0');
      
      		//모달 여러개 열린경우 마지막 열린 모달 z-index높게
      		if ($modalOpenedLen > 1){
      			const openedLen = $modalOpenedLen;
      			const zIndexNew = 1010 + openedLen;
      			$idVal.setAttribute('style', 'z-index: ' + zIndexNew);
      		}
      
      		//레이어 진입 시 포커스
      		setTimeout(() => {
      			$dialog.focus();
      		},350);
      	},
      	close: () => {
      		$modalCloseTrigger.forEach(e => {
      			e.addEventListener('click', ele => {
      				const id = e.closest('.modal').getAttribute('id');
      				kds_modal.modalClose(id);
      			});
      			e.addEventListener('keydown', ele => { //닫기버튼에서 탭 키 누르면 모달 내 첫번쨰 포커스로 키보드 이동
      				if (e.classList.contains('btn-close')) {
      					const keyCode = ele.keyCode || ele.which;
      					if (!ele.shiftKey && keyCode == 9) {
      						e.closest('.modal-content').focus();// 첫번째 링크로 이동
      						ele.preventDefault();
      					}
      				}
      			});
      		});
      	},
      	modalClose: (id) => {
      		const $idVal = document.getElementById(id);
      		const $dialog = $idVal.querySelector('.modal-content');
      		const $modalOpened = document.querySelectorAll('.modal.in:not(.sample)');
      		const $modalOpenedLen = $modalOpened.length;
      		if ($modalOpenedLen < 2) {
      			$kds_body.classList.remove('scroll-no');
      		}
      
      		$idVal.setAttribute('aria-hidden', 'true');
      		$idVal.classList.remove('in');
      
      		$dialog.removeAttribute('tabindex');
      
      		setTimeout(() => {
      			$idVal.classList.remove('shown');
      		},150);
      
      		//모달 창 연 버튼에 class 삭제 및 tabindex 0로 조정 (포커스 영역 수정)
      		const $triggerBtn = document.querySelector('.modal-opened');
      		if ($triggerBtn != null) {
      			$triggerBtn.focus();
      			$triggerBtn.setAttribute('tabindex', '0');
      			$triggerBtn.classList.remove('modal-opened');
      		}
      	},
      }
      
      /*** * tooltip * ***/
      const krds_tooltip = {
          init: ()=> {
              krds_tooltip.tooltipEvent();
          },
          tooltipEvent: () => {
              const _toolBtns = document.querySelectorAll(".krds-tooltip-wrap .tool-btn");
      
              _toolBtns.forEach(($toolBtn) => {
                  const _span = document.createElement("span");
                  const _txt = document.createTextNode("열기");
      
                  _span.classList.add("sr-only");
                  _span.appendChild(_txt);
                  
                  $toolBtn.innerHTML="";
                  $toolBtn.appendChild(_span);
      
                  $toolBtn.addEventListener("click", ($el) => {
                      const $parent = $toolBtn.closest(".krds-tooltip-wrap");
                      const $closeBtn = $parent.querySelector(".tool-close");
                      const $cnt = $parent.querySelector(".tool-in");
                      const $srTxt = $el.target.querySelector(".sr-only");
                      if($cnt.style.display !== "block") {
                          $cnt.style.display = "block";
                          $cnt.setAttribute("tabindex", 0);
                          $srTxt.textContent = "닫기";
                          krds_tooltip.tooltipResize($parent, $cnt);
                      } 
                      $closeBtn.addEventListener("click", () => {
                          $srTxt.textContent = "열기";
                          $cnt.style.display = "";
                          $cnt.removeAttribute("tabindex");
                          $toolBtn.focus();
                          krds_tooltip.tooltipResize($parent, $cnt);
                      });
      
                      window.addEventListener("resize", () => { 
                          krds_tooltip.tooltipResize($parent, $cnt);
                      });
                  });
              });
          },
          tooltipResize: ($parent, $cnt) => { 
              if (winSize === 'mob') {
                  krds_tooltip.tooltipMob($parent, $cnt);
              } else { 
                  krds_tooltip.tooltipPc($cnt);
              }
              window.addEventListener('resize', () => { 
                  if (winSize === 'mob') {
                      krds_tooltip.tooltipMob($cnt);
                  } else { 
                      krds_tooltip.tooltipPc($cnt);
                  }
              });
          },
          tooltipMob: ($parent, $cnt) => {
              const _offsetL = $parent.offsetLeft - 16;
              const _width = document.body.clientWidth;
              const _offsetR = _width - ($parent.clientWidth + _offsetL) - 32;
              if ($cnt) { 
                  $cnt.style.left = `-${_offsetL}px`;
                  $cnt.style.right = `-${_offsetR}px`;
              }
          },
          tooltipPc: ($cnt) => { 
              $cnt.style.left = '';
              $cnt.style.right = '';
          },
      }
      
      /* ** 도움말 ** */
      const helperArea = document.querySelectorAll('.helper-area');
      const helperBox = {
      	init: () => {
      		if (helperArea.length > 0) {  //해당 클래스 존재할떄만 실행
      			setTimeout(() => {
      				helperBox.paddingSet();
      			},50);
      			setTimeout(() => {
      				helperBox.heightSet();
      			},100);
      		}
      	},
      	paddingSet: () => { //영역 세팅
      		const bnH = document.querySelector('#header-top').offsetHeight;
      		const headerH = document.querySelector('#header').offsetHeight;
      
      		const defaultPadding = bnH + headerH;
      		const bnHiddgnPadding = headerH;
      
      		const $wrap = document.querySelector('#wrap');
      		const $expandBtn = document.querySelector('.btn-helper.expand');
      		const $expandBox = document.querySelector('.helper-wrap');
      
      		const $collapseBtn = document.querySelector('.btn-helper.fold');
      		if (document.body.classList.contains('bn-hidden')) { //top banner 안보임
      			if ($wrap.classList.contains('scroll-down')) { //header영역 안보임
      				$expandBtn.style.marginTop = '0';
      				if (winSize == 'pc') {
      					$expandBox.style.paddingTop = '0';
      					$collapseBtn.style.marginTop = '0';
      				} else {
      					$expandBox.removeAttribute('style');
      					$collapseBtn.removeAttribute('style');
      				}
      			} else { //header영역 보임
      				$expandBtn.style.marginTop = bnHiddgnPadding + 'px';
      				if (winSize == 'pc') {
      					$expandBox.style.paddingTop = bnHiddgnPadding + 'px';
      					$collapseBtn.style.marginTop = bnHiddgnPadding + 'px';
      				} else {
      					$expandBox.style.paddingTop = '0';
      					$collapseBtn.removeAttribute('style');
      				}
      			}
      		} else { //top banner 보임
      			$expandBtn.style.marginTop = defaultPadding + 'px';
      			if (winSize == 'pc') {
      				$expandBox.style.paddingTop = defaultPadding + 'px';
      				$collapseBtn.style.marginTop = defaultPadding + 'px';
      			} else {
      				$expandBox.removeAttribute('style');
      				$collapseBtn.removeAttribute('style');
      			}
      		}
      
      	},
      	trigger: () => { //도움말열기 버튼에 추가한 class 삭제
      		const btnExec = document.querySelectorAll('.btn-help-exec');
      		if (helperArea.length > 0) {
      			btnExec.forEach(e => {
      				e.classList.remove('btn-help-clicked');
      			});
      		}
      	},
      	expand: () => { //도움말버튼 클릭 시 실행
      		const btnExec = document.querySelectorAll('.btn-help-exec');
      		const target = document.querySelector('.helper-wrap');
      		if (helperArea.length > 0) {
      			btnExec.forEach(e => {
      				e.addEventListener('click', () => {
      					helperBox.open();
      					helperBox.trigger();
      					e.classList.add('btn-help-clicked');
      					setTimeout(() => {
      						target.focus();
      					}, 50);
      				});
      			});
      		}
      
      	},
      	collapse: () => { //도움말 접어두기 버튼 클릭 시 실행
      		const btn = document.querySelector('.btn-helper.fold');
      
      		if (helperArea.length > 0) {
      			btn.addEventListener('click', () => {
      				if (winSize == 'mob') {
      					document.body.classList.remove('scroll-no');
      				}
      				helperBox.close();
      			});
      		}
      	},
      	open: () => { //도움말 열기
      		if (helperArea.length > 0) {  //해당 클래스 존재할떄만 실행
      			const target = document.querySelector('.helper-wrap');
      			const inner = document.querySelector('#container > .inner');
      			const $header = document.querySelector("#header .head-body > .inner");
      			const $container = document.querySelector("#container");
      			const _width = document.body.clientWidth;
      			if (winSize == 'mob') {
      				document.body.classList.add('scroll-no');
      			}
      			target.setAttribute('aria-expanded', 'true');
      			target.setAttribute('tabindex', '0');
      			document.querySelector('.helper-area').classList.add('expand');
      
      			if (inner.classList.contains('flexible')) { // 화면 사이즈 줄어들면 영역도 줄어들게
      				inner.classList.remove('folded');
      				$container.classList.remove('help-close');
      				$container.classList.add("help-open");
      				const _headerL = $header.offsetLeft;
      				if( _width > 1024 && _width < 1900  ){
      					$container.classList.remove("help-open");
      					$container.classList.add("help-open");
      					$container.style.paddingRight="";
      					$container.style.paddingLeft=`${_headerL+26}px`;
      				}
      
      				helperBox.resize($header, $container);
      			}
      		}
      	},
      	close: () => { //도움말 접기
      		const $header = document.querySelector("#header .head-body > .inner");
      		const $container = document.querySelector('#container');
      		const target = document.querySelector('.helper-wrap');
      		const inner = document.querySelector('#container > .inner');
      		const trigger = document.querySelectorAll('.btn-help-clicked');
      		const _width = document.body.clientWidth;
      		target.setAttribute('aria-expanded', 'false');
      		target.removeAttribute('tabindex');
      		document.querySelector('.helper-area').classList.remove('expand');
      
      		if (trigger.length > 0) { //버튼 클릭으로 도움말 펼친경우 클릭한 버튼으로 포커스
      			trigger[0].focus();
      		}
      
      		if (inner.classList.contains('flexible')) { // 도움말 닫히면 컨텐츠 영역 늘리기
      			inner.classList.add('folded');
      			$container.classList.add("help-close");
      			$container.classList.remove("help-open");
      			$container.style.paddingLeft=``;
      			if ($container.classList.contains('help-close')) {
      				$container.style.paddingLight=``;
      				$container.style.paddingRight=``;
      			} else if (_width > 1900 || _width <= 1024 ) {
      				$container.classList.remove("help-open");
      				$container.classList.remove("help-close");
      			}
      			helperBox.resize($header, $container);
      		}
      	},
      	resize: ($header, $container) => {
      		window.addEventListener("resize", () => {
      			const _headerL = $header.offsetLeft;
      			const _width = document.body.clientWidth;
      			if ( _width > 1024 && _width < 1900) {
      				$container.style.paddingRight="";
      				if($container.classList.contains("help-open")) {
      					$container.style.paddingLeft=`${_headerL+26}px`;
      				}else {
      					$container.style.paddingLeft=``;
      				}
      			} else if ( _width <= 1024 ) {
      				$container.style.paddingLeft="";
      				$container.style.paddingRight="";
      			} else {
      				$container.style.paddingLeft= "";
      			}
      		});
      	},
      	heightSet: () => {
      		const $helperArea = document.querySelector('.helper-area');
      		const $expandBox = document.querySelector('.helper-wrap');
      		const $contsArea = document.querySelector('.helper-conts-area');
      		const helperTitH = document.querySelector('.helper-tit').offsetHeight;
      
      		const contsPt = parseInt(getComputedStyle($expandBox).paddingTop);
      		const contsAreaH = window.innerHeight - helperTitH - contsPt;
      
      		$contsArea.style.height = contsAreaH + 'px';
      
      		if (winSize == 'mob') {
      			if ($helperArea.classList.contains('expand')) {
      				document.body.classList.add('scroll-no');
      			}
      		} else {
      			document.body.classList.remove('scroll-no');
      		}
      
      	}
      }
      
      /* ** 영역 높이 확장 축소 ** */
      function collapseBox() {
      	const box = document.querySelectorAll('.conts-expand-area');
      	box.forEach(e => {
      		const btn = e.querySelector('.btn-conts-expand');
      		if (btn != null) {
      			btn.addEventListener('click', () => {
      				e.classList.toggle('active');
      			});
      		}
      	});
      }
      
      /* ** 박스형 체크박스 상태에 따른 디자인 변경 ** */
      function chkBox() {
      	const box = document.querySelectorAll('.chk-group-wrap');
      	box.forEach(e => {
      		const boxList = e.querySelectorAll('li');
      		boxList.forEach(ele => {
      			ele.removeAttribute('class');
      			const thisList = ele.closest('li');
      			const checkbox = ele.querySelector('input[type=checkbox]');
      			if (checkbox != null) {
      				const is_disabled = checkbox.disabled;
      				let is_checked = checkbox.checked;
      
      				if (is_disabled == true) {
      					thisList.classList.add('disabled');
      				}
      				else {
      					if (is_checked == true) {
      						thisList.classList.add('checked');
      					}
      				}
      
      				checkbox.addEventListener('click', () => {
      					if (is_checked == true) {
      						thisList.classList.remove('checked');
      						is_checked = false;
      					} else {
      						thisList.classList.add('checked');
      						is_checked = true;
      					}
      				});
      			}
      
      			const rdo = ele.querySelector('input[type=radio]');
      			if (rdo != null) {
      				const is_disabled = rdo.disabled;
      				let is_checked = rdo.checked;
      
      				if (is_disabled == true) {
      					thisList.classList.add('disabled');
      				}
      				else {
      					if (is_checked == true) {
      						thisList.classList.add('checked');
      					}
      				}
      
      				rdo.addEventListener('click', (e) => {
      					const rdoGroup = rdo.closest('.chk-group-wrap');
      					const rdoLi = rdoGroup.querySelectorAll('li');
      					let is_checked2 = e.checked;
      					rdoLi.forEach(ele => {
      						ele.classList.remove('checked');
      						is_checked2 = false;
      					});
      					if (is_checked2 == true) {
      						thisList.classList.remove('checked');
      						is_checked2 = false;
      					} else {
      						thisList.classList.add('checked');
      						is_checked2 = true;
      					}
      				});
      			}
      
      		});
      	});
      }
      
      /* ** 스크롤 값 체크 ** */
      let scrollY = window.scrollY;
      let scrollH = document.body.scrollHeight;
      function scrollVal() {
      	scrollY = window.scrollY;
      	scrollH = document.body.scrollHeight;
      }
      
      /* ** 스크롤 네비게이션 ** */
      const winHeight = window.innerHeight;
      const quickIndicators = document.querySelectorAll('.quick-list');
      
      const quickNav = {
      	init: () => {
      		if (quickIndicators.length > 0) { //해당 클래스 존재할떄만 실행
      			quickNav.linkNav();
      		}
      	},
      	reset: () => { //초기화
      		quickIndicators.forEach(e => {
      			const locationList = e.querySelectorAll('a');
      			locationList.forEach(ele => {
      				ele.classList.remove('active');
      			});
      		});
      	},
      	linkNav: () => { //퀵 네비게이션 클릭 시 스크롤 이동
      		quickIndicators.forEach(e => {
      			const locationList = e.querySelectorAll('a');
      			locationList.forEach(ele => {
      				const target = document.querySelector(ele.getAttribute('href'));
      				const offsetY = target.getBoundingClientRect().top + scrollY;
      
      				ele.addEventListener('click', (ev) => {
      					ev.preventDefault();
      
      					window.scrollTo({
      						left: 0,
      						top: offsetY,
      						behavior: 'smooth',
      					});
      				});
      			});
      		});
      	},
      	navHighlight: () => { //페이지 스크롤 시 퀵 네비게이션 해당메뉴 active
      		if (quickIndicators.length > 0) {
      			const sectionArea = document.querySelectorAll('.section-link');
      			const topHeight = Math.ceil(winHeight / 5);
      			const firstSecTop = document.querySelectorAll('.scroll-check .section-link')[0].offsetTop;
      			sectionArea.forEach(current => {
      				const sectionHeight = current.offsetHeight;
      				const sectionTop = current.offsetTop - topHeight;
      				const sectionId = current.getAttribute("id");
      				if (scrollY <= firstSecTop) { //스크롤이 첫번째 섹션보다 위에 있으면 맨 위 네비 active
      					document.querySelector(".conts-area > .quick-nav-area .quick-list li:first-of-type a").classList.add("active");
      				}
      				else if (scrollY + winHeight >= scrollH) { //스크롤이 맨 하단에 있으면 맨 아래 네비 active
      					quickNav.reset();
      					document.querySelector(".conts-area > .quick-nav-area .quick-list li:last-of-type a").classList.add("active");
      				}
      				else {
      					if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { //스크롤이 해당 섹션
      						document.querySelector(".conts-area > .quick-nav-area a[href*=" + sectionId + "]").classList.add("active");
      					} else {
      						document.querySelector(".conts-area > .quick-nav-area a[href*=" + sectionId + "]").classList.remove("active");
      					}
      				}
      			});
      		}
      	},
      }
      
      /* ** 스킵네비게이션 클릭 시 scroll 맨 위로 ** */
      function goTop() {
      	const $skip = document.querySelector('#skip-nav');
      	$skip.addEventListener('click', () => {
      		setTimeout(() => {
      			window.scrollTo({
      				left: 0,
      				top: 0,
      				behavior: 'smooth',
      			});
      		}, 300);
      	});
      }
      
      window.addEventListener("DOMContentLoaded", () => {
      	layerTab();
      	kds_datepicker.init();
      	kds_accordion.init();
          kds_modal.init();
          krds_tooltip.init();
      
      	/* ** 윈도우 사이즈 체크 (반응형) ** */
      	winSizeSet();
      
      	/* ** 영역 높이 확장 축소 ** */
      	collapseBox();
      
      	/* ** 박스형 체크박스 상태에 따른 디자인 변경 ** */
      	chkBox();
      
      	/* ** 스크롤 네비게이션 ** */
      	quickNav.init();
      
      	/* ** 스킵네비게이션 클릭 시 scroll 맨 위로 ** */
      	if(document.querySelector('#skip-nav') !== null) goTop();
      
      	setTimeout(() => { //gnb footer 등 include영역으로 로딩시간이 필요한경우 settimeout에 넣어줌 (배포시 삭제필요)
      		/* ** 도움말 ** */
      		helperBox.init();
      		if (winSize == 'pc') {
      			helperBox.open();
      		}
      
      		//클릭이벤트는 로드시에만 실행시키기
      		helperBox.expand();
      		helperBox.collapse();
      	}, 200);
      });
      
      window.addEventListener('scroll', () => {
      	/* ** 스크롤 값 체크 ** */
      	scrollVal();
      
      	/* ** 스크롤 네비게이션 ** */
      	quickNav.navHighlight();
      
      	setTimeout(() => { //gnb footer 등 include영역으로 로딩시간이 필요한경우 settimeout에 넣어줌 (배포시 삭제필요)
      		/* ** 도움말 ** */
      		helperBox.init();
      	}, 200);
      });
      
      window.addEventListener('resize', () => {
      	/* ** 윈도우 사이즈 체크 (반응형) ** */
      	winSizeSet();
      
      	/* ** 도움말 ** */
      	helperBox.init();
      });
    })(),

  };
  
  // 전역 객체에 등록
  window.GovernmentScripts = GovernmentScripts;
  
  // DOM 로드 완료 시 자동 초기화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      GovernmentScripts.init();
    });
  } else {
    GovernmentScripts.init();
  }
  
})(window);