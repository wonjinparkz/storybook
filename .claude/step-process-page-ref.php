{{-- 
    통합 스텝 컴포넌트
    사용법:
    @include('portfolio._component.government.step.unified-step-component', [
        'config' => [
            'type' => 'nostep|single|multi|success', // 스텝 타입
            'title' => '페이지 제목',
            'breadcrumb' => [
                ['text' => '홈', 'url' => '#'],
                ['text' => '민원서비스', 'url' => '#'],
                ['text' => '전입신고', 'url' => null]
            ],
            'steps' => [ // multi 타입에서만 사용
                ['num' => 1, 'title' => '유의사항 확인'],
                ['num' => 2, 'title' => '신청인 정보'],
                ['num' => 3, 'title' => '이사 전 살던 곳'],
                ['num' => 4, 'title' => '이사 온 곳']
            ],
            'currentStep' => 1, // 현재 스텝 (multi 타입에서만 사용)
            'content' => '스텝 콘텐츠 HTML', // 각 스텝의 콘텐츠
            'buttons' => [ // 버튼 설정
                'prev' => ['text' => '이전으로', 'show' => true],
                'save' => ['text' => '임시저장', 'show' => true],
                'next' => ['text' => '다음으로', 'show' => true],
                'cancel' => ['text' => '취소하기', 'show' => false],
                'submit' => ['text' => '신청하기', 'show' => false]
            ],
            'success' => [ // success 타입에서만 사용
                'message' => '전입신고 민원 신청이 완료되었습니다.',
                'applicant' => '홍길동',
                'info' => [
                    '신청인 정보',
                    '이사 전 살던 곳',
                    '이사 온 곳',
                    '신고 대상자'
                ],
                'relatedServices' => [
                    ['text' => '우편물 주거이전서비스 신청', 'url' => '#'],
                    ['text' => '요금감면일괄신청', 'url' => '#'],
                    ['text' => '지방세납세증명서', 'url' => '#']
                ]
            ]
        ]
    ])
--}}

<style>
/* 체크박스 그룹 여백 조정 - 더 컴팩트하게 */
.checkbox-group-compact .box-sec {
    padding: 0 !important;
    margin: 0 !important;
}

.checkbox-group-compact .form-group {
    margin-bottom: 8px !important;
    padding: 0 !important;
}

.checkbox-group-compact .box-sec:last-child .form-group {
    margin-bottom: 0 !important;
}

.checkbox-group-compact .form-check {
    margin-bottom: 0 !important;
    padding-top: 4px !important;
    padding-bottom: 4px !important;
}

.checkbox-group-compact .form-conts {
    padding: 0 !important;
    margin: 0 !important;
}

/* 약관 박스 스타일 */
.terms-content-box {
    background: #f8f9fa;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #e9ecef;
}

.terms-content-box h5 {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 600;
}

.terms-content-box p {
    margin-bottom: 10px;
    line-height: 1.8;
}

.terms-content-box ul {
    margin-left: 20px;
    margin-bottom: 15px;
}

.terms-content-box li {
    margin-bottom: 5px;
}
</style>

@php
    $type = $config['type'] ?? 'nostep';
    $title = $config['title'] ?? '';
    $breadcrumb = $config['breadcrumb'] ?? [];
    $steps = $config['steps'] ?? [];
    $currentStep = $config['currentStep'] ?? 1;
    $content = $config['content'] ?? '';
    $buttons = $config['buttons'] ?? [];
    $success = $config['success'] ?? [];
    
    // 동적 폼의 경우 해당 스텝의 버튼 설정 사용
    if (isset($config['steps_content'][$currentStep]['buttons'])) {
        $stepButtons = $config['steps_content'][$currentStep]['buttons'];
    } else {
        $stepButtons = [];
    }
    
    // 기본 버튼 설정
    $defaultButtons = [
        'prev' => ['text' => '이전으로', 'show' => false],
        'save' => ['text' => '임시저장', 'show' => false],
        'next' => ['text' => '다음으로', 'show' => false],
        'cancel' => ['text' => '취소하기', 'show' => false],
        'submit' => ['text' => '신청하기', 'show' => false]
    ];
    
    // 우선순위: 스텝별 버튼 > 전역 버튼 > 기본 버튼
    $buttons = array_merge($defaultButtons, $buttons, $stepButtons);
