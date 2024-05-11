import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import RoundBtn from '@/components/RoundBtn';
import Dropdown from '@/components/Dropdown';
import { useBalanceStore } from '@/store/balanceStore';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import WidgetList from '@/components/SortableList/WidgetList';

import { useHeaderHeight } from '@react-navigation/elements'

const Page = () => {
    const headerHeight = useHeaderHeight();
    const {balance, runTransaction, transactions, clearTransactions} = useBalanceStore();

    const onAddMoney = () => {
        runTransaction({
            id: Math.random().toString(36).substring(7),
            amount: Math.floor(Math.random() * 100) + 1,
            date: new Date(),
            title: 'Added Money'
        })
    }

    return (
        <ScrollView style={{ backgroundColor: Colors.background}}
        contentContainerStyle={{
            paddingTop: headerHeight,
        }}
        >
            <View style={styles.account}>
                <View style={styles.row}>
                    <Text style={styles.balance}>{balance()}</Text>
                    <Text style={styles.currency}>$</Text>
                </View>
            </View>
            <View style={styles.actionRow}>
                <RoundBtn text={'Add Money' as 'string'} icon={'add'} onPress={onAddMoney}/>
                <RoundBtn text={'Exchange' as 'string'} icon={'refresh'} onPress={clearTransactions}/>
                <RoundBtn text={'Details' as 'string'} icon={'list'} />
                <Dropdown />
            </View>

            <Text style={defaultStyles.sectionHeader}>
                    Transactions    
            </Text>
            <View style={styles.transactions}>
                {transactions.length === 0 ? (
                    <Text style={{ padding: 14, color: Colors.gray}}>No Transactions yet</Text>
                    ): (
                        transactions.map((t) => (
                            <View key={t.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 16}}>
                                <View style={styles.circle}>
                                    <Ionicons name={t.amount > 0 ? 'add' : 'remove'} size={24} color={Colors.dark}/>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{ fontWeight: '400'}}>{t.title}</Text>
                                    <Text style={{ color: Colors.gray, fontSize: 12}}>
                                        {t.date.toLocaleString()}
                                    </Text>
                                </View>
                                <Text>{t.amount}$</Text>
                            </View>
                        ))
                    )}
            </View>

            <Text style={defaultStyles.sectionHeader}>
                Widgets    
            </Text>
            <WidgetList />
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
    },
    transactions: {
        marginHorizontal: 20,
        padding: 14,
        backgroundColor: '#fff',
        borderRadius: 16,
        gap: 20,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Page