import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View,TextInput} from 'react-native';
import Home from './scr/Home/Home';
import Registro from './scr/Registrar/Registro';
import Imhome from './scr/Imagen_Home/Imhome';
import Planta from './scr/Plantas/Planta';
import Ayuda from './scr/Ayudas/Ayuda';
import Login from './scr/Login/Login';



 function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <>
    
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  paddingHorizontal:5,
  //  paddingVertical:40,
  //  borderWidth: 0.5,
  //  borderColor:'#03E9ED',
  //  borderRadius:1,
      
  },
  texuser: {
    width:150,
    height:50,
    borderRadius:8,
    padding: 10,
    borderWidth: 1,
    borderBottomWidth: 4,
  },

 //<Home/>
});
export default App;