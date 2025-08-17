import { useEffect, useRef } from 'react';
import { IconFeaturesCarouselProps } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';
import './styles/index.css';
import './styles/swiper-minimal.css';

// Swiper 타입 정의 (간단한 구현을 위해)
declare global {
  interface Window {
    Swiper: any;
  }
}

const IconFeaturesCarousel = ({
  title,
  items,
  swiperId,
  autoplay = false,
  autoplayDelay = 3000,
  speed = 400,
  className = ''
}: IconFeaturesCarouselProps) => {
  const swiperRef = useRef<any>(null);
  const swiperInstanceRef = useRef<any>(null);

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
          spaceBetween: 16,
          speed: speed,
          loop: false,
          
          // 반응형 설정
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          },
          
          // 네비게이션
          navigation: {
            nextEl: `.${swiperId} .swiper-button-next`,
            prevEl: `.${swiperId} .swiper-button-prev`,
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
  }, [swiperId, autoplay, autoplayDelay, speed, items]);

  const handleItemClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  return (
    <div className={`main-sect ${className}`}>
      <div className="inner">
        <div className="main-tit-wrap">
          <h2 className="tit">{title}</h2>
        </div>

        <div className="menu-list type2">
          <div className={`menu-swiper-in ${swiperId}`}>
            <div className="swiper" ref={swiperRef}>
              <ul className="swiper-wrapper">
                {items.map((item) => (
                  <li key={item.id} className="swiper-slide">
                    <a 
                      href={item.url} 
                      className="menu-item d-row"
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item.url);
                      }}
                    >
                      {item.iconSvg ? (
                        <span 
                          className="ico" 
                          style={{ display: 'flex', alignItems: 'center' }}
                          dangerouslySetInnerHTML={{ __html: item.iconSvg }}
                        />
                      ) : (
                        <span className={`ico ${item.iconClass || ''}`}></span>
                      )}
                      <div className="text">
                        <p className="tit">{item.title}</p>
                        <p className="txt">{item.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" className="swiper-button-prev">
              <span className="sr-only">이전</span>
            </button>
            <button type="button" className="swiper-button-next">
              <span className="sr-only">다음</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withGovernmentAssets(IconFeaturesCarousel);