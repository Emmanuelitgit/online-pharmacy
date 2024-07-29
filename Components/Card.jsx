import React, { useState } from 'react'
import { View,  StyleSheet,  FlatList, Alert } from 'react-native'
import { SIZES } from '../Constants/Theme'
import ProductItems from './ProductItems'
import { products } from '../utils/data'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import axios from 'axios'

const Card = ({handleNavigate}) => {

  const [productss, setProducts] = useState()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const accessToken = await AsyncStorage.getItem("token")
  //       const response = await axios.get(
  //         `https://pharmacy-ordering-server.onrender.com/all-medicine`,
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${accessToken}`
  //           },
  //         }
  //       );
  //       if (response.status === 200) {
  //         const { medicines } = response.data;
  //         setProducts(medicines);
  //       } else {
  //         Alert.alert('Error⚠️', 'Something went wrong!');
  //       }
  //     } catch (error) {
  //       console.error('Something went wrong!', error);
  //     }
  //   };
  //   getProducts();
  // }, []);

  // console.log(productss)


  return (
    <View style={styles.container}>
        <FlatList
        data={products}
        renderItem={({item}) => <ProductItems title={item.title} imageFile={item.image} price={item.price} handleNavigate={()=>handleNavigate(item._id)}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        scrollEnabled={true}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    contentContainer:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:SIZES.width*0.09,
        justifyContent:"center"
     },
})
export default Card