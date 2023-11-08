import {Text, View,StyleSheet} from "react-native";

export default function Label({ label }) {
    return (
        <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    labelContainer: {
        alignItems: 'left',
        justifyContent: 'left',
        marginRight:20
    },
    labelText: {
        fontSize: 20, // Adjust the font size as needed
        fontWeight: 'bold',
        marginBottom: 10, // Adjust the margin as needed
    },
});