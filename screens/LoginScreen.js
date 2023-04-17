import React from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import SignUp from './SignUp'

function LoginScreen({navigation}) {
  return (
   <SafeAreaView >
    <View style={{ }}>
    <Text>Welcome!</Text>
    </View>
    <TouchableOpacity  onPress={()=>navigation.navigate('SignUp')}><Text>Sign Up instead</Text></TouchableOpacity>
   </SafeAreaView>
  )
}

export default LoginScreen
