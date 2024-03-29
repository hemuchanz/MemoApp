import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoDetailScreen() {
    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2022年10月10日 10:00</Text>
            </View>
            <View style={styles.memoBody}>
                <ScrollView>
                    <Text style={styles.memoText}>
                        買い物リスト
                        あいうえおかきくけこさしすせそたちつてと
                        あいうえおかきくけこさしすせそたちつてと
                        あいうえおかきくけこさしすせそたちつてと
                    </Text>
                </ScrollView>
            </View>

            <CircleButton style={{ top: 160, bottom: 'auto' }} name='edit-3'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText: {
        fontSize: 14,
        lineHeight: 24,
    }

});