import {Alert, Platform, Pressable, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import InputObservationComponent from "../components/inputs/InputObservationComponent";
import {useState} from "react";
import ButtonCustom from "../components/ui/ButtonCustom";
import database from "../database/Database";

const EditObservationScreen = (props) => {
    const {observationData} = props.route.params;
    const navigation =useNavigation()

    const [title,setTitle] = useState(observationData.Title)
    const [date,setDate] = useState(new Date())
    const [dateObservation,setDateObservation] = useState(observationData.TimeObservation)
    const [comment,setComment] = useState(observationData.Comments)
    const [open,setOpen] = useState(false)
    const toggleDatePicker = (e) => {
        setOpen(!open);
    };

    const option = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const onChange = ({type}, selectedDate) => {
        if (type === "set") {
            const currentDate = selectedDate;
            setDate(currentDate);
            if (Platform.OS === "android") {
                toggleDatePicker();
                setDateObservation(currentDate.toLocaleDateString("es-uk", option));
            }
        } else {
            toggleDatePicker();
        }
    };
    const handleEditObservation = async () => {
        try {
            if(!title || !dateObservation){
                return Alert.alert("Invalid Data")
            }
            await database.updateObservationsById(observationData.id,title,dateObservation,comment)
            Alert.alert("Sucessfully updated observation");
        }catch (E){
            Alert.alert("Edit Errr:", E)
        }
    }
    const handleBackNavigation = () =>{
        navigation.goBack();
    }
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
                       Edit Observations
                    </Text>
                </View>
            </View>
            <View style={{marginTop:12}}>
                <InputObservationComponent toggleDatePicker={toggleDatePicker} date={date} onChange={onChange} comment={comment}
                                           setComment={setComment} open={open} dateTimeObservation={dateObservation} setTitle={setTitle}
                                           title={title} setDate={setDate}/>
            </View>
            <ButtonCustom message={"Update Observation"} handlePress={handleEditObservation}/>
        </View>
    )
}
export default EditObservationScreen