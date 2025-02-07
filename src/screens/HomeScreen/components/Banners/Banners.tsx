import { useState } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { Spancing } from '@/components';

import { Dot } from '../Dot/Dot';

import * as S from './Banners.styles';

export function Banners() {
  const [position, setPosition] = useState(0);
  return (
    <View>
      <PagerView
        className="flex-1 h-32"
        initialPage={0}
        onPageScroll={({ nativeEvent }) => setPosition(nativeEvent.position)}
      >
        <S.Page key="0">
          <S.Image source={require('@/assets/images/banner-simulacao.png')} />
        </S.Page>
        <S.Page key="1">
          <S.Image source={require('@/assets/images/banner-dashboard.png')} />
        </S.Page>
        <S.Page key="2">
          <S.Image source={require('@/assets/images/banner-cargo.png')} />
        </S.Page>
      </PagerView>
      <Spancing y={8} />
      <View className="flex-row justify-center">
        <Dot isFocused={position === 0} />
        <Spancing x={5} />
        <Dot isFocused={position === 1} />
        <Spancing x={5} />
        <Dot isFocused={position === 2} />
      </View>
    </View>
  );
}
