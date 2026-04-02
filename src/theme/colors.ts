/**
 * ReadyAI Brand Color Palette — matched to Figma design
 */

export const palette = {
  // Orange (Primary brand)
  orange10: "#FFF7ED",
  orange20: "#FFEDD5",
  orange30: "#BF5F0A",
  orange40: "#FF7800",
  orange50: "#FF5000",

  // Green
  green10: "#DAF2E6",
  green15: "#E6F2F0",
  green20: "#95E5BD",
  green30: "#57D997",
  green40: "#13BF69",
  green50: "#79D634",
  green60: "#00AA2B",
  green70: "#D8F7C2",

  // Yellow
  yellow10: "#FFF6D9",
  yellow20: "#FFF0BF",
  yellow40: "#FFD033",
  yellow50: "#BF9C26",
  yellow55: "#C69A00",
  yellow60: "#C19400",
  yellow65: "#886418",
  yellow70: "#806B26",
  yellow80: "#403616",

  // Grey
  grey00: "#FFFFFF",
  grey05: "#F5F5F8",
  grey10: "#F5F5F8",
  grey15: "#EFEFF4",
  grey20: "#E5E5EA",
  grey25: "#D1D1D6",
  grey30: "#AEAEB2",
  grey40: "#8E8E93",
  grey50: "#6C6C70",
  grey60: "#48484A",
  grey70: "#2C2C2E",
  grey80: "#1C1C1E",
  grey90: "#0B0B0D",

  // Blue
  blue10: "#E5F2FF",
  blue20: "#B2D9FF",
  blue40: "#2196F3",
  blue60: "#1F364D",

  // Utility
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",

  // Overlay / Strokes
  blackOverlay50: "rgba(0,0,0,0.5)",
  blackOverlay25: "rgba(0,0,0,0.25)",

  // Special
  settingsTitle: "#152623",
  trialCtaText: "#886418",
  trialCtaBgStart: "#F8E9CB",
  trialCtaBgEnd: "#FEFAF5",
  trialCtaShadow: "#FBECD3",
} as const;

export const colors = {
  // Backgrounds
  background: palette.white,
  backgroundSecondary: palette.grey05,
  backgroundFeedback: palette.green10,

  // Brand
  primary: palette.orange40,
  primaryDark: palette.orange50,

  // Text
  textPrimary: palette.grey80,
  textSecondary: palette.grey50,
  textTertiary: palette.grey30,
  textBody: palette.grey60,
  textDark: palette.grey90,
  textInverse: palette.white,
  textLink: palette.orange40,

  // Border
  border: palette.grey20,
  borderLight: palette.grey15,

  // Cards
  cardBackground: palette.white,
  cardBorder: palette.grey20,

  // Question cards
  questionActiveBackground: palette.yellow20,
  questionActiveShadow: palette.yellow60,
  questionActiveBadge: palette.yellow40,
  questionInactiveBackground: palette.grey15,
  questionInactiveShadow: palette.grey40,
  questionInactiveBadge: palette.grey25,

  // Course switcher
  courseSwitcherBackground: palette.yellow10,
  courseSwitcherShadow: palette.yellow50,

  // Bottom sheet / popup
  popupBackground: palette.yellow40,
  popupButtonDark: palette.yellow70,
  popupButtonDarkShadow: palette.yellow80,

  // Green accents
  success: palette.green40,
  successLight: palette.green10,
  streakBackground: palette.green30,
  closeButtonBackground: palette.green20,

  // Bottom nav
  tabActive: palette.orange40,
  tabInactive: palette.grey50,
  storeBackground: palette.blue10,
  storeBorder: palette.blue20,

  // Promo
  promoText: palette.yellow50,

  // Settings
  settingsBackground: palette.grey05,
  trialCardBackground: palette.grey80,
} as const;

export type Colors = typeof colors;
