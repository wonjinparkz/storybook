import { useState, useEffect } from 'react';
import { ContentsPageProps, SidebarCategory, SidebarMenuItem } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';
import './styles/index.css';
import './styles/government-interactions.css';

const ContentsPage = ({
  sidebar,
  breadcrumb,
  page,
  content,
  currentUrl = '',
  className = ''
}: ContentsPageProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [expandedDepth3, setExpandedDepth3] = useState<Set<string>>(new Set());
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

    sidebar.menu.forEach((category, index) => {
      if (category.expanded || categoryHasActive(category)) {
        initialExpandedCategories.add(index);
      }

      category.items.forEach((item, itemIndex) => {
        if (item.subitems && itemHasActiveSubitem(item)) {
          initialExpandedDepth3.add(`${index}-${itemIndex}`);
        }
      });
    });

    setExpandedCategories(initialExpandedCategories);
    setExpandedDepth3(initialExpandedDepth3);
  }, [sidebar, currentUrl]);

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

  const handleDropdownItemClick = (url: string) => {
    setDropdownOpen(false);
    handleLinkClick(url);
  };

  return (
    <div id="container" className={className}>
      <div className="inner in-between">
        {/* 좌측 사이드바 메뉴 */}
        <nav className="left-menu">
          <div className="left-in">
            <h2 className="lnb-tit">{sidebar.title}</h2>
            <ul className="acco-list lnb-list" data-action="accordion">
              {sidebar.menu.map((category, categoryIndex) => {
                const isExpanded = expandedCategories.has(categoryIndex);
                const hasActive = categoryHasActive(category);

                return (
                  <li 
                    key={categoryIndex} 
                    className="li" 
                    data-has-active={hasActive ? 'true' : 'false'}
                  >
                    <div className="acco-head">
                      <h3 className="tit">{category.title}</h3>
                      <button 
                        type="button" 
                        className="btn btn-ico acco-btn"
                        aria-expanded={isExpanded}
                        onClick={() => toggleCategory(categoryIndex)}
                      >
                        <span className="sr-only">{isExpanded ? '접기' : '펼침'}</span>
                      </button>
                    </div>
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

        {/* 메인 콘텐츠 영역 */}
        <div className="contents">
          {/* 브레드크럼 */}
          <nav className="breadcrumb-wrap" aria-label="브레드크럼">
            <ol className="breadcrumb">
              {breadcrumb.map((crumb, index) => (
                <li key={index} className={index === 0 ? 'home' : ''}>
                  {crumb.url ? (
                    <a 
                      href={crumb.url} 
                      className="txt"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(crumb.url!);
                      }}
                    >
                      {crumb.text}
                    </a>
                  ) : (
                    <span className="txt">{crumb.text}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* 페이지 타이틀 영역 */}
          <div className="page-title-wrap" data-type="responsive">
            <h2 className="h-tit">{page.title}</h2>
            {page.dropdown && (
              <div className="krds-drop-wrap h-tit-drop">
                <button 
                  type="button" 
                  className="h-tit drop-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {page.dropdown.current}
                  <span className="sr-only">열기</span>
                </button>
                <div className={`drop-menu${dropdownOpen ? ' active' : ''}`}>
                  <div className="drop-in">
                    <ul className="drop-list">
                      {page.dropdown.items.map((dropItem, index) => (
                        <li key={index}>
                          <a 
                            href={dropItem.url} 
                            className="item-link"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDropdownItemClick(dropItem.url);
                            }}
                          >
                            {dropItem.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 콘텐츠 본문 */}
          <div className="conts-wrap">
            <div className="conts-wrap">
              <div className="conts-wrap">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 외부 클릭 시 드롭다운 닫기 */}
      {dropdownOpen && (
        <div 
          className="dropdown-overlay"
          onClick={() => setDropdownOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 5
          }}
        />
      )}
    </div>
  );
};

export default withGovernmentAssets(ContentsPage);