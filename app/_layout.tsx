import { ThemeProvider } from 'styled-components/native';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import { theme } from '@/constants';
import { useEffect } from 'react';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'SofiaPro-Light': require('@/assets/fonts/SofiaPro-Light.ttf'),
    'SofiaPro-Regular': require('@/assets/fonts/SofiaPro-Regular.ttf'),
    'SofiaPro-Medium': require('@/assets/fonts/SofiaPro-Medium.ttf'),
    'SofiaPro-SemiBold': require('@/assets/fonts/SofiaPro-SemiBold.ttf'),
    'SofiaPro-Bold': require('@/assets/fonts/SofiaPro-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
