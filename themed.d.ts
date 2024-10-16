// themed.d.ts
import "@rneui/themed";
import { TextStyle } from "react-native";

declare module "@rneui/themed" {
  export interface TextProps {
    align?: "center" | "left" | "right";
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

  export interface InputProps {
    mode?: "outlined" | "flat";
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
    info: string;
    palette: {
      accents0: string;
      accents1: string;
      accents2: string;
      accents3: string;
      accents4: string;
      accents5: string;
      accents6: string;
      accents7: string;
      accents8: string;
      accents9: string;
    };
  }
}
