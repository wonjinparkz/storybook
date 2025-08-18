import { useState } from 'react';
import { TabContentsProps, Tab, TabItem } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';

// TabContents에 필요한 스타일들
import './styles/index.css';

const TabContents = ({
  title,
  tabs,
  moreLink,
  moreText = '더보기',
  className = ''
}: TabContentsProps) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    tabs.find(tab => tab.active)?.id || tabs[0]?.id || ''
  );

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  const handleMoreLinkClick = () => {
    if (moreLink && moreLink !== '#') {
      window.open(moreLink, '_self');
    }
  };

  const renderTabItem = (item: TabItem) => (
    <li key={item.id}>
      <a 
        href={item.url}
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(item.url);
        }}
      >
        <div className="d-card line d-row">
          {item.image && (
            <div className="im">
              <img 
                src={item.image} 
                alt={item.imageAlt || '썸네일 이미지'}
              />
            </div>
          )}
          <div className="in">
            <div className="text">
              <p className="c-tit">{item.title}</p>
              <p className="c-txt">{item.description}</p>
            </div>
            <p className="c-btn">
              <span className="btn sm btn-txt ico-more contents-btn-card">{item.buttonText}</span>
            </p>
          </div>
        </div>
      </a>
    </li>
  );

  const renderTabPanel = (tab: Tab) => {
    const isActive = tab.id === activeTabId;
    
    return (
      <section 
        key={tab.panelId}
        id={tab.panelId}
        role="tabpanel"
        aria-labelledby={tab.id}
        className={`tab-conts ${isActive ? 'active' : ''}`}
      >
        <h3 className="sr-only">{tab.label}</h3>
        {tab.items && tab.items.length > 0 ? (
          <ul className="news-list">
            {tab.items.map(renderTabItem)}
          </ul>
        ) : (
          <p>{tab.emptyMessage || `탭 ${tabs.findIndex(t => t.id === tab.id) + 1} 내용`}</p>
        )}
      </section>
    );
  };

  return (
    <div className={`main-sect ${className}`}>
      <div className="inner">
        <div className="main-tit-wrap">
          <h2 className="tit">{title}</h2>
        </div>

        {/* 탭 */}
        <div className="tab-area layer">
          {/* tab list */}
          <div className="tab line">
            <ul role="tablist">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <li 
                    key={tab.id}
                    id={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={tab.panelId}
                    className={isActive ? 'active' : ''}
                  >
                    <button 
                      type="button" 
                      className="btn-tab"
                      onClick={() => handleTabClick(tab.id)}
                    >
                      {tab.label}
                      {isActive && (
                        <i className="sr-only created">선택됨</i>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            {moreLink && (
              <a 
                href={moreLink} 
                className="btn sm btn-txt ico-plus contents-btn-tl"
                onClick={(e) => {
                  e.preventDefault();
                  handleMoreLinkClick();
                }}
              >
                {moreText}
              </a>
            )}
          </div>
          {/* //tab list */}

          {/* tab contents */}
          <div className="tab-conts-wrap">
            {tabs.map(renderTabPanel)}
          </div>
          {/* //tab contents */}
        </div>
        {/* //탭 */}
      </div>
    </div>
  );
};

export default withGovernmentAssets(TabContents);