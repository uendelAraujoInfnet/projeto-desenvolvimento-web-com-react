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