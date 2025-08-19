import { useState } from 'react';
import { StepProcessPageProps, FormField, FormSection, SelectOption, CheckboxOption, RadioOption } from './types';

const StepProcessPage = ({
  type,
  title,
  breadcrumb,
  steps = [],
  currentStep = 1,
  content = '',
  stepContents = {},
  buttons = {},
  success,
  className = ''
}: StepProcessPageProps) => {
  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  // 폼 필드 값 변경 핸들러
  const handleFieldChange = (name: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 체크박스 그룹 값 변경 핸들러
  const handleCheckboxGroupChange = (name: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentValues = prev[name] || [];
      if (checked) {
        return {
          ...prev,
          [name]: [...currentValues, value]
        };
      } else {
        return {
          ...prev,
          [name]: currentValues.filter((v: string) => v !== value)
        };
      }
    });
  };

  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  // 기본 버튼 설정
  const defaultButtons = {
    prev: { text: '이전으로', show: false },
    save: { text: '임시저장', show: false },
    next: { text: '다음으로', show: false },
    cancel: { text: '취소하기', show: false },
    submit: { text: '신청하기', show: false }
  };

  const finalButtons = { ...defaultButtons, ...buttons };

  // 파일 업로드 리스트 업데이트 함수
  const updateFileList = (input: HTMLInputElement) => {
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
  };

  // 파일 사이즈 포맷 함수
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // 동적 폼 필드 렌더링
  const renderFormField = (field: FormField, index: number) => {
    const fieldId = field.name || `field-${index}`;
    
    switch (field.type) {
      case 'text':
      case 'tel':
      case 'email':
      case 'number':
      case 'date':
      case 'time':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <input
                type={field.type}
                className="form-control"
                name={field.name}
                id={fieldId}
                value={formData[field.name!] || field.value || ''}
                placeholder={field.placeholder}
                required={field.required}
                readOnly={field.readonly}
                title={field.label}
                onChange={(e) => handleFieldChange(field.name!, e.target.value)}
              />
              {field.help && (
                <small className="form-text text-muted">{field.help}</small>
              )}
            </div>
          </div>
        );

      case 'select':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <select
                className="form-control"
                name={field.name}
                id={fieldId}
                value={formData[field.name!] || field.value || ''}
                required={field.required}
                onChange={(e) => handleFieldChange(field.name!, e.target.value)}
              >
                {field.placeholder && (
                  <option value="">{field.placeholder}</option>
                )}
                {(field.options as SelectOption[])?.map((option, optIndex) => (
                  <option
                    key={optIndex}
                    value={option.value}
                    selected={option.selected}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {field.help && (
                <small className="form-text text-muted">{field.help}</small>
              )}
            </div>
          </div>
        );

      case 'textarea':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <textarea
                className="form-control"
                name={field.name}
                id={fieldId}
                rows={field.rows || 4}
                placeholder={field.placeholder}
                required={field.required}
                readOnly={field.readonly}
                value={formData[field.name!] || field.value || ''}
                onChange={(e) => handleFieldChange(field.name!, e.target.value)}
              />
              {field.help && (
                <small className="form-text text-muted">{field.help}</small>
              )}
            </div>
          </div>
        );

      case 'file':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <div className="file-upload">
                <p className="txt">첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</p>
                <button
                  type="button"
                  className="btn primary ico-before ico-upload md"
                  onClick={() => {
                    const input = document.getElementById(fieldId) as HTMLInputElement;
                    input?.click();
                  }}
                >
                  파일선택
                </button>
                <input
                  type="file"
                  id={fieldId}
                  style={{ display: 'none' }}
                  name={field.name}
                  accept={field.accept}
                  multiple={field.multiple}
                  required={field.required}
                  onChange={(e) => updateFileList(e.target)}
                />
              </div>
              {field.help && (
                <small className="form-text text-muted">{field.help}</small>
              )}
              <div id={`${fieldId}_list`} className="file-list mt-2"></div>
            </div>
          </div>
        );

      case 'checkbox_single':
        return (
          <div className="form-group" key={index}>
            <div className="form-conts">
              <div className="form-check lg">
                <input
                  type="checkbox"
                  name={field.name}
                  id={fieldId}
                  checked={formData[field.name!] !== undefined ? formData[field.name!] : field.checked}
                  required={field.required}
                  onChange={(e) => handleFieldChange(field.name!, e.target.checked)}
                />
                <label htmlFor={fieldId}>
                  {field.label}
                  {field.required && <span style={{ color: '#dc3545' }}>*</span>}
                </label>
              </div>
            </div>
          </div>
        );

      case 'checkbox_group':
        return (
          <div className="form-group" key={index}>
            <div className="form-tit">
              {field.label}
              {field.required && <span style={{ color: '#dc3545' }}>*</span>}
            </div>
            <div className="form-conts">
              <div className="row chk-area chk-column">
                {(field.options as CheckboxOption[])?.map((option, optIndex) => (
                  <div key={optIndex} className="form-check lg">
                    <input
                      type="checkbox"
                      name={`${field.name}[]`}
                      id={`${fieldId}-${optIndex + 1}`}
                      value={option.value}
                      checked={(formData[field.name!] || []).includes(option.value)}
                      onChange={(e) => handleCheckboxGroupChange(field.name!, option.value, e.target.checked)}
                    />
                    <label htmlFor={`${fieldId}-${optIndex + 1}`}>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'radio_group':
        return (
          <div key={index}>
            {field.subsection_title && (
              <h5 className="box-tit2">{field.subsection_title}</h5>
            )}
            <div className="form-group">
              {!field.subsection_title && field.label && (
                <div className="form-tit">
                  {field.label}
                  {field.required && <span style={{ color: '#dc3545' }}>*</span>}
                </div>
              )}
              <div className="form-conts">
                <div className="row chk-area chk-column">
                  {(field.options as RadioOption[])?.map((option, optIndex) => (
                    <div key={optIndex} className="form-check lg">
                      <input
                        type="radio"
                        name={field.name || 'radio_field'}
                        id={`${fieldId}-${optIndex + 1}`}
                        value={option.value}
                        checked={formData[field.name!] === option.value || (!formData[field.name!] && option.checked)}
                        onChange={(e) => handleFieldChange(field.name!, e.target.value)}
                      />
                      <label htmlFor={`${fieldId}-${optIndex + 1}`}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'terms_box':
        return (
          <div key={index} className="box-sec">
            <div className="terms-content-box">
              {field.title && <h5>{field.title}</h5>}
              <div>
                {field.sections?.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    {section.heading && (
                      <p><strong>{section.heading}</strong></p>
                    )}
                    {section.paragraphs?.map((paragraph, pIndex) => (
                      <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                    {section.list && (
                      <ul>
                        {section.list.map((item, listIndex) => (
                          <li key={listIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'custom_html':
        return (
          <div key={index} className="box-sec">
            <div dangerouslySetInnerHTML={{ __html: field.html || '' }} />
          </div>
        );

      case 'section_title':
        return null;

      default:
        return null;
    }
  };

  // 동적 폼 섹션 렌더링
  const renderFormSection = (section: FormSection, sectionIndex: number) => {
    const checkboxCount = section.fields.filter(field => field.type === 'checkbox_single').length;
    const isCheckboxGroup = checkboxCount >= 2;

    return (
      <div key={sectionIndex} className="txt-box bg-white">
        <h4 className="box-tit1">{section.section_title}</h4>
        <div className={`box-cnt${isCheckboxGroup ? ' checkbox-group-compact' : ''}`}>
          <div className="box-sec">
            {isCheckboxGroup ? (
              <>
                {section.fields
                  .filter(field => field.type !== 'checkbox_single')
                  .map((field, fieldIndex) => renderFormField(field, fieldIndex))}
                
                {checkboxCount > 0 && (
                  <div style={{ paddingTop: '15px' }}>
                    {section.fields
                      .filter(field => field.type === 'checkbox_single')
                      .map((field, fieldIndex, checkboxFields) => (
                        <div
                          key={fieldIndex}
                          className="form-check lg"
                          style={{ marginBottom: fieldIndex === checkboxFields.length - 1 ? '0' : '10px' }}
                        >
                          <input
                            type="checkbox"
                            name={field.name}
                            id={field.name}
                            checked={formData[field.name!] !== undefined ? formData[field.name!] : field.checked}
                            required={field.required}
                            onChange={(e) => handleFieldChange(field.name!, e.target.checked)}
                          />
                          <label htmlFor={field.name}>
                            {field.label}
                            {field.required && <span style={{ color: '#dc3545' }}>*</span>}
                          </label>
                        </div>
                      ))}
                  </div>
                )}
              </>
            ) : (
              section.fields.map((field, fieldIndex) => renderFormField(field, fieldIndex))
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderStepIndicator = () => {
    if (steps.length === 0) return null;

    const stepItems = steps.map((step, index) => {
      const stepNumber = index + 1;
      const isActive = stepNumber === currentStep;
      const isDone = stepNumber < currentStep;

      return (
        <li key={step.num} className={`${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}>
          <span>
            {isActive && <em className="sr-only">현재단계</em>}
            <i className="step">{step.num}단계</i>
            <span className="step-tit">{step.title}</span>
          </span>
        </li>
      );
    });

    return (
      <ol className="step-wrap">
        {stepItems}
      </ol>
    );
  };

  const renderSuccessPage = () => {
    if (!success) return null;

    return (
      <div className="inner">
        <div className="comp-msg-wrap">
          <div 
            dangerouslySetInnerHTML={{ 
              __html: success.message.replace('완료', '<span class="point">완료</span>') 
            }} 
          />
        </div>

        {(success.applicant || success.info) && (
          <ul className="comp-info-box">
            {success.applicant && (
              <li>
                <div className="key">신청인</div>
                <div className="value">{success.applicant}</div>
              </li>
            )}
            {success.info && (
              <li>
                <div className="key">신청정보</div>
                <div className="value">
                  {success.info.map((info, index) => (
                    <p key={index} className="p">{info}</p>
                  ))}
                </div>
              </li>
            )}
          </ul>
        )}

        <div className="comp-btn-wrap">
          <button type="button" className="btn xlg tertiary">다른 민원신청하기</button>
          <button type="button" className="btn xlg">신청 내역/결과보기</button>
        </div>

        {success.relatedServices && success.relatedServices.length > 0 && (
          <dl className="comp-link-box">
            <dt>
              <p className="tit">이런 서비스는 어떠세요?</p>
              <p className="txt">{success.relatedTitle || '함께 이용하면 좋은 민원입니다.'}</p>
            </dt>
            <dd>
              {success.relatedServices.map((service, index) => (
                <a
                  key={index}
                  href={service.url}
                  className={`btn sm btn-txt ${index === 0 ? 'ico-go' : 'ico-arr'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(service.url);
                  }}
                >
                  {service.text}
                </a>
              ))}
              <a href="#" className="btn sm btn-txt ico-arr">모든 민원 서비스 목록 보기</a>
            </dd>
          </dl>
        )}
      </div>
    );
  };

  const renderRegularPage = () => {
    return (
      <div className={`inner narrow ${type !== 'nostep' ? 'page-step' : ''}`}>
        <div className={`page-title-wrap ${type === 'single' ? 'between' : ''}`}>
          <h2 className="h-tit">{title}</h2>
          {type === 'single' && renderStepIndicator()}
        </div>

        {type === 'multi' && renderStepIndicator()}

        <div className={`conts-area ${type !== 'nostep' ? 'step-type' : ''}`}>
          <div className="conts-wrap">
            {type !== 'nostep' && steps[currentStep - 1] && (
              <h3 className="sec-tit">
                <span className="step-now">
                  <strong className="active">{currentStep}단계</strong> / {steps.length}단계
                </span>
                {steps[currentStep - 1].title}
              </h3>
            )}
            
            {stepContents[currentStep] ? (
              <div className="dynamic-form">
                <p className="fieldset-msg">전체 항목 필수 입력 사항입니다.</p>
                
                {stepContents[currentStep].fields && (
                  <>
                    {Array.isArray(stepContents[currentStep].fields) && 
                     stepContents[currentStep].fields!.length > 0 && 
                     'section_title' in stepContents[currentStep].fields![0] ? (
                      (stepContents[currentStep].fields as FormSection[]).map((section, index) => 
                        renderFormSection(section, index)
                      )
                    ) : (
                      <div className="txt-box bg-white">
                        <h4 className="box-tit1">정보 입력</h4>
                        <div className="box-cnt">
                          <div className="box-sec">
                            {(stepContents[currentStep].fields as FormField[]).map((field, index) => 
                              renderFormField(field, index)
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
                
                {stepContents[currentStep].html && (
                  <div dangerouslySetInnerHTML={{ __html: stepContents[currentStep].html! }} />
                )}
              </div>
            ) : content ? (
              <div className="content-body" dangerouslySetInnerHTML={{ __html: content }} />
            ) : null}
          </div>
        </div>

        {(finalButtons.cancel?.show || finalButtons.prev?.show || 
          finalButtons.save?.show || finalButtons.next?.show || finalButtons.submit?.show) && (
          <div className="page-btn-wrap both">
            {(finalButtons.cancel?.show || finalButtons.prev?.show) && (
              <>
                {finalButtons.cancel?.show && (
                  <button type="button" className="btn xlg tertiary btn-cancel">
                    {finalButtons.cancel.text}
                  </button>
                )}
                {!finalButtons.cancel?.show && finalButtons.prev?.show && (
                  <button type="button" className="btn xlg tertiary btn-prev">
                    {finalButtons.prev.text}
                  </button>
                )}
              </>
            )}

            {(finalButtons.save?.show || finalButtons.next?.show || finalButtons.submit?.show) && (
              <div className="btn-wrap">
                {finalButtons.save?.show && (
                  <button type="button" className="btn xlg tertiary btn-save">
                    {finalButtons.save.text}
                  </button>
                )}
                {finalButtons.next?.show && (
                  <button type="button" className="btn xlg btn-next">
                    {finalButtons.next.text}
                  </button>
                )}
                {!finalButtons.next?.show && finalButtons.submit?.show && (
                  <button type="button" className="btn xlg btn-submit">
                    {finalButtons.submit.text}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div id="container" className={className}>
      {breadcrumb.length > 0 && (
        <nav className="breadcrumb-wrap" aria-label="브레드크럼">
          <ol className="breadcrumb">
            {breadcrumb.map((crumb, index) => (
              <li key={index} className={index === 0 ? 'home' : ''}>
                {crumb.url ? (
                  <a 
                    href={crumb.url} 
                    className="txt"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(crumb.url!);
                    }}
                  >
                    {crumb.text}
                  </a>
                ) : (
                  <span className="txt">{crumb.text}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {type === 'success' ? renderSuccessPage() : renderRegularPage()}
    </div>
  );
};

export default StepProcessPage;