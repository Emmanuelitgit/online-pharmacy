import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { SIZES } from '../Constants/Theme';
import ProductItems from './ProductItems';
import axiosInstance from '../utils/axiosInstance';

const Card = ({ handleNavigate }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axiosInstance.get('/all-medicine');
        if (response.status === 200) {
          const { medicines } = response.data;
          setProducts(medicines);
        } 
         else {
          Alert.alert('Error⚠️', 'Something went wrong!');
        }
      } catch (error) {
        console.error('Something went wrong!', error);
        if(error.response.status === 401){
          Alert.alert('Error⚠️', 'Unauthorized or session expired');;
        }
      }
    };
    getProducts();
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItems
            title={item?.name}
            imageFile={item?.file}
            price={item?.price}
            handleNavigate={() => handleNavigate(item._id, item.price)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SIZES.width * 0.09,
    marginLeft:"5.5%"
  },
});

export default Card;