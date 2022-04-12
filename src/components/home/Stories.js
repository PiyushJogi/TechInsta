import { View, Text,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import { users } from '../../api/static_data/users';


const Stories = () => {
  return (
    <View style={{marginBottome:13}}>     
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>  
            
            {users.map((element,index) =>(
                    <View key={index} style={{alignItems:'center',marginLeft:6}}>
                        <TouchableOpacity>
                          <Image source={{uri:element.image}} style={styles.storiesimg} />
                        </TouchableOpacity>
                        <Text style={{color:'white'}}>{element.user.length>11?element.user.slice(0,10)+'..':element.user}</Text>
                    </View> 
                ))}
        </ScrollView> 
    </View>
  )
}
const styles = StyleSheet.create({
    storiesimg:{
        width:70,
        height:70,
        borderRadius:50,
        borderColor:'#ff8501',
        borderWidth:3,
    },
});
export default Stories;