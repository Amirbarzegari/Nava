import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AlbumsScreen from './src/screens/MusicScreens/AlbumsScreen';
import DiscoverScreen from './src/screens/MusicScreens/DiscoverScreen';
import MoreScreen from './src/screens/MusicScreens/MoreScreen';
import MusicScreen from './src/screens/MusicScreens/MusicScreen';
import PlayingSongScreen from './src/screens/MusicScreens/PlayingSongScreen';
import SettingsScreen from './src/screens/MusicScreens/SettingsScreen';
import HomeScreen from './src/screens/HomeScreens/HomeScreen';
import ChatScreen from './src/screens/ChatScreens/ChatScreen';
import SearchScreen from './src/screens/SearchScreens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// enableScreens();

function mainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="MusicScreen" component={MusicScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="mainFlow"
            component={mainFlow}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AlbumsScreen"
            component={AlbumsScreen}
          />
          <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
          <Stack.Screen name="MoreScreen" component={MoreScreen} />
          <Stack.Screen
            options={{headerShown: false}}
            name="PlayingSongScreen"
            component={PlayingSongScreen}
          />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
