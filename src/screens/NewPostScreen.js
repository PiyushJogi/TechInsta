import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AddNewPost navigation={navigation}/>
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