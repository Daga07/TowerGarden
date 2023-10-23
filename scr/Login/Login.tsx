import * as React from "react";
import { View,Button,Text, TextInput,StyleSheet} from "react-native";



function Login (){
return(
    <>

    <View style={styles.logeo}>
    <Text style={styles.titulouser}>INGRESAR USUARIO</Text>
     <TextInput  style={styles.texuser} placeholder="Correo" /> 
     <Text style={styles.titulocontr}>INGRESAR CONTRASEÑA</Text>
     <TextInput  style={styles.texpaswor} placeholder="****"/> 
     <Button
        title="Go to Details"
    
      />

     
    </View>

    
    </>

);
}




const styles= StyleSheet.create({
    logeo:{
    
        flexDirection: 'column',
        alignItems: "center",
        height:300,
        borderBottomWidth: 10,
        borderRadius: 15, 
        borderWidth: 2.5,
        borderColor:'#C2DDD7',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        
    },
    

    titulouser:{
        marginVertical:20,
        fontFamily: 'sans-serif-light',

    },
    texuser: {
        width:150,
        height:50,
        borderRadius:8,
        padding: 10,
        borderWidth: 1,
        borderBottomWidth: 4,
        

      },
    titulocontr:{
        marginVertical:15,

    },
    texpaswor:{
        width:150,
        height:50,
        borderRadius:8,
        padding: 10,
        borderWidth: 1,
        borderBottomWidth: 4,
        marginVertical:10,

    },
    button:{
        
    },

/* <>


    
    <View style={styles.logeo}>
    <Text style={styles.titulouser}>INGRESAR USUARIO</Text>



     <TextInput  style={styles.texuser} placeholder="Correo" /> 
     <Text style={styles.titulocontr}>INGRESAR CONTRASEÑA</Text>
     <TextInput  style={styles.texpaswor} placeholder="****"/> 
     <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        
      />

     
    </View>

    
    </> */

})

export default Login;