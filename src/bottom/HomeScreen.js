import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
const stories = [
  {
    data: [
      require('../images/thali1.jpeg'),
      require('../images/thali2.webp'),
      require('../images/thali3.jpeg'),
      require('../images/thali4.jpeg'),
      require('../images/thali5.jpeg'),
    ],
  },
  {
    data: [
      require('../images/thali1.jpeg'),
      require('../images/thali2.webp'),
      require('../images/thali3.jpeg'),
    ],
  },
  {
    data: [
      require('../images/thali1.jpeg'),
      require('../images/thali2.webp'),
      require('../images/thali3.jpeg'),
      require('../images/thali4.jpeg'),
    ],
  },
  {data: [require('../images/thali1.jpeg')]},
];
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 2,
          marginBottom: 5,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={require('../images/menu.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '600', marginLeft: 15}}>
          React Navigation
        </Text>
      </View>
      <View>
        <FlatList
          data={stories}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: 'orange',
                  marginLeft: 20,
                  borderWidth: 1,
                }}
                onPress={() => {
                  navigation.navigate('Story', {
                    data: item.data,
                  });
                }}></TouchableOpacity>
            );
          }}
        />
      </View>
      <Image
        source={require('../images/banner.jpeg')}
        style={{
          width: '94%',
          height: 200,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 10,
          elevation: 5,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          marginLeft: 15,
          marginTop: 20,
          fontWeight: '600',
          color: '#000',
        }}>
        Indian Thaali (Food)
      </Text>
      <FlatList
        data={[
          require('../images/thali1.jpeg'),
          require('../images/thali2.webp'),
          require('../images/thali3.jpeg'),
          require('../images/thali4.jpeg'),
          require('../images/thali5.jpeg'),
        ]}
        renderItem={({item, index}) => {
          return (
            <Image
              source={item}
              style={{
                width: '94%',
                alignSelf: 'center',
                borderRadius: 10,
                height: 150,
                marginTop: 10,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
