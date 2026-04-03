import { ScrollView, StyleSheet, Text, View } from "react-native";

import { StarIcon } from "@/components/icons/star-icon";
import { palette, spacing, typography } from "@/theme";

interface SmartSummaryTabProps {
  whatWorkedWell: string[];
  overallTakeaways: string[];
}

function BulletItem({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <View style={styles.starWrap}>
        <StarIcon size={10} color={palette.grey50} />
      </View>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

export function SmartSummaryTab({
  whatWorkedWell,
  overallTakeaways,
}: SmartSummaryTabProps) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>What worked well</Text>
      <View style={styles.bulletList}>
        {whatWorkedWell.map((item, index) => (
          <BulletItem key={`worked-${index}`} text={item} />
        ))}
      </View>

      <View style={styles.dashedDivider} />

      <Text style={styles.heading}>Overall takeaways</Text>
      <View style={styles.bulletList}>
        {overallTakeaways.map((item, index) => (
          <BulletItem key={`takeaway-${index}`} text={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: spacing.xxxl,
  },
  heading: {
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: typography.sizes.ml,
    color: palette.grey60,
    marginBottom: spacing.m,
  },
  bulletList: {
    gap: spacing.s,
  },
  bulletRow: {
    flexDirection: "row",
    gap: spacing.s,
  },
  starWrap: {
    marginTop: spacing.xxs,
  },
  bulletText: {
    flex: 1,
    fontFamily: typography.fonts.manrope.medium,
    fontSize: typography.sizes.sm,
    color: palette.grey60,
    lineHeight: 20,
  },
  dashedDivider: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderBottomColor: palette.grey20,
    marginVertical: spacing.l,
  },
});
