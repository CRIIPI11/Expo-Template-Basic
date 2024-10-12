import { Header, makeStyles, HeaderProps } from "@rneui/themed";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { View } from "react-native";

type MainViewProps = {
  withHeader?: boolean;
  headerLeftComponent?: HeaderProps["leftComponent"];
  headerCenterComponent?: HeaderProps["centerComponent"];
  headerRightComponent?: HeaderProps["rightComponent"];
  headerProps?: Omit<
    HeaderProps,
    "leftComponent" | "centerComponent" | "rightComponent"
  >;
} & SafeAreaViewProps;

type RequiredHeaderProps = {
  withHeader: true;
  headerCenterComponent: HeaderProps["centerComponent"];
};

type OptionalHeaderProps = {
  withHeader?: false;
  headerLeftComponent?: never;
  headerRightComponent?: never;
  headerCenterComponent?: never;
  headerProps?: never;
};

type PropsWithHeader = MainViewProps & RequiredHeaderProps;
type PropsNoHeader = MainViewProps & OptionalHeaderProps;

/**
 * MainView component serves as the root view for all pages in the application.
 * It automatically handles background color adjustments for both dark and light modes.
 *
 * This component allows the inclusion of a customizable header through the 'withHeader' prop.
 * When 'withHeader' is set to true, it utilizes the Header component from the RNE library,
 * enabling users to pass additional props via 'HeaderProps' for further customization.
 * @param {object} style - Additional styles to be applied to the container.
 * @param {boolean} withHeader - Flag to determine if the header should be displayed.
 * @param {HeaderProps["leftComponent"]} headerLeftComponent - Component to be displayed on the left side of the header.
 * @param {HeaderProps["centerComponent"]} headerCenterComponent - Component to be displayed in the center of the header.
 * @param {HeaderProps["rightComponent"]} headerRightComponent - Component to be displayed on the right side of the header.
 * @param {Omit<HeaderProps, "leftComponent" | "centerComponent" | "rightComponent">} headerProps - Additional props for the header.
 * @param {SafeAreaViewProps} props - Additional props for the SafeAreaView.
 */
const MainView = ({
  children,
  style,
  withHeader,
  headerLeftComponent,
  headerCenterComponent,
  headerRightComponent,
  headerProps,
  ...props
}: PropsWithHeader | PropsNoHeader) => {
  const Container = useHeaderHeight() > 0 || withHeader ? View : SafeAreaView;
  const styles = useStyles();
  return (
    <>
      {withHeader && (
        <Header
          leftComponent={headerLeftComponent}
          centerComponent={headerCenterComponent}
          rightComponent={headerRightComponent}
          {...headerProps}
        />
      )}
      <Container style={[styles.container, style]} {...props}>
        {children}
      </Container>
    </>
  );
};

export default MainView;

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
}));
