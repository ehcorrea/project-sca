import { ScrollView, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { CardSimulation, Layout, Spancing, SearchBar } from '@/components';

import * as S from './SimulacoesListaScreen.styles';

export function SimulacoesListaScreen() {
  return (
    <Layout>
      <View className="p-[5%] flex-1">
        <SearchBar
          button={
            <S.AddButton>
              <S.AddIcon name="plus" />
            </S.AddButton>
          }
        />
        <Spancing y={10} />
        <ScrollView className="flex-1">
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
          <Spancing y={5} />
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
        </ScrollView>
      </View>
    </Layout>
  );
}
