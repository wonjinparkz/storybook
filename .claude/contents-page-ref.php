<div id="container">
    <!-- 컨텐츠 영역 -->
    <div class="inner in-between">
        <!-- 좌측 사이드바 메뉴 -->
        <nav class="left-menu">
            <div class="left-in">
                <h2 class="lnb-tit">{{ $contentsPageData['sidebar']['title'] }}</h2>
                <ul class="acco-list lnb-list" data-action="accordion">
                    @foreach($contentsPageData['sidebar']['menu'] as $category)
                    @php
                        // 카테고리 내에 활성화된 메뉴가 있는지 확인
                        $categoryHasActive = false;
                        foreach ($category['items'] as $item) {
                            // 메인 메뉴 URL 체크
                            if (strpos($currentUrl, $item['url']) !== false || $currentPath === trim($item['url'], '/')) {
                                $categoryHasActive = true;
                                break;
                            }
                            // 서브메뉴 URL 체크
                            if (!empty($item['subitems'])) {
                                foreach ($item['subitems'] as $subitem) {
                                    if (strpos($currentUrl, $subitem['url']) !== false || $currentPath === trim($subitem['url'], '/')) {
                                        $categoryHasActive = true;
                                        break 2;
                                    }
                                }
                            }
                        }
                        // 활성화된 메뉴가 있으면 카테고리를 펼침
                        $isExpanded = $categoryHasActive || $category['expanded'];
                    @endphp
                    <li class="li" data-has-active="{{ $categoryHasActive ? 'true' : 'false' }}">
                        <div class="acco-head">
                            <h3 class="tit">{{ $category['title'] }}</h3>
                            <button type="button" class="btn btn-ico acco-btn" aria-expanded="{{ $isExpanded ? 'true' : 'false' }}" data-initial-expanded="{{ $isExpanded ? 'true' : 'false' }}">
                                <span class="sr-only">{{ $isExpanded ? '접기' : '펼침' }}</span>
                            </button>
                        </div>
                        <div class="acco-body" style="{{ $isExpanded ? 'display: block;' : 'display: none;' }}"> 
                            <div class="acco-in">
                                <ul class="sub-ul">
                                    @foreach($category['items'] as $item)
                                    @php
                                        // 메인 메뉴 활성화 체크
                                        $itemActive = false;
                                        $hasActiveSubitem = false;
                                        
                                        // 메인 메뉴 URL 체크
                                        if (strpos($currentUrl, $item['url']) !== false || $currentPath === trim($item['url'], '/')) {
                                            $itemActive = true;
                                        }
                                        
                                        // 서브메뉴 활성화 체크
                                        if (!empty($item['subitems'])) {
                                            foreach ($item['subitems'] as $subitem) {
                                                if (strpos($currentUrl, $subitem['url']) !== false || $currentPath === trim($subitem['url'], '/')) {
                                                    $hasActiveSubitem = true;
                                                    $itemActive = true;
                                                    break;
                                                }
                                            }
                                        }
                                    @endphp
                                    <li>
                                        @if(!empty($item['subitems']))
                                        <div class="depth3-container">
                                            <button type="button" class="subm has-depth3{{ $itemActive ? ' active' : '' }}" aria-expanded="{{ $hasActiveSubitem ? 'true' : 'false' }}" data-initial-expanded="{{ $hasActiveSubitem ? 'true' : 'false' }}">
                                                <span class="subm-text">{{ $item['title'] }}</span>
                                                <span class="btn-ico depth3-toggle"></span>
                                            </button>
                                            <ul class="depth3-ul" style="{{ $hasActiveSubitem ? '' : 'display: none;' }}">
                                                @foreach($item['subitems'] as $subitem)
                                                @php
                                                    $subitemActive = (strpos($currentUrl, $subitem['url']) !== false || $currentPath === trim($subitem['url'], '/'));
                                                @endphp
                                                <li>
                                                    <a href="{{ $subitem['url'] }}" class="depth3-link{{ $subitemActive ? ' active' : '' }}" {{ $subitemActive ? 'aria-current="page"' : '' }}>
                                                        {{ $subitem['title'] }}
                                                    </a>
                                                </li>
                                                @endforeach
                                            </ul>
                                        </div>
                                        @else
                                        <a href="{{ $item['url'] }}" class="subm{{ $itemActive ? ' active' : '' }}" {{ $itemActive ? 'aria-current="page"' : '' }}>
                                            {{ $item['title'] }}
                                        </a>
                                        @endif
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </li>
                    @endforeach
                </ul>
            </div>
        </nav>
        
        <!-- 메인 콘텐츠 영역 -->
        <div class="contents">
            <!-- 브레드크럼 -->
            <nav class="breadcrumb-wrap" aria-label="브레드크럼">
                <ol class="breadcrumb">
                    @foreach($contentsPageData['breadcrumb'] as $index => $crumb)
                    <li {{ $index === 0 ? 'class=home' : '' }}>
                        @if($crumb['url'])
                        <a href="{{ $crumb['url'] }}" class="txt">{{ $crumb['text'] }}</a>
                        @else
                        <span class="txt">{{ $crumb['text'] }}</span>
                        @endif
                    </li>
                    @endforeach
                </ol>
            </nav>
            <!-- //브레드크럼 -->
            
            <!-- 페이지 타이틀 영역 -->
            <div class="page-title-wrap" data-type="responsive">
                <h2 class="h-tit">{{ $contentsPageData['page']['title'] }}</h2>
                @if(!empty($contentsPageData['page']['dropdown']))
                <div class="krds-drop-wrap h-tit-drop">
                    <button type="button" class="h-tit drop-btn">
                        {{ $contentsPageData['page']['dropdown']['current'] }}
                        <span class="sr-only">열기</span>
                    </button>
                    <div class="drop-menu">
                        <div class="drop-in">
                            <ul class="drop-list">
                                @foreach($contentsPageData['page']['dropdown']['items'] as $dropItem)
                                <li><a href="{{ $dropItem['url'] }}" class="item-link">{{ $dropItem['text'] }}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                @endif
            </div>
            <!-- //페이지 타이틀 영역 -->
            
            <!-- 콘텐츠 본문 -->
            <div class="conts-wrap">
                <div class="conts-wrap">
                    <div class="conts-wrap">
                        {!! processContent($contentsPageData['content'] ?? '') !!}
                    </div>
                </div>
            </div>
            <!-- //콘텐츠 본문 -->
        </div>
    </div>
    <!-- //컨텐츠 영역 -->
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    
    // 활성화된 카테고리 상태를 저장
    const activeCategories = new Set();
    const activeDepth3 = new Set();
    
    // 아코디언 메뉴 동작 - PHP에서 이미 상태가 설정되어 있음
    const accoButtons = document.querySelectorAll('.acco-btn');
    accoButtons.forEach((button, index) => {
        // 클릭 이벤트 핸들러만 추가 (초기 상태는 PHP에서 이미 설정됨)
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const accoBody = this.closest('.acco-head').nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // 닫기
                this.setAttribute('aria-expanded', 'false');
                this.querySelector('.sr-only').textContent = '펼침';
                accoBody.style.display = 'none';
            } else {
                // 열기
                this.setAttribute('aria-expanded', 'true');
                this.querySelector('.sr-only').textContent = '접기';
                accoBody.style.display = 'block';
            }
        });
    });
    
    // 3depth 메뉴 동작 (인라인 확장/축소)
    const depth3Buttons = document.querySelectorAll('.has-depth3');
    depth3Buttons.forEach((button, index) => {
        // 클릭 이벤트 핸들러만 추가 (초기 상태는 PHP에서 이미 설정됨)
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const expanded = this.getAttribute('aria-expanded') === 'true';
            const depth3Ul = this.nextElementSibling;
            
            if (expanded) {
                // 접기
                this.setAttribute('aria-expanded', 'false');
                // 애니메이션을 위해 setTimeout 사용
                depth3Ul.style.maxHeight = '0';
                depth3Ul.style.opacity = '0';
                setTimeout(() => {
                    depth3Ul.style.display = 'none';
                }, 300);
            } else {
                // 펼치기
                this.setAttribute('aria-expanded', 'true');
                depth3Ul.style.display = '';
                // 리플로우를 강제하여 애니메이션 적용
                depth3Ul.offsetHeight;
                depth3Ul.style.maxHeight = '500px';
                depth3Ul.style.opacity = '1';
            }
        });
    });
    
    // 드롭다운 메뉴 동작
    const dropBtn = document.querySelector('.drop-btn');
    if (dropBtn) {
        dropBtn.addEventListener('click', function() {
            const dropMenu = this.nextElementSibling;
            dropMenu.classList.toggle('active');
        });
        
        // 외부 클릭시 드롭다운 닫기
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.krds-drop-wrap')) {
                document.querySelectorAll('.drop-menu.active').forEach(menu => {
                    menu.classList.remove('active');
                });
            }
        });
    }
    
    // 페이지 로드 완료 후 애니메이션 활성화 (깜빡임 방지)
    setTimeout(() => {
        document.querySelectorAll('.acco-body').forEach(el => {
            el.classList.add('transitions-enabled');
        });
    }, 100);
    
});
</script>

