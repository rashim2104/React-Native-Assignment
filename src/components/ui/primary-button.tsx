import { Pressable, StyleSheet, Text, View, type ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { palette, spacing, typography } from "@/theme";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  icon?: keyof typeof Feather.glyphMap;
}

export function PrimaryButton({ title, onPress, style, icon }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && styles.pressed,
        style,
      ]}
    >
      <LinearGradient
        colors={[palette.orange40, palette.orange50]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          {icon != null && (
            <Feather name={icon} size={20} color={palette.white} />
          )}
          <Text style={styles.label}>{title}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const BUTTON_HEIGHT = 52;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: spacing.buttonRadius,
    shadowColor: palette.orange50,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  pressed: {
    opacity: 0.85,
  },
  gradient: {
    height: BUTTON_HEIGHT,
    borderRadius: spacing.buttonRadius,
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.m,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  label: {
    color: palette.white,
    fontFamily: typography.fonts.inter.medium,
    fontSize: typography.sizes.ml,
  },
});
