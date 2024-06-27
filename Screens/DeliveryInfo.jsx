import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, TextInput, Pressable, StatusBar, Image } from 'react-native';


const DeliveryInfo = () => {
  return (
    <SafeAreaView>
        <View style={styles.itemsContainer}>
        <View style={styles.arrowIconContainer}>
         <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Checkout</Text>
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
      buttonContainer:{},
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