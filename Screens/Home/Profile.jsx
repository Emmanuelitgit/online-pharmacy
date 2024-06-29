import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, TextInput, StatusBar, Image } from 'react-native';
import { AntDesign, Feather} from '@expo/vector-icons';
import { FontAwesome5, FontAwesome6, Fontisto } from '@expo/vector-icons';
import { SIZES } from '../../Constants/Theme';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#0C07F1CC'} barStyle={'light-content'} />
        <View style={styles.itemsContainer}>
        <View style={styles.arrowIconContainer}>
         <AntDesign name="arrowleft" size={24} color="white" />
        </View>
        <View style={styles.userNameContainer}>
            <View style={styles.profileImageContainer}>
                <Image source={require("../../assets/profile.png")}/>
            </View>
            <View>
                <Text>Zaid Ibn</Text>
                <Text>0597893082</Text>
            </View>
        </View>
        <View style={styles.accountInfoContainer}>
        <View style={styles.myAccountContainer}>
            <Text>My Account</Text>
        </View>
            <View style={styles.accountInfo}>
            <Fontisto name="date" size={24} color="blue" />
            <Text>My Appointmnet</Text>
            </View>
            <View style={styles.accountInfo}>
            <FontAwesome6 name="cart-arrow-down" size={24} color="blue" />
            <Text>My Orders</Text>
            </View>
            <View style={styles.accountInfo}>
            <FontAwesome5 name="book-medical" size={24} color="blue" />
            <Text>Medical Records</Text>
            </View>
            <View style={styles.accountInfo}>
            <Feather name="log-out" size={24} color="blue" />
            <Text>Logout</Text>
            </View>
        </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    itemsContainer:{
        width:'100%',
        height:'100%'
    },
    arrowIconContainer:{
        paddingTop:'5%',
        paddingRight:'80%',
        paddingLeft:'3%',
        backgroundColor:'#0C07F1CC',
        padding:'25%'
      },
      userNameContainer:{
        height: SIZES.height * 0.15,
        width:SIZES.width*0.5,  
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
        position:'absolute',
        top:'15%',
        left:'25%',
        alignItems:'center',
        flexDirection:'row',
        gap:SIZES.width*0.05
      },
      myAccountContainer:{
        position:'absolute',
        top:'50%',
        left:'5%'
      },
      profileImageContainer:{
        paddingLeft:'5%'
      },
      accountInfoContainer:{
        paddingTop:'43%',
        paddingLeft:'7%',
        gap:SIZES.height*0.045
      },
      accountInfo:{
        flexDirection:'row',
        gap:SIZES.width*0.05
      }
})

export default Profile