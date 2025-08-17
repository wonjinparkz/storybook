import { useEffect, useRef, useState } from 'react';
import { ContentsCardCarouselProps } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';
import './styles/index.css';
import './styles/swiper-minimal.css';

// Swiper 타입 정의 (간단한 구현을 위해)
declare global {
  interface Window {
    Swiper: any;
  }
}

const ContentsCardCarousel = ({
  title,
  cards,
  swiperId,
  autoplay = false,
  autoplayDelay = 4000,
  speed = 400,
  loop = true,
  moreLink,
  moreText = '더보기',
  className = ''
}: ContentsCardCarouselProps) => {
  const swiperRef = useRef<any>(null);
  const swiperInstanceRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  useEffect(() => {
    // Swiper 초기화
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper && swiperRef.current) {
        // 기존 인스턴스가 있다면 삭제
        if (swiperInstanceRef.current) {
          swiperInstanceRef.current.destroy(true, true);
        }

        const swiperConfig: any = {
          slidesPerView: 1,
          spaceBetween: 24,
          speed: speed,
          loop: loop,
          
          // 반응형 설정
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
          
          // 네비게이션
          navigation: {
            nextEl: `.${swiperId}-indicator .swiper-button-next`,
            prevEl: `.${swiperId}-indicator .swiper-button-prev`,
          },
          
          // 페이지네이션 (fraction 타입)
          pagination: {
            el: `.${swiperId}-pagination`,
            type: 'fraction',
          },
        };

        // autoplay 설정
        if (autoplay) {
          swiperConfig.autoplay = {
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          };
        }

        swiperInstanceRef.current = new window.Swiper(swiperRef.current, swiperConfig);
      }
    };

    // Swiper 라이브러리 로드 (CSS는 로드하지 않음)
    if (!window.Swiper) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.onload = initSwiper;
      document.head.appendChild(script);
    } else {
      initSwiper();
    }

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, [swiperId, autoplay, autoplayDelay, speed, loop, cards]);

  const handleMoreClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  const handleCardClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  const handlePlayClick = () => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };

  const handleStopClick = () => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.autoplay.stop();
      setIsPlaying(false);
    }
  };

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
                handleMoreClick(moreLink);
              }}
            >
              {moreText}
            </a>
          )}
        </div>

        <div className="service-list">
          <div className={`service-swiper-in ${swiperId}`}>
            <div className="swiper" ref={swiperRef}>
              <ul className="swiper-wrapper">
                {cards.map((card) => (
                  <li key={card.id} className="swiper-slide">
                    <a 
                      href={card.url}
                      onClick={(e) => {
                        e.preventDefault();
                        handleCardClick(card.url);
                      }}
                    >
                      <div className="d-card line">
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
                            <span className="btn sm btn-txt ico-more">
                              {card.buttonText || '자세히보기'}
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={`swiper-indicator ${swiperId}-indicator`}>
            <div className={`swiper-pagination ${swiperId}-pagination`}></div>
            <div className="swiper-controller">
              <button 
                type="button" 
                className="swiper-button-play"
                style={{ display: isPlaying ? 'none' : '' }}
                onClick={handlePlayClick}
              >
                <span className="sr-only">슬라이드 재생</span>
              </button>
              <button 
                type="button" 
                className="swiper-button-stop"
                style={{ display: isPlaying ? '' : 'none' }}
                onClick={handleStopClick}
              >
                <span className="sr-only">슬라이드 멈춤</span>
              </button>
            </div>
            <div className="swiper-navigation">
              <button type="button" className="swiper-button-prev">
                <span className="sr-only">이전</span>
              </button>
              <button type="button" className="swiper-button-next">
                <span className="sr-only">다음</span>
              </button>
              {moreLink && (
                <a 
                  href={moreLink} 
                  className="swiper-button-more"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMoreClick(moreLink);
                  }}
                >
                  <span className="sr-only">더보기</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withGovernmentAssets(ContentsCardCarousel);