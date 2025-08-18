import { FootContentsProps } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';

// FootContents에 필요한 스타일들
import './styles/index.css';

const FootContents = ({
  title,
  description,
  image,
  imageAlt = '이미지',
  buttonText,
  buttonUrl,
  hasBackground = false,
  className = ''
}: FootContentsProps) => {

  const handleButtonClick = () => {
    if (buttonUrl && buttonUrl !== '#') {
      window.open(buttonUrl, '_self');
    }
  };

  return (
    <div className={`main-sect${hasBackground ? ' bg' : ''} ${className}`}>
      <div className="inner">
        <div className="d-card d-responsive">
          {image && (
            <div className="im">
              <img src={image} alt={imageAlt} />
            </div>
          )}
          <div className="in">
            <div className="text">
              <p 
                className="c-tit"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="c-txt">{description}</p>
            </div>
            {buttonText && (
              <p className="c-btn">
                {buttonUrl ? (
                  <a 
                    href={buttonUrl} 
                    className="btn sm btn-txt ico-more"
                    style={{
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      justifyContent: 'flex-start'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#0066cc';
                      // 화살표 아이콘도 같은 색상으로 변경
                      e.currentTarget.style.setProperty('--icon-color', '#0066cc');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.removeProperty('--icon-color');
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleButtonClick();
                    }}
                  >
                    {buttonText}
                  </a>
                ) : (
                  <button 
                    type="button" 
                    className="btn sm btn-txt ico-more"
                    style={{
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      justifyContent: 'flex-start'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#0066cc';
                      // 화살표 아이콘도 같은 색상으로 변경
                      e.currentTarget.style.setProperty('--icon-color', '#0066cc');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.removeProperty('--icon-color');
                    }}
                    onClick={handleButtonClick}
                  >
                    {buttonText}
                  </button>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withGovernmentAssets(FootContents);