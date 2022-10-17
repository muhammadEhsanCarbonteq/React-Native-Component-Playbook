import React, {useRef, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {speakers} from '../data/speakers.json';
import styles from '../containers/styles/sharedStyles';

function Speakers() {
  const [filteredSpeakers, setFilterSpeakers] = useState(speakers);

  const getSearchText = (text) => {
    console.log('getSearchText >');
    let filteredSpeakersList = speakers.filter((value) =>
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase()),
    );

    setFilterSpeakers(filteredSpeakersList);
  };
  return (
    <View>
      <SearchSessions getSearchText={getSearchText} />
      <FlatList
        data={filteredSpeakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={Footer}
        keyboardDismissMode={'on-drag'}
      />
    </View>
  );
}

const renderItem = ({item, index}) => {
  return (
    <View>
      <SpeakerList
        id={index}
        name={item.name}
        bio={item.bio}
        session={item.sessions[0].name}
      />
    </View>
  );
};

const SearchSessions = (props) => {
  const [searchText, setSearchText] = useState('');
  const textInput = useRef();
  const handleSearch = (text) => {
    setSearchText(text);
    props.getSearchText(text);
  };
  const clearSearch = () => {
    textInput.current.clear();
    props.getSearchText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={textInput}
        style={styles.searchInput}
        value={searchText}
        onChangeText={(text) => handleSearch(text)}
        placeholder="Search Session"
        returnKeyType="go"
        autoCorrect={false}
        autoFocus={false}
        keyboardType={'default'}
        multiline={false}
        selectionColor="green"
      />
      <Pressable onPress={clearSearch} style={styles.clearContainer}>
        <Image
          style={styles.clearImage}
          source={require('../images/multiply-1_Orange.png')}
        />
      </Pressable>
    </View>
  );
};

const SpeakerList = ({id, name, bio, session}) => {
  return (
    <View style={styles.sectionContainer} key={id}>
      <Text style={styles.sectionTitle}>{`Speaker Name: ${name}`}</Text>
      <Text style={styles.sectionDescription}>{`Bio: ${bio}`}</Text>
      <Text style={styles.sectionDescriptionBold}>{`Session: ${session}`}</Text>
    </View>
  );
};

const SeparatorComponent = () => {
  return <View style={styles.seperatorStyle} />;
};
const HeaderComponent = () => {
  return (
    <Header
      image={require('../images/girl.png')}
      heading="Awesome Speaker Lineup!!"
    />
  );
};
const FooterComponent = () => {
  return <Footer />;
};

export default Speakers;
