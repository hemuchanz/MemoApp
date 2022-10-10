import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';
import { Feather } from '@expo/vector-icons'; 

export default function CircleButton(props) {
    // styleの上書きをする場合、const{style} とする
    const {style, name, onPress} = props;
    return (
        // スタイルの設定を配列で受け取る
        <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
            {/* nameプロパティでいろんなアイコンを表示できる。 */}
            <Feather name={name} size={27} color="white" />
            {/* <Text style={styles.circleButtonLabel}>{children}</Text> */}
        </TouchableOpacity>
    );
}

CircleButton.prototypes = {
    // 引数を必須にするときは、isRequired とする
    style: shape(),
    name: string.isRequired,
    onPress: func,
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