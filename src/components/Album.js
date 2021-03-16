import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
// import AlbumScreen from '../screens/AlbumScreens/AlbumScreen'

const Album = ({title}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('AlbumsScreen', {title})}>
        <View style={styles.box}>
            <Text>{title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default Album

const styles = StyleSheet.create({
    box: {
        width: 120,
        height: 120,
        backgroundColor: 'red'
    }
})
