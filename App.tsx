import React from 'react';
// import ChallengeScreen from './src2/screens/SecondScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SecondScreen from './src2/screens/SecondScreen';
// import InstagramHomeScreen from './src5/screens/InstagramHomeScreen';
// import {Text} from 'react-native';
// import SecondScreen from './src2/screens/SecondScreen';

const App = () => {
  return (
    // <Text>Ini di App.js</Text>
    <SafeAreaProvider>
      <SecondScreen />
      {/* <InstagramHomeScreen /> */}
    </SafeAreaProvider>
  );
};

export default App;
