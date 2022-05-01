import { View, Text,TextInput,StyleSheet, Pressable,TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import firebase from '../../../firebase'

const checkLogin = async (email,password,navigation) => {

    try{
                    
       await firebase.auth().signInWithEmailAndPassword(email,password)
       console.log('login Success',email,password);
    } catch(error)
    {
        Alert.alert(
            'OOPS..',
            error.message+'\n\n What would you like to do next?',
            [
              {
                  text: 'Try Again',
                  //onPress: ()=>console.log('Try Again'),
                  style:'cancel',
              },
              {
                  text:'Sign Up',
                  onPress: ()=>navigation.push('SignupScreen'),  
              }
            ]
        );
    }

}

const LoginForm = ({navigation}) => {
    const LoginFormSchema = Yup.object({
        email:Yup.string().email().required('An email is required'),
        password:Yup.string().required().min(6,'Password length should be atleast of 6 characters')
    })
  return (
    <View style={styles.wrapper}>
        <Formik 
              initialValues={{email:'',password:''}}
              validationSchema={LoginFormSchema}
              validateOnMount={true}
              onSubmit={(values)=>{checkLogin(values.email,values.password,navigation)}}
        >
       {({handleChange,handleBlur,handleSubmit,values,errors,isValid})=>(
          <>
                    <View style={
                        [ 
                            styles.inputFields,
                            {
                                borderColor:values.email.length<1 || Validator.validate(values.email) ? '#ccc':'red',

                            }
                        ]
                    }>
                    <TextInput 
                            placeholder='Phone number, username or email' 
                            placeholderTextColor='#444'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            autoFocus={true}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                    />

                    </View>
                    <View style={[
                                  styles.inputFields,
                                  {
                                      borderColor:values.password.length<1 || values.password.length>5 ? '#ccc' :'red',
                                  }
                                ]} 
                    >
                    <TextInput 
                            placeholder='Password' 
                            placeholderTextColor='#444'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            keyboardType='email-address'
                            textContentType='password'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                    />
                </View>
                <View style={{alignItems:'flex-end',marginBottom:30}}>
                    <Text style={{color:'#6880F5'}}>Forgot Password</Text>
                </View>  
                <Pressable 
                       titleSize={20} 
                       style={styles.button(isValid)} 
                       onPress={handleSubmit}
                       disabled={!isValid}
                >
                <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
                <View style={styles.signupContainer}>
                    <Text>Dont't have an account</Text>
                    <TouchableOpacity onPress={()=>navigation.push('SignupScreen')}>
                        <Text style={{color:'#6880F5'}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>       
          </>
       )}     
      
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:80,
        paddingHorizontal:6,
    },
    inputFields:{
        borderRadius:4,
        padding:6,
        borderWidth:1,
        marginBottom:10,
        backgroundColor:'#FAFAFA',
    },
    button:(isValid)=>({
         backgroundColor:isValid?'#0096F6':'#9ACAF7',
         justifyContent:'center',
         alignItems:'center',
         minHeight:42,
         borderRadius:4,
    }),
    buttonText:{
       fontWeight:'600',
       color:'#fff',
       fontSize:20,
    },
    signupContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:55,
    }
});
export default LoginForm