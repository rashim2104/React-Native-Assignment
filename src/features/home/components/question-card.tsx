import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path, Text as SvgText } from "react-native-svg";
import { Feather } from "@expo/vector-icons";

import { CompanyLogo } from "@/components/ui/company-logo";
import { GlossyOverlay } from "@/components/ui/glossy-overlay";
import { StopwatchIcon } from "@/components/icons/stopwatch-icon";
import { palette, spacing, typography } from "@/theme";
import type { Question, QuestionStatus } from "@/features/home/types";

const WAVE_PADDINGS = [48, 80, 120, 160, 120, 80, 40, 80, 120, 160];

const PILL_WIDTH = 206;
const PILL_HEIGHT = 73;
const BADGE_SIZE = 74;
const CARD_RADIUS = 30;
const BADGE_OVERLAP = 73;
const PILL_CONTENT_INSET = 20;
const BADGE_STROKE_WIDTH = 3;
// SVG text has no native baseline alignment — offset by ~1/3 of font size to visually center
const BADGE_TEXT_BASELINE_OFFSET = typography.sizes.display / 3;
const CARET_SIZE = 14;
const CARET_OVERLAP = CARET_SIZE / 2;
const EXPANDED_PANEL_GAP = 4; // visual breathing room between card and panel

const PILL_BANDS = [
  { x: 38, y: -13, width: 20, height: 68, rotation: 45 },
  { x: 79, y: -11, width: 20, height: 100, rotation: 45 },
];

const BADGE_BANDS = [
  { x: 25, y: -11, width: 18, height: 67, rotation: 30 },
  { x: 49, y: -2, width: 18, height: 83, rotation: 30 },
];

interface QuestionCardProps {
  question: Question;
  isExpanded: boolean;
  hideStart?: boolean;
  onPress: () => void;
  onFeedback: () => void;
}

const CARD_COLORS: Record<
  QuestionStatus,
  { pillBg: string; shadowColor: string; badgeBg: string; hasGloss: boolean }
> = {
  active: {
    pillBg: palette.green70,
    shadowColor: palette.green60,
    badgeBg: palette.green50,
    hasGloss: true,
  },
  next: {
    pillBg: palette.yellow20,
    shadowColor: palette.yellow60,
    badgeBg: palette.yellow40,
    hasGloss: true,
  },
  locked: {
    pillBg: palette.grey15,
    shadowColor: palette.grey40,
    badgeBg: palette.grey25,
    hasGloss: false,
  },
};

// Speech bubble constants
const BUBBLE_W = 92;
const BUBBLE_H = 44;
const BUBBLE_R = 14;
const ARROW_HALF_W = 12;
const ARROW_H = 12;
const ARROW_CX = BUBBLE_W / 2; // centered arrow
const BUBBLE_TOTAL_H = BUBBLE_H + ARROW_H;

// Rounded rectangle with centered arrow at bottom
const BUBBLE_PATH = [
  `M ${BUBBLE_R} 0`,
  `H ${BUBBLE_W - BUBBLE_R}`,
  `Q ${BUBBLE_W} 0 ${BUBBLE_W} ${BUBBLE_R}`,
  `V ${BUBBLE_H - BUBBLE_R}`,
  `Q ${BUBBLE_W} ${BUBBLE_H} ${BUBBLE_W - BUBBLE_R} ${BUBBLE_H}`,
  `H ${ARROW_CX + ARROW_HALF_W}`,
  `L ${ARROW_CX} ${BUBBLE_TOTAL_H}`,
  `L ${ARROW_CX - ARROW_HALF_W} ${BUBBLE_H}`,
  `H ${BUBBLE_R}`,
  `Q 0 ${BUBBLE_H} 0 ${BUBBLE_H - BUBBLE_R}`,
  `V ${BUBBLE_R}`,
  `Q 0 0 ${BUBBLE_R} 0`,
  "Z",
].join(" ");

