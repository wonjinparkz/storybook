import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input 라벨 */
  label?: string;
  /** 에러 메시지 */
  error?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** Input 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 전체 너비 여부 */
  fullWidth?: boolean;
  /** 좌측 아이콘 */
  leftIcon?: React.ReactNode;
  /** 우측 아이콘 */
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  size = 'medium',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}, ref) => {
  const inputClasses = [
    'input-field',
    `input-field--${size}`,
    fullWidth ? 'input-field--full-width' : '',
    error ? 'input-field--error' : '',
    leftIcon ? 'input-field--with-left-icon' : '',
    rightIcon ? 'input-field--with-right-icon' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
          {label}
          {props.required && <span className="input-required">*</span>}
        </label>
      )}
      
      <div className="input-wrapper">
        {leftIcon && <span className="input-icon input-icon--left">{leftIcon}</span>}
        
        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />
        
        {rightIcon && <span className="input-icon input-icon--right">{rightIcon}</span>}
      </div>
      
      {(error || helperText) && (
        <div className={`input-message ${error ? 'input-message--error' : 'input-message--helper'}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
});