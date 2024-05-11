import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

type RoundBtnProps = {
    text: 'string';
    icon: typeof Ionicons.defaultProps;
    onPress?: () => void;
}

const RoundBtn = ({text, icon, onPress}: RoundBtnProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.circle}>
            <Ionicons name={icon} size={30} color={Colors.dark}/>
        </View>
        <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RoundBtn

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 10,
    },
    circle : {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
     label :{
        fontSize: 12,
        fontWeight: '500',
        color: Colors.dark,
     }
})