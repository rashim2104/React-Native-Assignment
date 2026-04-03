import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { GlossyOverlay } from "@/components/ui/glossy-overlay";
import { useAuth } from "@/navigation/auth-context";
import type { HomeStackParamList } from "@/navigation/types";
import { palette } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import userData from "@/mock-data/user.json";

const TRIAL_CARD_WIDTH =
  Dimensions.get("window").width - spacing.screenPadding * 2;
const TRIAL_CARD_HEIGHT = 260;

const TRIAL_BANDS = [
  { x: 50, y: -30, width: 28, height: 350, rotation: 45 },
  { x: 100, y: -20, width: 30, height: 370, rotation: 45 },
];

type Props = NativeStackScreenProps<HomeStackParamList, "Settings">;

export function SettingsScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { onLogout } = useAuth();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* Top Nav */}
        <View style={styles.topNav}>
          <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
            <Feather
              name="chevron-left"
              size={26}
              color={palette.settingsTitle}
            />
          </Pressable>
          <Text style={styles.topNavTitle}>Your Profile</Text>
          <View style={styles.topNavSpacer} />
        </View>

        {/* Trial Card */}
        <View style={styles.trialCard}>
          <GlossyOverlay
            width={TRIAL_CARD_WIDTH}
            height={TRIAL_CARD_HEIGHT}
            borderRadius={spacing.xxxl}
            bands={TRIAL_BANDS}
            inset={2}
            opacity={0.15}
          />
          <View style={styles.trialCardContent}>
            <Text style={styles.trialTitle}>3 days free trial for</Text>
            <Text style={styles.trialPrice}>₹1</Text>
            <Text style={styles.trialSubtext}>Then ₹299/month</Text>
          </View>
          <Image
            source={require("../../../../assets/images/characters/settings-character.png")}
            style={styles.trialCharacter}
            cachePolicy="memory-disk"
            contentFit="contain"
          />
          <View style={styles.trialCtaWrapper}>
            <View style={styles.trialCtaBackdrop} />
            <LinearGradient
              colors={[palette.trialCtaBgStart, palette.trialCtaBgEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.trialCtaButton}
            >
              <Text style={styles.trialCtaText}>START 3 DAYS TRIAL @ ₹1</Text>
            </LinearGradient>
          </View>
        </View>

        {/* Update Banner */}
        <View style={styles.updateBanner}>
          <View style={styles.updateBannerLeft}>
            <Feather name="grid" size={16} color={palette.grey70} />
            <Text style={styles.updateBannerText}>New update available</Text>
          </View>
          <Pressable style={styles.downloadButton}>
            <Feather name="download" size={16} color={palette.grey70} />
          </Pressable>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View style={styles.infoRowLeft}>
              <Feather name="phone" size={16} color={palette.grey70} />
              <Text style={styles.infoLabel}>Phone number</Text>
            </View>
            <Text style={styles.infoValue}>{userData.phone}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <View style={styles.infoRowLeft}>
              <Feather name="calendar" size={16} color={palette.grey70} />
              <Text style={styles.infoLabel}>Learning since</Text>
            </View>
            <Text style={styles.infoValue}>August 17, 2025</Text>
          </View>
        </View>

        {/* Menu Card */}
        <View style={styles.menuCard}>
          <MenuItem icon="message-circle" label="Chat with us" />
          <View style={styles.divider} />
          <MenuItem icon="share" label="Share the app" />
          <View style={styles.divider} />
          <MenuItem icon="star" label="Rate the app" />
          <View style={styles.divider} />
          <MenuItem icon="log-out" label="Log out" onPress={onLogout} />
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={[styles.footer, { paddingBottom: insets.bottom || 24 }]}>
        <Text style={styles.footerText}>App version v2.14.2</Text>
        <Text style={styles.footerText}>Made with ❤️ from India</Text>
      </View>
    </View>
  );
}

function MenuItem({
  icon,
  label,
  onPress,
}: {
  icon: React.ComponentProps<typeof Feather>["name"];
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable style={styles.menuRow} onPress={onPress}>
      <View style={styles.menuRowLeft}>
        <Feather name={icon} size={16} color={palette.grey70} />
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      <Feather
        name="chevron-right"
        size={16}
        color={palette.grey70}
        style={styles.menuChevron}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.grey05,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: spacing.xl,
  },

  // Top Nav
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.m,
  },
  topNavTitle: {
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: typography.sizes.l,
    color: palette.settingsTitle,
    textAlign: "center",
    flex: 1,
  },
  topNavSpacer: {
    width: 30,
  },

  // Trial Card
  trialCard: {
    backgroundColor: palette.grey80,
    borderRadius: spacing.cardRadiusLarge,
    overflow: "hidden",
    marginTop: spacing.m,
    paddingBottom: spacing.l,
  },
  trialCardContent: {
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.l,
  },
  trialTitle: {
    fontFamily: typography.fonts.manrope.bold,
    fontSize: typography.sizes.ml,
    color: palette.white,
  },
  trialPrice: {
    fontFamily: typography.fonts.manrope.bold,
    fontSize: typography.sizes.xxxl,
    color: palette.yellow40,
    marginTop: spacing.xxs,
  },
  trialSubtext: {
    fontFamily: typography.fonts.manrope.regular,
    fontSize: typography.sizes.sm,
    color: palette.grey20,
    marginTop: spacing.xxs,
  },
  trialCharacter: {
    position: "absolute",
    top: -35,
    right: -25,
    width: 220,
    height: 235,
  },
  trialCtaWrapper: {
    paddingHorizontal: spacing.l,
    marginTop: spacing.l,
  },
  trialCtaBackdrop: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    left: 16,
    top: 4,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#C9B9A5",
  },
  trialCtaButton: {
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  trialCtaText: {
    fontFamily: typography.fonts.inter.extraBold,
    fontSize: typography.sizes.sm,
    color: palette.trialCtaText,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  // Update Banner
  updateBanner: {
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: palette.grey20,
    borderRadius: spacing.cardRadiusLarge,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.m,
    marginTop: spacing.sectionGap,
  },
  updateBannerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
  },
  updateBannerText: {
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.sm,
    color: palette.grey70,
  },
  downloadButton: {
    backgroundColor: palette.green15,
    borderRadius: 9,
    padding: spacing.s,
  },

  // Info Card
  infoCard: {
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: palette.grey20,
    borderRadius: spacing.cardRadiusLarge,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.s,
    marginTop: spacing.sectionGap,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.l,
  },
  infoRowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
  },
  infoLabel: {
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.sm,
    color: palette.grey70,
  },
  infoValue: {
    fontFamily: typography.fonts.inter.regular,
    fontSize: typography.sizes.sm,
    color: palette.grey30,
  },
  divider: {
    height: 1,
    backgroundColor: palette.grey15,
  },

  // Menu Card
  menuCard: {
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: palette.grey20,
    borderRadius: spacing.cardRadiusLarge,
    paddingHorizontal: spacing.l,
    marginTop: spacing.sectionGap,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.xl,
  },
  menuRowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
  },
  menuLabel: {
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.sm,
    color: palette.grey70,
  },
  menuChevron: {
    opacity: 0.7,
  },

  // Footer
  footer: {
    alignItems: "center",
    paddingTop: spacing.m,
    paddingBottom: spacing.m,
    backgroundColor: palette.grey05,
  },
  footerText: {
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.s,
    color: palette.blackOverlay25,
    marginTop: spacing.xxs,
  },
});
