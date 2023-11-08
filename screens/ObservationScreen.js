import {View, Text, Pressable} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import ButtonCustom from "../components/ui/ButtonCustom";
import {useEffect, useState} from "react";
import database from "../database/Database";
import DetailsObservation from "../components/detail/DetailsObservation";

const ObservationScreen = ({route}) => {
    const {dataHike} = route.params;
    const navigation =useNavigation()
    const isFocused = useIsFocused();
    const [dataObservationOfHikes,setDataObservationOfHikes] = useState([])
    const handleBackNavigation = () => {
        navigation.goBack();
    }
    const handleNavigateObservation = ()=> {
        navigation.navigate("AddObservationScreen",{dataHike});
    }
    const getAllDataObservationsOfHike = () => {
        database.getObservationByHikeId(dataHike.id).then((data)=> {
            setDataObservationOfHikes(data);
        }).catch((err) => console.error(err))
    }
    useEffect(()=>{
        getAllDataObservationsOfHike()
    },[isFocused])
    return(
        <View style={{marginTop: 40}}>
            <View style={{height: 50, justifyContent: 'center', backgroundColor: "blue"}}>
                <View style={{flexDirection: "row", width: "100%"}}>
                    <Pressable onPress={handleBackNavigation} style={{width: "35%", marginLeft: 20, marginTop: 4}}>
                        <View >
                            <Ionicons name="arrow-back-circle-outline" size={25} color="white"/>
                        </View>
                    </Pressable>
                    <Text style={{color: "white", fontSize: 25, alignItems: "center"}}>
                        Observations
                    </Text>
                </View>
            </View>
            <View style={{margin:12}}>
                <ButtonCustom handlePress={handleNavigateObservation} message={"New Observation"}/>
            </View>
            <View>
                {dataObservationOfHikes.map((item) => {return(
                    <View key = {item.id}>
                        <DetailsObservation observationData={item}/>
                    </View>
                )})}
            </View>
        </View>
    )
}
export default ObservationScreen