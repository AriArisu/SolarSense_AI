import React from 'react';
import { ScrollView, View, Text, StyleSheet,} from 'react-native';

const ScrollableFooterScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text>Content item 1</Text>
        <Text>Content item 2</Text>
        <Text>Content item N</Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>This footer scrolls with content.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1, // Allows content to grow and push footer down if needed
    justifyContent: 'flex-end', // Aligns content to the bottom if less than screen height
  },
  footer: {
    backgroundColor: '#555',
    padding: 15,
    alignItems: 'center',
    marginTop: 20, // Add some space above the footer
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});

export default ScrollableFooterScreen;