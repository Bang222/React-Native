import {View} from "react-native";

const FormatDate = (date) => {
    const formatDate = new Date(date)
    const option = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    return(<View>{formatDate?.toLocaleString("es-uk",option) ?? ""}</View>)
}
export default FormatDate