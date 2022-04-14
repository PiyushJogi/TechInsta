import React from "react";
import {View,Text,SafeAreaView,StyleSheet,ScrollView} from "react-native";


import { posts } from "../api/static_data/posts";
import Header from "../components/home/Header";
import Posts from "../components/home/Posts";
import Stories from "../components/home/Stories";

const HomeScreen = () => {
   return(
   <View style={styles.container}>
        <Header />  
        <Stories />  
      
        <ScrollView> 
        {posts.map((element,index)=>(
           <Posts post={element} key={index}/>
        ))}
        </ScrollView>
   </View>
   );

}

const styles = StyleSheet.create({

   container: {
      flex:1,
      backgroundColor:'black',
      paddingTop:40, 
   },

});

export default HomeScreen;

  