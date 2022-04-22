import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = () => {
  return (
    <View style={styles.container}>
      <AddNewPost />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        paddingTop:40, 
    },
});

export default NewPostScreen