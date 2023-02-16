// import React in our code
import React, { useState } from 'react';

import img from "./../../../assets/img1.png";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const IntroScreen = () => {
  // const [showRealApp, setShowRealApp] = useState(false);

  // const onDone = () => {
  //   setShowRealApp(true);
  // };

  // const onSkip = () => {
  //   setShowRealApp(true);
  // };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        {/* <Text style={styles.introTitleStyle}>{item.title}</Text> */}
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
        // onDone={onDone}
        showSkipButton={false}
        showNextButton={true}
        dotStyle={{ backgroundColor: 'rgba(0, 0, 0, .2)' }}
        activeDotStyle={{ backgroundColor: '#057DCD' }}

      // onSkip={onSkip}
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
    // color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    // color: 'white',
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
    image: img,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non condimentum eros. Nunc et lacus nec nisi faucibus ornare. Maecenas ultricies aliquet mi a accumsan. Donec dapibus,',
    image: img,
    backgroundColor: '#febe29',
  },
];

export default IntroScreen;
