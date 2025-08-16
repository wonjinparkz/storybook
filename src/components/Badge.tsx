import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /** Badge에 표시될 텍스트 */
  label: string;
  /** Badge 색상 테마 */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /** Badge 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 둥근 모양 여부 */
  rounded?: boolean;
  /** 아이콘 (선택사항) */
  icon?: React.ReactNode;
  /** 삭제 버튼 표시 여부 */
  removable?: boolean;
  /** 삭제 버튼 클릭 핸들러 */
  onRemove?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  rounded = false,
  icon,
  removable = false,
  onRemove,
  ...props
}) => {
  const badgeClasses = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    rounded ? 'badge--rounded' : '',
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {icon && <span className="badge__icon">{icon}</span>}
      <span className="badge__label">{label}</span>
      {removable && (
        <button 
          className="badge__remove"
          onClick={onRemove}
          aria-label="Remove badge"
        >
          ×
        </button>
      )}
    </span>
  );
};