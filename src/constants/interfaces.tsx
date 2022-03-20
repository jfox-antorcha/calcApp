
export interface ThemeColors {
  backgroud: string;
  foreground: string;
  primary: string;
  secondary: string;
  border: string;
  card: string;
  success: string;
  alert: string;
}

export interface ButtonProps {
  value: string;
  color?: string;
  wide?: boolean;
  action: ( value: string ) => void;
}

export interface DigitsProps {
  input: string;
  lastResult: string;
  operator: string;
}