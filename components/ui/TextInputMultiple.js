import {StyleSheet, TextInput} from "react-native";

const TextInputMultiple = ({ data, setData, typeKeyboard,placeholder }) => {
    return (
        <TextInput
            style={styles.inputMultiple}
            placeholder={placeholder}
            onChangeText={(text) => setData(text)}
            value={data}
            keyboardType={typeKeyboard}
            multiline
            autoCapitalize="none"
        />
    );
};

const styles = StyleSheet.create({
    inputMultiple: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:20,
        marginBottom: 8,
        paddingHorizontal: 20,
        minHeight: 100,
        paddingVertical:10,
        textAlignVertical:'top',
    },
});

export default TextInputMultiple;