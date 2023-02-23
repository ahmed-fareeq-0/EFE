import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/Provider'

const HomeScreen = () => {

  // const { logout } = useContext(Context);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>logout</Text>
    </View>
  )
}

export default HomeScreen