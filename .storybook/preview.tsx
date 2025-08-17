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
    docs: {
      toc: true,
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
        return (
          <GovernmentProvider autoLoad={true}>
            <div style={{ minHeight: '100vh' }}>
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