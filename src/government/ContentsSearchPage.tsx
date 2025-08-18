import { useState, useEffect } from 'react';
import { ContentsPageProps } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';
import { initializeContentsListPageInteractions, ContentsListPageInteractions } from './scripts/contents-list-page-interactions';
import ContentsSidebar from './ContentsSidebar';
import './styles/index.css';
import './styles/government-interactions.css';
import './styles/contents-list-page.css';

const ContentsSearchPage = ({
  sidebar,
  breadcrumb,
  page,
  content,
  currentUrl = '',
  className = ''
}: ContentsPageProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [interactions, setInteractions] = useState<ContentsListPageInteractions | null>(null);

  // 컴포넌트 마운트 시 상호작용 초기화 및 언마운트 시 정리
  useEffect(() => {
    const pageInteractions = initializeContentsListPageInteractions();
    setInteractions(pageInteractions);
    
    return () => {
      pageInteractions.cleanup();
    };
  }, []);

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
        <ContentsSidebar
          title={sidebar.title}
          menu={sidebar.menu}
          currentUrl={currentUrl}
        />

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
              <div className="drop-wrap h-tit-drop">
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

export default withGovernmentAssets(ContentsSearchPage);