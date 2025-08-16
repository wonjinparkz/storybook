import './styles/index.css';
import './DesignTokens.css';

// 컬러 토큰 데이터
const colorTokens = {
  'Primary Colors': {
    '--white': '#fff',
    '--black': '#000',
    '--primary': '#246BEB',
    '--secondary': '#003675',
    '--point': '#E71825',
    '--danger': '#EB003B',
    '--warning': '#FFB724',
    '--success': '#008A1E',
    '--information': '#2768FF',
  },
  'Primary Variations': {
    '--primary-5': '#EFF5FF',
    '--primary-10': '#D3E1FB',
    '--primary-20': '#A7C4F7',
    '--primary-30': '#7CA6F3',
    '--primary-40': '#5089EF',
    '--primary-60': '#1D56BC',
    '--primary-70': '#16408D',
    '--primary-80': '#0E2B5E',
    '--primary-90': '#07152F',
  },
  'Secondary Variations': {
    '--secondary-5': '#EDF1F5',
    '--secondary-10': '#CDD7E4',
    '--secondary-20': '#B4C4D6',
    '--secondary-30': '#99B0CB',
    '--secondary-40': '#2A5C96',
    '--secondary-60': '#002B5E',
    '--secondary-70': '#002046',
    '--secondary-80': '#00162F',
    '--secondary-90': '#000B17',
  },
  'Point Variations': {
    '--point-5': '#FDF2F3',
    '--point-10': '#FAD1D3',
    '--point-20': '#F5A3A8',
    '--point-30': '#F1747C',
    '--point-40': '#EC4651',
    '--point-60': '#B9131E',
    '--point-70': '#8B0E16',
    '--point-80': '#5C0A0F',
    '--point-90': '#2E0507',
  },
  'Gray Scale': {
    '--gray-5': '#F8F8F8',
    '--gray-10': '#F0F0F0',
    '--gray-20': '#E4E4E4',
    '--gray-30': '#D8D8D8',
    '--gray-40': '#C6C6C6',
    '--gray-50': '#8E8E8E',
    '--gray-60': '#717171',
    '--gray-70': '#555555',
    '--gray-80': '#2D2D2D',
    '--gray-90': '#1D1D1D',
  }
};

// 타이포그래피 토큰 데이터
const typographyTokens = {
  'Display': {
    '--fz-display-sm': '4rem',
    '--fz-display-md': '5rem',
    '--fz-display-lg': '6.6rem',
  },
  'Heading': {
    '--fz-heading-sm': '3.2rem',
    '--fz-heading-md': '4rem',
    '--fz-heading-lg': '5rem',
  },
  'Title': {
    '--fz-title-xsm': '1.5rem',
    '--fz-title-sm': '1.7rem',
    '--fz-title-md': '1.9rem',
    '--fz-title-lg': '2.1rem',
    '--fz-title-xlg': '2.5rem',
    '--fz-title-xxlg': '3.2rem',
  },
  'Body': {
    '--fz-body-sm': '1.5rem',
    '--fz-body-md': '1.7rem',
    '--fz-body-lg': '1.9rem',
  },
  'Link': {
    '--fz-link-sm': '1.5rem',
    '--fz-link-md': '1.7rem',
    '--fz-link-lg': '1.9rem',
  },
  'Detail': {
    '--fz-detail-sm': '1.3rem',
    '--fz-detail-md': '1.5rem',
    '--fz-detail-lg': '1.7rem',
  },
  'Label': {
    '--fz-label-xsm': '1.3rem',
    '--fz-label-sm': '1.5rem',
    '--fz-label-md': '1.7rem',
    '--fz-label-lg': '1.9rem',
  }
};

// 스페이싱 토큰 데이터 (주요 값들만)
const spacingTokens = {
  'Small Spacing': {
    '--spacer-1': '0.4rem',
    '--spacer-2': '0.8rem',
    '--spacer-3': '1.2rem',
    '--spacer-4': '1.6rem',
    '--spacer-5': '2rem',
    '--spacer-6': '2.4rem',
    '--spacer-7': '2.8rem',
    '--spacer-8': '3.2rem',
  },
  'Medium Spacing': {
    '--spacer-10': '4rem',
    '--spacer-12': '4.8rem',
    '--spacer-15': '6rem',
    '--spacer-20': '8rem',
    '--spacer-25': '10rem',
    '--spacer-30': '12rem',
  },
  'Large Spacing': {
    '--spacer-35': '14rem',
    '--spacer-40': '16rem',
    '--spacer-45': '18rem',
    '--spacer-50': '20rem',
  }
};

// Border Radius 토큰
const borderTokens = {
  'Border Radius': {
    '--rd-1': '0.1rem',
    '--rd-2': '0.2rem',
    '--rd-4': '0.4rem',
    '--rd-6': '0.6rem',
    '--rd-8': '0.8rem',
    '--rd-10': '1rem',
    '--rd-12': '1.2rem',
    '--rd-full': '100%',
  }
};

