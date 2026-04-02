import { Platform } from "react-native";

/**
 * Typography — Inter + Manrope font families
 */

export const typography = {
  fonts: {
    inter: {
      regular: "Inter_400Regular",
      medium: "Inter_500Medium",
      semiBold: "Inter_600SemiBold",
      bold: "Inter_700Bold",
      extraBold: "Inter_800ExtraBold",
    },
    manrope: {
      regular: "Manrope_400Regular",
      medium: "Manrope_500Medium",
      semiBold: "Manrope_600SemiBold",
      bold: "Manrope_700Bold",
      extraBold: "Manrope_800ExtraBold",
    },
    onest: {
      extraBold: "Onest_800ExtraBold",
    },
    system: Platform.select({
      ios: "System",
      android: "Roboto",
      default: "System",
    }),
  },

  sizes: {
    xxs: 11,
    xs: 12,
    s: 13,
    sm: 14,
    m: 15,
    ml: 16,
    l: 18,
    xl: 23,
    xxl: 24,
    xxxl: 32,
    display: 36,
  },
} as const;

export type Typography = typeof typography;
