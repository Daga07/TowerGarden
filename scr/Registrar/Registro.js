import React from "react";
import { View, StyleSheet,Image,Text } from "react-native";

const Registro=()=>{
return(
<>

<View style={style.Container}>

    <View style={style.Centro}>
    <View style ={style.Radio}>
    <Image source={require('../../images/Registro.png')} style={style.Contenedorimagen}/> 
    </View>
    <View style={style.Registro}>
      <View style={style.Rows}>
       
    </View>
    
    <View style={style.Rows}>
       
    </View>
    </View>
    </View>
</View>
</>

)
};

const style=StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    Centro:{
        width:350,
        height:450,
        borderRadius:50,
        borderWidth: 8,
        padding:10,
        alignItems:'center',
        borderColor:'#CDEBCF',
    },
    Radio:{
 
        width:140,
        height:140,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:80,
        borderWidth: 2,
        borderColor:'#EEF5EE',
    },
    Registro:{
        width:300,
        height:270,
        padding:10,
        
        borderRadius:12,
        borderWidth: 2.5,
        alignItems:'center',
        borderColor:'#07F015',
   },
   Contenedorimagen:{
    width:170,
    height:170,
   },
   Rows:{
    
    flexDirection:'row',
    width:280,
    height:60,  
    margin:5,
    justifyContent:'center',
    backgroundColor:'#032FF3',
   },
 
})

export default Registro;