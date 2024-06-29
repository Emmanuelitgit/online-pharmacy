import React from 'react'
import { AntDesign, MaterialIcons} from '@expo/vector-icons';
import { Text, View, SafeAreaView, StyleSheet, TextInput, Pressable, StatusBar, Image } from 'react-native';
import { SIZES } from '../../Constants/Theme';


const DeliveryInfo = () => {
  return (
    <SafeAreaView>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <View style={styles.itemsContainer}>
        <View style={styles.arrowIconContainer}>
         <AntDesign name="arrowleft" size={24} color="black" />
         <Text style={styles.headerText}>Checkout</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>Delivery Information</Text>
        </View>
         <View style={styles.inputsContainer}>
         <View style={styles.inputContainer}>
          <TextInput placeholder='Name' style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Email' style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Phone' style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Address' style={styles.input}/>
        </View>
         </View>
         <View  style={styles.buttonContainer}>
         <Pressable
          style={styles.btn}>
          <Text style={styles.btnText}>Proceed</Text>
        </Pressable>
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
        paddingTop:'3%',
        flexDirection:'row',
        gap:SIZES.width*0.25,
        paddingRight:'30%'
      },
      itemsContainer:{
        alignItems: 'center',
        width:'100%',
        height:'100%',
        paddingTop:'15%'
      },
      infoTextContainer:{
        display:'flex',
        paddingBottom:'5%',
        paddingTop:SIZES.height*0.04
      },
      infoText:{

      },
      headerText:{
        fontSize:20,
        fontWeight:'bold'
      },
      inputsContainer:{
        width:'100%',
        alignItems:'center'
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
      buttonContainer:{
        paddingTop:'8%',
        width:'100%',
        alignItems:'center'
      },
      btn:{
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
})
export default DeliveryInfo