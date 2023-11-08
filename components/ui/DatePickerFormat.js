import DateTimePicker from "@react-native-community/datetimepicker";

const DatePickerFormat = (props) => {
    return (
        <DateTimePicker
            onChange={props.onChange}
            value={props.value}
            mode={'date'}
            is24Hour={'true'}/>
    )
}
export default DatePickerFormat