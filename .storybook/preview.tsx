import type { Preview } from '@storybook/react';
import { GovernmentProvider } from '../src/government/components/GovernmentProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
    docs: {
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['*'],
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Government 폴더의 스토리들만 GovernmentProvider로 감싸기
      const isGovernmentStory = context.title?.includes('Government/');
      
      if (isGovernmentStory) {
        // Z. Page 카테고리는 전체 페이지이므로 전체 높이 적용
        const isPageComponent = context.title?.includes('Z. Page');
        const wrapperStyle = isPageComponent 
          ? { minHeight: '100vh' }
          : { minHeight: 'auto' };
        
        return (
          <GovernmentProvider autoLoad={true}>
            <div style={wrapperStyle}>
              <Story />
            </div>
          </GovernmentProvider>
        );
      }
      
      // 일반 컴포넌트는 그대로
      return <Story />;
    },
  ],
};

export default preview;