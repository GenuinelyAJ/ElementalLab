import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Alert, Modal } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Elemental Lab </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 20,
        backgroundColor: '#654321'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Righteous-Regular',
        fontSize: 20,
        fontWeight: 'bold'
    },
    info: {
        paddingLeft: 350,
        bottom: 30
    }
})