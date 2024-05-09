import { View,StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const Page = () => {

  const onSignup = async() => {}
  const [countryCode, setCountryCode] = useState('+91')
  const [phoneNumber, setPhoneNumber] = useState('')

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0
  

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset}>
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started</Text>
      <Text style={defaultStyles.descriptionText}>Enter your phone number. We will send you a confirmation code.</Text>
      <View style={styles.inputcontainer}>
        <TextInput 
        style={[styles.input, {flex: 1}]}
        placeholder='Country Code'
        value={countryCode}
        onChangeText={setCountryCode}
        keyboardType='numeric'
        placeholderTextColor={Colors.gray}
        maxLength={4}
        />
        <TextInput 
          style={[styles.input, {flex: 6}]}
          placeholder='Mobile Number'
          keyboardType='numeric'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholderTextColor={Colors.gray}
        />
      </View>
      <Link href={'/login'} replace asChild>
        <TouchableOpacity>
          <Text style={[defaultStyles.textLink, {textAlign: 'center', fontSize: 18}]}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </Link>

      <View style={{ flex: 1}}/>

      <TouchableOpacity style={[defaultStyles.pillButton, {marginBottom: 20, backgroundColor: phoneNumber.length > 0 ? Colors.primary : Colors.primaryMuted}]}
      onPress={onSignup}>
        <Text style={defaultStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  inputcontainer:{
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 16,
    marginRight: 10,
  }
});

export default Page