import { useEffect, useRef } from 'react';
import { ComplexFeaturesCarouselProps } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';
import './styles/index.css';
import './styles/swiper-minimal.css';

// Swiper 타입 정의 (간단한 구현을 위해)
declare global {
  interface Window {
    Swiper: any;
  }
}

const ComplexFeaturesCarousel = ({
  title,
  intro,
  cards,
  swiperId,
  autoplay = true,
  autoplayDelay = 4000,
  speed = 400,
  loop = true,
  className = ''
}: ComplexFeaturesCarouselProps) => {
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
          spaceBetween: 24,
          speed: speed,
          loop: loop,
          
          // 반응형 브레이크포인트
          breakpoints: {
            640: {
              slidesPerView: 1,   // 모바일: 1개
            },
            768: {
              slidesPerView: 2,   // 태블릿: 2개
            },
            1024: {
              slidesPerView: 3,   // 데스크탑: 3개
            },
          },
          
          // 네비게이션
          navigation: {
            nextEl: `.${swiperId} .swiper-button-next`,
            prevEl: `.${swiperId} .swiper-button-prev`,
          },
          
          // 페이지네이션
          pagination: {
            el: `.${swiperId}-pagination`,
            clickable: true,
            type: 'bullets',
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

  const handleIntroClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  const handleCardClick = (url: string) => {
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

        <div className="contents-wrap">
          {/* 소개 텍스트 섹션 */}
          <div className="contents-text">
            <p 
              className="tit"
              dangerouslySetInnerHTML={{ __html: intro.title }}
            />
            <p 
              className="txt"
              dangerouslySetInnerHTML={{ __html: intro.description }}
            />
            <a 
              href={intro.buttonUrl} 
              className="btn sm btn-txt ico-more contents-btn-tl"
              onClick={(e) => {
                e.preventDefault();
                handleIntroClick(intro.buttonUrl);
              }}
            >
              {intro.buttonText}
            </a>
          </div>

          {/* 카드 슬라이더 섹션 */}
          <div className="contents-list">
            <div className={`contents-swiper-in ${swiperId}`}>
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
                        <div className="d-card">
                          <div className={`im ${card.imageClass}`}>
                            {card.imageUrl && (
                              <img 
                                src={card.imageUrl} 
                                alt={card.imageAlt || card.title}
                                onError={(e) => {
                                  // 이미지 로드 실패 시 숨기기
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            )}
                          </div>
                          <div className="in">
                            <div className="text">
                              <p className="c-tit">{card.title}</p>
                              <p className="c-txt">{card.description}</p>
                            </div>
                            <p className="c-btn">
                              <span className="btn sm btn-txt ico-more contents-btn-tl">자세히보기</span>
                            </p>
                          </div>
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
            <div className={`swiper-pagination ${swiperId}-pagination`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withGovernmentAssets(ComplexFeaturesCarousel);