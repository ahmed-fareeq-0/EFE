import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import AppIntroSlider from 'react-native-app-intro-slider'

import IntroImage from "./../../assets/img1.png";



const IntroScreen = () => {
  const navigation = useNavigation();

  const onDone = () => {
    navigation.navigate('Login')
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        showSkipButton={false}
        showNextButton={true}
        dotStyle={{ backgroundColor: 'rgba(0, 0, 0, .2)' }}
        activeDotStyle={{ backgroundColor: '#057DCD' }}
      />
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 300,
    height: 300,
  },
  introTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non condimentum eros. Nunc et lacus nec nisi faucibus ornare. Maecenas ultricies aliquet mi a accumsan. Donec dapibus,',
    title: 'Mobile Recharge',
    image: IntroImage,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non condimentum eros. Nunc et lacus nec nisi faucibus ornare. Maecenas ultricies aliquet mi a accumsan. Donec dapibus,',
    image: IntroImage,
    backgroundColor: '#febe29',
  },
];

export default IntroScreen;
