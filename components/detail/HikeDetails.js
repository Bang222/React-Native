
import {Alert, Pressable, StyleSheet, Text, View} from "react-native";
import TextCenterCustom from "../ui/textCenterCustom";
import {useState} from "react";
import ModalShowDataHike from "../modal/ModalShowDataHike";
import {useNavigation} from "@react-navigation/native";

const HikeDetails = ({dataHike,deleteHikeById}) => {
    const [openedDetail,setOpenedDetail] = useState(false)
    const navigation = useNavigation();
    const handlePressActivity = () => {
        Alert.alert( "Activity",
            "",

            [
                { text: "Edit", onPress: () => navigation.navigate("EditHike",{dataHike}) },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                },
                { text: "Observations", onPress: () => navigation.navigate("ObservationScreen",{dataHike:dataHike}) },
                ]
        )
    }
    const handleDetail = () => {
        setOpenedDetail(!openedDetail)
    }
    return (
        <View style={styles.container}>
            <View style={[styles.button, {backgroundColor: 'grey', paddingTop: 5, marginRight: 30, width: "40%"}]}>
                <Pressable onPress={handleDetail}>
                    <TextCenterCustom message={dataHike.Name}/>
                </Pressable>
                {openedDetail ?
                    <ModalShowDataHike radioValue={dataHike.ParkingAvailable} description={dataHike.description} isSubmit={false} message={"Detail"}
                                       highOfTheLength={dataHike.HighOfTheLength} difficultyLevel={dataHike.DifficultyLevel} nameHike={dataHike.Name}
                                       location={dataHike.Location} dateOfTheHike={dataHike.DateOfTheHike}
                                       modalVisible={openedDetail} setModalVisible={setOpenedDetail}/> : ""}
            </View>
            <View style={[styles.button, {backgroundColor: 'green'}]}>
                <Pressable onPress={handlePressActivity}>
                    <TextCenterCustom message={"Activity"}/>
                </Pressable>
            </View>
            <View style={[styles.button, {backgroundColor: 'red'}]}>
                <Pressable onPress={() => deleteHikeById(dataHike.id)}>
                    <TextCenterCustom message={"Delete"}/>
                </Pressable>
            </View>
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
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 15,
        fontWeight: 'bold',
        marginRight: 15,
    },
});
export default HikeDetails