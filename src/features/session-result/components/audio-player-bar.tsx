import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { PlayIcon } from "@/components/icons/play-icon";
import { palette, spacing, typography } from "@/theme";

const PLAY_SIZE = 48;
const PROGRESS_HEIGHT = 8;
const MOCK_PROGRESS = 0.45;

interface AudioPlayerBarProps {
  audioDurationSeconds: number;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function AudioPlayerBar({ audioDurationSeconds }: AudioPlayerBarProps) {
  const currentTime = Math.floor(audioDurationSeconds * MOCK_PROGRESS);

  return (
    <View style={styles.card}>
      {/* Play button */}
      <TouchableOpacity style={styles.playButton} activeOpacity={0.7}>
        <PlayIcon size={18} color={palette.orange50} />
      </TouchableOpacity>

      {/* Right content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Mock Interview</Text>

        {/* Progress bar */}
        <View style={styles.progressTrack}>
          <View
            style={[styles.progressFill, { width: `${MOCK_PROGRESS * 100}%` }]}
          />
        </View>

        {/* Time labels */}
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
          <Text style={styles.timeText}>
            {formatTime(audioDurationSeconds)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.m,
    backgroundColor: palette.orange10,
    borderRadius: spacing.cardRadius,
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.l,
    marginBottom: spacing.xl,
    marginTop: spacing.m,
  },
  playButton: {
    width: PLAY_SIZE,
    height: PLAY_SIZE,
    borderRadius: PLAY_SIZE / 2,
    backgroundColor: palette.white,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: typography.sizes.sm,
    color: palette.orange50,
    marginBottom: spacing.s,
  },
  progressTrack: {
    height: PROGRESS_HEIGHT,
    backgroundColor: palette.orange20,
    borderRadius: PROGRESS_HEIGHT / 2,
    overflow: "hidden",
  },
  progressFill: {
    height: PROGRESS_HEIGHT,
    backgroundColor: palette.orange50,
    borderRadius: PROGRESS_HEIGHT / 2,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.xxs,
  },
  timeText: {
    fontFamily: typography.fonts.manrope.medium,
    fontSize: typography.sizes.xs,
    color: palette.grey50,
  },
});
