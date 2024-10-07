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
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
