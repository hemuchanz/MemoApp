import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { shape, string } from 'prop-types';

export default function CircleButton(props) {
    // styleの上書きをする場合、const{style} とする
    const {children ,style} = props;
    return (
        // スタイルの設定を配列で受け取る
        <View style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </View>
    );
}

CircleButton.prototypes = {
    // 引数を必須にするときは、isRequired とする
    children: string.isRequired,
    style: shape(),
};

// デフォルト値を設定するとき 
CircleButton.defultProps = {
//     children: '',
    style: null,
}

const styles = StyleSheet.create({
    circleButton: {
        backgroundColor: '#467FD3',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 30,
        bottom: 30,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 40,
    }
});