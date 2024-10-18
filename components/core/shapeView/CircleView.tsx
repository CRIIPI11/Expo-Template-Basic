import { View, ViewProps } from "react-native";

type CircleViewProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  position?: "left" | "center" | "right";
} & ViewProps;

const useSize = (size: CircleViewProps["size"]) => {
  switch (size) {
    case "sm":
      return 50;
    case "md":
      return 100;
    case "lg":
      return 150;
    case "xl":
      return 200;
    case "xxl":
      return 250;
    default:
      return 100;
  }
};

const usePosition = (position: CircleViewProps["position"]) => {
  switch (position) {
    case "left":
      return "flex-start";
    case "center":
      return "center";
    case "right":
      return "flex-end";
    default:
      return "center";
  }
};

const CircleView = ({
  children,
  size,
  position,
  style,
  ...props
}: CircleViewProps) => {
  return (
    <View
      style={[
        {
          borderWidth: 0.5,
          width: useSize(size),
          height: useSize(size),
          borderRadius: useSize(size) / 2,
          justifyContent: "center",
          alignItems: usePosition(position),
          alignSelf: "center",
          overflow: "hidden",
          paddingVertical: 8,
          paddingHorizontal: 8,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default CircleView;
