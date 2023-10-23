import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Button} from "react-native";


const Ayuda =()=>{
const [modalAyuda, setAyuda] = useState(false);
const [modalCultivo, setCultivo] = useState(false);
const [modalFuturo, setFuturo] = useState(false);
  return (
<>
<View style={styles.container}>
    <Modal animationType='slide'
           transparent={true}
           visible={modalCultivo}
           onRequestClose={()=>{
           Alert.alert('Modal has been closed.');
           setCultivo(!modalCultivo);}}>
            <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> lasdasdasdoasdadsasds cultivos hidropónicos son fascinantes! En lugar de utilizar tierra, las plantas reciben nutrientes directamente en una solución acuosa. Puedes controlar de cerca los nutrientes, la luz y otros factores, lo que a menudo resulta en un crecimiento más rápido y eficiente.</Text>
                <Pressable
                  style={styles.buttonpre}
                  onPress={() => setCultivo(!modalCultivo)}>
                    <Text style={styles.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
    </Modal>
    <Modal animationType="slide"
        transparent={true}
        visible={modalAyuda}
        onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setAyuda(!modalAyuda);}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> los cultivos hidropónicos son fascinantes! En lugar de utilizar tierra, las plantas reciben nutrientes directamente en una solución acuosa. Puedes controlar de cerca los nutrientes, la luz y otros factores, lo que a menudo resulta en un crecimiento más rápido y eficiente.</Text>
                <Pressable
                  style={styles.buttonpre}
                  onPress={() => setAyuda(!modalAyuda)}>
                    <Text style={styles.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
    </Modal>
    <Modal animationType='slide'
           transparent={true}
           visible={modalFuturo}
           onRequestClose={()=>{
           Alert.alert('Modal has been closed.');
           setFuturo(!modalFuturo);}}>
            <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> df.</Text>
                <Pressable
                  style={styles.buttonpre}
                  onPress={() => setFuturo(!modalFuturo)}>
                    <Text style={styles.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
    </Modal>
   <View style={styles.centarView}>
   <Pressable
        style={styles.ayuda }
        onPress={() => setAyuda(true)}>
        <Text style={styles.textStyle}>Ayuda cliente</Text>
      </Pressable>  
      <Pressable
        style={styles.ayuda}
        onPress={() => setCultivo(true)}>
        <Text style={styles.textStyle}>Ayuda cultivos</Text>
      </Pressable> 
      <Pressable
        style={styles.ayuda}
        onPress={() => setFuturo(true)}>
        <Text style={styles.textStyle}>Mejoras al futuro</Text>
      </Pressable> 
   </View>
</View>


   
    </>

)}

const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    centarView:{
        width:250,
        height:450,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        borderWidth: 2.5,
        borderColor:'#2196F3',
    },
    ayuda:{
        borderRadius: 25,
        padding: 20,
        elevation: 2,
        marginVertical:15,
        backgroundColor: '#B9F3AB',
    },
    buttonpre:{
        borderRadius: 15,
        borderWidth: 2.5,
        borderColor:'#C2DDD7',
        elevation:2,
        padding:15,
        backgroundColor: '#D1FDEE',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      textStyle: {
        color: '#0B0B0B',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
},
})


export default Ayuda;