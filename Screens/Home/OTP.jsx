import React from 'react'
import { SafeAreaView, View, StyleSheet, StatusBar, Text, TextInput, Pressable, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { SIZES } from '../../Constants/Theme';


const OTP = () => {

  const inputItems = [1,2,3,4,5,6]
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
        <View style={styles.verifyTextContainer}>
          <Text style={styles.verifyHeader}>Verify your identity</Text>
          <Text style={styles.verifyText}>
          Please enter the 6-didit OTP code we 
          sent to your hone number 23324352936
          </Text>
          <Text style={styles.time}>3:00</Text>
        </View>
        <View style={styles.inputDetailsContainer}>
          <View style={styles.inputContainer}>
           {inputItems.map((item)=>(
              <TextInput key={item} style={styles.inputField}/>
           ))}
          </View>
          <Text>Didn’t receive the code? Resend OTP</Text>
          <Pressable  style={styles.btnContainer}>
             <Text style={styles.btnText}>Contineu</Text>
          </Pressable>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    itemsContainer:{
      paddingTop:SIZES.height*0.02
    },
    verifyTextContainer:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      gap:SIZES.height*0.07
    },
    verifyHeader:{
      fontWeight:"bold",
      fontSize:25
    },
    verifyText:{
      width:"70%",
      textAlign:'center',
      fontSize:14
    },
    inputDetailsContainer:{
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      paddingTop:SIZES.height*0.09,
      gap:SIZES.height*0.035
    },
    inputField:{
      margin:'2%',
      width:'12%',
      padding:SIZES.height*0.01,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5, 
      paddingHorizontal: 10,
    },
    inputContainer:{
      display:'flex',
      alignItems:'center',
      flexDirection:'row'
    },
    textContainer:{},
    time:{
      color:'#0BDC39',
      fontSize:20
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
    btnText:{
      color:'white'
    },
    arrowIconContainer:{
      marginLeft:'7%',
      paddingTop:'10%'
    },
})

export default OTP