import { View } from "react-native";
import { Divider as RNEDivider } from "@rneui/themed";

interface DividerProps {
  /**
   * Determines whether a line should be rendered.
   */
  line?: boolean;

  /**
   * Specifies the margin size around the divider.
   */
  margin?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

/**
 * Returns the spacing value for the given margin size.
 */
const useDividerSpacing = (value: DividerProps["margin"]): number => {
  switch (value) {
    case "sm":
      return 8;
    case "md":
      return 16;
    case "lg":
      return 24;
    case "xl":
      return 32;
    case "xxl":
      return 48;
    default:
      return 4;
  }
};

/**
 * A functional component that renders a customizable divider.
 *
 * @param line - If true, renders a line using the RNE Divider component.
 * @param margin - The margin size around the divider.

 */
export default function Divider({ line, margin }: DividerProps) {
  return (
    <View
      style={{
        marginVertical: useDividerSpacing(margin),
        backgroundColor: "transparent",
      }}
    >
      {line && <RNEDivider />}
    </View>
  );
}
