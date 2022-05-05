import React, { useEffect,useState } from "react";
import {View,Text,SafeAreaView,StyleSheet,ScrollView} from "react-native";
import { db } from "../../firebase";


import BottomTabs,{bottomTabsIcons} from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Posts from "../components/home/Posts";
import Stories from "../components/home/Stories";


const HomeScreen = ({navigation}) => {
   const [posts,setPosts] = useState([]);

   useEffect(() => {
     db.collectionGroup('posts').onSnapshot(
        (snapshot) => {
          setPosts(snapshot.docs.map(doc => doc.data() ));
        })
   },[])

   return(
   <View style={styles.container}>
        <Header navigation={navigation} />  
        <Stories />  
      
        <ScrollView > 
        {posts.map((element,index)=>(
           <Posts post={element} key={index}/>
        ))}
        </ScrollView>
        <BottomTabs icons={bottomTabsIcons}/>
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

  