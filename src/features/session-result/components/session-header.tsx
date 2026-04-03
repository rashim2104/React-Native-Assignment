import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

import { CompanyLogo } from "@/components/ui/company-logo";
import { palette, spacing, typography } from "@/theme";

/* eslint-disable @typescript-eslint/no-var-requires */
const avatarMale =
  require("../../../../assets/images/characters/avatar-male.png") as number;
const avatarFemale =
  require("../../../../assets/images/characters/avatar-female.png") as number;

const AVATAR_SIZE = 107;
const AVATAR_OVERLAP = -22;
const DIAMOND_SIZE = 14;

interface SessionHeaderProps {
  questionText: string;
  companyName: string;
  companyId: string;
}

export function SessionHeader({
  questionText,
  companyName,
  companyId,
}: SessionHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Overlapping avatars */}
      <View style={styles.avatarRow}>
        <Image
          source={avatarMale}
          style={styles.avatarLeft}
          cachePolicy="memory-disk"
          contentFit="cover"
        />
        <Image
          source={avatarFemale}
          style={styles.avatarRight}
          cachePolicy="memory-disk"
          contentFit="cover"
        />
      </View>

      {/* Question card with diamond arrow */}
      <View style={styles.cardWrapper}>
        <View style={styles.diamond} />
        <View style={styles.card}>
          <Text style={styles.questionText}>{questionText}</Text>
          <View style={styles.askedByRow}>
            <CompanyLogo companyId={companyId} size={22} />
            <Text style={styles.askedByText}>Asked by {companyName}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: spacing.xl,
  },
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.s,
  },
  avatarLeft: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  avatarRight: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginLeft: AVATAR_OVERLAP,
    borderWidth: 2.7,
    borderColor: palette.green10,
  },
  cardWrapper: {
    width: "100%",
    alignItems: "center",
  },
  diamond: {
    width: DIAMOND_SIZE,
    height: DIAMOND_SIZE,
    backgroundColor: palette.green40,
    transform: [{ rotate: "45deg" }],
    marginBottom: -DIAMOND_SIZE / 2,
    zIndex: 1,
  },
  card: {
    width: "100%",
    backgroundColor: palette.green40,
    borderRadius: spacing.cardRadius,
    padding: spacing.cardPadding,
    alignItems: "center",
  },
  questionText: {
    fontFamily: typography.fonts.manrope.bold,
    fontSize: typography.sizes.ml,
    color: palette.white,
    textAlign: "center",
    marginBottom: spacing.m,
  },
  askedByRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
  },
  askedByText: {
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: typography.sizes.sm,
    color: palette.grey15,
  },
});
