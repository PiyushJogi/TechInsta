import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import {firebase} from "../../../firebase"


const handleSignout = async () => {
    try{
       await firebase.auth().signOut()
       console.log('Signout Succesfuuly')
    }catch(error)
    {
        console.log(error);
    }

}
const Header = ({navigation}) => {

    return(
        <View style={styles.container}>
            {/* LEft side Logo */}
            <TouchableOpacity onPress={handleSignout}>
                 <Image style = {styles.logo} source ={require("../../assets/home/header-logo.png")} />
            </TouchableOpacity>

            {/* Right side icons */}
            <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
                   <Image style={styles.icons} source = {{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}} />
               </TouchableOpacity>
               <TouchableOpacity>
                   <Image style={styles.icons} source = {{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}} />
               </TouchableOpacity>
               <TouchableOpacity>
                   <View style={styles.unreadBadgeContainer}>
                      <Text style={styles.unreadBadgeText}>18</Text>
                   </View>
                   <Image style={styles.icons} source = {{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}} />
               </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
    }, 
    icons:{
       width:30,
       height:30,
       resizeMode:'contain',   
       marginLeft:8,
    },
    iconsContainer:{
       flexDirection:'row', 
    },
    logo: {
       height:50,
       width:100,
       resizeMode:'contain',
    },
    unreadBadgeContainer: {  
      backgroundColor:'red',
      height:18,
      width:25,
      position:"absolute",
      left:14,
      bottom:18,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
      zIndex:100,
    }, 
    unreadBadgeText:{
      color:'white',
      fontWeight:'800',
    },
 });
 
export default Header;
