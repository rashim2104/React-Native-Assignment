import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SessionHeader } from "@/features/session-result/components/session-header";
import { SmartSummaryTab } from "@/features/session-result/components/smart-summary-tab";
import { KeyMomentsTab } from "@/features/session-result/components/key-moments-tab";
import type { HomeStackParamList } from "@/navigation/types";
import type { SessionResult } from "@/features/session-result/types";
import { palette, spacing, typography } from "@/theme";
import sessionDataJson from "@/mock-data/session-result.json";

const sessionData = sessionDataJson as SessionResult;

type SessionResultScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "SessionResult"
>;

type Tab = "summary" | "moments";

const CLOSE_BUTTON_SIZE = 28;

export function SessionResultScreen({
  navigation,
}: SessionResultScreenProps) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<Tab>("summary");

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {/* Top nav — right-aligned close button */}
      <View style={styles.topNav}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Feather name="x" size={24} color={palette.grey80} />
        </TouchableOpacity>
      </View>

      {/* Session header with avatars and question card */}
      <SessionHeader
        questionText={sessionData.questionText}
        companyName={sessionData.companyName}
        companyId={sessionData.companyId}
      />

      {/* White content area */}
      <View style={styles.contentArea}>
        {/* Tab bar */}
        <View style={styles.tabBar}>
          <Pressable
            style={styles.tabItem}
            onPress={() => setActiveTab("summary")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "summary"
                  ? styles.tabTextActive
                  : styles.tabTextInactive,
              ]}
            >
              Smart summary
            </Text>
            {activeTab === "summary" && <View style={styles.tabUnderline} />}
          </Pressable>

          <Pressable
            style={styles.tabItem}
            onPress={() => setActiveTab("moments")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "moments"
                  ? styles.tabTextActive
                  : styles.tabTextInactive,
              ]}
            >
              Key moments
            </Text>
            {activeTab === "moments" && <View style={styles.tabUnderline} />}
          </Pressable>
        </View>

        {/* Tab content */}
        <View style={styles.tabContent}>
          {activeTab === "summary" ? (
            <SmartSummaryTab
              whatWorkedWell={sessionData.smartSummary.whatWorkedWell}
              overallTakeaways={sessionData.smartSummary.overallTakeaways}
            />
          ) : (
            <KeyMomentsTab
              keyMoments={sessionData.keyMoments}
              audioDurationSeconds={sessionData.audioDurationSeconds}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.green10,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: spacing.screenPadding,
    paddingVertical: spacing.s,
  },
  closeButton: {
    width: CLOSE_BUTTON_SIZE * 2,
    height: CLOSE_BUTTON_SIZE * 2,
    borderRadius: spacing.pillRadius,
    backgroundColor: palette.green20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: palette.green40,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  contentArea: {
    flex: 1,
    backgroundColor: palette.white,
    borderTopLeftRadius: spacing.cardRadiusLarge,
    borderTopRightRadius: spacing.cardRadiusLarge,
  },
  tabBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: palette.grey15,
    paddingTop: spacing.m,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: spacing.m,
  },
  tabText: {
    fontSize: typography.sizes.sm,
  },
  tabTextActive: {
    fontFamily: typography.fonts.manrope.medium,
    color: palette.grey70,
  },
  tabTextInactive: {
    fontFamily: typography.fonts.manrope.regular,
    color: palette.grey50,
  },
  tabUnderline: {
    position: "absolute",
    bottom: 0,
    left: 40,
    right: 40,
    height: 2,
    backgroundColor: palette.grey70,
    borderRadius: 1,
  },
  tabContent: {
    flex: 1,
    paddingHorizontal: spacing.screenPadding,
  },
});
