import { ScrollView, View } from 'react-native';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';

import {
  Spancing,
  Layout,
  Text,
  CardSquare,
  CardSimulation,
} from '@/components';

import { Banners, SearchBar } from './components';

export function HomeScreen() {
  return (
    <Layout>
      <ScrollView className="flex-1">
        <View className="p-[5%]">
          <SearchBar />
          <Spancing y={10} />
          <Banners />
          <Spancing y={10} />
          <Text weight="semi" size="xlarge">
            Estatísticas
          </Text>
          <Spancing y={8} />
          <View className="flex-row justify-between">
            <CardSquare
              label="Simulações"
              info="123"
              icon={<FontAwesome6 name="chart-line" color="white" size={24} />}
            />
            <CardSquare
              label="Vendas"
              info="20"
              icon={
                <FontAwesome6 name="chart-simple" color="white" size={24} />
              }
            />
            <CardSquare
              label="Lucro"
              info="R$ 9k"
              icon={<FontAwesome6 name="sack-dollar" color="white" size={24} />}
            />
          </View>
          <Spancing y={10} />
          <View className="flex-row justify-between items-end">
            <Text weight="semi" size="xlarge">
              Simulações recentes
            </Text>
            <Text palette="primary">ver mais</Text>
          </View>

          <Spancing y={8} />
          <CardSimulation
            title="Contorno de objeções"
            content="Identifique os pontos de resistência, compreenda as preocupações envolvidas e ofereça"
            icon={<MaterialIcons name="emoji-people" size={30} color="white" />}
          />
          <Spancing y={5} />
          <CardSimulation
            title="Negociação de preços"
            content="Negociar preços é uma arte que exige equilíbrio entre firmeza e flexibilidade"
            icon={<MaterialIcons name="handshake" size={30} color="white" />}
          />
          <Spancing y={5} />
          <CardSimulation
            title="Conversa Livre"
            content="Sem regras rígidas, ela permite trocas espontâneas, ideias fluindo naturalmente e a construção de relacionamentos autênticos"
            icon={<MaterialIcons name="forum" size={30} color="white" />}
          />
          <Spancing y={5} />
          <CardSimulation
            title="Apresentação da Solução"
            content="Com clareza, confiança e foco nas necessidades do cliente, a solução se torna a resposta ideal para seus desafios, criando impacto e gerando confiança."
            icon={
              <MaterialIcons name="lightbulb-outline" size={30} color="white" />
            }
          />
        </View>
      </ScrollView>
    </Layout>
  );
}
