import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자 입력을 받는 텍스트 인풋 컴포넌트입니다. 다양한 크기와 상태를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Input의 크기를 설정합니다.',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비를 차지할지 여부를 설정합니다.',
    },
    disabled: {
      control: 'boolean',
      description: 'Input 비활성화 여부를 설정합니다.',
    },
    required: {
      control: 'boolean',
      description: '필수 입력 여부를 설정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
};

export const WithLabel: Story = {
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
  },
};

export const Required: Story = {
  args: {
    label: '이메일',
    placeholder: 'email@example.com',
    required: true,
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    type: 'password',
    helperText: '8자 이상, 특수문자 포함',
  },
};

export const WithError: Story = {
  args: {
    label: '이메일',
    placeholder: 'email@example.com',
    type: 'email',
    value: 'invalid-email',
    error: '올바른 이메일 형식이 아닙니다.',
  },
};

export const Small: Story = {
  args: {
    label: '작은 입력',
    placeholder: '작은 크기',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: '큰 입력',
    placeholder: '큰 크기',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화된 입력',
    placeholder: '입력할 수 없습니다',
    disabled: true,
    value: '비활성화된 값',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: '검색',
    placeholder: '검색어를 입력하세요',
    leftIcon: '🔍',
  },
};

export const WithRightIcon: Story = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    type: 'password',
    rightIcon: '👁️',
  },
};

export const FullWidth: Story = {
  args: {
    label: '전체 너비',
    placeholder: '전체 너비를 차지합니다',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};