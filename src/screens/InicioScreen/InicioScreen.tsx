import { TouchableOpacity, View } from 'react-native';
import { ImageBackground } from 'expo-image';
import { router } from 'expo-router';

import { Button, Line, Spancing } from '@/components';
import { useLogin } from '@/hooks';

import * as S from './InicioScreen.styles';

export function InicioScreen() {
  const { loginGoogle } = useLogin();

  const handleCriarContaScreen = () => {
    router.push('/criar-conta');
  };

  const handleEntrarComEmail = () => {
    router.push('/login');
  };

  return (
    <ImageBackground
      className="flex-1"
      contentFit="cover"
      source={require('@/assets/images/background-inicio.png')}
    >
      <S.BackgroundLinearGradient>
        <View className="flex-1">
          <View className="flex-2 mt-[20%]">
            <S.Title palette="gray" size={300}>
              Bem-vindo ao
            </S.Title>
            <S.Title palette="primary" size={50}>
              Sales Coach
            </S.Title>
            <S.Subtitle>
              Onde fechar negócio com parceiros, é compromisso.
            </S.Subtitle>
          </View>
          <View className="flex-1 items-center justify-center">
            <View className="flex-row w-full items-center">
              <Line color="#ffffffa6" />
              <S.TextSocial>entrar com</S.TextSocial>
              <Line color="#ffffffa6" />
            </View>
            <Spancing y={10} />
            <View className="flex-row">
              <Button.Account />
              <Spancing x={10} />
              <Button.Account variant="google" onPress={loginGoogle} />
            </View>
            <Spancing y={10} />
            <S.ButtonLogin onPress={handleEntrarComEmail}>
              <S.TextLogin>Começar com email</S.TextLogin>
            </S.ButtonLogin>
          </View>
        </View>
      </S.BackgroundLinearGradient>
      <S.Footer>
        <S.TextSignUp>Não possui uma conta?</S.TextSignUp>
        <Spancing x={4} />
        <TouchableOpacity onPress={handleCriarContaScreen}>
          <S.TextSignUp textDecoration="underline">Criar</S.TextSignUp>
        </TouchableOpacity>
      </S.Footer>
    </ImageBackground>
  );
}
