<div class="main-sect">
    <div class="inner">
        <div class="main-tit-wrap">
            <h2 class="tit">{{ $contentsData['title'] }}</h2>
            @if(!empty($contentsData['more_link']))
            <a href="{{ $contentsData['more_link'] }}" class="btn sm btn-txt ico-plus">{{ $contentsData['more_text'] }}</a>
            @endif
        </div>

        <div class="service-list">
            <div class="service-swiper-in {{ $contentsData['swiper_id'] }}">
                <div class="swiper">
                    <ul class="swiper-wrapper">
                        @foreach($contentsData['cards'] as $card)
                        <li class="swiper-slide">
                            <a href="{{ $card['url'] }}">
                                <div class="d-card line">
                                    <div class="in">
                                        <div class="text">
                                            @if(!empty($card['badge']))
                                            <p class="c-badge">
                                                <span class="badge">{{ $card['badge'] }}</span>
                                            </p>
                                            @endif
                                            <p class="c-tit">{{ $card['title'] }}</p>
                                            <p class="c-txt">{{ $card['description'] }}</p>
                                        </div>
                                        <p class="c-btn">
                                            <span class="btn sm btn-txt ico-more">{{ $card['button_text'] }}</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="swiper-indicator">
                <div class="swiper-pagination {{ $contentsData['swiper_id'] }}-pagination"></div>
                <div class="swiper-controller">
                    <button type="button" class="swiper-button-play">
                        <span class="sr-only">슬라이드 재생</span>
                    </button>
                    <button type="button" class="swiper-button-stop">
                        <span class="sr-only">슬라이드 멈춤</span>
                    </button>
                </div>
                <div class="swiper-navigation">
                    <button type="button" class="swiper-button-prev">
                        <span class="sr-only">이전</span>
                    </button>
                    <button type="button" class="swiper-button-next">
                        <span class="sr-only">다음</span>
                    </button>
                    @if(!empty($contentsData['more_link']))
                    <a href="{{ $contentsData['more_link'] }}" class="swiper-button-more">
                        <span class="sr-only">더보기</span>
                    </a>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const {{ str_replace('-', '', $contentsData['swiper_id']) }} = new Swiper('.{{ $contentsData['swiper_id'] }} .swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 400,
            loop: true,
            
            // 반응형 설정
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            
            // 자동재생 설정
            @if($contentsData['autoplay'])
            autoplay: {
                delay: {{ $contentsData['autoplay_delay'] }},
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            @endif
            
            // 네비게이션
            navigation: {
                nextEl: '.{{ $contentsData['swiper_id'] }} ~ .swiper-indicator .swiper-button-next',
                prevEl: '.{{ $contentsData['swiper_id'] }} ~ .swiper-indicator .swiper-button-prev',
            },
            
            // 페이지네이션
            pagination: {
                el: '.{{ $contentsData['swiper_id'] }}-pagination',
                type: 'fraction',
            },
        });
        
        // 재생/정지 버튼 컨트롤
        const playBtn = document.querySelector('.{{ $contentsData['swiper_id'] }} ~ .swiper-indicator .swiper-button-play');
        const stopBtn = document.querySelector('.{{ $contentsData['swiper_id'] }} ~ .swiper-indicator .swiper-button-stop');
        
        if (playBtn && stopBtn) {
            @if($contentsData['autoplay'])
            // 자동재생 중이면 정지 버튼 표시
            playBtn.style.display = "none";
            stopBtn.style.display = "";
            @else
            // 자동재생 아니면 재생 버튼 표시
            playBtn.style.display = "";
            stopBtn.style.display = "none";
            @endif
            
            playBtn.addEventListener("click", () => {
                {{ str_replace('-', '', $contentsData['swiper_id']) }}.autoplay.start();
                stopBtn.style.display = "";
                playBtn.style.display = "none";
            });
            
            stopBtn.addEventListener("click", () => {
                {{ str_replace('-', '', $contentsData['swiper_id']) }}.autoplay.stop();
                stopBtn.style.display = "none";
                playBtn.style.display = "";
            });
        }
    });
</script>