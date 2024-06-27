import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, Pressable } from 'react-native'
import { SIZES } from '../../Constants/Theme'
import { Foundation } from '@expo/vector-icons';


const Product = () => {

    const stars = [1,2,3,4]

    let title, price;
    title = "Novolog";
    price = "$60";

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/product 1.png")} style={styles.image}/>
            </View>
            <View style={styles.starHeaderContainer}>
                <Text style={styles.title}>{title}</Text>
               <View style={styles.starsContainer}>
               {stars.map((star)=>(
                    <Foundation name="star" size={15} color="orange" key={star} />
                ))}
               </View>
            </View>
            <Text style={priceValue}>{price}</Text>
        </View>
        <View style={styles.descContainer}>
            <Text style={styles.descHeader}></Text>
            <Text style={styles.descText}></Text>
        </View>
        <View style={styles.plusminusBtnsContainer}>
            <Pressable style={styles.plusminusBtn}>
                <Text style={styles.plusminusBtnText}>+</Text>
            </Pressable>
            <Text style={styles.plusminusBtn}Text>1</Text>
            <Pressable style={styles.plusminusBtn}>
                <Text>-</Text>
            </Pressable>
        </View>
        <Pressable
         style={styles.btnContainer}>
          <Text style={styles.btnText}>Add to cart</Text>
        </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cardContainer:{
        height: SIZES.height * 0.3,
        width:SIZES.width*0.4,  
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
        paddingTop:-100
    },
    imageContainer:{
        backgroundColor:"#ACC5F4",
        height:'70%',
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
        color:'black'
    },
    starsContainer:{
         display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    priceValue:{
        fontSize:15
    },
    descContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:SIZES.height*0.01
    },
    descHeader:{},
    descText:{},
    plusminusBtnsContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    },
    plusminusBtn:{
        backgroundColor:'#0C07F1',
        borderRadius:50
    },
    plusminusBtnText:{
        color:'white'
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
})
export default Product