function StartTooltip({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.startTooltipWrap}>
        <Svg width={BUBBLE_W} height={BUBBLE_TOTAL_H}>
          <Path
            d={BUBBLE_PATH}
            fill={palette.white}
            stroke={palette.grey20}
            strokeWidth={1.5}
          />
        </Svg>
        <View style={styles.startTextWrap}>
          <Text style={styles.startText}>START</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function ExpandedPanel({
  question,
  onFeedback,
}: {
  question: Question;
  onFeedback: () => void;
}) {
  return (
    <View style={styles.expandedPanel}>
      <Text style={styles.questionText}>{question.text}</Text>

      <View style={styles.metaRow}>
        <View style={styles.metaLeft}>
          <Text style={styles.metaLabel}>Asked by {question.companyName}</Text>
        </View>
        <View style={styles.metaRight}>
          <StopwatchIcon size={16} />
          <Text style={styles.metaLabel}>
            {question.durationMinutes} mins
          </Text>
        </View>
      </View>

      <View style={styles.buttonsCol}>
        <TouchableOpacity
          style={styles.feedbackButton}
          onPress={onFeedback}
          activeOpacity={0.7}
        >
          <Text style={styles.feedbackButtonText}>FEEDBACK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aiButton} activeOpacity={0.7}>
          <Feather name="headphones" size={18} color={palette.white} />
          <Text style={styles.aiButtonText}>AI VS AI (LISTEN)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function QuestionCardInner({
  question,
  isExpanded,
  hideStart,
  onPress,
  onFeedback,
}: QuestionCardProps) {
  const { status } = question;
  const waveIndex = (question.questionNumber - 1) % WAVE_PADDINGS.length;
  const paddingLeft = WAVE_PADDINGS[waveIndex];
  const { pillBg, shadowColor, badgeBg, hasGloss } = CARD_COLORS[status];
  const isExpandable = status === "active" || status === "next";
  const showStartTooltip = status === "next" && !hideStart;

  return (
    <View
      style={[
        isExpanded && isExpandable ? styles.expandedWrapper : undefined,
        status === "next" && styles.nextCardWrapper,
      ]}
    >
      {/* START tooltip — absolutely positioned to overlap card above */}
      {showStartTooltip && (
        <View
          style={[
            styles.startContainer,
            {
              left:
                paddingLeft +
                PILL_WIDTH -
                BADGE_OVERLAP +
                BADGE_SIZE / 2 -
                BUBBLE_W / 2,
            },
          ]}
        >
          <StartTooltip onPress={onPress} />
        </View>
      )}

      <TouchableOpacity
        style={[styles.container, { paddingLeft }]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.cardUnit}>
          {/* Pill shadow wrapper */}
          <View style={[styles.pillShadow, { shadowColor }]}>
            <View style={[styles.pillInner, { backgroundColor: pillBg }]}>
              {hasGloss && (
                <GlossyOverlay
                  width={PILL_WIDTH}
                  height={PILL_HEIGHT}
                  borderRadius={CARD_RADIUS}
                  bands={PILL_BANDS}
                  inset={4}
                />
              )}
              <View style={styles.pillContent}>
                <Text style={styles.companyName}>{question.companyName}</Text>
                <CompanyLogo companyId={question.companyId} size={22} />
              </View>
            </View>
          </View>

          {/* Badge shadow wrapper */}
          <View style={[styles.badgeShadow, { shadowColor }]}>
            <View style={[styles.badgeInner, { backgroundColor: badgeBg }]}>
              {hasGloss && (
                <GlossyOverlay
                  width={BADGE_SIZE}
                  height={BADGE_SIZE}
                  borderRadius={CARD_RADIUS}
                  bands={BADGE_BANDS}
                  inset={5}
                />
              )}
              <Svg
                width={BADGE_SIZE}
                height={BADGE_SIZE}
                style={StyleSheet.absoluteFill}
              >
                <SvgText
                  fill="none"
                  stroke={palette.blackOverlay50}
                  strokeWidth={BADGE_STROKE_WIDTH}
                  fontSize={typography.sizes.display}
                  fontWeight="800"
                  fontFamily={typography.fonts.manrope.extraBold}
                  textAnchor="middle"
                  x={BADGE_SIZE / 2}
                  y={BADGE_SIZE / 2 + BADGE_TEXT_BASELINE_OFFSET}
                >
                  {String(question.questionNumber)}
                </SvgText>
                <SvgText
                  fill="white"
                  fontSize={typography.sizes.display}
                  fontWeight="800"
                  fontFamily={typography.fonts.manrope.extraBold}
                  textAnchor="middle"
                  x={BADGE_SIZE / 2}
                  y={BADGE_SIZE / 2 + BADGE_TEXT_BASELINE_OFFSET}
                >
                  {String(question.questionNumber)}
                </SvgText>
              </Svg>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Expanded panel — only for active and next cards */}
      {isExpanded && isExpandable && (
        <View style={styles.expandedPanelOuter}>
          {/* Upward caret connecting to the card above */}
          <View style={styles.caretRow}>
            <View style={styles.caret} />
          </View>
          <ExpandedPanel question={question} onFeedback={onFeedback} />
        </View>
      )}
    </View>
  );
}

export const QuestionCard = React.memo(QuestionCardInner);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.m,
  },
  cardUnit: {
    flexDirection: "row",
    alignItems: "center",
  },
  expandedWrapper: {
    zIndex: 100,
    elevation: 100,
    overflow: "visible",
  },
  nextCardWrapper: {
    overflow: "visible",
    zIndex: 10,
    elevation: 10,
  },
  // Pill
  pillShadow: {
    borderRadius: CARD_RADIUS,
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
    zIndex: 0,
  },
  pillInner: {
    width: PILL_WIDTH,
    height: PILL_HEIGHT,
    borderRadius: CARD_RADIUS,
    justifyContent: "center",
    overflow: "hidden",
  },
  pillContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
    paddingLeft: PILL_CONTENT_INSET,
  },
  companyName: {
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: typography.sizes.sm,
    color: palette.grey80,
  },
  // Badge
  badgeShadow: {
    borderRadius: CARD_RADIUS,
    marginLeft: -BADGE_OVERLAP,
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
    zIndex: 1,
  },
  badgeInner: {
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: CARD_RADIUS,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  // START tooltip
  startContainer: {
    position: "absolute",
    top: -(BUBBLE_TOTAL_H - spacing.xxl),
    zIndex: 50,
    elevation: 50,
  },
  startTooltipWrap: {
    width: BUBBLE_W,
    height: BUBBLE_TOTAL_H,
  },
  startTextWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: BUBBLE_H,
    alignItems: "center",
    justifyContent: "center",
  },
  startText: {
    fontFamily: typography.fonts.inter.bold,
    fontSize: typography.sizes.ml,
    color: palette.green40,
    letterSpacing: 1,
  },
  // Expanded panel — absolutely positioned, full width, overlaps cards below
  expandedPanelOuter: {
    position: "absolute",
    top: PILL_HEIGHT + spacing.xxl + EXPANDED_PANEL_GAP,
    left: spacing.screenPadding,
    right: spacing.screenPadding,
    zIndex: 100,
    elevation: 100,
  },
  caretRow: {
    alignItems: "center",
    marginBottom: -CARET_OVERLAP,
    zIndex: 1,
  },
  caret: {
    width: CARET_SIZE,
    height: CARET_SIZE,
    backgroundColor: palette.yellow40,
    transform: [{ rotate: "45deg" }],
  },
  expandedPanel: {
    backgroundColor: palette.yellow40,
    borderRadius: spacing.buttonRadius,
    padding: spacing.l,
  },
  questionText: {
    fontFamily: typography.fonts.manrope.bold,
    fontSize: typography.sizes.ml,
    color: palette.grey80,
    marginBottom: spacing.m,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.l,
  },
  metaLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  metaRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xxs,
  },
  metaLabel: {
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: typography.sizes.sm,
    color: palette.grey60,
  },
  buttonsCol: {
    gap: spacing.s,
  },
  feedbackButton: {
    backgroundColor: palette.white,
    borderRadius: spacing.buttonRadius,
    paddingVertical: spacing.m,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 3,
  },
  feedbackButtonText: {
    fontFamily: typography.fonts.inter.bold,
    fontSize: typography.sizes.m,
    color: palette.green40,
    textTransform: "uppercase",
    letterSpacing: 0.51,
  },
  aiButton: {
    flexDirection: "row",
    backgroundColor: palette.yellow70,
    borderRadius: spacing.buttonRadius,
    paddingVertical: spacing.m,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
    shadowColor: palette.yellow80,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3,
  },
  aiButtonText: {
    fontFamily: typography.fonts.inter.bold,
    fontSize: typography.sizes.m,
    color: palette.white,
    textTransform: "uppercase",
    letterSpacing: 0.51,
  },
});
