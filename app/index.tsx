import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { useAssets } from 'expo-asset'
// import { Video } from 'expo-av'

import Video from 'react-native-video'
import { Link } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'


const Page = () => {


  const [assets] = useAssets(require('@/assets/videos/intro.mp4'));
  
  
  
  return (
    <View style={styles.container}>
          {/* {assets && (
          <Video
            source={{ uri: assets[0].uri}}
            style={styles.video}
          />
          )} */}
          {assets && (
          <Video
            resizeMode="cover"
            repeat={true}
            source={{ uri: assets[0].uri}}
            style={styles.video}
            />
          )}
          <View style={{ marginTop: 60, padding: 20}}>
            <Text style={styles.header}>Ready to change the way you make money?</Text>
          </View>

          <View style={styles.buttons}>
            <Link 
            href={'/login'} 
            style={[defaultStyles.pillButton, {flex: 1, backgroundColor: Colors.dark}]} 
            asChild>
              <TouchableOpacity>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>Login</Text>
              </TouchableOpacity>
            </Link>
            <Link 
            href={'/signup'} 
            style={[defaultStyles.pillButton, {flex: 1, backgroundColor: '#fff'}]} 
            asChild>
              <TouchableOpacity>
                <Text style={{color: '#000', fontSize: 20, fontWeight: '500'}}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
     },
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    header: {
        fontSize: 32,
        fontWeight: '900',
        textTransform: 'uppercase',
        color: 'white',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 'auto',
        marginBottom: 60,
        paddingHorizontal: 10,
    }
});

export default Page