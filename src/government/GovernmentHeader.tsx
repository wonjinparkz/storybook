import { useState, useEffect } from 'react';
import { GovernmentHeaderProps } from './types';
import './styles/index.css';
import './dropdown-styles.css';

const GovernmentHeader = ({
  etcMenus,
  siteInfo,
  isLoggedIn,
  myGovMenu,
  menuStructure,
  submenuInteraction = 'hover'
}: GovernmentHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(isLoggedIn ? 'mGnb-myGov' : 'mGnb-anchor1');
  const [activeSubmenu, setActiveSubmenu] = useState<Record<string, string>>({});
  const [hoveredMainMenu, setHoveredMainMenu] = useState<number | null>(null);
  const [clickedMainMenu, setClickedMainMenu] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMyGovDropdownOpen, setIsMyGovDropdownOpen] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<Record<string, boolean>>({});

  // 각 메인 메뉴의 첫 번째 서브메뉴를 기본 활성화
  useEffect(() => {
    const initialActiveSubmenu: Record<string, string> = {};
    menuStructure.forEach((mainMenu, index) => {
      if (mainMenu.submenu && mainMenu.submenu.length > 0) {
        const firstInternalSubmenu = mainMenu.submenu.find(sub => sub.type === 'internal');
        if (firstInternalSubmenu) {
          initialActiveSubmenu[`menu-${index}`] = firstInternalSubmenu.id;
        }
      }
    });
    setActiveSubmenu(initialActiveSubmenu);
  }, [menuStructure]);

  // 활성화된 메뉴의 첫 번째 서브메뉴 자동 활성화
  useEffect(() => {
    const currentActiveMenu = submenuInteraction === 'click' ? clickedMainMenu : hoveredMainMenu;
    if (currentActiveMenu !== null) {
      const currentMenu = menuStructure[currentActiveMenu];
      if (currentMenu?.submenu && currentMenu.submenu.length > 0) {
        const firstInternalSubmenu = currentMenu.submenu.find(sub => sub.type === 'internal');
        if (firstInternalSubmenu) {
          setActiveSubmenu(prev => ({
            ...prev,
            [`menu-${currentActiveMenu}`]: firstInternalSubmenu.id
          }));
        }
      }
    }
  }, [hoveredMainMenu, clickedMainMenu, submenuInteraction, menuStructure]);

  // 모바일 메뉴 열림/닫힘 시 body 스크롤 제어
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleSubmenuClick = (menuIndex: number, submenuId: string) => {
    setActiveSubmenu(prev => ({
      ...prev,
      [`menu-${menuIndex}`]: submenuId
    }));
  };

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const toggleMyGovDropdown = () => {
    setIsMyGovDropdownOpen(!isMyGovDropdownOpen);
  };

  const handleMainMenuClick = (menuIndex: number, event: React.MouseEvent) => {
    if (submenuInteraction === 'click') {
      event.preventDefault();
      setClickedMainMenu(clickedMainMenu === menuIndex ? null : menuIndex);
    }
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setIsMyGovDropdownOpen(false);
    setHoveredMainMenu(null);
    setClickedMainMenu(null);
  };

  const toggleMobileSubmenu = (submenuId: string) => {
    setOpenMobileSubmenus(prev => ({
      ...prev,
      [submenuId]: !prev[submenuId]
    }));
  };

  const openTotalSearch = () => {
    // 통합검색 팝업 열기 로직
    console.log('통합검색 열기');
  };

  const extendSession = () => {
    // 세션 연장 로직
    console.log('세션 연장');
  };

  const logout = () => {
    // 로그아웃 로직
    console.log('로그아웃');
  };

  // 현재 활성화된 메인 메뉴 결정
  const activeMainMenu = submenuInteraction === 'click' ? clickedMainMenu : hoveredMainMenu;
  
  const isAnyMenuOpen = activeMainMenu !== null || openDropdown !== null || isMyGovDropdownOpen;

  return (
    <>
      {/* 오버레이 배경 */}
      {isAnyMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={closeAllDropdowns}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: '998',
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
      
      <header id="header" style={{ position: 'relative', zIndex: 999 }}>
      {/* 헤더 컨텐츠 영역 */}
      <div className="header-in">
        {/* 헤더 상단 기타메뉴 */}
        <div className="head-body">
          <div className="inner">
            <div className="head-etc">
              <ul className="etc-ul">
                {/* 상단 링크 */}
                {etcMenus.topLinks.map((link, index) => (
                  <li key={index} className="li">
                    <a 
                      href={link.url} 
                      className={`btn btn-txt ${link.icon || ''} xsm`}
                      {...(link.target && { target: link.target })}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
                
                {/* 드롭다운 메뉴들 */}
                {etcMenus.dropdowns.map((dropdown, index) => (
                  <li key={index} className="li">
                    <div className={`drop-wrap ${dropdown.class || ''} ${openDropdown === `dropdown-${index}` ? 'active' : ''}`}>
                      <button 
                        type="button" 
                        className="btn btn-txt ico-arr-down xsm drop-btn"
                        onClick={() => toggleDropdown(`dropdown-${index}`)}
                      >
                        {dropdown.title}
                      </button>
                      <div className={`drop-menu ${openDropdown === `dropdown-${index}` ? 'show' : ''}`}>
                        <div className="drop-in">
                          <ul className="drop-list">
                            {dropdown.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a 
                                  href={item.url}
                                  className={`item-link ${item.class || ''} ${item.icon || ''}`}
                                  {...(item.target && { target: item.target })}
                                >
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="head-in">
              <h1 className="logo">
                <a href={siteInfo.homepage_url}>
                  {siteInfo.title}
                  <img 
                    src={siteInfo.slogan_image} 
                    className="logo-slogan"
                    alt={siteInfo.slogan} 
                    style={{ paddingLeft: '30px' }}
                  />
                </a>
              </h1>
              
              <div className="right">
                <button 
                  type="button" 
                  className="btn-navi sch" 
                  title="통합검색 레이어"
                  onClick={openTotalSearch}
                >
                  통합검색
                </button>
                
                {!isLoggedIn ? (
                  <>
                    <a href="#" className="btn-navi login">로그인</a>
                    <button type="button" className="btn-navi join">회원가입</button>
                  </>
                ) : (
                  <div className={`drop-wrap my-drop ${isMyGovDropdownOpen ? 'active' : ''}`}>
                    <button 
                      type="button" 
                      className="btn-navi my drop-btn"
                      onClick={toggleMyGovDropdown}
                    >
                      나의 GOV
                    </button>
                    <div className={`drop-menu ${isMyGovDropdownOpen ? 'show' : ''}`}>
                      <div className="drop-in">
                        <div className="drop-top-info">
                          <p className="my-name">{myGovMenu?.user_name}님</p>
                          <dl className="my-time">
                            <dt>로그아웃까지 남은 시간</dt>
                            <dd>
                              <span className="time">12:00</span>
                              <button type="button" className="btn sm btn-txt" onClick={extendSession}>
                                시간 연장
                              </button>
                            </dd>
                          </dl>
                        </div>
                        <ul className="drop-list">
                          {myGovMenu?.items.map((item, index) => (
                            <li key={index}>
                              <a href={item.url} className="item-link">{item.text}</a>
                            </li>
                          ))}
                        </ul>
                        <div className="drop-btm-btn">
                          <button 
                            type="button" 
                            className="btn sm btn-txt ico-log ico-before"
                            onClick={logout}
                          >
                            로그아웃
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <button 
                  type="button" 
                  className="btn-navi all" 
                  id="m-gnb-open"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  전체메뉴
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* //헤더 상단 기타메뉴 */}
        
        {/* 웹 : 메뉴 영역 */}
        <nav className="head-gnb">
          <div className="inner">
            <ul className="gnb">
              {menuStructure.map((mainMenu, index) => (
                <li 
                  key={index} 
                  className="li"
                  {...(submenuInteraction === 'hover' && {
                    onMouseEnter: () => setHoveredMainMenu(index),
                    onMouseLeave: () => setHoveredMainMenu(null)
                  })}
                >
                  <a 
                    href={mainMenu.url} 
                    className="mn"
                    onClick={(e) => handleMainMenuClick(index, e)}
                  >
                    {mainMenu.title}
                  </a>
                  {mainMenu.submenu && mainMenu.submenu.length > 0 && (
                    <div className={`w-gnb-wrap ${activeMainMenu === index ? 'is-open' : ''}`}>
                      <div className="inner">
                        <div className="w-gnb-menu">
                          <div className="menu-wrap">
                            <ul className="ul">
                              {mainMenu.submenu.map((subMenu, subIndex) => (
                                <li key={subIndex}>
                                  {subMenu.type === 'external' ? (
                                    <a href={subMenu.url} className="sm ico-go" target="_blank" rel="noopener noreferrer">
                                      {subMenu.title}
                                    </a>
                                  ) : (
                                    <button 
                                      type="button" 
                                      className={`sm ${activeSubmenu[`menu-${index}`] === subMenu.id ? 'active' : ''}`}
                                      data-id={subMenu.id}
                                      onClick={() => handleSubmenuClick(index, subMenu.id)}
                                    >
                                      {subMenu.title}
                                    </button>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="submenu-wrap">
                            {mainMenu.submenu.map((subMenu) => {
                              if (subMenu.type === 'internal' && subMenu.items && subMenu.items.length > 0) {
                                return (
                                  <div 
                                    key={subMenu.id}
                                    className={`submenu-in ${subMenu.items.length > 6 ? 'between' : ''}`}
                                    id={subMenu.id}
                                    style={{
                                      display: (activeMainMenu === index && activeSubmenu[`menu-${index}`] === subMenu.id) ? 'block' : 'none'
                                    }}
                                  >
                                    <div className="sub-in">
                                      <h3 className="sub-tit">
                                        <a href={subMenu.url} className="btn btn-txt ico-arr lg">
                                          {subMenu.title}
                                        </a>
                                      </h3>
                                      <ul className="sub-ul">
                                        {subMenu.items.map((item, itemIndex) => (
                                          <li key={itemIndex}>
                                            <a href={item.url}>{item.title}</a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    {subMenu.banner && (
                                      <div className="sub-ban">
                                        <span className={`badge ${subMenu.banner.badge_class}`}>
                                          {subMenu.banner.badge}
                                        </span>
                                        <a href={subMenu.banner.url} className="btn btn-txt ico-arr sm">
                                          {subMenu.banner.text}
                                        </a>
                                      </div>
                                    )}
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* //웹 : 메뉴 영역 */}
      </div>
      {/* //헤더 컨텐츠 영역 */}
      
      {/* 모바일 : 전체메뉴 */}
      <div 
        id="m-gnb" 
        className={`m-gnb-wrap ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={(e) => {
          // 배경(오버레이) 클릭 시 메뉴 닫기
          if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div className="m-gnb-in">
          <div className="m-gnb-head">
            <div className="m-gnb-top-etc">
              <ul className="etc-ul">
                <li><button type="button" className="btn btn-txt xsm">화면크기</button></li>
                <li><button type="button" className="btn btn-txt xsm">Language</button></li>
              </ul>
              <button 
                type="button" 
                className="btn btn-ico ico-close"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">전체메뉴 닫기</span>
              </button>
            </div>
            
            {!isLoggedIn ? (
              <div className="m-gnb-login">
                <a href="#" className="btn-navi navi-row login">로그인을 해주세요.</a>
              </div>
            ) : (
              <>
                <div className="m-gnb-login">
                  <a href="#" className="btn-navi navi-row login">{myGovMenu?.user_name}님</a>
                </div>
                <div className="etc-menu">
                  {myGovMenu?.items.map((item, index) => (
                    <a key={index} href={item.url} className="link">{item.text}</a>
                  ))}
                </div>
              </>
            )}
            
            <div className="etc-sch">
              <div className="sch-input">
                <input 
                  type="text" 
                  className="form-control md" 
                  placeholder="찾고자 하는 메뉴명을 입력해 주세요"
                />
                <button type="button" className="btn btn-ico ico-sch">
                  <span className="sr-only">검색</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="m-gnb-body">
            <div className="m-gnb-menu">
              <div className="menu-wrap">
                <ul className="ul">
                  {isLoggedIn && (
                    <li>
                      <a 
                        href="#mGnb-myGov" 
                        className={`mn ${activeMobileMenu === 'mGnb-myGov' ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveMobileMenu('mGnb-myGov');
                        }}
                      >
                        MyGOV
                      </a>
                    </li>
                  )}
                  {menuStructure.map((mainMenu, index) => (
                    <li key={index}>
                      <a 
                        href={`#mGnb-anchor${index + 1}`}
                        className={`mn ${activeMobileMenu === `mGnb-anchor${index + 1}` ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveMobileMenu(`mGnb-anchor${index + 1}`);
                        }}
                      >
                        {mainMenu.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="submenu-wrap">
                {/* MyGOV 섹션 - 로그인 상태일 때만 표시 */}
                {isLoggedIn && (
                  <div 
                    className="dl" 
                    id="mGnb-myGov"
                    style={{ display: activeMobileMenu === 'mGnb-myGov' ? 'block' : 'none' }}
                  >
                    <dl>
                      <dt className="dt">MyGOV</dt>
                      {myGovMenu?.items.map((item, index) => (
                        <dd key={index} className="dd">
                          <a href={item.url} className="sm">{item.text}</a>
                        </dd>
                      ))}
                    </dl>
                  </div>
                )}
                
                {/* 메인 메뉴 섹션들 */}
                {menuStructure.map((mainMenu, index) => (
                  <div 
                    key={index}
                    className="dl" 
                    id={`mGnb-anchor${index + 1}`}
                    style={{ display: activeMobileMenu === `mGnb-anchor${index + 1}` ? 'block' : 'none' }}
                  >
                    <dl>
                      <dt className="dt">{mainMenu.title}</dt>
                      {mainMenu.submenu.map((subMenu, subIndex) => {
                        if (subMenu.type === 'internal') {
                          return (
                            <dd key={subIndex} className="dd">
                              {subMenu.items && subMenu.items.length > 0 ? (
                                <>
                                  {/* 3depth가 있는 경우 토글 버튼으로 */}
                                  <button 
                                    type="button" 
                                    className={`sm mobile-toggle-btn ${openMobileSubmenus[`mobile-sub-${index}-${subIndex}`] ? 'active' : ''}`}
                                    onClick={() => toggleMobileSubmenu(`mobile-sub-${index}-${subIndex}`)}
                                  >
                                    <span className="toggle-text">{subMenu.title}</span>
                                    <span className="toggle-icon"></span>
                                  </button>
                                  <ul 
                                    className="sub-ul mobile-sub-menu" 
                                    id={`mobile-sub-${index}-${subIndex}`} 
                                    style={{ display: openMobileSubmenus[`mobile-sub-${index}-${subIndex}`] ? 'block' : 'none' }}
                                  >
                                    {subMenu.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <a href={item.url} className="subm">{item.title}</a>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              ) : (
                                /* 3depth가 없는 경우 일반 링크 */
                                <a href={subMenu.url} className="sm">{subMenu.title}</a>
                              )}
                            </dd>
                          );
                        } else if (subMenu.type === 'external') {
                          return (
                            <dd key={subIndex} className="dd">
                              <a href={subMenu.url} className="sm ico-go" target="_blank" rel="noopener noreferrer">
                                {subMenu.title}
                              </a>
                            </dd>
                          );
                        }
                        return null;
                      })}
                    </dl>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="m-gnb-body-btm">
              <a href="#" className="btn btn-txt sm">인증 센터</a>
              <a href="#" className="btn btn-txt sm ico-go">어린이 정부포털</a>
            </div>
          </div>
        </div>
      </div>
      {/* //모바일 : 전체메뉴 */}
      </header>
    </>
  );
};

export default GovernmentHeader;