import {Pressable, StyleSheet, View} from "react-native";
import TextCenterCustom from "../ui/textCenterCustom";
import ModalShowDataHike from "../modal/ModalShowDataHike";
import {useState} from "react";

const SearchDetail = ({dataHike}) => {
    const [open, setOpen] = useState(false)
    const handleDetail = () => {
        setOpen(!open)
    }
    return(
        <View style={styles.container}>
            <View style={[styles.button, {backgroundColor: 'grey', paddingTop: 5, marginRight: 30, width: "100%"}]}>
                <Pressable onPress={handleDetail}>
                    <TextCenterCustom message={dataHike.Name}/>
                </Pressable>
                {open ?
                    <ModalShowDataHike radioValue={dataHike.ParkingAvailable} description={dataHike.description} isSubmit={false} message={"Detail"}
                                       highOfTheLength={dataHike.HighOfTheLength} difficultyLevel={dataHike.DifficultyLevel} nameHike={dataHike.Name}
                                       location={dataHike.Location} dateOfTheHike={dataHike.DateOfTheHike}
                                       modalVisible={open} setModalVisible={setOpen}/> : ""}
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
export default SearchDetail