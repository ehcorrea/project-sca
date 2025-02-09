import { Button, Input, Layout, Spancing } from '@/components';
import { authStore } from '@/stores/authStore';
import { ScrollView, View } from 'react-native';

export function PerfilScreen() {
  const { auth } = authStore();
  return (
    <Layout>
      <ScrollView
        bounces={false}
        className="flex-1"
        contentContainerStyle={{ padding: '5%' }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row">
          <Spancing y={15} />
          <View className="flex-1">
            <Input label="Nome" value={auth?.user.nome} />
          </View>
          <Spancing x={2} />
          <View className="flex-1">
            <Input label="Cargo" value="Account Executive" />
          </View>
        </View>
        <View className="flex-1">
          <Input label="E-mail" value={auth?.user.email} />
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }}>
        <Button disabled>SALVAR</Button>
      </View>
    </Layout>
  );
}
