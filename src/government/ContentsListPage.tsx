import { useState, useEffect } from 'react';
import { ContentsListPageProps, ListItem, SortOption } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';
import { initializeContentsListPageInteractions, ContentsListPageInteractions } from './scripts/contents-list-page-interactions';
import './styles/index.css';
import './styles/government-interactions.css';
import './styles/contents-list-page.css';

const ContentsListPage = ({
  breadcrumb,
  page,
  description,
  controls,
  items,
  pagination,
  currentUrl = '',
  className = ''
}: ContentsListPageProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [interactions, setInteractions] = useState<ContentsListPageInteractions | null>(null);
  const [activeSortOption, setActiveSortOption] = useState<string>(
    controls?.sortOptions.find(opt => opt.active)?.value || ''
  );
  const [currentPageSize, setCurrentPageSize] = useState<number>(
    controls?.pageSize || 10
  );

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

  const handleSortChange = (sortValue: string) => {
    setActiveSortOption(sortValue);
    console.log('Sort changed to:', sortValue);
  };

  const handlePageSizeChange = (size: number) => {
    setCurrentPageSize(size);
    console.log('Page size changed to:', size);
  };


  const renderListItem = (item: ListItem) => (
    <li key={item.id} className="li">
      <p className="info-top">
        {item.meta.badge && (
          <span className={`badge ${item.meta.badge.className || ''}`}>
            {item.meta.badge.text}
          </span>
        )}
        <span className="i-date">{item.meta.date}</span>
      </p>
      
      <div className="info-body">
        <a href={item.content.url} onClick={(e) => {
          e.preventDefault();
          handleLinkClick(item.content.url);
        }}>
          <p className="tit w-hide">
            {item.content.title}
          </p>
          <div className="in">
            <div className="text">
              <p className="tit m-hide">
                {item.content.title}
              </p>
              <p className="txt">
                {item.content.description}
              </p>
            </div>
          </div>
        </a>
      </div>
      
      <div className="info-btm">
        <div>
          {item.meta.url ? (
            <a href={item.meta.url} target="_blank" rel="noopener noreferrer" className="url-link">
              {item.meta.url}
            </a>
          ) : (
            <span className="url-link">
              {item.meta.views ? `조회 ${item.meta.views.toLocaleString()}` : ''}
              {item.meta.views && item.meta.attachments ? ' | ' : ''}
              {item.meta.attachments ? `첨부 ${item.meta.attachments}` : ''}
            </span>
          )}
        </div>
        <div>
          <div className="btn-area">
            <button 
              type="button" 
              className="btn sm btn-txt ico-go"
              onClick={() => handleLinkClick(item.content.url)}
            >
              바로가기
            </button>
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <div id="container" className={className}>
      <div className="inner in-between">
        {/* 좌측 빈 공간 */}
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

          {/* 페이지 설명 */}
          {description && (
            <div className="conts-desc">
              <p>{description}</p>
            </div>
          )}

          {/* 콘텐츠 리스트 */}
          <div className="conts-wrap">
            <div className="list-wrap">
              {/* 검색 정보 및 정렬 컨트롤 */}
              {controls && (
                <div className="search-list-top type2">
                  {controls.searchInfo && (
                    <div className="sch-info" role="region" aria-live="polite">
                      총 <span className="keyword">{controls.searchInfo.totalResults.toLocaleString()}</span>개
                    </div>
                  )}
                  
                  <ul className="sch-sort">
                    {/* 페이지 크기 선택 */}
                    {controls.pageSizeOptions && (
                      <li className="li1 m-hide">
                        <strong className="sort-label">
                          <label htmlFor="search_result_count">목록 표시 개수</label>
                        </strong>
                        <select 
                          className="sort-select" 
                          id="search_result_count"
                          value={currentPageSize}
                          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                        >
                          {controls.pageSizeOptions.map(size => (
                            <option key={size} value={size}>{size}개</option>
                          ))}
                        </select>
                      </li>
                    )}
                    
                    {/* 정렬 옵션 */}
                    <li className="li2">
                      <strong className="sort-label">
                        <label htmlFor="sort">정렬기준</label>
                      </strong>
                      <div className="w-sort-btn">
                        {controls.sortOptions.map((option, index) => (
                          <button 
                            key={option.value}
                            type="button" 
                            className={activeSortOption === option.value ? 'active' : ''}
                            onClick={() => handleSortChange(option.value)}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      <div className="m-sort-btn">
                        <button type="button" className="btn btn-txt ico-filter">
                          <span className="span">필터</span>
                          <span className="num">{controls.sortOptions.length}</span>
                        </button>
                        <select 
                          className="sort-select" 
                          id="sort"
                          value={activeSortOption}
                          onChange={(e) => handleSortChange(e.target.value)}
                        >
                          {controls.sortOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              
              {/* 리스트 아이템들 */}
              <ul className="info-list total-search-list">
                {items.map(renderListItem)}
              </ul>
              
              {/* 페이지네이션 */}
              {pagination && (
                <div className="pagination-wrap">
                  <nav className="pagination" aria-label="페이지 네비게이션">
                    <a 
                      href="#" 
                      className={`page-btn prev ${!pagination.hasPrev ? 'disabled' : ''}`}
                      aria-label="이전 페이지"
                      onClick={(e) => e.preventDefault()}
                    >
                      이전
                    </a>
                    <div className="page-numbers">
                      {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                        const pageNum = Math.max(1, pagination.currentPage - 2) + i;
                        if (pageNum > pagination.totalPages) return null;
                        
                        return (
                          <a 
                            key={pageNum}
                            href="#" 
                            className={`page-number ${pageNum === pagination.currentPage ? 'active' : ''}`}
                            aria-current={pageNum === pagination.currentPage ? 'page' : undefined}
                            onClick={(e) => e.preventDefault()}
                          >
                            {pageNum}
                          </a>
                        );
                      })}
                      {pagination.totalPages > 5 && pagination.currentPage < pagination.totalPages - 2 && (
                        <>
                          <span className="page-dots">...</span>
                          <a 
                            href="#" 
                            className="page-number"
                            onClick={(e) => e.preventDefault()}
                          >
                            {pagination.totalPages}
                          </a>
                        </>
                      )}
                    </div>
                    <a 
                      href="#" 
                      className={`page-btn next ${!pagination.hasNext ? 'disabled' : ''}`}
                      aria-label="다음 페이지"
                      onClick={(e) => e.preventDefault()}
                    >
                      다음
                    </a>
                  </nav>
                </div>
              )}
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

export default withGovernmentAssets(ContentsListPage);