import React, {useRef} from 'react';
import {StyleSheet, Animated, FlatList, View} from 'react-native';

import {connect} from 'react-redux';
import TopHeader from '../components/TopHeader';
import Item from '../components/Item';
import image from '../assets/images/tlo.png';

const MainScreen = ({items}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0],
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 450],
    outputRange: [0, 1],
  });

  const imageScale = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [1.1, 1],
  });

  return (
    <>
      <View
        style={{
          zIndex: 2,
          height: 50,
          position: 'relative',
        }}>
        <Animated.View
          style={{
            backgroundColor: 'black',
            flex: 1,
            opacity: headerOpacity,
          }}
        />
        <TopHeader />
      </View>
      <Animated.Image
        style={[
          styles.backgroundImage,
          {
            opacity: imageOpacity,
            transform: [
              {
                scale: imageScale,
              },
            ],
          },
        ]}
        source={image}
      />
      <AnimatedFlatList
        data={items}
        scrollEventThrottle={16}
        renderItem={({item}) => {
          return <Item task={item} />;
        }}
        keyExtractor={(item, i) => i.toString()}
        bounces={false}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
        contentContainerStyle={{
          marginTop: 280,
        }}
      />
    </>
  );
};

const mapState = (state) => ({
  items: state.items,
});

export default connect(mapState)(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: 300,
  },
});
