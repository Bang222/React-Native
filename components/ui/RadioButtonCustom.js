import {StyleSheet, View,Text} from "react-native";
import RadioForm from "react-native-simple-radio-button";
import Label from "./Label";

const RadioButtonCustom = (props) =>{
    return(
        <View style={styles.row}>
            <Label label={props.message} />
            <RadioForm
                key={props.reset}
                radio_props={props.items}
                initial={props.value}
                onPress={(text) => props.setValue(text)}
                formHorizontal={true}
                style={styles.viewRowRadio}
                labelStyle={{marginRight: 10}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize:12,
    },
    distanceButton: {
        marginLeft:12,
        marginRight:12,
    },
    row : {
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    viewRowRadio : {
        flexDirection:'row',
        marginLeft:15,
    },

});
export default RadioButtonCustom