<style>
/* 3depth 메뉴 인라인 스타일 */
.depth3-container {
    position: relative;
}

.subm.has-depth3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 30px;
    position: relative;
}

/* 활성화된 메인 메뉴 스타일 */
.subm.active,
.subm.has-depth3.active {
    color: #007bff;
    font-weight: 600;
    background-color: #f0f7ff;
    border-radius: 4px;
}

.subm:hover {
    color: #0056b3;
    background-color: #f8f9fa;
}

.depth3-toggle {
    position: absolute;
    right: 10px;
    width: 16px;
    height: 16px;
    transition: transform 0.3s;
}

.depth3-toggle::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-right: 2px solid #666;
    border-bottom: 2px solid #666;
    transform: rotate(45deg);
    margin-top: -2px;
}

.has-depth3[aria-expanded="true"] .depth3-toggle::after {
    transform: rotate(-135deg);
    margin-top: 2px;
}

.depth3-ul {
    padding-left: 20px;
    margin-top: 8px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    opacity: 0;
}

.depth3-ul[style*="display: none"] {
    max-height: 0;
    opacity: 0;
}

.depth3-ul:not([style*="display: none"]) {
    max-height: 500px; /* 충분한 높이 설정 */
    opacity: 1;
}

.depth3-ul li {
    margin-bottom: 8px;
}

.depth3-link {
    display: block;
    padding: 8px 12px;
    font-size: 14px;
    color: #666;
    text-decoration: none;
    border-left: 2px solid transparent;
    transition: all 0.2s;
}

.depth3-link:hover {
    color: #333;
    background-color: #f5f5f5;
    border-left-color: #007bff;
}

/* 활성화된 서브메뉴 스타일 */
.depth3-link.active,
.depth3-link[aria-current="page"] {
    color: #007bff;
    font-weight: 600;
    background-color: #e7f3ff;
    border-left-color: #007bff;
}

/* acco-body 높이 자동 조정 */
.acco-body {
    overflow: visible !important;
    height: auto !important;
    transition: none; /* 초기 로드 시 애니메이션 제거 */
}

.acco-in {
    overflow: visible !important;
}

/* 페이지 로드 완료 후 애니메이션 활성화 */
.acco-body.transitions-enabled {
    transition: all 0.3s ease;
}

/* 드롭다운 메뉴 활성화 스타일 */
.drop-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 10;
}

.drop-menu.active {
    display: block;
}

.krds-drop-wrap {
    position: relative;
}
</style>