import { TouchableOpacityProps } from 'react-native';
import { router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { TextProps } from '../Text/Text';

import * as S from './Button.styles';

export type ButtonProps = {
  children?: string;
  icon?: React.ReactElement;
  label?: TextProps;
} & Partial<S.ButtonProps> &
  TouchableOpacityProps;

export function Button({ children, label, icon, ...props }: ButtonProps) {
  return (
    <S.Button {...props}>
      {icon}
      <S.Label {...label}>{children}</S.Label>
    </S.Button>
  );
}

type ButtonAccountProps = {
  variant?: 'facebook' | 'google';
} & ButtonProps;

Button.Account = ({ variant = 'facebook', ...props }: ButtonAccountProps) => {
  const variantProps = accountVariants[variant];
  return (
    <Button
      className="flex-1"
      elevation
      icon={variantProps.icon}
      label={{ palette: 'black' }}
      palette="white"
      {...props}
    >
      {variantProps.label}
    </Button>
  );
};

const accountVariants = {
  facebook: {
    label: 'FACEBOOK',
    icon: (
      <S.IconAccount source={require('@/assets/images/icon-facebook.svg')} />
    ),
  },
  google: {
    label: 'GOOGLE',
    icon: <S.IconAccount source={require('@/assets/images/icon-google.svg')} />,
  },
};

Button.Back = () => {
  const handlePress = () => {
    router.back();
  };

  return (
    <S.ButtonIcon elevation palette="white" onPress={handlePress}>
      <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
    </S.ButtonIcon>
  );
};
