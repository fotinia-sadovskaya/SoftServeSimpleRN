import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import ImageViewer from './src/ImageViewer';
import Button from './src/Button';

const PlaceholderImage = require('./assets/images/softserve.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={PlaceholderImage} style={styles.image} />

      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button label="Click me" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 18,
  },
});