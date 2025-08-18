import { CardContentsProps, CardContentsCard } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';

// CardContents에 필요한 스타일들
import './styles/index.css';

const CardContents = ({
  title,
  cards,
  moreLink,
  moreText = '더보기',
  desktopLimit = 3,
  className = ''
}: CardContentsProps) => {

  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  const displayCards = cards.slice(0, desktopLimit);

  const renderCard = (card: CardContentsCard) => (
    <li key={card.id}>
      <a 
        href={card.url}
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(card.url);
        }}
      >
        <div className="d-card line">
          <div className={`im ${card.imageClass}`}>
            {card.imageUrl && (
              <img 
                src={card.imageUrl} 
                alt={card.imageAlt || card.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
          <div className="in">
            <div className="text">
              {card.badge && (
                <p className="c-badge">
                  <span className="badge">{card.badge}</span>
                </p>
              )}
              <p className="c-tit">{card.title}</p>
              <p className="c-txt">{card.description}</p>
            </div>
            <p className="c-btn">
              <span className="btn sm btn-txt ico-more">{card.buttonText}</span>
            </p>
          </div>
        </div>
      </a>
    </li>
  );

  return (
    <div className={`main-sect ${className}`}>
      <div className="inner">
        <div className="main-tit-wrap">
          <h2 className="tit">{title}</h2>
          {moreLink && (
            <a 
              href={moreLink} 
              className="btn sm btn-txt ico-plus"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(moreLink);
              }}
            >
              {moreText}
            </a>
          )}
        </div>
        <ul className="policy-list">
          {displayCards.map(renderCard)}
        </ul>
      </div>
    </div>
  );
};

export default withGovernmentAssets(CardContents);