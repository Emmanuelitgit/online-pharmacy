import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image, Pressable, ScrollView } from 'react-native'
import { AntDesign, MaterialIcons} from '@expo/vector-icons';
import { SIZES } from '../../Constants/Theme'
import { Foundation } from '@expo/vector-icons';


const CartScreen = () => {

    const stars = [1,2,3,4]

    let title, price;
    title = "Novolog";
    price = "$60";

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <ScrollView>
        <View style={styles.itemsContainer}>
        <View style={styles.arrowIconContainer}>
         <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <View style={styles.border}>
        <View style={styles.cardMainContaimer}>
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/product 1.png")} style={styles.image}/>
            </View>
            <View style={styles.starHeaderContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.priceValue}>{price}</Text>
        </View>
        </View>
        <View style={styles.plusminusBtnsContainer}>
            <Pressable style={styles.plusminusBtn}>
                <Text style={styles.plusminusBtnText}>+</Text>
            </Pressable>
            <Text style={styles.plusminusBtnValue}>1</Text>
            <Pressable style={styles.plusminusBtn}>
                <Text style={styles.plusminusBtnText}>-</Text>
            </Pressable>
        </View>
        </View>
        <View style={styles.priceInfoContainer}>
            <View style={styles.priceInfo}>
                <Text style={styles.priceInfoText}>Sub Total</Text>
                <Text style={styles.priceInfoValue}>18</Text>
            </View>
            <View style={styles.priceInfo}>
                <Text style={styles.priceInfoText}>Delivery fee</Text>
                <Text style={styles.priceInfoValue}>18</Text>
            </View>
            <View style={styles.priceInfo}>
               <Text style={styles.priceInfoText}>Discount</Text>
               <Text style={styles.priceInfoValue}>18</Text>
            </View>
        </View>
        <View style={styles.bottomBorder}></View>
        <View style={styles.bottomPriceInfoContainer}>
          <Text style={styles.bottomPriceInfoText}>Sub Total</Text>
          <Text style={styles.bottomPriceInfoValue}>18</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Pressable
         style={styles.btnContainer}>
          <Text style={styles.btnText}>Checout</Text>
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
        alignItems:'center',
        width:'100%'
    },
    border:{
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5, 
        width:'95%',
        flexDirection:'row',
        alignItems:"center",
    },
    arrowIconContainer:{
        paddingTop:'6%',
        paddingBottom:"10%",
        paddingRight:'80%'
      },
      cardMainContaimer:{
        margin:"5%"
      },
      cardContainer:{
        height: SIZES.height * 0.23,
        width:SIZES.width*0.32,  
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
        paddingTop:-100,
    },
    imageContainer:{
        backgroundColor:"#ACC5F4",
        height:'65%',
        width:'100%',
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        height:"70%",
        width:'70%'
    },
    starHeaderContainer:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    title:{
        color:'black',
        margin:'2%'
    },
    starsContainer:{
         display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        margin:'2%'
    },
    priceValue:{
        fontSize:15,
        margin:'2%'
    },
    plusminusBtnsContainer:{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        width:'80%',
        gap:SIZES.height*0.04
    },
    plusminusBtn:{
        backgroundColor:'#0C07F1',
        borderRadius:50,
        width:'10%',
        alignItems:"center"
    },
    plusminusBtnText:{
        color:'white',
        fontSize:17
    },
    plusminusBtnValue:{
        fontWeight:'bold',
        fontSize:25
    },
    priceInfoContainer:{
        width:'93%',
        paddingTop:'7%',
        gap:SIZES.height*0.02
    },
    priceInfo:{
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between'
    },
    priceInfoText:{
        color:'#000000B2'
    },
    priceInfoValue:{
        color:"#000000B2"
    },
    bottomBorder:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5, 
        width:'80%',
        marginTop:'7%'
    },
    bottomPriceInfoContainer:{
        flexDirection:'row',
        gap:SIZES.width*0.7,
        margin:'3%',
        paddingTop:'5%'
    },
    bottomPriceInfoText:{
        color:'#000000B2'
    },
    bottomPriceInfoValue:{
        color:'#A11C3C'
    },
    buttonContainer:{
        width:'100%',
        alignItems:'center',
        paddingTop:'10%'
    },
    btnContainer:{
        backgroundColor:'blue',
        padding:'3%',
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5, 
        paddingHorizontal: 10,
        alignItems:'center',
      },
      btnText:{
        color:'white'
      },
})

export default CartScreen