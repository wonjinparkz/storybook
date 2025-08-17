import { useEffect, useRef } from 'react';
import { FullBannerCarouselProps } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';
import './styles/index.css';
import './styles/swiper-minimal.css';

// Swiper 타입 정의 (간단한 구현을 위해)
declare global {
  interface Window {
    Swiper: any;
  }
}

const FullBannerCarousel = ({
  slides,
  className = '',
  swiperId,
  autoplayDelay = 5000,
  speed = 400,
  loop = true,
  backgroundColor = '#D8E4F2'
}: FullBannerCarouselProps) => {
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
          spaceBetween: 0,
          speed: speed,
          loop: loop,
          navigation: {
            nextEl: `.vb-swiper.${swiperId} .swiper-button-next`,
            prevEl: `.vb-swiper.${swiperId} .swiper-button-prev`,
          },
          pagination: {
            el: `.vb-swiper.${swiperId} .swiper-pagination`,
            clickable: true,
          },
        };

        // autoplay 설정 (delay가 0이 아닐 때만 추가)
        if (autoplayDelay > 0) {
          swiperConfig.autoplay = {
            delay: autoplayDelay,
            disableOnInteraction: false,
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
  }, [swiperId, autoplayDelay, speed, loop, slides]);

  const handleSlideClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  return (
    <div className={`main-vban-wrap ${className}`} style={{ backgroundColor }}>
      <div className="inner">
        <div className={`vb-swiper ${swiperId}`}>
          <div className="swiper" ref={swiperRef}>
            <ul className="swiper-wrapper">
              {slides.map((slide) => (
                <li key={slide.id} className="swiper-slide">
                  <div className="in">
                    <div className="text">
                      <p 
                        className="tit"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <p 
                        className="txt"
                        dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                      />
                      <button 
                        type="button"
                        className="btn primary xlg"
                        onClick={() => handleSlideClick(slide.buttonUrl)}
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                    <div className="im">
                      <img 
                        src={slide.image} 
                        alt={slide.imageAlt}
                        onError={(e) => {
                          // 이미지 로드 실패 시 플레이스홀더 표시
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIiBzdHJva2U9IiNkZWUyZTYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZjNzU3ZCI+8J+PliBJbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    </div>
                  </div>
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
          
          <div className="swiper-indicator text-center">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withGovernmentAssets(FullBannerCarousel);