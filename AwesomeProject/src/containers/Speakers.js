import React from 'react';
import {Image, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {speakers} from '../data/speakers.json';
import styles from '../containers/styles/sharedStyles';

function Speakers() {
  return (
    <View>
      <FlatList
        data={speakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
}

const renderItem = ({item, index}) => {
  return (
    <View>
      <SpeakerList id={index} name={item.name} bio={item.bio} />
    </View>
  );
};

const SpeakerList = ({id, name, bio}) => {
  return (
    <View style={styles.sectionContainer} key={id}>
      <Text style={styles.sectionTitle}>{`Speaker Name: ${name}`}</Text>
      <Text style={styles.sectionDescription}>{`Bio: ${bio}`}</Text>
    </View>
  );
};

const SeparatorComponent = () => {
  return <View style={styles.seperatorStyle} />;
};
const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Image
        style={styles.headerImage}
        source={require('../images/girl.png')}
      />
      <Text style={styles.sectionDescription}>Awesome Speaker Lineup!!</Text>
    </View>
  );
};
const FooterComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.footerImage} source={require('../images/G.png')} />
      <Text style={styles.sectionDescription}>
        All rights reserved by Globomantics Tech Conference 2020.
      </Text>
    </View>
  );
};

export default Speakers;
