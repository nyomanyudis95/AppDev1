import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const FirstScreen = () => {
  const openAlert = () => {
    alert('You clicked the button');
  };

  // Component = kerangka UI . Contohnya di bangunan = batu bata, semen , baja
  // StyleSheet = memperindah UI, Contohnya di bangunan = cat , keramik
  // color = salah satu contoh dari Stylesheet properti
  // flex = mengatur posisi antar komponent secara dinamis
  return (
    <>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 20,
          margin: 20,
          borderWidth: 5,
          borderStyle: 'dashed',
          borderColor: 'green',
        }}>
        <Text style={{fontSize: 40, color: 'red', backgroundColor: 'gray'}}>
          Hello{' '}
        </Text>
      </View>
    </>
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
