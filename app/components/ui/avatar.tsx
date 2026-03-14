import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/app/components/themed-text';
import { useThemeColor } from '@/app/hooks/use-theme-color';
import { BorderRadius, FontSize } from '@/constants/theme';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  uri?: string | null;
  name?: string;
  size?: AvatarSize;
}

const sizes: Record<AvatarSize, number> = {
  sm: 32,
  md: 48,
  lg: 72,
};

export function Avatar({ uri, name, size = 'md' }: AvatarProps) {
  const backgroundColor = useThemeColor({}, 'tint');
  const dimension = sizes[size];

  if (uri) {
    return (
      <Image
        source={{ uri }}
        style={[styles.image, { width: dimension, height: dimension, borderRadius: dimension / 2 }]}
      />
    );
  }

  const initials = name
    ? name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  return (
    <View
      style={[
        styles.fallback,
        { width: dimension, height: dimension, borderRadius: dimension / 2, backgroundColor },
      ]}>
      <ThemedText style={[styles.initials, { fontSize: dimension * 0.4 }]}>
        {initials}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#E0E0E0',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
