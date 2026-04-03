import { ScrollView, StyleSheet, Text, View } from "react-native";

import { AudioPlayerBar } from "@/features/session-result/components/audio-player-bar";
import type { KeyMoment } from "@/features/session-result/types";
import { palette, spacing, typography } from "@/theme";

interface KeyMomentsTabProps {
  keyMoments: KeyMoment[];
  audioDurationSeconds: number;
}

function KeyMomentItem({
  moment,
  isLast,
}: {
  moment: KeyMoment;
  isLast: boolean;
}) {
  const timestampColor = palette.blue40;

  return (
    <View style={styles.momentItem}>
      <Text style={[styles.timestamp, { color: timestampColor }]}>
        {moment.timestamp}
      </Text>
      <Text style={styles.description}>{moment.description}</Text>
      {!isLast && <View style={styles.divider} />}
    </View>
  );
}

export function KeyMomentsTab({
  keyMoments,
  audioDurationSeconds,
}: KeyMomentsTabProps) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <AudioPlayerBar audioDurationSeconds={audioDurationSeconds} />

      {keyMoments.map((moment, index) => (
        <KeyMomentItem
          key={`moment-${index}`}
          moment={moment}
          isLast={index === keyMoments.length - 1}
        />
      ))}
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
  momentItem: {
    paddingVertical: spacing.m,
  },
  timestamp: {
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: typography.sizes.sm,
    marginBottom: spacing.xs,
  },
  description: {
    fontFamily: typography.fonts.manrope.medium,
    fontSize: typography.sizes.sm,
    color: palette.grey60,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: palette.grey15,
    marginTop: spacing.m,
  },
});
