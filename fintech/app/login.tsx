import { View,StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';

const Page = () => {

  const router = useRouter();
  const { signIn } = useSignIn();

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {
      try {
        const fullPhoneNumber = `${countryCode}${phoneNumber}`;

        const { supportedFirstFactors } = await signIn!.create({
          identifier: fullPhoneNumber,
        });
        const firstPhoneFactor: any = supportedFirstFactors.find((factor: any) => {
          return factor.strategy === 'phone_code';
        });

        const { phoneNumberId } = firstPhoneFactor;

        await signIn!.prepareFirstFactor({
          strategy: 'phone_code',
          phoneNumberId,
        });

        router.push({
          pathname: '/verify/[phone]',
          params: { phone: fullPhoneNumber, signin: 'true' },
        });
      } catch (err) {
        console.log('error', JSON.stringify(err, null, 2));
        if (isClerkAPIResponseError(err)) {
          if (err.errors[0].code === 'form_identifier_not_found') {
            Alert.alert('Error', err.errors[0].message);
          }
        }
      }
    }
  };

  const [countryCode, setCountryCode] = useState('+91')
  const [phoneNumber, setPhoneNumber] = useState('')

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0
  
  enum SignInType {
    Phone,
    Email,
    Google, 
    Apple
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset}>
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Welcome Back</Text>
      <Text style={defaultStyles.descriptionText}>Enter the phone number associated with your account</Text>
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

      <TouchableOpacity style={[defaultStyles.pillButton, {marginBottom: 20, backgroundColor: phoneNumber.length > 0 ? Colors.primary : Colors.primaryMuted}]}
      onPress={() =>  onSignIn(SignInType.Phone)}>
        <Text style={defaultStyles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', alignItems: 'center', gap:16}}>
        <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray}}/>
        <Text style={{color: Colors.gray, fontSize: 16}}>OR</Text>
        <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray}}/>
      </View>

      <TouchableOpacity onPress={() => onSignIn(SignInType.Email)}
      style={[defaultStyles.pillButton, {flexDirection: 'row', gap: 16, marginTop: 20,backgroundColor: '#fff'}]}> 
        <Ionicons name='mail' size={20} color={'#000'} />
        <Text style={[defaultStyles.buttonText, {color: '#000'}]}>Continue with email</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSignIn(SignInType.Google)}
      style={[defaultStyles.pillButton, {flexDirection: 'row', gap: 16, marginTop: 20,backgroundColor: '#fff'}]}> 
        <Ionicons name='logo-google' size={20} color={'#000'} />
        <Text style={[defaultStyles.buttonText, {color: '#000'}]}>Continue with email</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSignIn(SignInType.Apple)}
      style={[defaultStyles.pillButton, {flexDirection: 'row', gap: 16, marginTop: 20,backgroundColor: '#fff'}]}> 
        <Ionicons name='logo-apple' size={20} color={'#000'} />
        <Text style={[defaultStyles.buttonText, {color: '#000'}]}>Continue with email</Text>
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