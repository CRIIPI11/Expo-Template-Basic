import { View, ViewProps } from "react-native";

type HStackProps = {
  children: React.ReactNode;
  spacing?: "sm" | "md" | "lg" | "xl" | "xxl";
  reversed?: boolean;
  position?: "left" | "center" | "right" | "full";
} & ViewProps;

/**
 * Given a spacing string, returns the corresponding number of pixels.
 * If the argument is not recognized, 8 is returned.
 *
 */
const useSpacing = (spacing: HStackProps["spacing"]) => {
  switch (spacing) {
    case "sm":
      return 16;
    case "md":
      return 24;
    case "lg":
      return 32;
    case "xl":
      return 40;
    case "xxl":
      return 48;
    default:
      return 8;
  }
};

/**
 * Given a position string, returns the corresponding flexbox align-items value.
 * Options are "left", "center", "right", and "full".
 * "flex-start" is returned by default.
 *
 */
const usePosition = (position: HStackProps["position"]) => {
  switch (position) {
    case "left":
      return "flex-start";
    case "center":
      return "center";
    case "right":
      return "flex-end";
    case "full":
      return "stretch";
    default:
      return "flex-start";
  }
};

/**
 * A horizontal stack of components.
 *
 * This component is a version of the 'HStack' component from the 'SwiftUI' library intended for use in React Native for android and iOS.
 *
 * By default, the stack will display elements in order from left to right.
 * The `reversed` prop can be used to display them in reverse order.
 *
 * The `spacing` prop can be used to space elements out evenly.
 * The `position` prop can be used to specify how the elements should be laid out.
 *
 */
const HStack = ({ children, spacing, reversed, ...props }: HStackProps) => {
  return (
    <View
      style={{
        flexDirection: reversed ? "row-reverse" : "row",
        gap: useSpacing(spacing),
        alignSelf: usePosition(props.position),
        marginVertical: 4,
      }}
      {...props}
    >
      {children}
    </View>
  );
};

export default HStack;
