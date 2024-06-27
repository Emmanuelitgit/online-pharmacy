import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar, Pressable, Image} from 'react-native'
import ProductItems from '../../Components/ProductItems';
import { AntDesign, AntDesign } from '@expo/vector-icons';
import { SIZES } from '../../Constants/Theme';
import Card from '../../Components/Card';


const Products = () => {
    const btns = ["First Aid", "Pain Relief", "Cold Flu"]

  return (
    <SafeAreaView style={styles.container}>
         <StatusBar
         backgroundColor="white" 
         barStyle="dark-content" 
      />
     <View style={styles.itemsContainer}>
       <View style={styles.iconContainer}>
         <AntDesign name="shoppingcart" size={24} color="black" />
         <MaterialIcons name="notifications" size={24} color="black" />
         <View style={styles.badge}>
            <Text style={styles.badgeValue}>1</Text>
        </View>
       </View>
       <View style={styles.navBtnsContainer}>
          {btns.map((btn)=>(
            <Pressable style={styles.btnContainer}>
              <Text style={styles.btnText} key={btn}>{btn}</Text>
            </Pressable>
          ))}
      </View>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/slider.png")} 
          style={styles.image}/>
          <View style={styles.topImageTextContainer}>
            <Text style={styles.topimageHeader}>Licensed pharmacists</Text>
            <Text style={styles.topImageText}>Expert advice at your finger tips</Text>
         </View>
      </View>
        <View style={styles.popularViewAllContainer}>
            <Text style={styles.popularText}>Popular products</Text>
            <Text style={styles.viewAllText}>View all</Text>
        </View>
        <Card/>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    itemsContainer:{
      paddingTop:SIZES.height*0.02
    },
    iconContainer:{
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        flexDirection:'row',
        gap:SIZES.width*0.05,
        paddingTop:SIZES.height*0.01
    },
    badge:{
        backgroundColor:'#0C07F1CC',
        width:'6%',
        height:'75%',
        borderRadius:50,
        position:'absolute',
        right:'15%',
        top:'0%'
    },
    badgeValue:{
        color:'white',
        textAlign:"center"
    },
    navBtnsContainer:{
        display:'flex',
        alignItems:'center',
        flexDirection:"row",
        gap:SIZES.width*0.05,
        justifyContent:'center',
        paddingTop:"5%"
      },
      btnContainer:{
        backgroundColor:'blue',
        padding:'3%',
        width: '27%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5, 
        paddingHorizontal: 10,
        alignItems:'center',
      },
      btnText:{
        color:'white',
        fontSize:SIZES.width*0.035
      },
      topImageContainer:{
        backgroundColor:'#ACC5F4',
        width:'90%',
        height:'17%',
        borderRadius:7,
        display:'flex',
        flexDirection:'row',
        marginLeft:'5%',
        marginTop:"5%",
        marginBottom:'7%'
      },
      image:{
        width:'50%',
        height:'100%',
        borderRadius:7,
      },
      topImageTextContainer:{
        display:'flex',
        flexDirection:'column',
        gap:SIZES.height*0.01,
        paddingTop:SIZES.height*0.04
      },
      topimageHeader:{
        color:'#0C07F1CC',
        position:'absolute',
        right:'43%',
        top:"10%",
        fontSize:SIZES.width*0.05
      },
      topImageText:{
        width:"65%",
        textAlign:'center',
        paddingTop:SIZES.height*0.02,
        fontSize:SIZES.width*0.05
      },
      popularViewAllContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal: SIZES.width*0.035,
        marginBottom:'5%'
      },
      viewAllText:{
        color:'#0C07F1CC',
        fontSize:15
      },
      popularText:{
        fontSize:15
      },
})
export default Products