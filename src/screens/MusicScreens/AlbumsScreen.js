import React, {useCallback, useMemo, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import {Button, Text, Image} from 'react-native-elements';
import Spacer from '../../components/Spacer';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Song from '../../components/Song';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const songs = ['Harekat', 'Daar', 'Asayeshgah', 'Pelikan'];
const AlbumsScreen = ({navigation, route}) => {
  // ref
  const bottomSheetModalRef = useRef(BottomSheetModal);

  // variables
  const snapPoints = useMemo(() => ['25%', '25%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const {title} = route.params;
  // const navigation = useNavigation()
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.bottomSheetContainer}>
          {/* <Text>Awesome 🎉</Text> */}
          <Button title="Add to playlist" type="clear" />
          <Button title="Add to favorites" type="clear" />
          <Button title="Album Page" type="clear" />
          <Button title="Artist Page" type="clear" />
        </View>
      </BottomSheetModal>
      <FlatList
        ListHeaderComponent={
          <View>
            <Spacer />
            <Spacer />
            <Spacer>
              <Spacer>
                <View style={styles.buttons}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log('Send')}>
                    <Feather name="send" size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log('Download')}>
                    <Feather name="download" size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handlePresentModalPress}>
                    <Feather name="more-vertical" size={24} />
                  </TouchableOpacity>
                </View>
              </Spacer>
              <Spacer />
              <Text h3>AlbumsScreen</Text>
              <Text h4>{title}</Text>
              <Text h6>Created by *user*</Text>
            </Spacer>
            <Spacer />
            <Image
              source={{uri: 'https://s16.picofile.com/file/8428268076/3.jpg'}}
              style={{width: 200, height: 200}}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Spacer />
            <Button title="Play" buttonStyle={styles.playButton} />
          </View>
        }
        data={songs}
        renderItem={({item}) => {
          return (
            <Spacer>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PlayingSongScreen', {
                    songTitle: item,
                    albumTitle: title,
                  });
                }}>
                <Song songTitle={item} />
              </TouchableOpacity>
            </Spacer>
          );
        }}
        keyExtractor={item => item}
      />
    </BottomSheetModalProvider>
  );
};

export default AlbumsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playButton: {
    width: 200,
    height: 40,
    backgroundColor: '#fcd009',
  },
});
