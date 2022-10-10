import { func, string } from "prop-types";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Button(props) {
    const { label, onPress} = props;
    return (
        <TouchableOpacity style={styles.buttunContainer} onPress={onPress}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

Button.propTypes = {
    label: string.isRequired,
    onPress: func,
}


const styles = StyleSheet.create({
    buttunContainer: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        // 自分自身を並べる
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 32,
        color: '#ffffff'
    },

});