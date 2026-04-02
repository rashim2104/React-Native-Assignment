import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Logo } from "@/components/ui/logo";
import { CompanyLogo } from "@/components/ui/company-logo";
import { PrimaryButton } from "@/components/ui/primary-button";
import type { AuthStackParamList } from "@/navigation/types";
import { colors, palette, spacing, typography } from "@/theme";

type Props = NativeStackScreenProps<AuthStackParamList, "Welcome">;

const CHARACTER_SIZE = 250;
const LOGO_SIZE = 48;
const LOGO_BORDER = 2;

export function WelcomeScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      {/* Logo — larger, matching Figma 36px */}
      <View style={styles.logoContainer}>
        <Logo size="large" />
      </View>

      {/* Middle content — vertically centered between logo and bottom */}
      <View style={styles.middleContent}>
        {/* Character with floating company logos */}
        <View style={styles.characterWrapper}>
          <Image
            source={require("../../../../assets/images/characters/welcome-character.png")}
            style={styles.characterImage}
            cachePolicy="memory-disk"
            contentFit="cover"
          />

          {/* Swiggy — top left */}
          <View style={[styles.floatingLogo, { top: 13, left: 9 }]}>
            <CompanyLogo
              companyId="swiggy"
              size={LOGO_SIZE}
              borderColor={palette.green15}
              borderWidth={LOGO_BORDER}
            />
          </View>

          {/* Microsoft — top right */}
          <View style={[styles.floatingLogo, { top: -16, right: 30 }]}>
            <CompanyLogo
              companyId="microsoft"
              size={LOGO_SIZE}
              borderColor={palette.green15}
              borderWidth={LOGO_BORDER}
            />
          </View>

          {/* Google — right */}
          <View style={[styles.floatingLogo, { top: 88, right: -10 }]}>
            <CompanyLogo
              companyId="google"
              size={LOGO_SIZE}
              borderColor={palette.green15}
              borderWidth={LOGO_BORDER}
            />
          </View>

          {/* Amazon — left */}
          <View style={[styles.floatingLogo, { top: 148, left: -17 }]}>
            <CompanyLogo
              companyId="amazon"
              size={LOGO_SIZE}
              borderColor={palette.green15}
              borderWidth={LOGO_BORDER}
            />
          </View>

          {/* Zomato — bottom right */}
          <View style={[styles.floatingLogo, { bottom: -6, right: 20 }]}>
            <CompanyLogo
              companyId="zomato"
              size={LOGO_SIZE}
              borderColor={palette.green15}
              borderWidth={LOGO_BORDER}
            />
          </View>
        </View>

        {/* Tagline */}
        <View style={styles.taglineContainer}>
          <Text style={styles.taglineText}>Practice Top Interview</Text>
          <Text style={styles.taglineText}>
            Questions <Text style={styles.taglineHighlight}>with AI</Text>
          </Text>
        </View>
      </View>

      {/* Bottom section — button + terms */}
      <View style={styles.bottomSection}>
        <PrimaryButton
          title="Let's go"
          icon="check-circle"
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        />

        <Text style={styles.termsText}>
          By continuing, you acknowledge agreeing to our{"\n"}
          <Text style={styles.termsUnderline}>terms of service</Text> and{" "}
          <Text style={styles.termsUnderline}>privacy policy</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  logoContainer: {
    paddingTop: 28,
    alignItems: "center",
  },
  middleContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  characterWrapper: {
    width: CHARACTER_SIZE + 40,
    height: CHARACTER_SIZE + 20,
    alignItems: "center",
    justifyContent: "center",
  },
  characterImage: {
    width: CHARACTER_SIZE,
    height: CHARACTER_SIZE,
    borderRadius: CHARACTER_SIZE / 2,
  },
  floatingLogo: {
    position: "absolute",
  },
  taglineContainer: {
    alignItems: "center",
    marginTop: spacing.l,
  },
  taglineText: {
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: typography.sizes.xl,
    color: palette.grey80,
    textAlign: "center",
    letterSpacing: -0.23,
    lineHeight: 31,
  },
  taglineHighlight: {
    color: palette.orange40,
  },
  bottomSection: {
    width: "100%",
    paddingHorizontal: spacing.screenPadding + spacing.s,
    paddingBottom: spacing.l,
  },
  button: {
    width: "100%",
  },
  termsText: {
    fontFamily: typography.fonts.inter.regular,
    fontSize: typography.sizes.xs,
    color: palette.grey50,
    textAlign: "center",
    marginTop: spacing.l,
    lineHeight: 18,
  },
  termsUnderline: {
    textDecorationLine: "underline",
  },
});
