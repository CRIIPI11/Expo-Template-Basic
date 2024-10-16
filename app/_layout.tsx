import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { useColorScheme } from "@/hooks/useColorScheme";
import { LogBox } from "react-native";

// Used to ignore warnings in RN's console. Uncomment to temporarily disable warnings.
// LogBox.ignoreAllLogs();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  /**
   * Set the theme for the app.
   * Edit the `createTheme` function below to customize the theme. You can edit the colors, components defaults, etc.
   * See: https://reactnativeelements.com/docs/customizing for exact details.
   */
  const theme = createTheme({
    lightColors: {
      background: "#ffffff",
      text: "#11181C",
      tint: "#0a7ea4",
      icon: "#687076",
      headerBackground: "#fff",
      tabBackground: "#E1D9D1",
      tabIconDefault: "#687076",
      tabIconSelected: "#0a7ea4",
      grey3: "#11181C",
      palette: {
        accents0: "#000",
        accents1: "#111",
        accents2: "#333",
        accents3: "#444",
        accents4: "#666",
        accents5: "#888",
        accents6: "#999",
        accents7: "#eaeaea",
        accents8: "#fafafa",
        accents9: "#fff",
      },
    },
    darkColors: {
      background: "#000",
      text: "#ECEDEE",
      tint: "#fff",
      icon: "#9BA1A6",
      headerBackground: "#151718",
      tabBackground: "#151718",
      tabIconDefault: "#9BA1A6",
      tabIconSelected: "#fff",
      grey3: "#ECEDEE",
      palette: {
        accents0: "#fff",
        accents1: "#fafafa",
        accents2: "#eaeaea",
        accents3: "#999",
        accents4: "#888",
        accents5: "#666",
        accents6: "#444",
        accents7: "#333",
        accents8: "#111",
        accents9: "#000",
      },
    },
    components: {
      Text(props, theme) {
        return {
          style: {
            textAlign: props.align ?? "left",
            textDecorationLine: props.underline ? "underline" : "none",
            color: theme.colors.text,
            fontWeight: props.bold ? "bold" : "normal",
            marginVertical: 4,
            ...(props.h5 && { fontSize: 16 }),
            ...(props.h5Style && props.h5Style),
            ...(props.color && { color: props.color }),
          },
        };
      },
      Button(props, theme) {
        return {
          titleStyle: {
            fontWeight: "bold",
            marginHorizontal: 8,
          },
          buttonStyle: {
            borderRadius: 8,
          },
          containerStyle: {
            marginVertical: 8,
            marginHorizontal: 4,
          },
          activeOpacity: 0.8,
          size: "lg",
        };
      },
      SearchBar(props, theme) {
        return {
          inputContainerStyle: {
            backgroundColor: theme.colors.grey4,
          },
          containerStyle: {
            backgroundColor: "transparent",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: 4,
          },
          placeholder: "Search...",
          round: true,
        };
      },
      Input(props, theme) {
        return {
          inputContainerStyle: {
            ...(props.mode === "outlined" && {
              backgroundColor: theme.colors.grey5,
              borderColor: theme.colors.palette.accents3,
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 8,
            }),
          },
          containerStyle: {
            marginVertical: 4,
            opacity: props.disabled ? 0.5 : 1,
          },
          renderErrorMessage: false,
          labelStyle: {
            fontWeight: "500",
          },
          errorStyle: {
            fontWeight: "bold",
          },
        };
      },
      FAB(props, theme) {
        return {
          color: theme.colors.tint,
          placement: "right",
          icon: { color: theme.colors.palette.accents8 },
        };
      },
      Header(props, theme) {
        return {
          backgroundColor: theme.colors.tabBackground,
          containerStyle: {
            marginBottom: 0,
          },
          leftComponent: {
            color: theme.colors.palette.accents1,
            style: {
              color: theme.colors.palette.accents1,
              fontSize: 18,
            },
          },
          centerComponent: {
            color: theme.colors.palette.accents1,
            style: {
              color: theme.colors.palette.accents1,
              fontSize: 18,
            },
          },
          rightComponent: {
            color: theme.colors.palette.accents1,
            style: {
              color: theme.colors.palette.accents1,
              fontSize: 18,
            },
          },
        };
      },
      Skeleton(props, theme) {
        return {
          height: 100,
          skeletonStyle: {
            backgroundColor: theme.colors.palette.accents5,
          },
        };
      },
    },
    mode: useColorScheme() ?? "light",
  });

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="+not-found"
          options={{
            title: "Oops!",
            headerTintColor: theme.mode === "light" ? "#000" : "#fff",
            headerStyle: {
              backgroundColor: theme.mode === "light" ? "#eaeaea" : "#444",
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
