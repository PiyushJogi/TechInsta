import { View, Text,Image,StyleSheet} from 'react-native';
import { Divider } from 'react-native-elements'; 
import React from 'react';


const Posts = ({post}) => {
  return (
  
      <View style={{marginBottom:30}}>   
        <Divider width={1} orientation='vertical' />
        <PostHeader post={post} />
     </View>
  )
}

const PostHeader = ({post}) => (
  <View style={styles.postHeaderContainer}>
     <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={{uri:post.userimage}}  style= {styles.postHeaderUserImage} />
          <Text style={{color:'white',marginLeft:5,fontWeight:'700'}}>{post.username}</Text>
     </View>  
     <Text style={{color:'white',fontWeight:'bold'}}>...</Text>
 </View>
);

const styles = StyleSheet.create({
  postHeaderContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:5,
  },
  postHeaderUserImage:{
    width:35,
    height:35,
    borderRadius:50, 
    borderColor:'#ff8501',
    borderWidth:1.6,  
  },
}); 

export default Posts;