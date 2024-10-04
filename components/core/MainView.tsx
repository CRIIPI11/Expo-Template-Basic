import { makeStyles } from "@rneui/themed";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { View } from "react-native";

const MainView = ({ children, style, ...props }: SafeAreaViewProps) => {
  const Container = useHeaderHeight() > 0 ? View : SafeAreaView;
  const styles = useStyles();
  return (
    <Container style={[styles.container, style]} {...props}>
      {children}
    </Container>
  );
};

export default MainView;

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
}));
