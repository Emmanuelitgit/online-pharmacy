import { Text, View, SafeAreaView, StyleSheet, TextInput, Pressable, StatusBar, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
         backgroundColor="white" 
         barStyle="dark-content" 
      />
       <View style={styles.arrowIconContainer}>
         <AntDesign name="arrowleft" size={24} color="black" />
        </View>
       <View style={styles.itemsContainer}>
       <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Log in to your account</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Email' style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Password' style={styles.input}/>
          <Feather name="eye" size={24} color="black" style={styles.inputIcon}/>
        </View>
        <View style={styles.forgotContainer}>
           <Text style={styles.forgotText}>Forgot password?</Text>
           <Text style={styles.clickHere}>click here</Text>
        </View>
        <Pressable
         onPress={()=>navigation.navigate("Login")} 
         style={styles.btnContainer}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
        <Pressable
         onPress={()=>navigation.navigate("Login")} 
         style={styles.googleBtnContainer}>
          <View style={styles.googleTextImgContainer}>
              <Text style={styles.googlebtnText}>Login with Google</Text>
              <Image source={require('../../assets/google.png')}/>
          </View>
        </Pressable>
        <View style={styles.dontHaveAccountContainer}>
        <Text>Dont have an account?</Text>
        <Text 
         onPress={()=>navigation.navigate("Register")}
         style={{
          color:'blue'
        }}>Register</Text>
        </View>
       </View>
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
    paddingTop:'10%'
  },
  itemsContainer:{
    alignItems: 'center',
    width:'100%',
    height:'100%',
    paddingTop:'15%'
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
    flexDirection:'row',
    alignItems:'center',
  },
  input:{
    padding:'3%',
    width: '92%',
    paddingHorizontal: 10,
  },
  inputIconContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  forgotContainer:{
    marginRight:'24%',
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
  dontHaveAccountContainer:{
    display:'flex',
    flexDirection:'row',
    gap:5
  }
})
export default Login