import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
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

enableScreens();

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

// const MyTheme = {
//   dark: true,
//   colors: {
//     primary: 'rgb(255, 45, 85)',
//     background: 'rgb(242, 242, 242)',
//     card: 'rgb(255, 255, 255)',
//     text: 'rgb(28, 28, 30)',
//     border: 'rgb(199, 199, 204)',
//     notification: 'rgb(255, 69, 58)',
//   },
// };

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
