import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements'; 
import React from 'react';

const PostFooterIcons = [
  {
     name:'Like',
     imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
     likedImageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
  },
  {
     name:'Comment',
     imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',  
  },
  {
    name:'Share',
    imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',  
 },
 {
  name:'Save',
  imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',  
}
];

const Posts = ({post}) => {
  return (
  
      <View style={{marginBottom:30}}>   
          <Divider width={1} orientation='vertical' />
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{marginHorizontal:15,marginTop:10}}>
          <PostFooter />
        </View>
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


const PostImage = ({post}) => (
  <View style={{height:450,width:'100%'}}>
     <Image source={{uri:post.postimgurl}} style={{height:'100%',resizeMode:'cover'}} />
  </View>
);

const PostFooter = () => (
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={styles.leftFooterIconsContainer}>
        <Icon imgstyle={styles.footerIcon} imgurl={PostFooterIcons[0].imageUrl} />
        <Icon imgstyle={styles.footerIcon} imgurl={PostFooterIcons[0].imageUrl} />
        <Icon imgstyle={styles.footerIcon} imgurl={PostFooterIcons[0].imageUrl} />
      </View> 
      <View>
         <Icon imgstyle={styles.footerIcon} imgurl={PostFooterIcons[0].imageUrl} />
      </View> 
  </View>
);

const Icon = ({imgstyle,imgurl}) => (
 <TouchableOpacity>
     <Image style ={imgstyle}  source={{uri:imgurl}} />
</TouchableOpacity>
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
  footerIcon:{
    height:33,
    width:33,
  },
  leftFooterIconsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'32%',
  },
}); 

export default Posts;