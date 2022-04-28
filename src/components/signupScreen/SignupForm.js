import { View, Text,TextInput,StyleSheet, Pressable,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignupForm = ({navigation}) => {
    const SignupFormSchema = Yup.object({
        email:Yup.string().email().required('An email is required'),
        username:Yup.string().required().min(2,'Username is required'),
        password:Yup.string().required().min(6,'Password length should be atleast of 6 characters')
    })
  return (
    <View style={styles.wrapper}>
        <Formik 
              initialValues={{email:'',username:'',password:''}}
              validationSchema={SignupFormSchema}
              validateOnMount={true}
              onSubmit={(values)=>{console.log(values)}}
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
                            placeholder='Email' 
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
                    <View style={
                        [ 
                            styles.inputFields,
                            {
                                borderColor:values.username.length<1 || values.username.length>1 ? '#ccc':'red',

                            }
                        ]
                    }>
                    <TextInput 
                            placeholder='Username' 
                            placeholderTextColor='#444'
                            autoCapitalize='none'
                            textContentType='username'
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
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
                <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <View style={styles.signupContainer}>
                    <Text>Already have an account</Text>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text style={{color:'#6880F5'}}> Log In</Text>
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
export default SignupForm