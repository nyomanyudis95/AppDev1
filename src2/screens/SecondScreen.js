/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SecondScreen = () => {
  const openAlert = game => {
    if (game === 'mobileLegends') {
      alert('You chose Mobile Legends!');
    } else if (game === 'pubg') {
      alert('You chose PUBG!');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lavender',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'skyblue',
          padding: 5,
          margin: 5,
          borderWidth: 2,
          borderStyle: 'dashed',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold'}}>Mobile Legends</Text>
        <Text>
          <Text style={{color: 'purple', fontWeight: 'bold'}}>
            Mobile Legends
          </Text>{' '}
          ea ex sit sunt sit est. Cillum adipisicing ullamco officia ipsum
          cupidatat pariatur. Adipisicing enim excepteur fugiat laboris ex.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert('mobileLegends')}>
          <Text style={{color: 'lightcoral'}}>Mobile Legends Button</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'cornflowerblue',
          padding: 5,
          margin: 5,
          borderWidth: 2,
          borderStyle: 'dotted',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold'}}>PUBG</Text>
        <Text>
          <Text style={{color: 'purple', fontWeight: 'bold'}}>PUBG</Text>{' '}
          excepteur ea ex sit sunt sit est. Cillum adipisicing ullamco officia
          ipsum cupidatat pariatur. Adipisicing enim excepteur fugiat laboris
          ex.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert('pubg')}>
          <Text style={{color: 'lightcoral'}}>PUBG Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ChallengeScreen = () => {
  const openAlert = game => {
    if (game === 'mobileLegends') {
      alert('You chose Mobile Legends!');
    } else if (game === 'pubg') {
      alert('You chose PUBG!');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lavender',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginBottom: 10}}>
        <Text
          style={{
            fontWeight: '900',
            color: 'blue',
            textDecorationLine: 'underline',
            fontSize: 20,
          }}>
          IOS
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'skyblue',
          padding: 5,
          margin: 5,
          borderWidth: 2,
          borderStyle: 'dashed',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Text>
          <Text style={{fontWeight: 'bold'}}>iOS</Text> (formerly iPhone OS) is
          a mobile operating system created and developed by{' '}
          <Text style={{fontWeight: 'bold', color: 'pink'}}>Apple Inc.</Text>
          exclusively for its hardware. It is the operating system that powers
          many of the company's mobile devices, including the iPhone and iPod
          Touch.
        </Text>
      </View>
      <View style={{marginVertical: 20}}>
        <Text>VS.</Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'green',
            textDecorationLine: 'underline',
            fontSize: 20,
          }}>
          Android
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'cornflowerblue',
          padding: 5,
          margin: 5,
          borderWidth: 2,
          borderStyle: 'dotted',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Text>
          <Text style={{fontWeight: 'bold'}}>Android</Text> is a mobile
          operating system based on a modified version of the Linux kernel and
          other open source software, designed primarily for touchscreen mobile
          devices such as smartphones and tablets. Android is developed by a
          consortium of developers known as the{' '}
          <Text style={{fontWeight: 'bold', color: 'purple'}}>
            Open Handset Alliance
          </Text>{' '}
          and commercially sponsored by{' '}
          <Text style={{fontWeight: 'bold', color: 'blue'}}>Google.</Text>
        </Text>
      </View>
    </View>
  );
};

export default SecondScreen;
