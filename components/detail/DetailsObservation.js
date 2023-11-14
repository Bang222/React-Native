import {Alert, Pressable, StyleSheet, View} from "react-native";
import Label from "../ui/Label";
import TextInputCustom from "../ui/TextInputCustom";
import {useState} from "react";
import TextCenterCustom from "../ui/textCenterCustom";
import ModalShowDataObservation from "../modal/ModalShowDataObservation";
import database from "../../database/Database";
import {useNavigation} from "@react-navigation/native";

const DetailsObservation = ({observationData,getAllObservation}) => {
    const [openedDetail, setOpenedDetail] = useState(false)
    const navigation = useNavigation()
    const handleDetail = () => {
        setOpenedDetail(!openedDetail)
    }
    const handlePressEdit = () => {
        navigation.navigate("EditObservationScreen",{observationData})
    }
    const deleteObservationById = async (observationById) => {
        await database.deleteObservationById(observationById);
        await getAllObservation();
        Alert.alert("Notification", "Delete Successful");
    }
    return (
        <View style={styles.container}>
            <View style={[styles.button, {backgroundColor: 'grey', paddingTop: 5, marginRight: 10,width:"50%"}]}>
                <Pressable onPressOut={handleDetail}>
                    <TextCenterCustom message={observationData.Title}/>
                </Pressable>
            </View>
            <View style={[styles.button, {backgroundColor: 'green'}]}>
                <Pressable onPress={handlePressEdit}>
                    <TextCenterCustom message={"Edit"}/>
                </Pressable>
            </View>
            <View style={[styles.button, {backgroundColor: 'red'}]}>
                <Pressable onPress={() => deleteObservationById(observationData.id)}>
                    <TextCenterCustom message={"Delete"}/>
                </Pressable>
            </View>
            {
                <ModalShowDataObservation message={"Detail Observation"} title={observationData.Title} Comment={observationData.Comments} modalVisible={openedDetail} setModalVisible={setOpenedDetail} timeObservation={observationData.TimeObservation}/>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection: "row"
    },
    items: {
        paddingTop: 10,
        width: "50%"
    },
    distanceButton: {
        marginRight: 15,
    },
    button: {
        borderBox: true,
        height: 40,
        color: 'white',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 25,
        fontWeight: 'bold',
        marginRight: 10,
    },
});
export default DetailsObservation