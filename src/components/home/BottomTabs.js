import React,{useState} from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,Platform } from 'react-native';
import { Divider } from 'react-native-elements';

export const bottomTabsIcons = [
    {
       name:'Home',
       active:'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
       inactive:'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
        name:'Search',
        active:'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive:'https://img.icons8.com/ios/500/ffffff/search--v1.png',
     },
     {
        name:'Reels',
        active:'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        inactive:'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
     },
     {
        name:'Shop',
        active:'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
     },
     {
        name:'Profile',
        active:'https://i.imgur.com/xDt7tqS.jpeg',
        inactive:'https://i.imgur.com/xDt7tqS.jpeg',
     },
];

const BottomTabs = ({icons}) => {
   const [activeTab,setActiveTab] = useState('Home');

   const Icon = ({icon}) => (
      <TouchableOpacity onPress={()=>setActiveTab(icon.name)}>
         <Image source= {{uri:activeTab===icon.name?icon.active:icon.inactive}} 
                style = {[
                            styles.icon,
                            icon.name==='Profile'?styles.profilePic():null,
                            activeTab==='Profile' && icon.name===activeTab ? styles.profilePic(activeTab):null   
                        ]} 
         />
      </TouchableOpacity>
   );  

  return (
     <View style={styles.wrapper}>
         <Divider width={1} orientation='vertical' />
         <View style={styles.iconsContainer}>
            {icons.map((element,index)=>(
               <Icon key={index} icon={element} />
            ))}
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
   wrapper:{
       // position:'absolute',
        //bottom:Platform.OS=="android"?'0%':'3%',
        width:'100%',
        zIndex:999,
        backgroundColor:'#000',
   },
   iconsContainer:{
      flexDirection:'row',
      justifyContent:'space-around', 
      height:50,
      paddingTop:10,
   },
   icon:{
      width:30,
      height:30,
   },
   profilePic:(activeTab='')=>({
    borderRadius:50,
    borderColor:'#fff',
    borderWidth:activeTab==='Profile'?2:0,
   }),
});

export default BottomTabs;