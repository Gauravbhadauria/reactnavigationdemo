import {
  View,
  Text,
  BackHandler,
  Animated,
  StatusBar,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const Story = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [storeisData, setStoriesData] = useState(route.params.data);
  const [activeDot, setActiveDot] = useState(0);
  const [time, setTime] = useState(5000);
  const [loaded, setLoaded] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
  const listRef = useRef();
  useEffect(() => {
    const backAction = () => {
      //   navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    if (loaded == 1) {
      let timer = setTimeout(() => {
        // navigation.goBack();
        if (
          route.params.data.length > selectedIndex &&
          route.params.data.length !== selectedIndex
        ) {
          listRef.current.scrollToIndex({
            index: selectedIndex,
            animated: true,
          });
          setSelectedIndex(selectedIndex + 1);

          // timer.refresh();
        }
      }, 5000);

      //   Animated.timing(progress, {
      //     toValue: 5,
      //     duration: 5000,
      //     useNativeDriver: false,
      //   }).start();
      return () => clearTimeout(timer);
    }
  }, [loaded]);
  const handleVieweableItemsChanged = useCallback(({viewableItems}) => {
    console.log(viewableItems[0].index);
    setActiveDot(viewableItems[0].index);
  }, []);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <View
        style={{
          position: 'absolute',
          top: 40,
          height: height,
          width: width,
        }}>
        <FlatList
          data={storeisData}
          horizontal={true}
          pagingEnabled
          ref={listRef}
          onViewableItemsChanged={handleVieweableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          renderItem={({item, index}) => {
            return (
              <Image
                source={item}
                onLoadStart={() => {
                  setLoaded(0);
                }}
                onLoadEnd={() => {
                  setLoaded(1);
                }}
                onLoad={() => {
                  setLoaded(1);
                }}
                style={{
                  width: width,
                  height: height - height / 10,
                  resizeMode: 'contain',
                }}
              />
            );
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 5,
        }}>
        {storeisData.map((item, index) => {
          console.log(index);
          return (
            <View style={{width: width}}>
              <Animated.View
                style={{
                  width:
                    selectedIndex - 1 == index
                      ? width / storeisData.length - 1
                      : progressAnimation,
                  height: '100%',

                  backgroundColor: 'white',
                }}></Animated.View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Story;
