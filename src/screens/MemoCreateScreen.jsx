import React from "react";
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoCreateScreen(){
    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <AppBar />
            <View style={styles.inputContainer}>
                <TextInput value="" multiline style={styles.input}/>
            </View>
            <CircleButton name='check' />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1,
    },
    input: {
        flex: 1,
        fontSize: 14,
        lineHeight: 24, 
        textAlignVertical: 'top',
    },

});