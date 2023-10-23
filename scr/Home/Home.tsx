import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";
import Imhome from "../Imagen_Home/Imhome";
import Login from "../Login/Login";
import Imtower from "../Imagen_Home/Imtower";

const Home=()=> {

    return (
    <>
    <View style={styles.container}>
        <Imhome/>
    </View>
    <View style={styles.login}> 
    <Login/>
    </View>
    </>
      );
    }
    const styles = StyleSheet.create({
      container: {
        flex: .3,
        paddingHorizontal:16,
        paddingVertical:40,
      },
      login:{
        flex:.6,
        paddingHorizontal:60,
        paddingVertical:50,
      },
      tower:{
        flex:.2,
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical:20,
      }, 
    });
    

export default Home;