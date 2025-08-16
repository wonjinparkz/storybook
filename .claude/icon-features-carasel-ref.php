<div class="main-sect">
    <div class="inner">
        <div class="main-tit-wrap">
            <h2 class="tit">{{ $iconFeaturesData['title'] }}</h2>
        </div>

        <div class="menu-list type2">
            <div class="menu-swiper-in {{ $iconFeaturesData['swiper_id'] }}">
                <div class="swiper">
                    <ul class="swiper-wrapper">
                        @foreach($iconFeaturesData['items'] as $item)
                        <li class="swiper-slide">
                            <a href="{{ $item['url'] }}" class="menu-item d-row">
                                @if(isset($item['icon_svg']))
                                    <span class="ico" style="display: flex; align-items: center;">
                                        {!! $item['icon_svg'] !!}
                                    </span>
                                @else
                                    <span class="ico {{ $item['icon_class'] }}"></span>
                                @endif
                                <div class="text">
                                    <p class="tit">{{ $item['title'] }}</p>
                                    <p class="txt">{{ $item['description'] }}</p>
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
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const {{ str_replace('-', '', $iconFeaturesData['swiper_id']) }} = new Swiper('.{{ $iconFeaturesData['swiper_id'] }} .swiper', {
            slidesPerView: 1,
            spaceBetween: 16,
            speed: 400,
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
            
            // 자동재생 설정
            @if($iconFeaturesData['autoplay'])
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            @endif
            
            // 네비게이션
            navigation: {
                nextEl: '.{{ $iconFeaturesData['swiper_id'] }} .swiper-button-next',
                prevEl: '.{{ $iconFeaturesData['swiper_id'] }} .swiper-button-prev',
            },
        });
    });
</script>