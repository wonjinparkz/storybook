<div class="main-sect">
    <div class="inner">
        <div class="main-tit-wrap">
            <h2 class="tit">{{ $complexBannerData['title'] }}</h2>
        </div>

        <div class="contents-wrap">
            {{-- 소개 텍스트 섹션 --}}
            <div class="contents-text">
                <p class="tit">{!! $complexBannerData['intro']['title'] !!}</p>
                <p class="txt">{!! $complexBannerData['intro']['description'] !!}</p>
                <a href="{{ $complexBannerData['intro']['button_url'] }}" class="btn sm btn-txt ico-more">
                    {{ $complexBannerData['intro']['button_text'] }}
                </a>
            </div>

            {{-- 카드 슬라이더 섹션 --}}
            <div class="contents-list">
                <div class="contents-swiper-in {{ $complexBannerData['swiper_id'] }}">
                    <div class="swiper">
                        <ul class="swiper-wrapper">
                            @foreach($complexBannerData['cards'] as $index => $card)
                            <li class="swiper-slide">
                                <a href="{{ $card['url'] }}">
                                    <div class="d-card">
                                        <div class="im {{ $card['image_class'] }}"></div>
                                        <div class="in">
                                            <div class="text">
                                                <p class="c-tit">{{ $card['title'] }}</p>
                                                <p class="c-txt">{{ $card['description'] }}</p>
                                            </div>
                                            <p class="c-btn">
                                                <span class="btn sm btn-txt ico-more">자세히보기</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            @endforeach
                        </ul>
                    </div>
                    <button type="button" class="swiper-button-prev">
                        <span class="sr-only">이전</span>
                    </button>
                    <button type="button" class="swiper-button-next">
                        <span class="sr-only">다음</span>
                    </button>
                </div>
                <div class="swiper-pagination {{ $complexBannerData['swiper_id'] }}-pagination"></div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const {{ str_replace('-', '', $complexBannerData['swiper_id']) }} = new Swiper('.{{ $complexBannerData['swiper_id'] }} .swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 400,
            loop: true,
            
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
                nextEl: '.{{ $complexBannerData['swiper_id'] }} .swiper-button-next',
                prevEl: '.{{ $complexBannerData['swiper_id'] }} .swiper-button-prev',
            },
            
            // 페이지네이션
            pagination: {
                el: '.{{ $complexBannerData['swiper_id'] }}-pagination',
                clickable: true,
                type: 'bullets',
            },
            
            // 자동 재생 (선택사항)
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
        });
    });
</script>