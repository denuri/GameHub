import { SplashScreen, Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../theme/global.css";
import { useEffect } from "react";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "MadimiOne-Regular": require("../assets/fonts/MadimiOne-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </>
  );
}
