import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../containers/styles/sharedStyles';

export const Footer = () => {
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.footerImage} source={require('../images/G.png')} />
      <Text style={styles.sectionDescription}>
        All rights reserved by Globomantics Tech Conference 2020.
      </Text>
    </View>
  );
};
