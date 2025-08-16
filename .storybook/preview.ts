import type { Preview } from '@storybook/react-webpack5'
import '../src/government/fonts.css'
import './storybook-override.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      // 문서에서도 폰트 적용
      inlineStories: false,
    },
  },
  globalTypes: {
    theme: {
      description: 'Government theme',
      defaultValue: 'government',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['government', 'default'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;