@endphp

<div id="container">
    <!-- breadcrumb -->
    @if(count($breadcrumb) > 0)
    <nav class="breadcrumb-wrap" aria-label="브레드크럼">
        <ol class="breadcrumb">
            @foreach($breadcrumb as $index => $crumb)
                @if($index == 0)
                    <li class="home"><a href="{{ $crumb['url'] ?? '#' }}" class="txt">{{ $crumb['text'] }}</a></li>
                @elseif($crumb['url'])
                    <li><a href="{{ $crumb['url'] }}" class="txt">{{ $crumb['text'] }}</a></li>
                @else
                    <li><span class="txt">{{ $crumb['text'] }}</span></li>
                @endif
            @endforeach
        </ol>
    </nav>
    @endif
    <!-- //breadcrumb -->

    @if($type === 'success')
        <!-- 성공 페이지 -->
        <div class="inner">
            <!-- 완료 메세지 -->
            <div class="comp-msg-wrap">
                {!! str_replace('완료', '<span class="point">완료</span>', $success['message'] ?? '신청이 완료되었습니다.') !!}
            </div>
            <!-- //완료 메세지 -->

            @if(isset($success['applicant']) || isset($success['info']))
            <!-- 신청 정보 -->
            <ul class="comp-info-box">
                @if(isset($success['applicant']))
                <li>
                    <div class="key">신청인</div>
                    <div class="value">{{ $success['applicant'] }}</div>
                </li>
                @endif
                @if(isset($success['info']) && is_array($success['info']))
                <li>
                    <div class="key">신청정보</div>
                    <div class="value">
                        @foreach($success['info'] as $info)
                        <p class="p">{{ $info }}</p>
                        @endforeach
                    </div>
                </li>
                @endif
            </ul>
            <!-- //신청 정보 -->
            @endif

            <!-- 버튼 -->
            <div class="comp-btn-wrap">
                <button type="button" class="btn xlg tertiary">다른 민원신청하기</button>
                <button type="button" class="btn xlg">신청 내역/결과보기</button>
            </div>
            <!-- //버튼 -->

            @if(isset($success['relatedServices']) && count($success['relatedServices']) > 0)
            <!-- 기타 링크 -->
            <dl class="comp-link-box">
                <dt>
                    <p class="tit">이런 서비스는 어떠세요?</p>
                    <p class="txt">{{ $success['relatedTitle'] ?? '함께 이용하면 좋은 민원입니다.' }}</p>
                </dt>
                <dd>
                    @foreach($success['relatedServices'] as $index => $service)
                    <a href="{{ $service['url'] ?? '#' }}" class="btn sm btn-txt {{ $index == 0 ? 'ico-go' : 'ico-arr' }}">{{ $service['text'] }}</a>
                    @endforeach
                    <a href="#" class="btn sm btn-txt ico-arr">모든 민원 서비스 목록 보기</a>
                </dd>
            </dl>
            <!-- //기타 링크 -->
            @endif
        </div>
    @else
        <!-- 일반 스텝 페이지 -->
        <div class="inner narrow {{ $type !== 'nostep' ? 'page-step' : '' }}">
            <!-- 페이지 타이틀 영역 -->
            <div class="page-title-wrap {{ $type === 'single' ? 'between' : '' }}">
                <h2 class="h-tit">{{ $title }}</h2>
                
                @if($type === 'single' && count($steps) > 0)
                <!-- 싱글 스텝 (타이틀 우측) -->
                <ol class="step-wrap">
                    @foreach($steps as $index => $step)
                    <li class="{{ $index + 1 === $currentStep ? 'active' : ($index + 1 < $currentStep ? 'done' : '') }}">
                        <span>
                            @if($index + 1 === $currentStep)
                            <em class="sr-only">현재단계</em>
                            @endif
                            <i class="step">{{ $step['num'] ?? ($index + 1) }}단계</i>
                            <span class="step-tit">{{ $step['title'] }}</span>
                        </span>
                    </li>
                    @endforeach
                </ol>
                @endif
            </div>
            <!-- //페이지 타이틀 영역 -->

            @if($type === 'multi' && count($steps) > 0)
            <!-- 멀티 스텝 (타이틀 하단) -->
            <ol class="step-wrap">
                @foreach($steps as $index => $step)
                <li class="{{ $index + 1 == $currentStep ? 'active' : ($index + 1 < $currentStep ? 'done' : '') }}">
                    <span>
                        @if($index + 1 == $currentStep)
                        <em class="sr-only">현재단계</em>
                        @endif
                        <i class="step">{{ $step['num'] ?? ($index + 1) }}단계</i>
                        <span class="step-tit">{{ $step['title'] }}</span>
                    </span>
                </li>
                @endforeach
            </ol>
            @endif

            <!-- 컨텐츠 영역 -->
            <div class="conts-area {{ $type !== 'nostep' ? 'step-type' : '' }}">
                <div class="conts-wrap">
                    @if($type !== 'nostep' && isset($steps[$currentStep - 1]))
                    <!-- 스텝 제목 -->
                    <h3 class="sec-tit">
                        <span class="step-now"><strong class="active">{{ $currentStep }}단계</strong> / {{ count($steps) }}단계</span>
                        {{ $steps[$currentStep - 1]['title'] }}
                    </h3>
                    @endif
                    
                    <!-- 사용자 정의 콘텐츠 -->
                    @if(isset($config['steps_content'][$currentStep]['fields']))
                        <!-- 동적 폼 생성 -->
                        <div>
                            @php
                                $stepFields = $config['steps_content'][$currentStep]['fields'];
                            @endphp
                            
                            <!-- 전체 항목 필수 입력 메시지 -->
                            <p class="fieldset-msg">전체 항목 필수 입력 사항입니다.</p>
                            
                            @php
                                // 필드들을 섹션별로 그룹화
                                $groupedFields = [];
                                
                                // 데이터 구조 판별 및 처리
                                foreach($stepFields as $item) {
                                    // 이미 그룹화된 구조인 경우 (section_title과 fields가 있는 경우)
                                    if (isset($item['section_title']) && isset($item['fields'])) {
                                        $groupedFields[] = $item;
                                    }
                                    // 단일 라디오 그룹인 경우 (type이 radio_group이고 label이 있는 경우)
                                    elseif (isset($item['type']) && $item['type'] === 'radio_group' && isset($item['label'])) {
                                        $groupedFields[] = [
                                            'section_title' => $item['label'],
                                            'fields' => [$item]
                                        ];
                                    }
                                    // 기타 개별 필드인 경우
                                    else {
                                        // section_title 타입이 있는 경우 처리
                                        if (isset($item['type']) && $item['type'] === 'section_title') {
                                            // 새 섹션 시작
                                            $currentSection = $item['label'];
                                            $currentGroup = [];
                                            
                                            // 다음 필드들을 수집
                                            $nextIndex = array_search($item, $stepFields) + 1;
                                            while ($nextIndex < count($stepFields)) {
                                                $nextField = $stepFields[$nextIndex];
                                                if (isset($nextField['type']) && $nextField['type'] === 'section_title') {
                                                    break;
                                                }
                                                $currentGroup[] = $nextField;
                                                $nextIndex++;
                                            }
                                            
                                            if (!empty($currentGroup)) {
                                                $groupedFields[] = [
                                                    'section_title' => $currentSection,
                                                    'fields' => $currentGroup
                                                ];
                                            }
                                        }
                                    }
                                }
                                
                                // 그룹화되지 않은 필드들이 있는 경우 기본 섹션으로 처리
                                if (empty($groupedFields) && !empty($stepFields)) {
                                    $nonGroupedFields = [];
                                    foreach($stepFields as $field) {
                                        if (!isset($field['section_title']) && (!isset($field['type']) || $field['type'] !== 'section_title')) {
                                            $nonGroupedFields[] = $field;
                                        }
                                    }
                                    if (!empty($nonGroupedFields)) {
                                        $groupedFields[] = [
                                            'section_title' => '정보 입력',
                                            'fields' => $nonGroupedFields
                                        ];
                                    }
                                }
                            @endphp
                            
                            @foreach($groupedFields as $groupIndex => $group)
                                @php
                                    // 체크박스 카운트
                                    $checkboxCount = 0;
                                    $hasCustomHtml = false;
                                    foreach($group['fields'] as $field) {
                                        if (($field['type'] ?? '') === 'checkbox_single') {
                                            $checkboxCount++;
                                        } elseif (($field['type'] ?? '') === 'custom_html') {
                                            $hasCustomHtml = true;
                                        }
                                    }
                                    // 체크박스가 2개 이상 있으면 그룹으로 처리
                                    $isCheckboxGroup = ($checkboxCount >= 2);
                                    
                                    if (config('app.debug')) {
                                        echo "<!-- Group $groupIndex: checkboxCount=$checkboxCount, isCheckboxGroup=" . ($isCheckboxGroup ? 'true' : 'false') . " -->";
                                    }
                                @endphp
                                <div class="txt-box bg-white">
                                    <h4 class="box-tit1">{{ $group['section_title'] ?? '정보 입력' }}</h4>
                                    <div class="box-cnt{{ $isCheckboxGroup ? ' checkbox-group-compact' : '' }}">
                                        @if($isCheckboxGroup)
                                            @php
                                                // 체크박스 그룹일 때 체크박스들을 모아서 처리
                                                $checkboxes = [];
                                                $otherFields = [];
                                                foreach($group['fields'] as $field) {
                                                    if (($field['type'] ?? '') === 'checkbox_single') {
                                                        $checkboxes[] = $field;
                                                    } else {
                                                        $otherFields[] = $field;
                                                    }
                                                }
                                            @endphp
                                            
                                            <!-- 체크박스 외 필드 먼저 렌더링 -->
                                            @foreach($otherFields as $field)
                                                @if(($field['type'] ?? '') === 'custom_html')
                                                    <div class="box-sec">
                                                        {!! $field['html'] ?? '' !!}
                                                    </div>
                                                @elseif(($field['type'] ?? '') === 'terms_box')
                                                    <!-- 약관 박스 -->
                                                    <div class="box-sec">
                                                        <div class="terms-content-box">
                                                            @if(isset($field['title']))
                                                                <h5>{{ $field['title'] }}</h5>
                                                            @endif
                                                            <div>
                                                                @foreach($field['sections'] ?? [] as $section)
                                                                    @if(isset($section['heading']))
                                                                        <p><strong>{{ $section['heading'] }}</strong></p>
                                                                    @endif
                                                                    
                                                                    @if(isset($section['paragraphs']))
                                                                        @foreach($section['paragraphs'] as $paragraph)
                                                                            <p>{!! $paragraph !!}</p>
                                                                        @endforeach
                                                                    @endif
                                                                    
                                                                    @if(isset($section['list']))
                                                                        <ul>
                                                                            @foreach($section['list'] as $item)
                                                                                <li>{{ $item }}</li>
                                                                            @endforeach
                                                                        </ul>
                                                                    @endif
                                                                @endforeach
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endif
                                            @endforeach
                                            
                                            <!-- 체크박스들을 하나의 섹션에 모아서 렌더링 -->
                                            @if(count($checkboxes) > 0)
                                                <div class="box-sec" style="padding-top: 15px;">
                                                    @foreach($checkboxes as $index => $checkbox)
                                                        <div class="form-check lg" style="margin-bottom: {{ $index === count($checkboxes) - 1 ? '0' : '10px' }};">
                                                            <input type="checkbox" 
                                                                   name="{{ $checkbox['name'] ?? 'checkbox' }}" 
                                                                   id="{{ $checkbox['name'] ?? 'checkbox' }}" 
                                                                   value="{{ $checkbox['value'] ?? 'yes' }}"
                                                                   @if($checkbox['required'] ?? false) required @endif
                                                                   @if(isset($checkbox['checked']) && $checkbox['checked']) checked @endif>
                                                            <label for="{{ $checkbox['name'] ?? 'checkbox' }}">
                                                                {{ $checkbox['label'] ?? '' }}
                                                                @if($checkbox['required'] ?? false)<span style="color: #dc3545;">*</span>@endif
                                                            </label>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            @endif
                                        @else
                                            <!-- 일반 필드 렌더링 -->
                                        @foreach($group['fields'] as $field)
                                            @if(in_array($field['type'] ?? '', ['text', 'tel', 'email', 'number', 'date', 'time']))
                                                <!-- 텍스트 입력 필드 -->
                                                <div class="box-sec">
                                                    <div class="form-group">
                                                        <div class="form-tit">{{ $field['label'] }}@if($field['required'] ?? false)<span style="color: #dc3545;">*</span>@endif</div>
                                                        <div class="form-conts">
                                                            <input type="{{ $field['type'] }}" 
                                                                   class="form-control" 
                                                                   name="{{ $field['name'] }}" 
                                                                   @if(isset($field['value'])) value="{{ $field['value'] }}" @endif
                                                                   @if(isset($field['placeholder'])) placeholder="{{ $field['placeholder'] }}" @endif
                                                                   @if($field['required'] ?? false) required @endif
                                                                   @if(isset($field['readonly']) && $field['readonly']) readonly @endif
                                                                   title="{{ $field['label'] }}">
                                                            @if(isset($field['help']))
                                                                <small class="form-text text-muted">{{ $field['help'] }}</small>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            @elseif($field['type'] === 'select')
                                                <!-- 셀렉트 박스 -->
                                                <div class="box-sec">
                                                    <div class="form-group">
                                                        <div class="form-tit">{{ $field['label'] }}@if($field['required'] ?? false)<span style="color: #dc3545;">*</span>@endif</div>
                                                        <div class="form-conts">
                                                            <select class="form-control" 
                                                                    name="{{ $field['name'] }}" 
                                                                    @if($field['required'] ?? false) required @endif>
                                                                @if(isset($field['placeholder']))
                                                                    <option value="">{{ $field['placeholder'] }}</option>
                                                                @endif
                                                                @if(isset($field['options']) && is_array($field['options']))
                                                                    @foreach($field['options'] as $option)
                                                                        <option value="{{ $option['value'] ?? '' }}"
                                                                                @if(isset($option['selected']) && $option['selected']) selected @endif>
                                                                            {{ $option['label'] ?? '' }}
                                                                        </option>
                                                                    @endforeach
                                                                @endif
                                                            </select>
                                                            @if(isset($field['help']))
                                                                <small class="form-text text-muted">{{ $field['help'] }}</small>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            @elseif($field['type'] === 'checkbox_group')
                                                <!-- 체크박스 그룹 -->
                                                <div class="box-sec">
                                                    <div class="form-group">
                                                        <div class="form-tit">{{ $field['label'] }}@if($field['required'] ?? false)<span style="color: #dc3545;">*</span>@endif</div>
                                                        <div class="form-conts">
                                                            <div class="row chk-area chk-column">
                                                                @if(isset($field['options']) && is_array($field['options']))
                                                                    @foreach($field['options'] as $index => $option)
                                                                        <div class="form-check lg">
                                                                            <input type="checkbox" 
                                                                                   name="{{ $field['name'] }}[]" 
                                                                                   id="{{ $field['name'] }}-{{ $index + 1 }}" 
                                                                                   value="{{ $option['value'] ?? '' }}"
                                                                                   @if(isset($option['checked']) && $option['checked']) checked @endif>
                                                                            <label for="{{ $field['name'] }}-{{ $index + 1 }}">{{ $option['label'] ?? '' }}</label>
                                                                        </div>
                                                                    @endforeach
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            @elseif($field['type'] === 'textarea')
                                                <!-- 텍스트에어리어 -->
                                                <div class="box-sec">
                                                    <div class="form-group">
                                                        <div class="form-tit">{{ $field['label'] }}@if($field['required'] ?? false)<span style="color: #dc3545;">*</span>@endif</div>
                                                        <div class="form-conts">
                                                            <textarea class="form-control" 
                                                                      name="{{ $field['name'] }}" 
                                                                      @if(isset($field['attributes']['rows'])) rows="{{ $field['attributes']['rows'] }}" @else rows="4" @endif
                                                                      @if(isset($field['placeholder'])) placeholder="{{ $field['placeholder'] }}" @endif
                                                                      @if($field['required'] ?? false) required @endif
                                                                      @if(isset($field['readonly']) && $field['readonly']) readonly @endif>{{ $field['value'] ?? '' }}</textarea>
                                                            @if(isset($field['help']))
                                                                <small class="form-text text-muted">{{ $field['help'] }}</small>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            @elseif($field['type'] === 'file')
                                                <!-- 파일 업로드 -->
                                                <div class="box-sec">
                                                    <div class="form-group">
                                                        <div class="form-tit">{{ $field['label'] }}@if($field['required'] ?? false)<span style="color: #dc3545;">*</span>@endif</div>
                                                        <div class="form-conts">
                                                            <div class="file-upload">
                                                                <p class="txt">첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</p>
                                                                <button type="button" class="btn primary ico-before ico-upload md" 
                                                                        onclick="document.getElementById('{{ $field['id'] ?? $field['name'] ?? 'file' }}').click()">파일선택</button>
                                                                <input type="file" 
                                                                       id="{{ $field['id'] ?? $field['name'] ?? 'file' }}"
                                                                       style="display: none;"
                                                                       name="{{ $field['name'] }}" 
                                                                       @if(isset($field['attributes']['accept'])) accept="{{ $field['attributes']['accept'] }}" @endif
                                                                       @if(isset($field['attributes']['multiple'])) multiple @endif
                                                                       @if($field['required'] ?? false) required @endif
                                                                       onchange="updateFileList(this)">
                                                            </div>
                                                            @if(isset($field['help']))
                                                                <small class="form-text text-muted">{{ $field['help'] }}</small>
                                                            @endif
                                                            <div id="{{ $field['id'] ?? $field['name'] ?? 'file' }}_list" class="file-list mt-2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            @elseif($field['type'] === 'radio_group')
                                                <!-- 라디오 그룹 -->
                                                <div class="box-sec">
                                                    @if(isset($field['subsection_title']))
                                                        <h5 class="box-tit2">{{ $field['subsection_title'] }}</h5>
                                                    @endif
                                                    <div class="form-group">
                                                        @if(!isset($field['subsection_title']) && isset($field['label']))
                                                            <div class="form-tit">{{ $field['label'] }}@if($field['required'] ?? false)<span style="color: #dc3545;">*</span>@endif</div>
                                                        @endif
                                                        <div class="form-conts">
                                                            <div class="row chk-area chk-column">
                                                                @if(isset($field['options']) && is_array($field['options']))
                                                                    @foreach($field['options'] as $index => $option)
                                                                        <div class="form-check lg">
                                                                            <input type="radio" 
                                                                                   name="{{ $field['name'] ?? 'radio_field' }}" 
                                                                                   id="{{ ($field['name'] ?? 'radio_field') }}-{{ $index + 1 }}" 
                                                                                   value="{{ $option['value'] ?? '' }}"
                                                                                   @if(isset($option['checked']) && $option['checked']) checked @endif>
                                                                            <label for="{{ ($field['name'] ?? 'radio_field') }}-{{ $index + 1 }}">{{ $option['label'] ?? '' }}</label>
                                                                        </div>
                                                                    @endforeach
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            @elseif(($field['type'] ?? '') === 'custom_html')
                                                <!-- 커스텀 HTML -->
                                                <div class="box-sec">
                                                    {!! $field['html'] ?? '' !!}
                                                </div>
                                            @elseif(($field['type'] ?? '') === 'terms_box')
                                                <!-- 약관 박스 -->
                                                <div class="box-sec">
                                                    <div class="terms-content-box">
                                                        @if(isset($field['title']))
                                                            <h5>{{ $field['title'] }}</h5>
                                                        @endif
                                                        <div>
                                                            @foreach($field['sections'] ?? [] as $section)
                                                                @if(isset($section['heading']))
                                                                    <p><strong>{{ $section['heading'] }}</strong></p>
                                                                @endif
                                                                
                                                                @if(isset($section['paragraphs']))
                                                                    @foreach($section['paragraphs'] as $paragraph)
                                                                        <p>{!! $paragraph !!}</p>
                                                                    @endforeach
                                                                @endif
                                                                
                                                                @if(isset($section['list']))
                                                                    <ul>
                                                                        @foreach($section['list'] as $item)
                                                                            <li>{{ $item }}</li>
                                                                        @endforeach
                                                                    </ul>
                                                                @endif
                                                            @endforeach
                                                        </div>
                                                    </div>
                                                </div>
                                            @elseif(($field['type'] ?? '') === 'checkbox_single')
                                                @if($isCheckboxGroup)
                                                    @php
                                                        // 마지막 체크박스인지 확인
                                                        $isLastCheckbox = false;
                                                        $lastCheckboxIndex = -1;
                                                        for ($i = count($group['fields']) - 1; $i >= 0; $i--) {
                                                            if (($group['fields'][$i]['type'] ?? '') === 'checkbox_single') {
                                                                $lastCheckboxIndex = $i;
                                                                break;
                                                            }
                                                        }
                                                        $currentIndex = array_search($field, $group['fields']);
                                                        $isLastCheckbox = ($currentIndex === $lastCheckboxIndex);
                                                    @endphp
                                                    <!-- 체크박스 그룹 내 아이템 -->
                                                    <div class="form-check lg" style="margin-bottom: {{ $isLastCheckbox ? '0' : '10px' }};">
                                                        <input type="checkbox" 
                                                               name="{{ $field['name'] ?? 'checkbox' }}" 
                                                               id="{{ $field['name'] ?? 'checkbox' }}" 
                                                               value="{{ $field['value'] ?? 'yes' }}"
                                                               @if($field['required'] ?? false) required @endif
                                                               @if(isset($field['checked']) && $field['checked']) checked @endif>
                                                        <label for="{{ $field['name'] ?? 'checkbox' }}">
                                                            {{ $field['label'] ?? '' }}
                                                            @if($field['required'] ?? false)<span style="color: #dc3545;">*</span>@endif
                                                        </label>
                                                    </div>
                                                @else
                                                    <!-- 단일 체크박스 -->
                                                    <div class="box-sec">
                                                        <div class="form-group">
                                                            <div class="form-conts">
                                                                <div class="form-check lg">
                                                                    <input type="checkbox" 
                                                                           name="{{ $field['name'] ?? 'checkbox' }}" 
                                                                           id="{{ $field['name'] ?? 'checkbox' }}" 
                                                                           value="{{ $field['value'] ?? 'yes' }}"
                                                                           @if($field['required'] ?? false) required @endif
                                                                           @if(isset($field['checked']) && $field['checked']) checked @endif>
                                                                    <label for="{{ $field['name'] ?? 'checkbox' }}">
                                                                        {{ $field['label'] ?? '' }}
                                                                        @if($field['required'] ?? false)<span style="color: #dc3545;">*</span>@endif
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endif
                                            @endif
                                        @endforeach
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @elseif(isset($content) && !empty($content))
                        <!-- 기존 콘텐츠 방식 -->
                        {!! $content !!}
                    @else
                        <!-- 디버그: 데이터 구조 확인 -->
                        @if(config('app.debug'))
                            <div class="debug-info" style="background: #f8f9fa; border: 1px solid #dee2e6; padding: 15px; margin: 15px 0;">
                                <h4>Debug: Current Step Data</h4>
                                <p><strong>Current Step:</strong> {{ $currentStep }}</p>
                                <p><strong>Available Steps Content:</strong> {{ isset($config['steps_content']) ? implode(', ', array_keys($config['steps_content'])) : 'None' }}</p>
                                @if(isset($config['steps_content'][$currentStep]))
                                    <p><strong>Step {{ $currentStep }} Fields:</strong> {{ count($config['steps_content'][$currentStep]['fields'] ?? []) }} fields found</p>
                                @endif
                            </div>
                        @endif
                    @endif
                </div>
            </div>
            <!-- //컨텐츠 영역 -->

            <!-- 페이지 버튼 영역 -->
            <div class="page-btn-wrap both">
                @if($buttons['cancel']['show'] || $buttons['prev']['show'])
                    @if($buttons['cancel']['show'])
                        <button type="button" class="btn xlg tertiary btn-cancel">{{ $buttons['cancel']['text'] }}</button>
                    @elseif($buttons['prev']['show'])
                        <button type="button" class="btn xlg tertiary btn-prev">{{ $buttons['prev']['text'] }}</button>
                    @endif
                @endif

                @if($buttons['save']['show'] || $buttons['next']['show'] || $buttons['submit']['show'])
                <div class="btn-wrap">
                    @if($buttons['save']['show'])
                        <button type="button" class="btn xlg tertiary btn-save">{{ $buttons['save']['text'] }}</button>
                    @endif
                    @if($buttons['next']['show'])
                        <button type="button" class="btn xlg btn-next">{{ $buttons['next']['text'] }}</button>
                    @elseif($buttons['submit']['show'])
                        <button type="button" class="btn xlg btn-submit">{{ $buttons['submit']['text'] }}</button>
                    @endif
                </div>
                @endif
            </div>
            <!-- //페이지 버튼 영역 -->
        </div>
    @endif
