import React from "react";
import {View,Text,SafeAreaView,StyleSheet} from "react-native";

import Header from "../components/home/Header";
import Posts from "../components/home/Posts";
import Stories from "../components/home/Stories";

const HomeScreen = () => {
   return(
   <View style={styles.container}>
        <Header />  
        <Stories />    
        <Posts />
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

  