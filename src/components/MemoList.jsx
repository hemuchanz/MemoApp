import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MemoList() {
    return (
        <View>

        <View style={styles.meoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.meoListItemDate}>2022年10月09日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.meoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.meoListItemDate}>2022年10月09日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.meoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.meoListItemDate}>2022年10月09日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>


      </View>
    );
}

const styles = StyleSheet.create({
    meoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.15)'
      },
      memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
      },
      meoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
      },
});