// 버튼 토큰 데이터
const buttonTokens = {
  'Button Heights': {
    '--btn-h-xsm': '3.2rem',
    '--btn-h-sm': '4rem',
    '--btn-h-md': '4.8rem',
    '--btn-h-lg': '5.6rem',
    '--btn-h-xlg': '6.4rem',
  },
  'Button Padding': {
    '--btn-px-xsm': '1rem',
    '--btn-px-sm': '1.2rem',
    '--btn-px-md': '1.6rem',
    '--btn-px-lg': '2rem',
    '--btn-px-xlg': '2.4rem',
  },
  'Button Font Size': {
    '--btn-fz-xsm': '1.5rem',
    '--btn-fz-sm': '1.7rem',
    '--btn-fz-md': '1.7rem',
    '--btn-fz-lg': '1.9rem',
    '--btn-fz-xlg': '1.9rem',
  }
};

interface TokenSectionProps {
  title: string;
  tokens: Record<string, string>;
  type: 'color' | 'typography' | 'spacing' | 'border' | 'button';
}

const TokenSection = ({ title, tokens, type }: TokenSectionProps) => {
  const renderToken = (tokenName: string, value: string) => {
    switch (type) {
      case 'color':
        return (
          <div key={tokenName} className="token-item color-token">
            <div 
              className="color-swatch" 
              style={{ backgroundColor: value }}
              title={value}
            ></div>
            <div className="token-info">
              <code className="token-name">{tokenName}</code>
              <span className="token-value">{value}</span>
            </div>
          </div>
        );
      
      case 'typography':
        return (
          <div key={tokenName} className="token-item typography-token">
            <div 
              className="typography-sample" 
              style={{ fontSize: value }}
            >
              가나다라마바사
            </div>
            <div className="token-info">
              <code className="token-name">{tokenName}</code>
              <span className="token-value">{value}</span>
            </div>
          </div>
        );
      
      case 'spacing':
        return (
          <div key={tokenName} className="token-item spacing-token">
            <div className="spacing-container">
              <div 
                className="spacing-bar" 
                style={{ width: value }}
              ></div>
            </div>
            <div className="token-info">
              <code className="token-name">{tokenName}</code>
              <span className="token-value">{value}</span>
            </div>
          </div>
        );
      
      case 'border':
        return (
          <div key={tokenName} className="token-item border-token">
            <div 
              className="border-sample" 
              style={{ borderRadius: value }}
            ></div>
            <div className="token-info">
              <code className="token-name">{tokenName}</code>
              <span className="token-value">{value}</span>
            </div>
          </div>
        );
      
      case 'button':
        return (
          <div key={tokenName} className="token-item button-token">
            <div className="token-info">
              <code className="token-name">{tokenName}</code>
              <span className="token-value">{value}</span>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="token-section">
      <h3 className="token-section-title">{title}</h3>
      <div className={`token-grid token-grid-${type}`}>
        {Object.entries(tokens).map(([tokenName, value]) => 
          renderToken(tokenName, value)
        )}
      </div>
    </div>
  );
};

const DesignTokens = () => {
  return (
    <div className="design-tokens-container">
      <div className="tokens-header">
        <h1>정부 디자인 시스템 토큰</h1>
        <p>고양이관리위원회에서 사용하는 디자인 토큰들을 확인할 수 있습니다.</p>
      </div>

      <div className="tokens-content">
        {/* 컬러 섹션 */}
        <section className="tokens-category">
          <h2>🎨 Color Tokens</h2>
          {Object.entries(colorTokens).map(([categoryName, tokens]) => (
            <TokenSection 
              key={categoryName}
              title={categoryName}
              tokens={tokens}
              type="color"
            />
          ))}
        </section>

        {/* 타이포그래피 섹션 */}
        <section className="tokens-category">
          <h2>📝 Typography Tokens</h2>
          {Object.entries(typographyTokens).map(([categoryName, tokens]) => (
            <TokenSection 
              key={categoryName}
              title={categoryName}
              tokens={tokens}
              type="typography"
            />
          ))}
        </section>

        {/* 스페이싱 섹션 */}
        <section className="tokens-category">
          <h2>📏 Spacing Tokens</h2>
          {Object.entries(spacingTokens).map(([categoryName, tokens]) => (
            <TokenSection 
              key={categoryName}
              title={categoryName}
              tokens={tokens}
              type="spacing"
            />
          ))}
        </section>

        {/* Border 섹션 */}
        <section className="tokens-category">
          <h2>🔲 Border Tokens</h2>
          {Object.entries(borderTokens).map(([categoryName, tokens]) => (
            <TokenSection 
              key={categoryName}
              title={categoryName}
              tokens={tokens}
              type="border"
            />
          ))}
        </section>

        {/* 버튼 섹션 */}
        <section className="tokens-category">
          <h2>🔘 Button Tokens</h2>
          {Object.entries(buttonTokens).map(([categoryName, tokens]) => (
            <TokenSection 
              key={categoryName}
              title={categoryName}
              tokens={tokens}
              type="button"
            />
          ))}
        </section>
      </div>

      <div className="tokens-footer">
        <p>💡 이 토큰들은 <code>c_kds.css</code> 파일의 <code>:root</code>에 정의되어 있습니다.</p>
        <p>CSS에서 <code>var(--token-name)</code> 형태로 사용할 수 있습니다.</p>
      </div>
    </div>
  );
};

export default DesignTokens;