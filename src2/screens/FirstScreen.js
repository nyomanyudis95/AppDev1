import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const FirstScreen = () => {
  const openAlert = () => {
    alert('You clicked the button');
  };

  // Component = kerangka UI . Contohnya di bangunan = batu bata, semen , baja
  // StyleSheet = memperindah UI, Contohnya di bangunan = cat , keramik
  // color = salah satu contoh dari Stylesheet properti
  // Stylesheet properti = mengubah / mengganti karateristik dari JSX
  // props = sesuatu yang digunakan untuk menambahkan karakteristik dari component tersebut
  return (
    <Text> Hello World</Text>
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <Text>
    //     Hello
    //     <Text style={{color: 'red'}}>World!</Text>
    //   </Text>
    //   <TouchableOpacity onPress={openAlert}>
    //     <Text>Ini di texr</Text>
    //   </TouchableOpacity>
    //   <Button title="This is button" onPress={openAlert} />
    // </View>
  );
};

export default FirstScreen;
