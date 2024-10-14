import { View, ViewProps } from "react-native";
import React from "react";

type VStackProps = {
  children: React.ReactNode;
  spacing?: "sm" | "md" | "lg" | "xl" | "xxl";
  reversed?: boolean;
  position?: "left" | "center" | "right" | "full";
} & ViewProps;

/**
 * Given a spacing string, returns the corresponding number of pixels.
 * If the argument is not recognized, 0 is returned.
 *
 */
const useSpacing = (spacing: VStackProps["spacing"]) => {
  switch (spacing) {
    case "sm":
      return 4;
    case "md":
      return 8;
    case "lg":
      return 16;
    case "xl":
      return 24;
    case "xxl":
      return 32;
    default:
      return 0;
  }
};

/**
 * Given a position string, returns the corresponding flexbox align-items value.
 * Options are "left", "center", "right", and "full".
 * "flex-start" is returned by default.
 *
 */
const usePosition = (position: VStackProps["position"]) => {
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
 * A vertical stack of components.
 *
 * This component is a version of the 'VStack' component from the 'SwiftUI' library intended for use in React Native for android and iOS.
 *
 * By default, the stack will display elements in order from top to bottom.
 * The `reversed` prop can be used to display them in reverse order.
 *
 * The `spacing` prop can be used to space elements out evenly.
 * The `position` prop can be used to specify how the elements should be laid out.

 */
const VStack = ({ children, spacing, reversed, ...props }: VStackProps) => {
  return (
    <View
      style={{
        flexDirection: reversed ? "column-reverse" : "column",
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

export default VStack;
