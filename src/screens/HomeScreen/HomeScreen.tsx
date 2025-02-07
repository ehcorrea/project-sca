import { ScrollView, View } from 'react-native';

import { Spancing, Layout } from '@/components';

import { Banners, SearchBar } from './components';

export function HomeScreen() {
  return (
    <Layout>
      <ScrollView className="flex-1">
        <View className="p-[5%]">
          <SearchBar />
          <Spancing y={10} />
          <Banners />
        </View>
      </ScrollView>
    </Layout>
  );
}
