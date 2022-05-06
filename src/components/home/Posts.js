import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements'; 
import React,{useState,useEffect} from 'react';
import { firebase,db } from '../../../firebase';

const PostFooterIcons = [
  {
     name:'Like',
     imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
     likedImageUrl:'https://img.icons8.com/ios-glyphs/344/fa314a/like-filled.png',
  },
  {
     name:'Comment',
     imageUrl:'https://img.icons8.com/material-outlined/60/ffffff/speech.png',  
  },
  {
    name:'Share',
    imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/sent.png',  
 },
 {
  name:'Save',
  imageUrl:'https://img.icons8.com/fluency-systems-regular/344/ffffff/bookmark-ribbon--v1.png',  
}
];

const Posts = ({post}) => {
  const handleLike = (post) => {
    const can_like = !post.likes_by_users.includes(firebase.auth().currentUser.email)
   
    db.collection('users')
      .doc(post.owner_email)
      .collection('posts')
      .doc(post.id)
      .update({
           likes_by_users:can_like?firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email)
                              :firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.email),
           })
             .then(()=>{console.log('Like Successfully Updated')})
             .catch((error)=>{console.log(error)})
  }
  
  return (
  
      <View style={{marginBottom:30}}>   
        <Divider width={1} orientation='vertical' />
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{marginHorizontal:15,marginTop:10}}>
          <PostFooter post={post} handleLike={handleLike}/>
          <Likes post={post}/>
          <Caption post={post} />
          <CommentSection post={post} />
          <Comments post={post} />
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

const PostFooter = ({handleLike,post}) => (
 
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={styles.leftFooterIconsContainer}>
        <TouchableOpacity onPress={()=>handleLike(post)}>
        <Image style={styles.footerIcon} source={{uri:post.likes_by_users.includes(firebase.auth().currentUser.email)?PostFooterIcons[0].likedImageUrl:PostFooterIcons[0].imageUrl}} />
        </TouchableOpacity>
        <Icon imgstyle={styles.footerIcon} imgurl={PostFooterIcons[1].imageUrl} />
        <Icon imgstyle={[styles.footerIcon,styles.shareIcon]} imgurl={PostFooterIcons[2].imageUrl} />
      </View> 
      <View>
         <Icon imgstyle={styles.footerIcon} imgurl={PostFooterIcons[3].imageUrl} />
      </View> 
  </View>
 
);

const Icon = ({imgstyle,imgurl}) => (
 <TouchableOpacity>
     <Image style ={imgstyle}  source={{uri:imgurl}} />
</TouchableOpacity>
);

const Likes = ({post}) => (
  <View style={{flexDirection:'row',marginTop:4}}>
  <Text style={{color:'white',fontWeight:'bold'}}>{post.likes_by_users.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} likes</Text>
  </View>
);

const Caption = ({post}) => (
  <View style={{marginTop:5}}>
    <Text style={{color:'white'}}>
      <Text style={{fontWeight:'bold'}}>{post.username}  </Text>
      <Text>{post.caption}</Text>
    </Text>
</View>
);

const CommentSection = ({post}) => (
 <View style={{marginTop:5}}>
   { !!post.comments.length && (
    
    <Text style={{color:'grey'}}>
        View {post.comments.length>1?'all':''} {post.comments.length} {post.comments.length>1?'comments':'comment'}
    </Text>

   )}
 </View>
);

const Comments = ({post}) => (
  <>
     {
       post.comments.map((element,index)=>(

           <View key={index} style={{flexDirection:'row',marginTop:3}}>
             <Text style={{color:'white'}}>
                 <Text style={{fontWeight:'bold'}}>{element.user}  </Text>
                 <Text>{element.comment}</Text>
             </Text>
           </View>
             
        ))
     }
  </>

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
    height:30,
    width:30,
  },
  leftFooterIconsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'33%',
  },
  shareIcon:{
     transform:[{rotate:'320deg'}],
     marginTop:-3,
  },
}); 

export default Posts;