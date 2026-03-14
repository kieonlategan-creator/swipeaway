import { StyleSheet } from 'react-native';

import { ThemedText } from '@/app/components/themed-text';
import { ThemedView } from '@/app/components/themed-view';

export default function WishlistScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Wishlist</ThemedText>
      <ThemedText>Your saved destinations will appear here.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
