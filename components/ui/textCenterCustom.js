import {StyleSheet, Text, View} from "react-native";

export default function TextCenterCustom({ message }) {
    return (
        <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    labelContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelText: {
        color:"white",
        fontSize: 16,
        fontWeight: 'bold',
    },
});