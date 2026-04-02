import { StyleSheet, Text, View } from "react-native";

import { FlagIcon } from "@/components/icons/flag-icon";
import { palette, spacing, typography } from "@/theme";

interface ProPromoBannerProps {
  questionNumber: number;
  completedTodayCount: number;
}

export function ProPromoBanner({
  questionNumber,
  completedTodayCount,
}: ProPromoBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FlagIcon size={16} />
        <Text style={styles.text}>
          {completedTodayCount.toLocaleString()} users completed Question{" "}
          {questionNumber} today
        </Text>
        <FlagIcon size={16} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.l,
    borderBottomWidth: 1,
    borderBottomColor: palette.yellow50,
    borderStyle: "dashed",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  text: {
    fontFamily: typography.fonts.manrope.bold,
    fontSize: typography.sizes.sm,
    color: palette.yellow50,
    textAlign: "center",
  },
});
