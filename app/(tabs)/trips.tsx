import { StyleSheet } from 'react-native';

import { ThemedText } from '@/app/components/themed-text';
import { ThemedView } from '@/app/components/themed-view';

export default function TripsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Trips</ThemedText>
      <ThemedText>Your planned trips will appear here.</ThemedText>
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
