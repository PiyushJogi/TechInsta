import { View, Text,Image,TextInput,Button} from 'react-native'
import React,{useState} from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { Divider } from 'react-native-elements';

const postValidationSchema = Yup.object({
  imageUrl: Yup.string()
            .url()
            .required('Image url is required'),
  caption : Yup.string()
            .max(2200,'Caption has reached the maximum characers limit')             
}); 

const placeholderImage = 'https://tse2.explicit.bing.net/th?id=OIP.AsEU_9yqRXyWLEA9nzpHQwAAAA&pid=Api&P=0&w=158&h=158'; 

const PostUploader = () => {
  const [thumbnailUrl,setThumbnailUrl] = useState(placeholderImage);
  return (
   <Formik initialValues = {{imageUrl:'',caption:''}} 
           validationSchema = {postValidationSchema}
           validateOnMount={true}
           onSubmit = {(values)=>console.log(values)}

   >
      {({handleChange,handleBlur,handleSubmit,values,errors,isValid}) => (

          <>
             <View style={{margin:20,flexDirection:'row',justifyContent:'space-between'}}>
               <Image source={{uri:thumbnailUrl?thumbnailUrl:placeholderImage}} style={{height:100,width:100}}/>
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