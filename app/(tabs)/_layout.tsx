import { Tabs } from 'expo-router';

import { TabBar } from '@/components';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, headerTintColor: 'red' }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="simulacoes" />
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="perfil" />
    </Tabs>
  );
}
