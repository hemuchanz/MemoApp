import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';


export default function MemoListScreen() {
    return (
        <View style={styles.container}>

            {/* AppBar */}
            {/*<AppBar />で function 呼び出す */}
            <AppBar />

            {/* Memo List */}
            <MemoList />

            {/* Circle Button */}
            <CircleButton>+</CircleButton>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F4F8',
    },
  });