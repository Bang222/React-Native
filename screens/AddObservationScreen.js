import {View, Text, Pressable, Platform, Alert, ToastAndroid} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import InputObservationComponent from "../components/inputs/InputObservationComponent";
import {useState} from "react";
import ButtonCustom from "../components/ui/ButtonCustom";
import database from "../database/Database";

const AddObservationScreen = ({route}) => {
    const {dataHike} = route.params;
    // const {dataHike} = route.params;
    const navigation = useNavigation()
    const [title,setTitle] = useState("")
    const [date,setDate] = useState(new Date)
    const [dateObservation,setDateObservation] = useState("")
    const [comment,setComment] = useState("")
    const [open,setOpen] = useState(false)
    const toggleDatePicker = (e) => {
        setOpen(!open);
    };
    const resetForm = () => {
        setTitle("")
        setDateObservation("")
        setComment("")
    }
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
    const handleAddObservation = () => {
        if(!title || !dateObservation) {
            Alert.alert("Notifications","Invalid Data")
        }
     database.addObservationsByHikeId(dataHike.id,title,dateObservation,comment).then(()=> {
         ToastAndroid.showWithGravity(
             "Create Success",
             ToastAndroid.SHORT,
             ToastAndroid.BOTTOM
         );
         resetForm();
     })
    };
    const option = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const handleBackNavigation = () => {
        navigation.goBack();
    }
    return(
        <View style={{marginTop: 40}}>
            <View style={{height: 50, justifyContent: 'center', backgroundColor: "blue"}}>
                <View style={{flexDirection: "row", width: "100%"}}>
                    <Pressable onPress={handleBackNavigation} style={{width: "25%", marginLeft: 20, marginTop: 4}}>
                        <View >
                            <Ionicons name="arrow-back-circle-outline" size={25} color="white"/>
                        </View>
                    </Pressable>
                    <Text style={{color: "white", fontSize: 25, alignItems: "center"}}>
                        Add Observation
                    </Text>
                </View>
            </View>
            <View style={{marginTop:12}}>
                <InputObservationComponent toggleDatePicker={toggleDatePicker} date={date} onChange={onChange} comment={comment}
                                           setComment={setComment} open={open} dateTimeObservation={dateObservation} setTitle={setTitle}
                                           title={title} setDate={setDate}/>
            </View>
            <ButtonCustom message={"Add Observation"} handlePress={handleAddObservation}/>
        </View>
    )
}
export default AddObservationScreen