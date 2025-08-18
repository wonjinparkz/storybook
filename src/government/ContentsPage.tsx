import { useState } from 'react';
import { ContentsPageProps } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';
import './styles/index.css';

const ContentsPage = ({
  breadcrumb,
  page,
  content,
  className = ''
}: ContentsPageProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        {/* 좌측 공백 영역 (ContentsListPage와 동일) */}
        <div className="left-space" style={{ width: '29.6rem' }}></div>

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

          {/* 페이지 헤더 영역 */}
          <div className="page-title-wrap" data-type="responsive">
            <h1 className="h-tit">{page.title}</h1>
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


          {/* 콘텐츠 본문 컨테이너 */}
          <div className="content-container">
            <div className="content-body conts-wrap" dangerouslySetInnerHTML={{ __html: content }} />
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