<div class="main-sect">
    <div class="inner">
        <div class="main-tit-wrap">
            <h2 class="tit">{{ $tabContentsData['title'] }}</h2>
        </div>

        <!-- 탭 -->
        <div class="tab-area layer">
            <!-- tab list -->
            <div class="tab line">
                <ul role="tablist">
                    @foreach($tabContentsData['tabs'] as $tab)
                    <li id="{{ $tab['id'] }}" role="tab" aria-selected="{{ $tab['active'] ? 'true' : 'false' }}" aria-controls="{{ $tab['panel_id'] }}" class="{{ $tab['active'] ? 'active' : '' }}">
                        <button type="button" class="btn-tab">
                            {{ $tab['label'] }}
                            @if($tab['active'])
                            <i class="sr-only created">선택됨</i>
                            @endif
                        </button>
                    </li>
                    @endforeach
                </ul>
                @if(!empty($tabContentsData['more_link']))
                <a href="{{ $tabContentsData['more_link'] }}" class="btn sm btn-txt ico-plus">더보기</a>
                @endif
            </div>
            <!-- //tab list -->

            <!-- tab contents -->
            <div class="tab-conts-wrap">
                @foreach($tabContentsData['tabs'] as $tab)
                <section id="{{ $tab['panel_id'] }}" role="tabpanel" aria-labelledby="{{ $tab['id'] }}" class="tab-conts {{ $tab['active'] ? 'active' : '' }}">
                    <h3 class="sr-only">{{ $tab['label'] }}</h3>
                    @if(!empty($tab['items']))
                    <ul class="news-list">
                        @foreach($tab['items'] as $item)
                        <li>
                            <a href="{{ $item['url'] }}">
                                <div class="d-card line d-row">
                                    @if(!empty($item['image']))
                                    <div class="im">
                                        <img src="{{ $item['image'] }}" alt="썸네일 이미지">
                                    </div>
                                    @endif
                                    <div class="in">
                                        <div class="text">
                                            <p class="c-tit">{{ $item['title'] }}</p>
                                            <p class="c-txt">{{ $item['description'] }}</p>
                                        </div>
                                        <p class="c-btn">
                                            <span class="btn sm btn-txt ico-more">{{ $item['button_text'] }}</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        @endforeach
                    </ul>
                    @else
                    <p>탭 {{ $loop->iteration }} 내용</p>
                    @endif
                </section>
                @endforeach
            </div>
            <!-- //tab contents -->
        </div>
        <!-- //탭 -->
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // 탭 클릭 이벤트 처리
        const tabButtons = document.querySelectorAll('.tab-area .btn-tab');
        const tabPanels = document.querySelectorAll('.tab-conts');
        const tabItems = document.querySelectorAll('.tab-area [role="tab"]');
        
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                // 모든 탭 비활성화
                tabItems.forEach(item => {
                    item.classList.remove('active');
                    item.setAttribute('aria-selected', 'false');
                });
                tabPanels.forEach(panel => {
                    panel.classList.remove('active');
                });
                
                // 선택된 탭 활성화
                const parentLi = button.parentElement;
                parentLi.classList.add('active');
                parentLi.setAttribute('aria-selected', 'true');
                
                // 연결된 패널 활성화
                const panelId = parentLi.getAttribute('aria-controls');
                const panel = document.getElementById(panelId);
                if (panel) {
                    panel.classList.add('active');
                }
                
                // 선택됨 텍스트 업데이트
                document.querySelectorAll('.btn-tab .created').forEach(el => el.remove());
                button.innerHTML = button.textContent + '<i class="sr-only created">선택됨</i>';
            });
        });
    });
</script>