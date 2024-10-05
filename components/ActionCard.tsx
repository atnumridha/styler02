import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QRyy7n9T0sYPTa4XMkmJvQ.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            ECMAScript 2021 version is expected to be released in the next year,
            and now that we are finalizing this dystopic 2020 is an excellent
            time to review the new functionality that will bring the ES12
            version.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://javascript.plainenglish.io/javascript-es2021-es12-new-features-7aa5f411d81f',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://javascript.plainenglish.io/javascript-es2021-es12-new-features-7aa5f411d81f',
              )
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 400,
    height: 420,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 300,
    width: 400,
  },
  bodyContainer: {},
  footerContainer: {},
  socialLinks: {},
});
