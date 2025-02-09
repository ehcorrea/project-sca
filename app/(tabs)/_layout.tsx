import { Tabs } from 'expo-router';

import { HeaderUser, TabBar } from '@/components';
import { View } from 'react-native';
import { theme } from '@/constants';

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.default.bg.main }}>
      <HeaderUser />
      <Tabs
        screenOptions={{ headerShown: false, headerTintColor: 'red' }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen name="home" />
        <Tabs.Screen name="simulacoes" />
        <Tabs.Screen name="dashboard" />
      </Tabs>
    </View>
  );
}
