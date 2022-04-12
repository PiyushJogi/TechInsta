import { View, Text,ScrollView ,Image} from 'react-native';
import React from 'react';
import { posts } from '../../api/static_data/posts';


const Posts = () => {
  return (
  
      <View style={{marginBottom:13}}>     
        <ScrollView>  
            
            {posts.map((element,index) =>(
                    <View key={index} >
                       <Image source={{uri:element.postimgurl}} style={{height:120,width:'100%'}}/>
                    </View> 
                ))}
        </ScrollView> 
    </View>
  )
}

export default Posts;