/**
 * Spacing Scale — matched to Figma design
 */

export const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 6,
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  giga: 64,

  // Semantic
  screenPadding: 16,
  cardPadding: 16,
  cardRadius: 16,
  cardRadiusLarge: 24,
  buttonRadius: 12,
  inputRadius: 12,
  pillRadius: 9999,
  questionCardRadius: 30,
  bottomSheetRadius: 24,
  avatarSize: 56,
  sectionGap: 12,
  itemGap: 8,
} as const;

export type Spacing = typeof spacing;
