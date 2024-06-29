import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import { SIZES } from '../Constants/Theme';
import { AntDesign, MaterialIcons} from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const ProductItems = ({title, imageFile, price}) => {

    const stars = [1,2,3,4]

  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={imageFile} style={styles.image}/>
            </View>
            <View style={styles.starHeaderContainer}>
                <Text style={styles.title}>{title}</Text>
               <View style={styles.starsContainer}>
               {stars.map((star)=>(
                    <Foundation name="star" size={15} color="orange" key={star} />
                ))}
               </View>
            </View>
            <Text style={styles.priceValue}>{price}</Text>
        </View>
        </ScrollView>
    </View>
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
    }
})
export default ProductItems