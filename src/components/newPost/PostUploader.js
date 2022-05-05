import { View, Text,Image,TextInput,Button} from 'react-native'
import React,{useState,useEffect} from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'
import {db,firebase} from "../../../firebase"
const postValidationSchema = Yup.object({
  imageUrl: Yup.string()
            .url()
            .required('Image url is required'),
  caption : Yup.string()
            .max(2200,'Caption has reached the maximum characers limit')             
}); 

const placeholderImage = 'https://tse2.explicit.bing.net/th?id=OIP.AsEU_9yqRXyWLEA9nzpHQwAAAA&pid=Api&P=0&w=158&h=158'; 

const PostUploader = ({navigation}) => {
  
  const [thumbnailUrl,setThumbnailUrl] = useState(placeholderImage);
  
  const [currentLoggedInUser,setCurrentLoggedInUser] = useState(null)
  const getUsername = () => {
    const user = firebase.auth().currentUser
    const unsubscribe = db.collection('users').where('owner_uid','==',user.uid).limit(1).onSnapshot(
      (snapshot) => {snapshot.docs.map(
        doc => setCurrentLoggedInUser({
          username: doc.data().username,
          profilePicture: doc.data().profile_picture,
        })
      )}
    )
    return unsubscribe;
  } 
 
  useEffect(() => {getUsername()},[])
  
  const uploadPostToFirebase = (imageUrl,caption) => {
    
    const unsubscribe = db.collection('users')
                          .doc(firebase.auth().currentUser.email)
                          .collection('posts')
                          .add({
                            postimgurl: imageUrl,
                            username:currentLoggedInUser.username,
                            userimage:currentLoggedInUser.profilePicture,
                            owner_uid:firebase.auth().currentUser.uid,
                            caption: caption,
                            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
                            likes:0,
                            likes_by_users: [],
                            comments:[],
                          })
                          .then(()=>navigation.goBack()) 
                          return unsubscribe;          
  }

  return (
   <Formik initialValues = {{imageUrl:'',caption:''}} 
           validationSchema = {postValidationSchema}
           validateOnMount={true}
           onSubmit = {
                        (values)=>{
                            uploadPostToFirebase(values.imageUrl,values.caption)
                            } 
                      }

   >
      {({handleChange,handleBlur,handleSubmit,values,errors,isValid}) => (

          <>
             <View style={{margin:20,flexDirection:'row',justifyContent:'space-between'}}>
               <Image source={{uri:validUrl.isUri(thumbnailUrl)?thumbnailUrl:placeholderImage}} style={{height:100,width:100}}/>
             <View style={{flex:1,marginLeft:12}}>
             <TextInput 
                  placeholder="Write a caption..." 
                  placeholderTextColor='grey' 
                  multiline={true} 
                  style={{color:'white',fontSize:20}}
                  onChangeText={handleChange('caption')}
                  onBlur={handleBlur('caption')}
                  value={values.caption}
              />
              </View>
             </View>
             <Divider width={0.2} orientation="vertical" />
             <TextInput 
                  placeholder="Enter image url" 
                  onChange={e=>setThumbnailUrl(e.nativeEvent.text)}
                  placeholderTextColor='grey' 
                  style={{color:'white',fontSize:18}}
                  onChangeText={handleChange('imageUrl')}
                  onBlur={handleBlur('imageUrl')}
                  value={values.imageUrl}
              />
              {errors.imageUrl && ( <Text style={{color:'red',fontSize:10}}> {errors.imageUrl} </Text> )}

              <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
          </>
      )}
   </Formik>
  )
}

export default PostUploader