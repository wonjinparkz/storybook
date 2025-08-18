<div class="main-sect{{ $footContentsData['has_background'] ? ' bg' : '' }}">
    <div class="inner">
        <div class="d-card d-responsive">
            @if(!empty($footContentsData['image']))
            <div class="im">
                <img src="{{ $footContentsData['image'] }}" alt="{{ $footContentsData['image_alt'] ?? '이미지' }}">
            </div>
            @endif
            <div class="in">
                <div class="text">
                    <p class="c-tit">{!! $footContentsData['title'] !!}</p>
                    <p class="c-txt">{{ $footContentsData['description'] }}</p>
                </div>
                @if(!empty($footContentsData['button_text']))
                <p class="c-btn">
                    @if(!empty($footContentsData['button_url']))
                    <a href="{{ $footContentsData['button_url'] }}" class="btn sm btn-txt ico-more">
                        {{ $footContentsData['button_text'] }}
                    </a>
                    @else
                    <button type="button" class="btn sm btn-txt ico-more">
                        {{ $footContentsData['button_text'] }}
                    </button>
                    @endif
                </p>
                @endif
            </div>
        </div>
    </div>
</div>