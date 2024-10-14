import MainView from "@/components/core/MainView";
import { makeStyles, Text } from "@rneui/themed";

export default function HomeScreen() {
  const styles = useStyles();
  return (
    <MainView style={styles.container}>
      <Text>Home Screen</Text>
    </MainView>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
}));
