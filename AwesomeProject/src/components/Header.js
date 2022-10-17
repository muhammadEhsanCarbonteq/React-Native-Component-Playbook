import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../containers/styles/sharedStyles';

export const Header = (props) => {
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.headerImage} source={props.image} />
      <Text style={styles.sectionDescription}>{props.heading}</Text>
    </View>
  );
};
