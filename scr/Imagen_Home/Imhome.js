import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';


const Imhome =()=>{

    return(
<>
<View style={style.imagenh}>
<Image source={require('../../images/logo02.png')} style={style.contenedorimagen}/>
</View>
</>
)
}

const style= StyleSheet.create({
imagenh:{
    flexDirection: "column",
    alignItems: "center",
    height:120,
    borderWidth: .1,
    borderRadius:20,
    borderColor:'#C2DDD7'

    
},
contenedorimagen:{
    width:300,
    height:120,


}
})

export default Imhome;