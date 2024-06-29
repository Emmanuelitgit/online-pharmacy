import React from 'react'
import { View,  StyleSheet,  FlatList } from 'react-native'
import { SIZES } from '../Constants/Theme'
import ProductItems from './ProductItems'
import { products } from '../utils/data'

const Card = () => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

  return (
    <View style={styles.container}>
        <FlatList
        data={products}
        renderItem={({item}) => <ProductItems title={item.title} imageFile={item.image} price={item.price} />}
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