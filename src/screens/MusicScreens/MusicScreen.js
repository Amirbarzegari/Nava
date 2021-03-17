import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import Album from "../../components/Album";
import Spacer from "../../components/Spacer";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { useNavigation } from "@react-navigation/native";

const albums = ["The Social Network", "Gavazn", "Sade", "Negar"];

const MusicScreen = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <ScrollView>
      <Spacer />
      <Spacer>
        <View style={styles.subtitle}>
          <Text h2>Music</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingsScreen")}
          >
            <Feather name="settings" size={25} />
          </TouchableOpacity>
        </View>
      </Spacer>

      <Spacer>
        <View style={styles.subtitle}>
          <Text h3>Recently Played</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("MoreScreen")}
          >
            <MaterialIcons name="keyboard-arrow-right" size={25} />
          </TouchableOpacity>
        </View>
      </Spacer>
      <Spacer>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={albums}
          renderItem={({ item }) => {
            return (
              <Spacer>
                <Album title={item} />
              </Spacer>
            );
          }}
          keyExtractor={(title) => title}
        />
      </Spacer>


      <Spacer>
        <View style={styles.subtitle}>
          <Text h3>Favorites</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("MoreScreen")}
          >
            <MaterialIcons name="keyboard-arrow-right" size={25} />
          </TouchableOpacity>
        </View>
      </Spacer>
      <Spacer>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={albums}
          renderItem={({ item }) => {
            return (
              <Spacer>
                <Album title={item} />
              </Spacer>
            );
          }}
          keyExtractor={(title) => title}
        />
      </Spacer>


      <Spacer>
        <View style={styles.subtitle}>
          <Text h3>Playlists</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("MoreScreen")}
          >
            <MaterialIcons name="keyboard-arrow-right" size={25} />
          </TouchableOpacity>
        </View>
      </Spacer>
      <Spacer>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={albums}
          renderItem={({ item }) => {
            return (
              <Spacer>
                <Album title={item} />
              </Spacer>
            );
          }}
          keyExtractor={(title) => title}
        />
      </Spacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MusicScreen;
