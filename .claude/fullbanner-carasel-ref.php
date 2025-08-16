<!-- visual banner -->
<div class="main-vban-wrap {{ $fullBannerData['class'] }}">
    <div class="inner">
        <div class="{{ $fullBannerData['swiper_id'] }}">
            <div class="swiper">
                <ul class="swiper-wrapper">
                    @foreach($fullBannerData['slides'] as $slide)
                    <li class="swiper-slide">
                        <div class="in">
                            <div class="text">
                                <p class="tit">{!! $slide['title'] !!}</p>
                                <p class="txt">{!! $slide['subtitle'] !!}</p>
                                <a href="{{ $slide['button_url'] }}" class="btn primary xlg">{{ $slide['button_text'] }}</a>
                            </div>
                            <div class="im">
                                <img src="{{ $slide['image'] }}" alt="{{ $slide['image_alt'] }}">
                            </div>
                        </div>
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
            <div class="swiper-indicator text-center">
                <div class="swiper-pagination"></div>
                @if(!empty($fullBannerData['more_link']))
                <a href="{{ $fullBannerData['more_link'] }}" class="swiper-button-more">
                    <span class="sr-only">더 보기</span>
                </a>
                @endif
            </div>
        </div>
    </div>
</div>
<!-- //visual banner -->

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const {{ str_replace('-', '', $fullBannerData['swiper_id']) }} = new Swiper('.{{ $fullBannerData['swiper_id'] }} .swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.{{ $fullBannerData['swiper_id'] }} .swiper-button-next',
                prevEl: '.{{ $fullBannerData['swiper_id'] }} .swiper-button-prev',
            },
            pagination: {
                el: ".{{ $fullBannerData['swiper_id'] }} .swiper-pagination",
                clickable: true,
            },
        });
    });
</script>