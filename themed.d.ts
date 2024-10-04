// themed.d.ts
import "@rneui/themed";
import { TextStyle } from "react-native";

declare module "@rneui/themed" {
  export interface TextProps {
    bold?: boolean;
    h5?: boolean;
    h5Style?: TextStyle;
    color?: string;
    underline?: boolean;
  }

  export interface ButtonProps {
    titleColor?: string;
    ButtonColor?: string;
  }

  export interface ComponentTheme {
    Text: Partial<TextProps>;
    Button: Partial<ButtonProps>;
  }

  export interface Colors {
    text: string;
    background: string;
    tint: string;
    icon: string;
    headerBackground: string;
    tabBackground: string;
    tabIconDefault: string;
    tabIconSelected: string;
  }
}
