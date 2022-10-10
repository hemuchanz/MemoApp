/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import CircleButton from './src/components/CircleButton';
import MemoList from './src/components/MemoList';

export default function App() {
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
