import {View} from "react-native";

const FormDate = (date) => {
    const formatDate = new Date(date)
    const option = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    return(<View>{formatDate?.toLocaleString("es-uk",option) ?? ""}</View>)
}
export default FormDate