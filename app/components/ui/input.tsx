import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';
import { ThemedText } from '@/app/components/themed-text';
import { useThemeColor } from '@/app/hooks/use-theme-color';
import { BorderRadius, FontSize, Spacing } from '@/constants/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
  const textColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'backgroundSecondary');
  const borderColor = useThemeColor({}, 'border');
  const errorColor = useThemeColor({}, 'error');
  const placeholderColor = useThemeColor({}, 'textSecondary');

  return (
    <View style={styles.container}>
      {label && (
        <ThemedText style={styles.label}>{label}</ThemedText>
      )}
      <TextInput
        style={[
          styles.input,
          { color: textColor, backgroundColor, borderColor: error ? errorColor : borderColor },
          style,
        ]}
        placeholderTextColor={placeholderColor}
        {...props}
      />
      {error && (
        <ThemedText style={[styles.error, { color: errorColor }]}>{error}</ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.xs,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: '500',
  },
  input: {
    fontSize: FontSize.md,
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
  error: {
    fontSize: FontSize.xs,
  },
});
