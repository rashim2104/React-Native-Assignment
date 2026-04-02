import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { LightningIcon } from "@/components/icons/lightning-icon";
import { palette, spacing, typography } from "@/theme";

interface HomeTopNavProps {
  streak: number;
  onMenuPress: () => void;
}

export function HomeTopNav({ streak, onMenuPress }: HomeTopNavProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Ready!</Text>

      <View style={styles.rightSection}>
        {/* Streak counter */}
        <View style={styles.streakPill}>
          <LightningIcon size={16} />
          <Text style={styles.streakText}>{streak}</Text>
        </View>

        {/* Menu button */}
        <TouchableOpacity
          style={styles.menuPill}
          onPress={onMenuPress}
          activeOpacity={0.7}
        >
          <Feather name="menu" size={20} color={palette.grey60} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoText: {
    fontFamily: typography.fonts.onest.extraBold,
    fontSize: typography.sizes.xxl,
    color: palette.orange40,
  },
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.screenPadding,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
  },
  streakPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xxs,
    backgroundColor: palette.green30,
    borderRadius: spacing.pillRadius,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    shadowColor: palette.green40,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  streakText: {
    fontFamily: typography.fonts.inter.semiBold,
    fontSize: typography.sizes.ml,
    color: palette.white,
  },
  menuPill: {
    backgroundColor: palette.grey10,
    borderRadius: spacing.pillRadius,
    padding: spacing.s,
    shadowColor: palette.grey20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
});
