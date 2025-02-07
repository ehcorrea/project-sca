import { TextInput, View } from 'react-native';
import { useRef } from 'react';

import { Spancing } from '@/components';

import * as S from './SearchBar.styles';

export function SearchBar() {
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    inputRef?.current?.focus();
  };

  return (
    <View className="flex-row w-full items-center">
      <S.Container onPress={handleFocus}>
        <View className="flex-row w-full items-center">
          <S.SearchIcon name="search1" />
          <Spancing x={5} />
          <S.SearchInput ref={inputRef} />
        </View>
      </S.Container>
      <View className="w-[15%] items-end">
        <S.FilterButton>
          <S.FilterIcon name="sound-mix" />
        </S.FilterButton>
      </View>
    </View>
  );
}
