import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1); 

  const handleQuantityIncrement = async () => {
    setQuantity((prev)=> quantity+1)
  };

  const handleQuantityDecrement = async () => {
    setQuantity((prev)=>quantity-1)
  };

  

  return (
    <authContext.Provider value={{ quantity, handleQuantityIncrement, handleQuantityDecrement }}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
