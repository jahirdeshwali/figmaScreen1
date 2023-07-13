import React, { useEffect } from 'react';
import {Image, Text, View} from 'react-native';



const Splassscreeen = ({navigation}) => {
  useEffect (()=>{
    setTimeout (()=>{
      navigation.navigate("Splassscreeen2")
    },1000);
  },[]);
  
  
  return (
    <View
      style={{ flex: 1,  
      backgroundColor:'aqua',justifyContent:'center',alignItems:'center' }}>
        <View style={{}} >
          <Image source={require("../assets/image/khan.jpeg")} style={{height:250,width:220,borderRadius:20}}/>
        </View>
     


    </View>
  );
};

export default Splassscreeen;
