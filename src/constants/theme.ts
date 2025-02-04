import { rfvalue, rhvalue, rwvalue } from '@/utils/responsive/responsive';

const COLORS_NEUTRAL = {
  black: {
    main: '#1A1D26',
    80: '#2A2F3D',
    50: '#4D5364',
    20: '#6E7489',
  },
  white: {
    main: '#FFFFFF',
    80: '#FFFFFF',
    50: '#FFFFFF',
    20: '#FFFFFF',
  },
  gray: {
    main: '#9A9FAE',
    80: '#A8ACB9',
    50: '#C4C7D0',
    20: '#EBEBEB',
  },
  error: {
    main: '#F30000',
    80: '#F34C4C',
    50: '#F38585',
    20: '#F3BEBE',
  },
};

export const theme = {
  colors: {
    default: {
      primary: {
        main: '#8A19D6',
        80: '#9831DA',
        50: '#B57CE7',
        20: '#DBC6F4',
      },
      secondary: {
        main: '#82D616',
        80: '#8FDB2D',
        50: '#B0E56A',
        20: '#D8F2BC',
      },
      tertiary: {
        main: '#03314B',
        80: '#1C455D',
        50: '#5E7E8F',
        20: '#B8C7D1',
      },
      ...COLORS_NEUTRAL,
    },
  },
  font: {
    weight: {
      light: 'SofiaPro-Light',
      regular: 'SofiaPro-Regular',
      medium: 'SofiaPro-Medium',
      semi: 'SofiaPro-SemiBold',
      bold: 'SofiaPro-Bold',
    },
    size: {
      small: rfvalue(12),
      medium: rfvalue(15),
      large: rfvalue(18),
      xlarge: rfvalue(24),
      huge: rfvalue(30),
      xhuge: rfvalue(36),
    },
  },
  size: {
    button: {
      small: rhvalue(45),
      medium: rhvalue(50),
      large: rhvalue(55),
      huge: rhvalue(60),
    },
  },
  rfvalue,
  rwvalue,
  rhvalue,
} as const;
