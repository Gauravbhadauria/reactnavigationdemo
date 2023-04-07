import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const Sidebar = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 20,
          borderTopWidth: 4,
          borderTopColor: 'blue',
        }}></View>
      <Image
        source={require('./images/user.png')}
        style={{width: 80, height: 80, alignSelf: 'center', marginTop: 10}}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: '600',
          marginTop: 20,
        }}>
        Engineer Codewala
      </Text>
      <View style={{marginTop: 50}}>
        <FlatList
          data={[
            {icon: require('./images/orders.png'), title: 'Orders'},
            {icon: require('./images/cart.png'), title: 'Cart'},
            {
              icon: require('./images/notification.png'),
              title: 'Notifications',
            },
            {icon: require('./images/support.png'), title: 'Support'},
            {icon: require('./images/share.png'), title: 'Share App'},
            {icon: require('./images/rating.png'), title: 'Rate U'},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 50,
                }}
                onPress={() => {
                  navigation.closeDrawer();
                  alert(item.title + '  clicked');
                }}>
                <Image
                  source={item.icon}
                  style={{width: 24, height: 24, marginLeft: 20}}
                />
                <Text style={{marginLeft: 15, fontSize: 16, color: '#000'}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Sidebar;
