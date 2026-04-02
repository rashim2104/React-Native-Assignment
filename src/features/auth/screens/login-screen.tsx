import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { PrimaryButton } from "@/components/ui/primary-button";
import { useAuth } from "@/navigation/auth-context";
import type { AuthStackParamList } from "@/navigation/types";
import { colors, palette, spacing, typography } from "@/theme";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

const OTP_LENGTH = 6;

export function LoginScreen({ navigation: _navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { onLogin } = useAuth();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState<string[]>(
    Array.from({ length: OTP_LENGTH }, () => "")
  );
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const otpRefs = useRef<Array<TextInput | null>>(
    Array.from({ length: OTP_LENGTH }, () => null)
  );

  const handleOtpChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit.length === 1 && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && otp[index] === "" && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + spacing.xxxl,
            paddingBottom: insets.bottom + spacing.l,
          },
        ]}
        keyboardShouldPersistTaps="handled"
        style={styles.container}
      >
        {/* Title — "Kickstart" in orange, rest in dark */}
        <Text style={styles.title}>
          <Text style={styles.titleHighlight}>Kickstart</Text> your journey
        </Text>

        <Text style={styles.subtitle}>
          We will send you an OTP to verify your number.
        </Text>

        {/* Phone input */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Phone number</Text>
          <View style={styles.phoneRow}>
            <View style={styles.countryCode}>
              <Text style={styles.flagEmoji}>🇮🇳</Text>
              <Text style={styles.countryCodeText}>+91</Text>
              <Text style={styles.chevronDown}>{"\u25BE"}</Text>
            </View>
            <View style={styles.divider} />
            <TextInput
              style={styles.phoneInput}
              placeholder="8812014288"
              placeholderTextColor={palette.grey30}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={10}
            />
          </View>
          <Text style={styles.helperText}>
            Please enter a valid 10-digit mobile number.
          </Text>
        </View>

        {/* OTP input */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Enter the OTP</Text>
          <View style={styles.otpRow}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  otpRefs.current[index] = ref;
                }}
                style={[
                  styles.otpBox,
                  (digit !== "" || focusedIndex === index) &&
                    styles.otpBoxFilled,
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                placeholder="_"
                placeholderTextColor={palette.grey80}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={({ nativeEvent }) =>
                  handleOtpKeyPress(nativeEvent.key, index)
                }
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(-1)}
                caretHidden
                selectTextOnFocus
              />
            ))}
          </View>
        </View>

        {/* Spacer to push button to bottom */}
        <View style={styles.spacer} />

        {/* Submit button */}
        <PrimaryButton title="Continue" onPress={onLogin} style={styles.button} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.screenPadding,
  },
  title: {
    fontFamily: typography.fonts.manrope.bold,
    fontSize: typography.sizes.xxxl,
    color: palette.grey80,
    marginBottom: spacing.m,
  },
  titleHighlight: {
    color: palette.orange40,
  },
  subtitle: {
    fontFamily: typography.fonts.inter.regular,
    fontSize: typography.sizes.ml,
    color: palette.grey60,
    marginBottom: spacing.xxl,
  },
  inputSection: {
    marginBottom: spacing.xxl,
  },
  inputLabel: {
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.sm,
    color: palette.grey60,
    marginBottom: spacing.s,
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: palette.grey20,
    borderRadius: spacing.inputRadius,
    height: 48,
  },
  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.m,
    gap: spacing.xxs,
  },
  flagEmoji: {
    fontSize: 18,
  },
  countryCodeText: {
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.sm,
    color: palette.grey80,
  },
  chevronDown: {
    fontSize: 10,
    color: palette.grey50,
  },
  divider: {
    width: 1,
    height: 28,
    backgroundColor: palette.grey20,
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: spacing.m,
    fontFamily: typography.fonts.inter.regular,
    fontSize: typography.sizes.ml,
    color: palette.grey80,
    height: "100%",
  },
  helperText: {
    fontFamily: typography.fonts.inter.regular,
    fontSize: typography.sizes.s,
    color: palette.grey30,
    marginTop: spacing.s,
    paddingLeft: spacing.xxs,
  },
  otpRow: {
    flexDirection: "row",
    gap: spacing.itemGap,
  },
  otpBox: {
    width: 48,
    height: 56,
    borderWidth: 1,
    borderColor: palette.grey20,
    borderRadius: spacing.buttonRadius,
    textAlign: "center",
    fontFamily: typography.fonts.manrope.semiBold,
    fontSize: 24,
    color: palette.grey80,
    backgroundColor: palette.white,
  },
  otpBoxFilled: {
    backgroundColor: palette.grey15,
    borderColor: palette.grey25,
  },
  spacer: {
    flex: 1,
  },
  button: {
    width: "100%",
  },
});
