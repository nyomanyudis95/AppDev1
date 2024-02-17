import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const ThirdScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'mistyrose', flexDirection: 'row'}}>
      <View style={{backgroundColor: 'red', flex: 1}}>
        <Text style={{color: 'white'}}>Pikachu</Text>
      </View>
      <View style={{backgroundColor: 'blue', flex: 1}}>
        <Text>Flareon</Text>
      </View>
      <View style={{backgroundColor: 'green', flex: 1}}>
        <Text>Green</Text>
      </View>
    </View>
  );
};

const AddImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ScrollView horizontal>
        {/* <View style={{alignItems: 'center'}}> */}
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/pikachu.png')}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/flareon.png')}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/rapidash.png')}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{uri: 'https://i.ibb.co/bLz74hj/psyduck.png'}}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{uri: 'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

const ChallengeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', margin: 8, flex: 0.1}}>
        <Text
          style={{
            fontWeight: '600',
            textDecorationLine: 'underline',
            color: 'blue',
            fontSize: 30,
          }}>
          Pokemon’s Profile
        </Text>
      </View>
      <View style={{flex: 0.9}}>
        <ScrollView>
          <View style={{margin: 8, padding: 8, flexDirection: 'row'}}>
            <ScrollView horizontal>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  borderColor: 'green',
                  borderWidth: 2,
                  borderRadius: 10,
                }}
                source={require('../../assets/images/pikachu.png')}
              />
              <View style={{marginLeft: 12, justifyContent: 'center'}}>
                <Text>
                  Name : Pikachu
                  {'\n'}
                  Category : Mouse
                  {`\n`}
                  Abilities : Static
                  {`\n`}
                  Weaknesses : Ground
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={{margin: 8, padding: 8, flexDirection: 'row'}}>
            <ScrollView horizontal>
              <Image
                style={{
                  width: 150,
                  height: 150,
                }}
                source={require('../../assets/images/flareon.png')}
              />
              <View style={{marginLeft: 12, justifyContent: 'center'}}>
                <Text>
                  Name : Flame
                  {'\n'}
                  Category : Flash Fire
                  {`\n`}
                  Abilities : Water, Ground, Rock
                  {`\n`}
                  Weaknesses : File internal
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={{margin: 8, padding: 8, flexDirection: 'row'}}>
            <ScrollView horizontal>
              <Image
                style={{
                  width: 150,
                  height: 150,
                }}
                source={require('../../assets/images/rapidash.png')}
              />
              <View style={{marginLeft: 12, justifyContent: 'center'}}>
                <Text>
                  Name : Fire Horse
                  {'\n'}
                  Category : Run Away, Flash Fire
                  {`\n`}
                  Abilities : Water, Ground, Rock
                  {`\n`}
                  Weaknesses : File internal
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={{margin: 8, padding: 8, flexDirection: 'row'}}>
            <ScrollView horizontal>
              <Image
                style={{
                  width: 150,
                  height: 150,
                }}
                source={require('../../assets/images/flareon.png')}
              />
              <View style={{marginLeft: 12, justifyContent: 'center'}}>
                <Text>
                  Name : Duck
                  {'\n'}
                  Category : Dump, Cloud Nine
                  {`\n`}
                  Abilities : Grass, Electric
                  {`\n`}
                  Weaknesses : File internal
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddImage;
