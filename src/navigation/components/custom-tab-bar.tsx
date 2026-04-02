import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { HomeTabIcon } from "@/components/icons/home-tab-icon";
import { ProgressTabIcon } from "@/components/icons/progress-tab-icon";
import { StoreTabIcon } from "@/components/icons/store-tab-icon";
import { GlossyOverlay } from "@/components/ui/glossy-overlay";
import { palette, spacing, typography } from "@/theme";

const STORE_SIZE = 68;

// Glossy bands for the Store circle (similar to badge bands, scaled)
const STORE_BANDS = [
  { x: 22, y: -10, width: 16, height: 58, rotation: 30 },
  { x: 44, y: -2, width: 16, height: 72, rotation: 30 },
];

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const isHomeActive = state.index === 0;
  const isProgressActive = state.index === 1;

  // Hide tab bar on nested screens (SessionResult, Settings)
  const homeRoute = state.routes[0];
  const focusedRoute = getFocusedRouteNameFromRoute(homeRoute);
  if (isHomeActive && focusedRoute && focusedRoute !== "Home") {
    return null;
  }

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom }]}>
      <View style={styles.row}>
        {/* Pill containing Home + Progress */}
        <View style={styles.pill}>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate("HomeTab")}
            activeOpacity={0.7}
          >
            <HomeTabIcon size={24} active={isHomeActive} />
            <Text
              style={[
                styles.tabLabel,
                { color: isHomeActive ? palette.orange40 : palette.grey50 },
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate("Progress")}
            activeOpacity={0.7}
          >
            <ProgressTabIcon
              size={23}
              color={isProgressActive ? palette.orange40 : palette.grey50}
            />
            <Text
              style={[
                styles.tabLabel,
                {
                  color: isProgressActive ? palette.orange40 : palette.grey50,
                },
              ]}
            >
              Progress
            </Text>
          </TouchableOpacity>
        </View>

        {/* Store — circular blue button with glossy overlay */}
        <TouchableOpacity
          style={styles.storeOuter}
          onPress={() => navigation.navigate("Store")}
          activeOpacity={0.7}
        >
          <View style={styles.storeCircle}>
            <GlossyOverlay
              width={STORE_SIZE}
              height={STORE_SIZE}
              borderRadius={STORE_SIZE / 2}
              bands={STORE_BANDS}
              inset={4}
            />
            <StoreTabIcon size={22} />
            <Text style={styles.storeLabel}>Store</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: spacing.screenPadding,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.white,
    borderRadius: spacing.pillRadius,
    borderWidth: 1,
    borderColor: palette.grey15,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xxs,
    gap: spacing.l,
    shadowColor: palette.grey15,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.s,
  },
  tabLabel: {
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.xxs,
    marginTop: spacing.xxs,
  },
  storeOuter: {
    marginLeft: spacing.xs,
    shadowColor: palette.blue20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  storeCircle: {
    width: STORE_SIZE,
    height: STORE_SIZE,
    borderRadius: STORE_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.blue10,
    borderWidth: 2,
    borderColor: palette.blue20,
    overflow: "hidden",
  },
  storeLabel: {
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.xxs,
    color: palette.grey70,
    marginTop: spacing.xxs,
  },
});
