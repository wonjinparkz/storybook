// Standalone types for StepProcessPage
export interface BreadcrumbItem {
  text: string;
  url?: string;
}

export interface StepInfo {
  num: number;
  title: string;
}

export interface StepButtons {
  prev?: { text: string; show: boolean };
  save?: { text: string; show: boolean };
  next?: { text: string; show: boolean };
  cancel?: { text: string; show: boolean };
  submit?: { text: string; show: boolean };
}

export interface SuccessInfo {
  message: string;
  applicant?: string;
  info?: string[];
  relatedServices?: { text: string; url: string }[];
  relatedTitle?: string;
}

export interface SelectOption {
  value: string;
  label: string;
  selected?: boolean;
}

export interface CheckboxOption {
  value: string;
  label: string;
  checked?: boolean;
}

export interface RadioOption {
  value: string;
  label: string;
  checked?: boolean;
}

export interface TermsSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface FormField {
  type: 'text' | 'tel' | 'email' | 'number' | 'date' | 'time' | 'select' | 'textarea' | 'file' | 
        'checkbox_single' | 'checkbox_group' | 'radio_group' | 'terms_box' | 'custom_html' | 'section_title';
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  readonly?: boolean;
  help?: string;
  
  // Select options
  options?: SelectOption[] | CheckboxOption[] | RadioOption[];
  
  // Textarea specific
  rows?: number;
  
  // File upload specific
  accept?: string;
  multiple?: boolean;
  
  // Terms box specific
  title?: string;
  sections?: TermsSection[];
  
  // Custom HTML
  html?: string;
  
  // Checkbox single specific
  checked?: boolean;
  
  // Section title specific (for grouping)
  subsection_title?: string;
}

export interface FormSection {
  section_title: string;
  fields: FormField[];
}

export interface StepContent {
  fields?: FormField[] | FormSection[];
  html?: string;
  buttons?: StepButtons;
}

export interface StepProcessPageProps {
  type: 'nostep' | 'single' | 'multi' | 'success';
  title: string;
  breadcrumb: BreadcrumbItem[];
  steps?: StepInfo[];
  currentStep?: number;
  content?: string;
  stepContents?: { [stepNumber: number]: StepContent };
  buttons?: StepButtons;
  success?: SuccessInfo;
  className?: string;
}