import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import PostUploader from './PostUploader';

const AddNewPost = () => {
  return (
    <View style={styles.container}>
        <Header />
        <PostUploader />
    </View>
  )
}

const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Image source={{uri:'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}} style ={{height:30,width:30}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text>
    </View>
);
const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headerText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'700',
        marginRight:23,
    },
});

export default AddNewPost