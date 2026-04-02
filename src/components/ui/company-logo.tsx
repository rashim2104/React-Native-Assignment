import { StyleSheet, View } from "react-native";
import { Image, type ImageStyle } from "expo-image";

import { palette } from "@/theme";

const COMPANY_IMAGES: Record<string, number> = {
  phonepe: require("../../../assets/images/companies/phonepe.png") as number,
  amazon: require("../../../assets/images/companies/amazon.png") as number,
  google: require("../../../assets/images/companies/google.png") as number,
  microsoft: require("../../../assets/images/companies/microsoft.png") as number,
  facebook: require("../../../assets/images/companies/facebook.png") as number,
  swiggy: require("../../../assets/images/companies/swiggy.png") as number,
  zomato: require("../../../assets/images/companies/zomato.png") as number,
};

// Logos that already have their own background (no inner padding needed)
const FULL_BLEED_LOGOS = new Set(["swiggy", "zomato"]);

const DEFAULT_SIZE = 22;

interface CompanyLogoProps {
  companyId: string;
  size?: number;
  borderColor?: string;
  borderWidth?: number;
}

export function CompanyLogo({
  companyId,
  size = DEFAULT_SIZE,
  borderColor,
  borderWidth,
}: CompanyLogoProps) {
  const source = COMPANY_IMAGES[companyId];

  if (!source) {
    return null;
  }

  const isFullBleed = FULL_BLEED_LOGOS.has(companyId);
  const innerPadding = isFullBleed ? 0 : size * 0.18;
  const imageSize = size - innerPadding * 2;

  const containerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    ...(borderColor != null && { borderColor }),
    ...(borderWidth != null && { borderWidth }),
  };

  const imageStyle: ImageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: isFullBleed ? size / 2 : 0,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={source}
        style={imageStyle}
        cachePolicy="memory-disk"
        contentFit={isFullBleed ? "cover" : "contain"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
