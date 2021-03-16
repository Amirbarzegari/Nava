import React, { useCallback, useMemo, useRef } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import BottomSheet from "@gorhom/bottom-sheet";
import { Image, Text, Button } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Spacer from "../../components/Spacer";
import Album from "../../components/Album";
// import {
//   BottomSheetModal,
//   BottomSheetModalProvider,
// } from "@gorhom/bottom-sheet";


const PlayingSongScreen = ({ route }) => {
  // ref
  // const bottomSheetModalRef = useRef(BottomSheetModal);

  // // variables
  // const snapPoints = useMemo(() => ["25%", "25%"], []);

  // // callbacks
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  // }, []);
  // const handleSheetChanges = useCallback((index) => {
  //   console.log("handleSheetChanges", index);
  // }, []);

  const { songTitle, albumTitle } = route.params;
  return (
    // <BottomSheetModalProvider>
      <ScrollView>
        {/* <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.bottomSheetContainer}>
            <Text>Awesome 🎉</Text>
            <Button title='Add to playlist' type='clear'/>
            <Button title='Add to favorites' type='clear'/>
            <Button title='Album Page' type='clear'/>
            <Button title='Artist Page' type='clear'/>
          </View>
        </BottomSheetModal> */}
        <View>
          <Spacer />
          <Spacer />
          <View style={styles.header}>
            <Spacer>
              <Feather name="chevron-down" size={24} />
            </Spacer>
            <Spacer>
              <Text style={{ marginLeft: 45 }}>From {albumTitle}</Text>
            </Spacer>
            <View style={{ flexDirection: "row" }}>
              <Spacer>
                <Feather name="download" size={24} />
              </Spacer>

              {/* <TouchableOpacity onPress={handlePresentModalPress}> */}
              <TouchableOpacity onPress={() => console.log("More")}>
                <Spacer>
                  <Feather name="more-vertical" size={24} />
                </Spacer>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Spacer />
            <Image
              source={{ uri: "http://alisorena.info/images/3.jpg" }}
              style={styles.cover}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Spacer />
          </View>
        </View>
        <View style={styles.buttons}>
          <Spacer>
            <TouchableOpacity onPress={() => console.log("Send")}>
              <Feather name="send" size={24} />
            </TouchableOpacity>
          </Spacer>
          <Spacer>
            <TouchableOpacity onPress={() => console.log("Like")}>
              <Feather name="heart" size={24} color="black" />
            </TouchableOpacity>
          </Spacer>
          <Spacer>
            <TouchableOpacity onPress={() => console.log("Lyrics")}>
              <Entypo name="text-document" size={24} color="black" />
            </TouchableOpacity>
          </Spacer>
        </View>
        <View style={{ marginLeft: 30 }}>
          <Spacer>
            <Text h3>{songTitle}</Text>
            <Text>{albumTitle}</Text>
          </Spacer>
        </View>
        <View style={styles.trackPlayer}></View>
        <View style={styles.buttons}>
          <Spacer>
            <TouchableOpacity onPress={() => console.log("repeat")}>
              <Feather name="repeat" size={15} />
            </TouchableOpacity>
          </Spacer>
          <Spacer>
            <TouchableOpacity onPress={() => console.log("skip-back")}>
              <Feather name="skip-back" size={24} />
            </TouchableOpacity>
          </Spacer>
          <Spacer>
            <TouchableOpacity onPress={() => console.log("play")}>
              <Feather name="play" size={24} color="black" />
            </TouchableOpacity>
          </Spacer>
          <Spacer>
            <TouchableOpacity onPress={() => console.log("skip-forward")}>
              <Feather name="skip-forward" size={24} color="black" />
            </TouchableOpacity>
          </Spacer>
          <Spacer>
            <TouchableOpacity onPress={() => console.log("shuffle")}>
              <Feather name="shuffle" size={15} color="black" />
            </TouchableOpacity>
          </Spacer>
        </View>
      </ScrollView>
    // </BottomSheetModalProvider>
  );
};

export default PlayingSongScreen;

const styles = StyleSheet.create({
  header: {
    //   flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cover: {
    //   flex: 1,
    height: 300,
    width: 300,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
    alignItems: "center",
  },
  trackPlayer: {
    height: 5,
    width: 300,
    backgroundColor: "gray",
    alignSelf: "center",
  },
  bottomSheetContainer: {
    flex: 1,
    alignItems: 'center'
  }
});
