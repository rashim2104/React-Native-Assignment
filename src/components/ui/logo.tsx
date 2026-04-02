import { StyleSheet, Text, View } from "react-native";

import { palette, spacing, typography } from "@/theme";

interface LogoProps {
  size?: "large" | "small";
}

export function Logo({ size = "large" }: LogoProps) {
  const isLarge = size === "large";

  return (
    <View style={styles.container}>
      <Text style={isLarge ? styles.brandLarge : styles.brandSmall}>
        Ready
      </Text>
      {isLarge ? (
        <View style={styles.badgeLarge}>
          <Text style={styles.badgeTextLarge}>ai</Text>
        </View>
      ) : (
        <View style={styles.badgeSmall}>
          <Text style={styles.badgeTextSmall}>ai</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandLarge: {
    fontFamily: typography.fonts.onest.extraBold,
    fontSize: typography.sizes.display,
    color: palette.orange40,
  },
  brandSmall: {
    fontFamily: typography.fonts.onest.extraBold,
    fontSize: typography.sizes.xxl,
    color: palette.orange40,
  },
  badgeLarge: {
    backgroundColor: palette.grey80,
    borderRadius: 7,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xxxs,
    marginLeft: spacing.xxs,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTextLarge: {
    fontFamily: typography.fonts.onest.extraBold,
    fontSize: typography.sizes.xxl,
    color: palette.white,
  },
  badgeSmall: {
    backgroundColor: palette.grey80,
    borderRadius: 5,
    paddingHorizontal: spacing.xxs,
    paddingVertical: spacing.xxxs,
    marginLeft: spacing.xxxs,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeTextSmall: {
    fontFamily: typography.fonts.onest.extraBold,
    fontSize: typography.sizes.sm,
    color: palette.white,
  },
});
