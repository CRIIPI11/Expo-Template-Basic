import { ScrollView as RNScrollView } from "react-native";

type ScrollViewProps = {
  children: React.ReactNode;
} & RNScrollView["props"];

const ScrollView = ({ children, ...props }: ScrollViewProps) => {
  return (
    <RNScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
      keyboardDismissMode="on-drag"
      {...props}
    >
      {children}
    </RNScrollView>
  );
};

export default ScrollView;
