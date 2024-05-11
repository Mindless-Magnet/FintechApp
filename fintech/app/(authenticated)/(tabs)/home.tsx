import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import RoundBtn from '@/components/RoundBtn';
import Dropdown from '@/components/Dropdown';

const Page = () => {

    const balance = 1000;

    const onAddMoney = () => {}

    return (
        <ScrollView style={{ backgroundColor: Colors.background}}>
            <View style={styles.account}>
                <View style={styles.row}>
                    <Text style={styles.balance}>{balance}</Text>
                    <Text style={styles.currency}>$</Text>
                </View>
            </View>
            <View style={styles.actionRow}>
                <RoundBtn text={'Add Money'} icon={'add'} onPress={onAddMoney}/>
                <RoundBtn text={'Exchange'} icon={'refresh'} />
                <RoundBtn text={'Details'} icon={'list'} />
                <Dropdown />
            </View>
        </ScrollView>
      )
    }

const styles = StyleSheet.create({
    account : {
        margin: 60,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 5

    },
    balance: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    currency: {
        fontSize: 20,
        fontWeight: '500',
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        

    }
});

export default Page