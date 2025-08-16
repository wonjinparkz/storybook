import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '재사용 가능한 Card 컴포넌트입니다. 다양한 크기와 스타일 옵션을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Card의 크기를 설정합니다.',
    },
    shadow: {
      control: 'boolean',
      description: '그림자 효과를 활성화/비활성화합니다.',
    },
    hoverable: {
      control: 'boolean',
      description: '호버 애니메이션 효과를 활성화/비활성화합니다.',
    },
    onClick: {
      action: 'clicked',
      description: 'Card 클릭 시 실행되는 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '기본 카드',
    content: '이것은 기본 카드 컴포넌트입니다. 제목과 내용을 표시할 수 있습니다.',
  },
};

export const WithImage: Story = {
  args: {
    title: '이미지가 있는 카드',
    content: '이 카드에는 상단에 이미지가 포함되어 있습니다.',
    imageUrl: 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Sample+Image',
  },
};

export const Small: Story = {
  args: {
    title: '작은 카드',
    content: '작은 크기의 카드입니다.',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    title: '큰 카드',
    content: '큰 크기의 카드입니다. 더 많은 내용을 담을 수 있습니다.',
    size: 'large',
    imageUrl: 'https://via.placeholder.com/400x200/7ED321/FFFFFF?text=Large+Card',
  },
};

export const Hoverable: Story = {
  args: {
    title: '호버 효과 카드',
    content: '마우스를 올리면 애니메이션 효과가 나타납니다.',
    hoverable: true,
    imageUrl: 'https://via.placeholder.com/300x200/F5A623/FFFFFF?text=Hover+Me',
  },
};

export const Clickable: Story = {
  args: {
    title: '클릭 가능한 카드',
    content: '이 카드는 클릭할 수 있습니다. 클릭하면 액션이 실행됩니다.',
    hoverable: true,
    onClick: () => alert('카드가 클릭되었습니다!'),
  },
};

export const NoShadow: Story = {
  args: {
    title: '그림자 없는 카드',
    content: '그림자 효과가 없는 평면적인 카드입니다.',
    shadow: false,
  },
};