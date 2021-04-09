export interface ThemeType {
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  primary_text: string;
  secondary_text: string;
}

export const light: ThemeType = {
  primary: '#6C5CE7',
  secondary: '#65CFF4',
  background: '#FAFBFE',
  foreground: '#FFFFFF',
  primary_text: '#0D1346',
  secondary_text: '#8F8F8F',
};

export const dark: ThemeType = {
  primary: '#6C5CE7',
  secondary: '#65CFF4',
  background: '#161616',
  foreground: '#222222',
  primary_text: '#FFFFFF',
  secondary_text: '#8F8F8F',
};
