import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputCustom = ({ data, setData, typeKeyboard,placeholder }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={(text) => setData(text)}
            value={data}
            keyboardType={typeKeyboard}
            autoCapitalize="none"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:20,
        marginBottom: 8,
        width: 'auto',
        paddingHorizontal: 20,
        height: 40,
    },
});

export default TextInputCustom;