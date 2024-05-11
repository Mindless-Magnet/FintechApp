import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as DropdownMenu from 'zeego/dropdown-menu'
import RoundBtn from '@/components/RoundBtn'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <RoundBtn icon={'ellipsis-horizontal'} text={'More'}/>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
            <DropdownMenu.Item key='statement'>
                <DropdownMenu.ItemTitle>
                    Statement
                </DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
            <DropdownMenu.Item key='converter'>
                <DropdownMenu.ItemTitle>
                    Converter
                </DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
            <DropdownMenu.Item key='background'>
                <DropdownMenu.ItemTitle>
                    Background
                </DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
            <DropdownMenu.Item key='account'>
                <DropdownMenu.ItemTitle>
                    Add new account
                </DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
        </DropdownMenu.Content>

    </DropdownMenu.Root>
  )
}

export default Dropdown

const styles = StyleSheet.create({

})