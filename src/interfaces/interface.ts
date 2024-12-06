import { SupabaseClient } from "@supabase/supabase-js";

export interface ALertProps {
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
}

export interface CustomButtonProps {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
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
  children?: React.ReactNode;
}

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface FabProps {
  onClick: () => void;
}

export interface GridProps {
  children: React.ReactNode;
}

export interface IconButtonProps {
  onClick: () => void;
}

export interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export interface SnackBarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export interface SwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TabProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface TextFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
}

export interface TypographyProps {
  text: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
  color?: string;
}

interface AppContextProps {
  supabase: SupabaseClient;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}