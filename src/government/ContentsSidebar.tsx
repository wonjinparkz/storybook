import { useState, useEffect } from 'react';
import { SidebarCategory, SidebarMenuItem } from './types';

// ContentsSidebar에 필요한 스타일들
import './styles/index.css';
import './styles/contents-page.css';
import './styles/government-interactions.css';

export interface ContentsSidebarProps {
  /** 사이드바 제목 */
  title: string;
  /** 메뉴 카테고리 목록 */
  menu: SidebarCategory[];
  /** 현재 페이지 URL (활성 메뉴 표시용) */
  currentUrl?: string;
  /** 추가 CSS 클래스 */
  className?: string;
}

const ContentsSidebar = ({
  title,
  menu,
  currentUrl = '',
  className = ''
}: ContentsSidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [expandedDepth3, setExpandedDepth3] = useState<Set<string>>(new Set());

  // 현재 URL과 매칭되는 메뉴 확인
  const isMenuActive = (url: string): boolean => {
    if (!currentUrl) return false;
    return currentUrl.includes(url) || currentUrl === url.replace(/^\/+|\/+$/g, '');
  };

  // 카테고리에 활성 메뉴가 있는지 확인
  const categoryHasActive = (category: SidebarCategory): boolean => {
    return category.items.some(item => {
      if (isMenuActive(item.url)) return true;
      if (item.subitems) {
        return item.subitems.some(subitem => isMenuActive(subitem.url));
      }
      return false;
    });
  };

  // 메뉴 아이템에 활성 서브메뉴가 있는지 확인
  const itemHasActiveSubitem = (item: SidebarMenuItem): boolean => {
    if (!item.subitems) return false;
    return item.subitems.some(subitem => isMenuActive(subitem.url));
  };

  // 초기 확장 상태 설정
  useEffect(() => {
    const initialExpandedCategories = new Set<number>();
    const initialExpandedDepth3 = new Set<string>();

    menu.forEach((category, index) => {
      if (category.expanded || categoryHasActive(category)) {
        initialExpandedCategories.add(index);
      }

      category.items.forEach((item, itemIndex) => {
        if (item.subitems && itemHasActiveSubitem(item)) {
          initialExpandedDepth3.add(`${index}-${itemIndex}`);
        }
      });
    });

    setExpandedCategories(prev => {
      // 이전 상태와 비교해서 다를 때만 업데이트
      const prevArray = Array.from(prev).sort();
      const newArray = Array.from(initialExpandedCategories).sort();
      if (JSON.stringify(prevArray) !== JSON.stringify(newArray)) {
        return initialExpandedCategories;
      }
      return prev;
    });

    setExpandedDepth3(prev => {
      // 이전 상태와 비교해서 다를 때만 업데이트
      const prevArray = Array.from(prev).sort();
      const newArray = Array.from(initialExpandedDepth3).sort();
      if (JSON.stringify(prevArray) !== JSON.stringify(newArray)) {
        return initialExpandedDepth3;
      }
      return prev;
    });
  }, [currentUrl]); // menu 의존성 제거하여 무한 루프 방지

  const toggleCategory = (categoryIndex: number) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryIndex)) {
        newSet.delete(categoryIndex);
      } else {
        newSet.add(categoryIndex);
      }
      return newSet;
    });
  };

  const toggleDepth3 = (key: string) => {
    setExpandedDepth3(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  return (
    <nav className={`left-menu ${className}`}>
      <div className="left-in">
        <h2 className="lnb-tit">{title}</h2>
        <ul className="acco-list lnb-list" data-action="accordion">
          {menu.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.has(categoryIndex);
            const hasActive = categoryHasActive(category);

            return (
              <li 
                key={categoryIndex} 
                className="li" 
                data-has-active={hasActive ? 'true' : 'false'}
              >
                <button 
                  type="button" 
                  className="acco-head acco-btn"
                  aria-expanded={isExpanded}
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  <h3 className="tit">{category.title}</h3>
                  <span className="sr-only">{isExpanded ? '접기' : '펼침'}</span>
                </button>
                <div 
                  className="acco-body transitions-enabled" 
                  style={{ display: isExpanded ? 'block' : 'none' }}
                >
                  <div className="acco-in">
                    <ul className="sub-ul">
                      {category.items.map((item, itemIndex) => {
                        const itemActive = isMenuActive(item.url);
                        const hasActiveSubitem = itemHasActiveSubitem(item);
                        const isActive = itemActive || hasActiveSubitem;
                        const depth3Key = `${categoryIndex}-${itemIndex}`;
                        const isDepth3Expanded = expandedDepth3.has(depth3Key);

                        return (
                          <li key={itemIndex}>
                            {item.subitems ? (
                              <div className="depth3-container">
                                <button 
                                  type="button" 
                                  className={`subm has-depth3${isActive ? ' active' : ''}`}
                                  aria-expanded={isDepth3Expanded}
                                  onClick={() => toggleDepth3(depth3Key)}
                                >
                                  <span className="subm-text">{item.title}</span>
                                  <span className="btn-ico depth3-toggle"></span>
                                </button>
                                <ul 
                                  className="depth3-ul"
                                  style={{ 
                                    display: isDepth3Expanded ? '' : 'none',
                                    maxHeight: isDepth3Expanded ? '500px' : '0',
                                    opacity: isDepth3Expanded ? '1' : '0'
                                  }}
                                >
                                  {item.subitems.map((subitem, subIndex) => {
                                    const subitemActive = isMenuActive(subitem.url);
                                    return (
                                      <li key={subIndex}>
                                        <a 
                                          href={subitem.url}
                                          className={`depth3-link${subitemActive ? ' active' : ''}`}
                                          aria-current={subitemActive ? 'page' : undefined}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(subitem.url);
                                          }}
                                        >
                                          {subitem.title}
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ) : (
                              <a 
                                href={item.url}
                                className={`subm${isActive ? ' active' : ''}`}
                                aria-current={isActive ? 'page' : undefined}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleLinkClick(item.url);
                                }}
                              >
                                {item.title}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default ContentsSidebar;