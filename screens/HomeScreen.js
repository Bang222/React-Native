import {useEffect, useState} from "react";
import Label from "../components/ui/Label";
import TextInputCustom from "../components/ui/TextInputCustom";
import {Alert, FlatList, Pressable, StyleSheet, Text, ToastAndroid, View} from "react-native";
import Database from "../database/Database";
import HikeDetails from "../components/detail/HikeDetails";
import {useIsFocused} from "@react-navigation/native";
import database from "../database/Database";
import ButtonCustom from "../components/ui/ButtonCustom";
import NavBarCustom from "../components/ui/NavBarCustom";

const HomeScreen = () => {
    const [dataHikes, setDataHikes] = useState([])
    const [loading, setLoading] = useState(false)
    const [isResetDataComplete, setIsDeleteAllComplete] = useState(false);
    const isFocused = useIsFocused();
    const getAllDataHike = async () => {
        setLoading(true);
        try {
            const data = await Database.getAllHike();
            setLoading(false)
            setDataHikes(data)
        } catch (err) {
            console.error(err)
        }
    }
    const deleteHikeById = (hikeId) => {
        database.deleteObservationByHikeId(hikeId).then(() => {
            database.deleteHikeById(hikeId).then(() => Alert.alert("Delete Success"))
            getAllDataHike().then(() => console.log("Ooke"))
        })
    }
    const deleteAllHike = async () => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete All Data",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: async () => {
                        await database.resetData();
                        setIsDeleteAllComplete(true);
                        getAllDataHike().then(() => console.log("oke"))
                        ToastAndroid.showWithGravity(
                            "Reset database successfully",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM
                        );
                    }
                }
            ]
        );
    };

    useEffect(() => {
        getAllDataHike().then(() => console.log("Get All Success"))
    }, [isFocused])
    // <HikeDetails key={dataHike.id} dataHike={dataHike} />
    return loading ? (
        <View>
            <Text>Loading...</Text>
        </View>
    ) : (
        <View style={{marginTop:40}}>
            <NavBarCustom message={"Home"}/>
            <View style={styles.container}>
                <View style={{marginTop: 20}}>
                    <ButtonCustom message={"Delete All"} handlePress={deleteAllHike}/>
                </View>
                {dataHikes.map((dataHike) => (
                    <View key={dataHike.id}>
                        <HikeDetails dataHike={dataHike} deleteHikeById={deleteHikeById}/>
                    </View>
                ))}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 12,
    },
    distanceNavBar: {
        marginTop: 20,
    }
});
export default HomeScreen