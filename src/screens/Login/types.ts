export interface LoginProps {
  changeLanguage?: () => void;
  valueNickname?: string;
  onChangeTextNickname?: (text: string) => void;
  onPress?: () => void;
  flex?: number;
}
