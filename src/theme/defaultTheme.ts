interface Spacing {
  s_2: number;
  s_4: number;
  s_8: number;
  s_10: number;
  s_12: number;
  s_15: number;
  s_16: number;
  s_18: number;
  s_20: number;
  s_24: number;
  s_28: number;
  s_32: number;
  s_36: number;
  s_40: number;
}

export const SPACING: Spacing = {
  s_2: 2,
  s_4: 4,
  s_8: 8,
  s_10: 10,
  s_12: 12,
  s_15: 15,
  s_16: 16,
  s_18: 18,
  s_20: 20,
  s_24: 24,
  s_28: 28,
  s_32: 32,
  s_36: 36,
  s_40: 40,
};

interface Color {
  Black: string;
  BlackRGB10: string;
  Orange: string;
  OrangeRGBA0: string;
  Grey: string;
  DarkGrey: string;
  Yellow: string;
  White: string;
  WhiteRGBA15: string;
  WhiteRGBA32: string;
  WhiteRGBA50: string;
  WhiteRGBA75: string;
}

export const COLORS: Color = {
  Black: '#000',
  BlackRGB10: 'rgba(0,0,0,0.1)',
  Orange: '#FF5524',
  OrangeRGBA0: 'rgba(255,85,36,0)',
  Grey: '#333333',
  DarkGrey: '#0b0b0b',
  Yellow: '#E1CD17',
  White: '#FFF',
  WhiteRGBA15: 'rgba(255, 255, 255, 0.15)',
  WhiteRGBA32: 'rgba(255, 255, 255, 0.15)',
  WhiteRGBA50: 'rgba(255, 255, 255, 0.50)',
  WhiteRGBA75: 'rgba(255, 255, 255, 0.75)',
};

interface FontFamily {
  poppins_black: string;
  poppins_bold: string;
  poppins_extrabold: string;
  poppins_extralight: string;
  poppins_light: string;
  poppins_medium: string;
  poppins_regular: string;
  poppins_semibold: string;
  poppins_thin: string;
}

export const FONTFAMILY: FontFamily = {
  poppins_black: 'Poppins-Black',
  poppins_bold: 'Poppins-Bold',
  poppins_extrabold: 'Poppins-Extrabold',
  poppins_extralight: 'Poppins-Extralight',
  poppins_light: 'Poppins-Light',
  poppins_medium: 'Poppins-Medium',
  poppins_regular: 'Poppins-Regular',
  poppins_semibold: 'Poppins-Semibold',
  poppins_thin: 'Poppins-Thin',
};

interface FontSize {
  s_4: number;
  s_8: number;
  s_10: number;
  s_12: number;
  s_14: number;
  s_16: number;
  s_18: number;
  s_20: number;
  s_24: number;
  s_30: number;
}

export const FONTSIZE: FontSize = {
  s_4: 4,
  s_8: 8,
  s_10: 10,
  s_12: 12,
  s_14: 14,
  s_16: 16,
  s_18: 18,
  s_20: 20,
  s_24: 24,
  s_30: 30,
};

interface BorderRadius {
  r_4: number;
  r_8: number;
  r_10: number;
  r_15: number;
  r_20: number;
  r_25: number;
}

export const BORDER_RADIUS: BorderRadius = {
  r_4: 4,
  r_8: 8,
  r_10: 10,
  r_15: 15,
  r_20: 20,
  r_25: 25,
};
