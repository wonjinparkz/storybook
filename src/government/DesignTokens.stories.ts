import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DesignTokens from './DesignTokens';

const meta: Meta<typeof DesignTokens> = {
  title: 'Government/Design System/Design Tokens',
  component: DesignTokens,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# 정부 디자인 시스템 토큰

고양이관리위원회에서 사용하는 모든 디자인 토큰들을 한눈에 확인할 수 있는 페이지입니다.

## 포함된 토큰 유형

- **🎨 Color Tokens**: Primary, Secondary, Point, Gray 등 모든 컬러 시스템
- **📝 Typography Tokens**: Display, Heading, Title, Body, Link, Detail, Label 폰트 크기
- **📏 Spacing Tokens**: 여백과 간격을 위한 spacer 토큰들
- **🔲 Border Tokens**: Border radius 설정값들
- **🔘 Button Tokens**: 버튼의 높이, 패딩, 폰트 크기 등

## 사용 방법

\`\`\`css
/* CSS에서 사용 */
.my-component {
  color: var(--primary);
  font-size: var(--fz-title-lg);
  margin: var(--spacer-4);
  border-radius: var(--rd-8);
}
\`\`\`

모든 토큰은 \`c_kds.css\` 파일의 \`:root\`에 정의되어 있습니다.
        `
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      story: {
        height: '600px'
      }
    }
  }
};