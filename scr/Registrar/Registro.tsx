import React from "react";
import { View, StyleSheet,Image,Text,TextInput } from "react-native";

const Registro=()=>{
return(
<>

<View style={style.Container}>

    <View style={style.Centro}>
    <View style ={style.Radio}>
    <Image source={require('../../images/nature.png')} style={style.Contenedorimagen}/> 
    </View>
    <View style={style.Registro}>
        <View style={style.Row}>
             <View style={style.Images}>
             <Image source={require('../../images/usuario.png')} style={style.ContenedorImages}/>
        </View>
            <TextInput style = {style.input}
               placeholder = "Nombre completo" 
               placeholderTextColor = "#000000"
               autoCapitalize = "sentences">
                </TextInput> 
    </View>

    <View style={style.Row}>
             <View style={style.Images}>
             <Image source={require('../../images/messeger.png')} style={style.ContenedorImages}/>
        </View> 
          
            <TextInput style = {style.input}
               placeholder = "Correo" 
               placeholderTextColor = "#000000"
               autoCapitalize = "sentences">
                </TextInput>
       
    </View>

    <View style={style.Row}>
             <View style={style.Images}>
                
             <Image source={require('../../images/contraseña.png')} style={style.ContenedorImages}/>
        </View>
        <TextInput style = {style.input}
               placeholder = "Contraseña" 
               placeholderTextColor = "#000000"
               autoCapitalize = "sentences">
                </TextInput> 
    </View>

    <View style={style.Row}>
             <View style={style.Images}>
             <Image source={require('../../images/telefono.png')} style={style.ContenedorImages}/>
        </View>
        <TextInput style = {style.input}
               placeholder = "Telefono" 
               placeholderTextColor = "#000000"
               autoCapitalize = "sentences">
                </TextInput> 
          
    </View>

    <View style={style.Row}>
             <View style={style.Images}>
             <Image source={require('../../images/location.png')} style={style.ContenedorImages}/>
        </View>
        <TextInput style = {style.input}
               placeholder = "Ubicación" 
               placeholderTextColor = "#000000"
               autoCapitalize = "sentences">
                </TextInput> 
          
    </View>
       
        
    </View>
    
    </View>
</View>
</>

)
};

const style=StyleSheet.create({
    input: {
        width:150,
        height:40,
        borderRadius:8,
        padding: 10,
        margin:15,
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: '#76BC7B',
     },
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    Centro:{
        width:350,
        height:620,
        borderRadius:50,
        borderWidth: 1,
        alignItems:'center',
        borderColor:'#C6E7F7',
    },
    Radio:{
        width:115,
        height:115,
        justifyContent:'center',
        alignItems:'center',
        //borderRadius:80,
        //borderWidth: 2,
        margin:11,
       // borderColor:'#EEF5EE',
    },
    Registro:{
        width:300,
        height:450,
        padding:10,
        flexDirection:'column',
   },
   Contenedorimagen:{
    width:100,
    height:100,
   },
   Row:{
    flexDirection:'row',
    justifyContent:'flex-start',
    margin:5,
   },
   ContenedorImages:{
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
   },
   Images:{
    width:70,
    height:70,
    borderRadius: 100,  
    justifyContent:'center',
    alignItems:'center',
   },

 
})

export default Registro;