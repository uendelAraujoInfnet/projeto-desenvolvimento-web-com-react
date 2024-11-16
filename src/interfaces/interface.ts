export interface ALertProps {
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
}

export interface CustomButtonProps {
  label: string;
  navigateTo: string;
}

export interface AvatarProps {
  name: string;
}

export interface BoxProps {
  children: React.ReactNode;
}

export interface CardProps {
  title: string;
  description: string;
}

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}