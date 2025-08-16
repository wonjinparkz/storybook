import React from 'react';
import './Card.css';

export interface CardProps {
  /** Card 제목 */
  title: string;
  /** Card 내용 */
  content: string;
  /** Card 이미지 URL (선택사항) */
  imageUrl?: string;
  /** Card 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 그림자 효과 */
  shadow?: boolean;
  /** 호버 효과 */
  hoverable?: boolean;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  size = 'medium',
  shadow = true,
  hoverable = false,
  onClick,
  ...props
}) => {
  const cardClasses = [
    'card',
    `card--${size}`,
    shadow ? 'card--shadow' : '',
    hoverable ? 'card--hoverable' : '',
    onClick ? 'card--clickable' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {imageUrl && (
        <div className="card__image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{content}</p>
      </div>
    </div>
  );
};