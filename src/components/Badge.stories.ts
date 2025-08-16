import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '상태나 카테고리를 표시하는 작은 라벨 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Badge의 색상 테마를 설정합니다.',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Badge의 크기를 설정합니다.',
    },
    rounded: {
      control: 'boolean',
      description: '둥근 모양으로 만들지 여부를 설정합니다.',
    },
    removable: {
      control: 'boolean',
      description: '삭제 버튼을 표시할지 여부를 설정합니다.',
    },
    onRemove: {
      action: 'removed',
      description: '삭제 버튼 클릭 시 실행되는 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'error',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
    variant: 'info',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
    variant: 'secondary',
  },
};

export const Rounded: Story = {
  args: {
    label: 'Rounded',
    rounded: true,
    variant: 'success',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    variant: 'primary',
    icon: '★',
  },
};

export const Removable: Story = {
  args: {
    label: 'Removable',
    variant: 'warning',
    removable: true,
    onRemove: () => alert('Badge removed!'),
  },
};

// All variants example removed for simplicity