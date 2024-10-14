import MainView from "@/components/core/MainView";
import { Text } from "@rneui/themed";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <MainView style={styles.container}>
      <Text bold h4>
        This screen doesn't exist.
      </Text>
      <Link href="/" style={styles.link}>
        <Text
          bold
          h5
          color="#007AFF"
          style={{ textDecorationLine: "underline" }}
        >
          Go to home screen!
        </Text>
      </Link>
    </MainView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
