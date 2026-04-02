import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { palette, spacing, typography } from "@/theme";

export function CourseSwitcher() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.emoji}>{"💪"}</Text>

        <View style={styles.textColumn}>
          <Text style={styles.subtitle}>
            Practicing Top 50 Questions for
          </Text>
          <Text style={styles.title}>Big Tech Companies</Text>
        </View>

        <Feather name="chevron-down" size={20} color={palette.grey50} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: spacing.screenPadding,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: palette.yellow10,
    borderRadius: spacing.cardRadiusLarge,
    padding: spacing.l,
    shadowColor: palette.yellow50,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  emoji: {
    fontSize: 32,
    marginRight: spacing.m,
  },
  textColumn: {
    flex: 1,
  },
  subtitle: {
    fontFamily: typography.fonts.manrope.medium,
    fontSize: typography.sizes.sm,
    color: palette.grey50,
  },
  title: {
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: typography.sizes.ml,
    color: palette.grey80,
  },
});