</div>

<script>
// 파일 업로드 리스트 업데이트 함수
function updateFileList(input) {
    const listElement = document.getElementById(input.id + '_list');
    if (!listElement) return;
    
    listElement.innerHTML = '';
    
    if (input.files && input.files.length > 0) {
        const fileList = document.createElement('ul');
        fileList.style.listStyle = 'none';
        fileList.style.padding = '0';
        fileList.style.marginTop = '10px';
        
        for (let i = 0; i < input.files.length; i++) {
            const li = document.createElement('li');
            li.style.padding = '5px 0';
            li.style.color = '#666';
            li.innerHTML = '📎 ' + input.files[i].name + ' (' + formatFileSize(input.files[i].size) + ')';
            fileList.appendChild(li);
        }
        
        listElement.appendChild(fileList);
    }
}

// 파일 사이즈 포맷 함수
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// 드래그 앤 드롭 기능 추가
document.addEventListener('DOMContentLoaded', function() {
    const fileUploads = document.querySelectorAll('.file-upload');
    
    fileUploads.forEach(function(uploadArea) {
        const fileInput = uploadArea.querySelector('input[type="file"]');
        
        if (fileInput) {
            // 드래그 오버
            uploadArea.addEventListener('dragover', function(e) {
                e.preventDefault();
                e.stopPropagation();
                uploadArea.style.backgroundColor = '#f0f8ff';
                uploadArea.style.border = '2px dashed #4a90e2';
            });
            
            // 드래그 리브
            uploadArea.addEventListener('dragleave', function(e) {
                e.preventDefault();
                e.stopPropagation();
                uploadArea.style.backgroundColor = '';
                uploadArea.style.border = '';
            });
            
            // 드롭
            uploadArea.addEventListener('drop', function(e) {
                e.preventDefault();
                e.stopPropagation();
                uploadArea.style.backgroundColor = '';
                uploadArea.style.border = '';
                
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    fileInput.files = files;
                    updateFileList(fileInput);
                }
            });
        }
    });
});
</script>