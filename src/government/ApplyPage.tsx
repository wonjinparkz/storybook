import { useState } from 'react';
import { ApplyPageProps, SelectionItem, SelectionSubItem } from './types';
import { withGovernmentAssets } from './components/GovernmentProvider';
import './styles/index.css';
import './styles/government-interactions.css';

const ApplyPage = ({
  breadcrumb,
  title,
  description,
  quick_nav,
  apply_button,
  sections,
  className = ''
}: ApplyPageProps) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
    console.log('Toggled section:', sectionId); // expandedSections 사용
  };

  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_self');
    }
  };

  const renderSelectionItem = (item: string | SelectionItem, index: number) => {
    if (typeof item === 'string') {
      return <li key={index} dangerouslySetInnerHTML={{ __html: item }} />;
    }

    return (
      <li key={index}>
        {item.text && <span dangerouslySetInnerHTML={{ __html: item.text }} />}
        {item.sub_items && (
          <ul className="info-list dash">
            {item.sub_items.map((subItem, subIndex) => 
              renderSubItem(subItem, subIndex)
            )}
          </ul>
        )}
        {item.note && renderNote(item.note)}
      </li>
    );
  };

  const renderSubItem = (subItem: string | SelectionSubItem, index: number) => {
    if (typeof subItem === 'string') {
      return <li key={index} dangerouslySetInnerHTML={{ __html: subItem }} />;
    }

    return (
      <li key={index}>
        <span dangerouslySetInnerHTML={{ __html: subItem.text }} />
        {subItem.note && renderNote(subItem.note)}
      </li>
    );
  };

  const renderNote = (note: { title: string; content: string | { formula: string; details: string[] } }) => (
    <div className="helper-box refer">
      <p className="helper-tit">{note.title}</p>
      <div className="helper-desc-wrap">
        {typeof note.content === 'string' ? (
          <p>{note.content}</p>
        ) : (
          <div className="calc-wrap">
            <p className="total-txt">{note.content.formula}</p>
            <ol className="calc-list">
              {note.content.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div id="container" className={className}>
      {/* breadcrumb */}
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

      {/* 컨텐츠 영역 */}
      <div className="inner quick-nav-inner">
        {/* 페이지 타이틀 영역 */}
        <div className="page-title-wrap">
          <h2 className="h-tit">{title}</h2>
          <p className="guide-txt">{description}</p>
        </div>

        {/* 컨텐츠 영역 */}
        <div className="conts-area quick-nav-type">
          {/* quick link */}
          <div className="quick-nav-area">
            <div className="quick-title-wrap pc-only">
              <p className="guide-txt">이 페이지의 구성</p>
              <h3 className="sec-tit">{title}</h3>
            </div>
            <nav className="quick-list">
              <ul>
                {quick_nav.map((nav) => (
                  <li key={nav.id}>
                    <a 
                      href={`#${nav.id}`} 
                      className={nav.active ? 'active' : ''}
                    >
                      {nav.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="btn-wrap pc-only">
              <button type="button" className="btn primary">
                {apply_button.text}
              </button>
              <p className="guide-txt" dangerouslySetInnerHTML={{ __html: apply_button.sub_text }} />
            </div>
          </div>

          <div className="conts-detail-wrap">
            {/* real contents */}
            <div className="conts-wrap scroll-check">
              {/* 서비스 개요 섹션 */}
              <div className="conts-wrap section-link" id="section_01">
                <h3 className="sec-tit">서비스 개요</h3>
                <div className="tbl-wrap">
                  <dl className="tbl def-list">
                    <dt>서비스 대상</dt>
                    <dd>{sections.overview.service_target}</dd>
                    <dt>서비스 유형</dt>
                    <dd>{sections.overview.service_type}</dd>
                    <dt>선정 기준</dt>
                    <dd>{sections.overview.selection_criteria}</dd>
                    <dt>신청 방법</dt>
                    <dd>
                      <ul>
                        {sections.overview.application_methods.map((method, index) => (
                          <li key={index}>{method}</li>
                        ))}
                      </ul>
                    </dd>
                    <dt>문의처</dt>
                    <dd>{sections.overview.contact}</dd>
                  </dl>
                </div>
              </div>

              {/* 서비스 상세 섹션 */}
              <div className="conts-wrap section-link" id="section_02">
                <h3 className="sec-tit">서비스 상세</h3>
                <div className="conts-wrap">
                  <h4 className="sec-tit">제공 내용</h4>
                  <div className="conts-desc">{sections.detail.provision_content}</div>
                  <div className="tbl-wrap">
                    <table className="tbl col data">
                      <caption>서비스 상세 제공 내용</caption>
                      <colgroup>
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          {sections.detail.payment_table.headers.map((header, index) => (
                            <th 
                              key={index} 
                              scope="col" 
                              className={index === 0 ? '' : 'ar'}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sections.detail.payment_table.rows.map((row, index) => (
                          <tr key={index}>
                            <th scope="row">{row[0]}</th>
                            <td className="ar">{row[1]}</td>
                            <td className="ar">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* 지원 대상 선정 기준 */}
                <div className="conts-wrap">
                  <h4 className="sec-tit">지원 대상 선정 기준</h4>
                  
                  {[
                    { key: 'disability', title: '장애' },
                    { key: 'age', title: '연령' },
                    { key: 'income', title: '소득' }
                  ].map(({ key, title }) => (
                    <div key={key} className="conts-wrap">
                      <h5 className="sec-tit">{title}</h5>
                      <ul className="info-list decimal">
                        {sections.detail.selection_criteria[key as keyof typeof sections.detail.selection_criteria]?.items.map((item, index) => 
                          renderSelectionItem(item, index)
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 신청 방법 및 절차 섹션 */}
              <div className="conts-wrap section-link" id="section_03">
                <h3 className="sec-tit">신청 방법 및 절차</h3>
                <div className="conts-wrap">
                  <h4 className="sec-tit">신청 방법</h4>
                  <ul className="info-list decimal">
                    {sections.application.methods.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
                <div className="conts-wrap">
                  <h4 className="sec-tit">신청 및 처리 절차</h4>
                  <div className="conts-expand-area step">
                    <div className="expand-wrap">
                      <ol className="service-step">
                        {sections.application.process.map((step) => (
                          <li key={step.num}>
                            <span className="num">{step.num}</span>
                            <div className="tit-area">
                              <p className="tit">{step.title}</p>
                              <span className="period">{step.period}</span>
                            </div>
                            <p className="conts-desc">{step.description}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <button 
                      type="button" 
                      className="btn-conts-expand" 
                      aria-hidden="true"
                      onClick={() => toggleExpand('process')}
                    >
                      신청 및 처리 절차 전체 보기
                    </button>
                  </div>
                </div>
              </div>

              {/* 제출 서류 섹션 */}
              <div className="conts-wrap section-link" id="section_04">
                <h3 className="sec-tit">제출 서류</h3>
                <ul className="box-group-area">
                  {sections.documents.map((doc, index) => (
                    <li key={index}>
                      <p className="tit">{doc.title}</p>
                      <div className="btn-wrap" style={{ display: 'flex', gap: '8px' }}>
                        <button type="button" className="btn sm btn-txt ico-down">
                          다운로드
                        </button>
                        <button type="button" className="btn sm btn-txt ico-go">
                          바로보기
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 함께 신청할 수 있는 서비스 섹션 */}
              <div className="conts-wrap section-link" id="section_05">
                <h3 className="sec-tit">함께 신청할 수 있는 서비스</h3>
                <p className="conts-desc" dangerouslySetInnerHTML={{ __html: sections.together_services.description }} />
                <fieldset>
                  <legend>함께 신청할 수 있는 서비스 선택</legend>
                  <div className="fieldset chk-group-area">
                    <div className="chk-all-wrap">
                      <div className="form-group chk-area">
                        <div className="form-check">
                          <input type="checkbox" name="save_id" id="chk_all" />
                          <label htmlFor="chk_all">전체선택</label>
                        </div>
                      </div>
                      <span className="chk-num">
                        {title} 외 <strong>{sections.together_services.services.filter(s => s.checked).length}건</strong> 함께 신청하기
                      </span>
                    </div>
                    <ul className="chk-group-wrap">
                      {sections.together_services.services.map((service) => (
                        <li 
                          key={service.id} 
                          className={`${service.disabled ? 'disabled' : ''} ${service.checked ? 'checked' : ''}`}
                        >
                          <div className="form-group chk-area chk-column">
                            <div className="form-check">
                              <input 
                                type="checkbox" 
                                name="save_id" 
                                id={service.id}
                                disabled={service.disabled}
                                defaultChecked={service.checked}
                              />
                              <label htmlFor={service.id}>
                                <strong className="tit">{service.title}</strong>
                                <span className="conts-desc">{service.description}</span>
                              </label>
                            </div>
                          </div>
                          <div className="btn-wrap">
                            <button 
                              type="button" 
                              className="btn sm btn-txt ico-arr"
                              onClick={() => handleLinkClick('/service-detail')}
                            >
                              자세히보기
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </fieldset>
              </div>

              {/* 부가정보 섹션 */}
              <div className="conts-wrap section-link" id="section_06">
                <h3 className="sec-tit">부가정보</h3>
                
                {sections.additional_info.reference_forms && sections.additional_info.reference_forms.length > 0 && (
                  <div className="conts-wrap">
                    <h4 className="sec-tit">참고서식</h4>
                    <ul className="box-group-area">
                      {sections.additional_info.reference_forms.map((form, index) => (
                        <li key={index}>
                          <p className="tit">{form.title}</p>
                          <div className="btn-wrap" style={{ display: 'flex', gap: '8px' }}>
                            <button type="button" className="btn sm btn-txt ico-down">
                              다운로드
                            </button>
                            <button type="button" className="btn sm btn-txt ico-go">
                              바로보기
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {sections.additional_info.related_websites && sections.additional_info.related_websites.length > 0 && (
                  <div className="conts-wrap">
                    <h4 className="sec-tit">관련 웹사이트</h4>
                    <ul className="info-list decimal btn-txt-list" style={{ textAlign: 'left' }}>
                      {sections.additional_info.related_websites.map((site, index) => (
                        <li key={index} style={{ textAlign: 'left' }}>
                          <a 
                            href={site.url} 
                            className="btn sm btn-txt ico-go" 
                            target="_blank" 
                            rel="noreferrer"
                            title="새 창 열림" 
                            style={{ display: 'inline-block' }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleLinkClick(site.url);
                            }}
                          >
                            {site.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {sections.additional_info.legal_basis && sections.additional_info.legal_basis.length > 0 && (
                  <div className="conts-wrap">
                    <h4 className="sec-tit">근거 법령</h4>
                    <ul className="info-list decimal btn-txt-list" style={{ textAlign: 'left' }}>
                      {sections.additional_info.legal_basis.map((law, index) => (
                        <li key={index} style={{ textAlign: 'left' }}>
                          <a 
                            href={law.url} 
                            className="btn sm btn-txt ico-go" 
                            target="_blank" 
                            rel="noreferrer"
                            title="새 창 열림" 
                            style={{ display: 'inline-block' }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleLinkClick(law.url);
                            }}
                          >
                            {law.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {sections.additional_info.welfare_case && (
                  <div className="conts-wrap">
                    <h4 className="sec-tit">복지 사례 알아보기</h4>
                    <div className="conts-desc" dangerouslySetInnerHTML={{ __html: sections.additional_info.welfare_case }} />
                  </div>
                )}
              </div>

              {/* 정보 변경 내역 섹션 */}
              <div className="conts-wrap section-link" id="section_07">
                <h3 className="sec-tit">정보 변경 내역</h3>
                <div className="tbl-wrap">
                  <table className="tbl col data">
                    <caption>정보 변경 내역</caption>
                    <colgroup>
                      <col style={{ width: '30%' }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">변경일자</th>
                        <th scope="col">변경 내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sections.change_history.map((history, index) => (
                        <tr key={index}>
                          <td>{history.date}</td>
                          <td>{history.content}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 페이지 버튼 영역 */}
        <div className="page-btn-wrap guide mob-only">
          <button type="button" className="btn primary">
            {apply_button.text}
          </button>
          <p className="guide-txt" dangerouslySetInnerHTML={{ __html: apply_button.sub_text }} />
        </div>
      </div>
    </div>
  );
};

export default withGovernmentAssets(ApplyPage);