import { useState } from 'react';
import { GovernmentFooterProps } from './types';
import './styles/index.css';

const GovernmentFooter = ({
  quickLinks,
  logoInfo,
  contactInfo,
  serviceLinks,
  socialLinks,
  footerMenus,
  copyright,
  banner
}: GovernmentFooterProps) => {
  const [openQuickLink, setOpenQuickLink] = useState<string | null>(null);

  const toggleQuickLink = (title: string) => {
    setOpenQuickLink(openQuickLink === title ? null : title);
  };

  const getSocialIconClass = (platform: string) => {
    const iconMap = {
      youtube: 'youtube',
      instagram: 'instagram', 
      facebook: 'facebook',
      twitter: 'twitter',
      blog: 'blog'
    };
    return iconMap[platform as keyof typeof iconMap] || platform;
  };

  return (
    <footer id="footer">
      {/* 퀵링크 영역 */}
      <div className="foot-quick">
        <div className="inner">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              type="button"
              className="link"
              title={link.layerTitle}
              onClick={() => toggleQuickLink(link.title)}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>

      <div className="inner">
        {/* 로고 영역 */}
        <div 
          className="f-logo" 
          data-logo-image={logoInfo.imageUrl}
          style={{ '--logo-image': `url('${logoInfo.imageUrl}')` } as React.CSSProperties}
        >
          <span className="logo-text">{logoInfo.text}</span>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="f-cnt">
          {/* 연락처 정보 */}
          <div className="f-info">
            <p className="info-addr">{contactInfo.address}</p>
            
            <ul className="info-cs">
              {contactInfo.contacts.map((contact, index) => (
                <li key={index}>
                  <strong className="strong">{contact.number}</strong>
                  {contact.description && (
                    <span className="span">{contact.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 링크 영역 */}
          <div className="f-link">
            {/* 서비스 링크 */}
            {serviceLinks.length > 0 && (
              <div className="link-go">
                {serviceLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="btn btn-txt sm ico-arr"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}

            {/* 소셜 링크 */}
            {socialLinks.length > 0 && (
              <div className="link-sns">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={getSocialIconClass(social.platform)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">
                      {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 하단 영역 */}
        <div className="f-btm">
          <div className="f-btm-text">
            {/* 푸터 메뉴 */}
            {footerMenus.length > 0 && (
              <div className="f-menu">
                {footerMenus.map((menu, index) => (
                  <a
                    key={index}
                    href={menu.url}
                    className={menu.isHighlighted ? 'point' : ''}
                  >
                    {menu.text}
                  </a>
                ))}
              </div>
            )}

            {/* 저작권 */}
            <p className="f-copy">{copyright}</p>
          </div>

          {/* 배너 */}
          {banner && (
            <div className="f-btm-ban">
              <span className="sr-only">{banner.organization}</span>
              <span className="ban-txt">{banner.description}</span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default GovernmentFooter;