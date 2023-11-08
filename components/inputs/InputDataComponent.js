import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import Label from "../ui/Label";
import TextInputCustom from "../ui/TextInputCustom";
import DateTimePicker from "@react-native-community/datetimepicker";
import RadioButtonCustom from "../ui/RadioButtonCustom";
import {Picker} from "@react-native-picker/picker";
import TextInputMultiple from "../ui/TextInputMultiple";

const inputDataComponent = ({open ,name,SetName,location,setLocation,date,onChange,dateHike,toggleDatePicker,itemsRadioButton,
                                setRadioValue,highOfTheLength,setHighOfLengthTheHike,radioValue,difficultLevel,
                                setDifficultLevel,description,setDescription,onPressFunction,activity,reset
}) => {
    return (
        <View style={{marginTop:40}}>
            <View style={styles.container}>
                <Label label={"Name Of The Hike"}/>
                <TextInputCustom data={name} setData={SetName} typeKeyboard={"default"} placeholder={"Name Hike"}/>
            </View>
            <View style={styles.container}>
                <Label label={"Location"}/>
                <TextInputCustom data={location} setData={setLocation} typeKeyboard={"default"}
                                 placeholder={"Location"}/>
            </View>
            <View style={styles.container}>
                <Label label={"Date Of The Hike"}/>
                {open && (
                    <DateTimePicker
                        mode="date"
                        display="spinner"
                        value={date}
                        onChange={onChange}
                    />
                )}
                <Pressable>
                    <TextInput
                        style={styles.input}
                        placeholder="Select Date"
                        value={dateHike}
                        onPressIn={toggleDatePicker}
                    />
                </Pressable>
            </View>
            <View style={styles.container}>
                <RadioButtonCustom
                    reset={reset}
                    items={itemsRadioButton}
                    message={"Parking Available"}
                    value={radioValue}
                    setValue={setRadioValue}
                />
            </View>
            <View style={[styles.container, styles.row]}>
                <Label label={"High Of the Length"}/>
                <TextInputCustom data={ highOfTheLength ? String(highOfTheLength) : highOfTheLength} setData={setHighOfLengthTheHike} typeKeyboard={"numeric"}
                                 placeholder={"High"}/>
            </View>
            <View style={[styles.container, styles.row]}>
                <Label label={"Difficulty Level"}/>
                <View style={[{borderWidth: 1, borderColor: 'gray', borderRadius: 20}, styles.picker]}>
                    <Picker
                        selectedValue={difficultLevel} // Set the default value here
                        style={{height: 40}}
                        onValueChange={(itemValue) => setDifficultLevel(itemValue)}
                    >
                        <Picker.Item label="Choose" value=""/>
                        <Picker.Item label="Easy" value="Easy"/>
                        <Picker.Item label="Medium" value="Medium"/>
                        <Picker.Item label="Hard" value="Hard"/>
                    </Picker>
                </View>
            </View>
            <View style={styles.container}>
                <Label label={"Description"}/>
                <TextInputMultiple
                    data={description}
                    setData={setDescription}
                    placeholder={"Description"}
                    typeKeyboard={"default"}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.button} onPress={onPressFunction}>
                    {activity}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginRight: 12,
        marginLeft: 12,
        marginBottom: 12,
    },
    distanceNavBar: {
        margin: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        marginBottom: 8,
        paddingHorizontal: 20,
        height: 40,
    },
    button: {
        backgroundColor: 'blue', // Background color
        color: 'white', // Text color
        borderRadius: 20, // Border radius
        height: 40,
        textAlign: 'center',
        padding: 10,// Padding
        fontWeight: 'bold', // Text weight
        fontSize: 16, // Text font size
    },
    row: {
        flexDirection: 'row',
    },
    picker: {
        width: 150,
        marginLeft: 30,
    },
});
export default inputDataComponent