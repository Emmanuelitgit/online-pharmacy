import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, TextInput, StatusBar, Image } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import { SIZES } from '../../Constants/Theme';

const PaymentMethod = ({navigation}) => {
  return (
    <SafeAreaView>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <View style={styles.itemsContainer}>
        <Pressable style={styles.arrowIconContainer}>
         <AntDesign 
          name="arrowleft" 
          size={24} 
          color="black"
          onPress={() => navigation.goBack()} 
          />
        </Pressable>         
        <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Select payment method</Text>
        </View>
        <View style={styles.paymentMethodContainer}>
         <View style={styles.paymentMethod}>
         <Text style={styles.paymentText}>MTN momo</Text>
         <Image source={require("../../assets/momo.png")}/>
        </View>
        <View style={styles.paymentMethod}>
          <Text style={styles.paymentText}>Debit card</Text>
          <Image source={require("../../assets/debit card.png")}/>
        </View>
         </View>
         <View  style={styles.buttonContainer}>
         <Pressable
          style={styles.btn}
          onPress={()=>navigation.navigate("PaymentSuccess")}
          >
          <Text style={styles.btnText}>Make payment</Text>
        </Pressable>
         </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{},
    itemsContainer:{
        paddingTop:'7%'
    },
    arrowIconContainer:{
        paddingTop:'5%',
        paddingRight:'80%',
        paddingLeft:'3%'
      },
      headerTextContainer:{
        alignItems:'center'
      },
      headerText:{
        fontSize:20,
        fontWeight:'bold'
      },
    paymentMethodContainer:{
        width:'100%',
        alignItems:'center',
        paddingTop:'7%'
      },
      paymentMethod:{
        margin:'5%',
        width:'80%',
        padding:SIZES.width*0.025,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5, 
        paddingHorizontal: 10,
        marginBottom: 10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:SIZES.width*0.35
      },
      paymentText:{
       
      },
      buttonContainer:{
        paddingTop:'50%',
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

export default PaymentMethod