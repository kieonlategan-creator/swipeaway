import { Pressable, StyleSheet, type PressableProps } from 'react-native';
import { ThemedText } from '@/app/components/themed-text';
import { useThemeColor } from '@/app/hooks/use-theme-color';
import { BorderRadius, FontSize, Spacing } from '@/constants/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps extends Omit<PressableProps, 'children'> {
  title: string;
  variant?: ButtonVariant;
}

export function Button({ title, variant = 'primary', style, ...props }: ButtonProps) {
  const tint = useThemeColor({}, 'tint');
  const background = useThemeColor({}, 'background');
  const border = useThemeColor({}, 'border');

  const backgroundColors: Record<ButtonVariant, string> = {
    primary: tint,
    secondary: border,
    outline: 'transparent',
    ghost: 'transparent',
  };

  const textColors: Record<ButtonVariant, string> = {
    primary: '#FFFFFF',
    secondary: tint,
    outline: tint,
    ghost: tint,
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: backgroundColors[variant] },
        variant === 'outline' && { borderWidth: 1, borderColor: tint },
        pressed && { opacity: 0.7 },
        style as any,
      ]}
      {...props}>
      <ThemedText
        style={[styles.text, { color: textColors[variant] }]}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FontSize.md,
    fontWeight: '600',
  },
});
