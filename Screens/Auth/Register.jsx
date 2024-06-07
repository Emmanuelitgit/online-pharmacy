import { Text, View, SafeAreaView, StyleSheet, TextInput, Pressable, StatusBar, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <StatusBar
         backgroundColor="white" 
         barStyle="dark-content" 
      />
       <View style={styles.arrowIconContainer}>
         <AntDesign name="arrowleft" size={24} color="black" />
        </View>
       <View style={styles.itemsContainer}>
       <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Create an account</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Full Name' style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Email' style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Phone Number' style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Password' style={styles.input}/>
          <View style={styles.inputIconContainer}>
           <Feather name="eye" size={24} color="black" style={styles.inputIcon}/>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Confirm password' style={styles.input}/>
          <View style={styles.inputIconContainer}>
           <Feather name="eye" size={24} color="black" style={styles.inputIcon}/>
          </View>
        </View>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Register</Text>
        </Pressable>
        <Pressable style={styles.googleBtnContainer}>
          <View style={styles.googleTextImgContainer}>
              <Text style={styles.googlebtnText}>Register with Google</Text>
              <Image source={require('../../assets/google.png')}/>
          </View>
        </Pressable>
        <View style={styles.haveAccountContainer}>
           <Text style={styles.haveAccountText}>Already have an account?</Text>
           <Text
            onPress={()=>navigation.navigate("Login")} 
            style={styles.clickHere}>Login</Text>
        </View>
       </View>
       </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    height:'100%'
  },
  arrowIconContainer:{
    marginLeft:'7%',
    paddingTop:'5%'
  },
  itemsContainer:{
    alignItems: 'center',
    width:'100%',
    height:'100%',
    paddingTop:'2%'
  },
  headerContainer:{
    display:'flex',
    paddingBottom:'5%'
  },
  headerText:{
    fontSize:20
  },
  inputContainer:{
    margin:'5%',
    width:'80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5, 
    paddingHorizontal: 10,
    marginBottom: 10,
    display:'flex',
    flexDirection:'row'
  },
  input:{
    padding:'1%',
    width: '92%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputIconContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  haveAccountContainer:{
    alignItems:'center',
    justifyContent:'center',
    paddingTop:'3%',
    paddingBottom:'4%',
    display:'flex',
    flexDirection:'row'
  },
  forgotText:{

  },
  clickHere:{
    color:'blue',
    paddingLeft:'1%'
  },
  btnContainer:{
    backgroundColor:'blue',
    padding:'3%',
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5, 
    paddingHorizontal: 10,
    marginBottom: '7%',
    alignItems:'center',
    marginTop:'5%'
  },
  googleBtnContainer:{
    backgroundColor:'white',
    padding:5,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5, 
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems:'center'
  },
  googleTextImgContainer:{
    display:'flex',
    flexDirection:'row',
    gap:10
  },
  btnText:{
    color:'white'
  },
  googlebtnText:{
    color:'black'
  },
})
export default Register