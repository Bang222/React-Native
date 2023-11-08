import {Pressable, StyleSheet, View,Text} from "react-native";
import Label from "./Label";
import TextCenterCustom from "./textCenterCustom";

const ButtonCustom = ({message, handlePress} ) => {
    return (
        <View style={[styles.button, { backgroundColor: 'red' }]}>
            <Pressable onPress={handlePress}>
              <TextCenterCustom message={message}/>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    button:{
        color: 'white',
        borderRadius: 20,
        height: 40,
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
});
export default ButtonCustom