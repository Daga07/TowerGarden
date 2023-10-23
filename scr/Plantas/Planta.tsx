import React, {useState} from 'react';
import { View,Modal,styles,Text, StyleSheet, Image, ScrollView, Pressable} from "react-native";


const Plantas=()=>{
const [modeFresa,setFresa]= useState(false);
const [modeTomate,setTomate]= useState(false);
const [modeLechuga,setLechuga]=useState(false);
const [modePeregil,setPeregil]=useState(false);
const [modeApio,setApio]=useState(false);
const [modeAjo,setAjo]=useState(false);
return(
<>
<Modal animationType='slide'
           transparent={true}
           visible={modeTomate}
           onRequestClose={()=>{
           Alert.alert();
           setTomate(!modeTomate);}}>
            <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}> tomate</Text>
                <Pressable
                  style={style.buttonpre}
                  onPress={() => setTomate(!modeTomate)}>
                    <Text style={style.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
  </Modal>
  <Modal animationType='slide'
           transparent={true}
           visible={modeFresa}
           onRequestClose={()=>{
           Alert.alert();
           setFresa(!modeFresa);}}>
            <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}> Fresa</Text>
                <Pressable
                  style={style.buttonpre}
                  onPress={() => setFresa(!modeFresa)}>
                    <Text style={style.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
  </Modal>
  <Modal animationType='slide'
           transparent={true}
           visible={modeLechuga}
           onRequestClose={()=>{
           Alert.alert();
           setLechuga(!modeLechuga);}}>
            <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}> Lechuga</Text>
                <Pressable
                  style={style.buttonpre}
                  onPress={() => setLechuga(!modeLechuga)}>
                    <Text style={style.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
  </Modal>
  <Modal animationType='slide'
           transparent={true}
           visible={modePeregil}
           onRequestClose={()=>{
           Alert.alert();
           setPeregil(!modePeregil);}}>
            <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}> peregil</Text>
                <Pressable
                  style={style.buttonpre}
                  onPress={() => setPeregil(!modePeregil)}>
                    <Text style={style.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
  </Modal>
  <Modal animationType='slide'
           transparent={true}
           visible={modeApio}
           onRequestClose={()=>{
           Alert.alert();
           setApio(!modeApio);}}>
            <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}> Apio </Text>
                <Pressable
                  style={style.buttonpre}
                  onPress={() => setApio(!modeApio)}>
                    <Text style={style.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
  </Modal>
  <Modal animationType='slide'
           transparent={true}
           visible={modeAjo}
           onRequestClose={()=>{
           Alert.alert();
           setAjo(!modeAjo);}}>
            <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}> Ajo</Text>
                <Pressable
                  style={style.buttonpre}
                  onPress={() => setAjo(!modeAjo)}>
                    <Text style={style.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
  </Modal>
  

<ScrollView>

  <View style={style.Container}> 
    <View style={style.Row}>


    <View style={style.square}>
    <Pressable onPress={() => setTomate(true)}>
      <Image source={require('../../image/tomate.png')} style={style.ContenedorImagen}/>
      </Pressable>
    </View>


    <View style={style.square}>
    <Pressable onPress={() => setFresa(true)}>
    <Image source={require('../../image/fresa.png')} style={style.ContenedorImagen}/>
    </Pressable>
    </View>
</View>{/*Fin de row*/}

<View style={style.Row}>

    <View style={style.square}>
    <Pressable onPress={() => setLechuga(true)}>
    <Image source={require('../../image/lechuga.png')} style={style.ContenedorImagen}/>
    </Pressable>
    </View>


    <View style={style.square}>
    <Pressable onPress={() => setPeregil(true)}>
    <Image source={require('../../image/peregil.png')} style={style.ContenedorImagen}/>  
    </Pressable>
    </View>


</View>{/*Fin de row*/}

<View style={style.Row}>

    <View style={style.square}>
    <Pressable onPress={() => setApio(true)}>
    <Image source={require('../../image/apio.png')} style={style.ContenedorImagen}/> 
    </Pressable>
    </View>

    <View style={style.square}>
    <Pressable onPress={() => setAjo(true)}>
    <Image source={require('../../image/ajo.png')} style={style.ContenedorImagen}/> 
    </Pressable>
    </View>
    
</View>{/*Fin de row*/}

</View>{/*Fin de container*/}
</ScrollView>



</>
);
}


const style = StyleSheet.create({
  Container:{
    flex:1,
    padding:60,
    //backgroundColor:'#66D118',

  },

  Colum:{
    flex:1,
    padding:40,
    flexDirection:'column',
    alignItems:'center',
  },
  square: {
    backgroundColor: "#F1F8F5",
    alignItems:'center',
    justifyContent:'center',
    width: 180,
    height: 200,
    margin: 10,
    borderRadius:9,
    borderBlockColor:'#048711',
    borderBottomWidth:12,
  },

  Row:{
    padding:15,
    flexDirection:'row',
    justifyContent: 'center',
  },
  ContenedorImagen:{
    alignItems:'center',
  },

ayuda:{
  borderRadius: 25,
  padding: 20,
  elevation: 2,
  marginVertical:15,
  backgroundColor: '#F1F8F5',
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
    //shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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

}
)

export default Plantas;