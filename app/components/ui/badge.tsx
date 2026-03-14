import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/app/components/themed-text';
import { useThemeColor } from '@/app/hooks/use-theme-color';
import { BorderRadius, FontSize, Spacing } from '@/constants/theme';

interface BadgeProps {
  label: string;
  color?: string;
}

export function Badge({ label, color }: BadgeProps) {
  const tint = useThemeColor({}, 'tint');
  const badgeColor = color || tint;

  return (
    <View style={[styles.badge, { backgroundColor: badgeColor + '20' }]}>
      <ThemedText style={[styles.text, { color: badgeColor }]}>
        {label}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm + 2,
    borderRadius: BorderRadius.full,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: FontSize.xs,
    fontWeight: '600',
  },
});
