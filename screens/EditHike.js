import {Alert, Platform, Pressable, Text, ToastAndroid, View} from "react-native";
import {useState} from "react";
import InputDataComponent from "../components/inputs/InputDataComponent";
import Database from "../database/Database";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const EditHike = ({route}) => {
    const {dataHike} = route.params;
    const [name, SetName] = useState(dataHike.Name)
    const [location, setLocation] = useState(dataHike.Location)
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date)
    const [dateHike, setDateHike] = useState(dataHike.DateOfTheHike)
    const [highOfTheLength, setHighOfLengthTheHike] = useState(dataHike.HighOfTheLength)
    const [radioValue, setRadioValue] = useState(dataHike.ParkingAvailable)
    const [difficultLevel, setDifficultLevel] = useState(dataHike.DifficultyLevel)
    const [description, setDescription] = useState(dataHike.Description)
    const [modalVisible, setModalVisible] = useState(false);
    const itemsRadioButton = [
        {label: "Yes", value: "Yes"},
        {label: "No", value: "No"},
    ]
    const navigation = useNavigation()
    const toggleDatePicker = (e) => {
        setOpen(!open);
    };
    const option = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    const onChange = ({type}, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);
            if (Platform.OS === "android") {
                toggleDatePicker();
                setDateHike(currentDate.toLocaleDateString("es-uk", option));
            }
        } else {
            toggleDatePicker();
        }
    };
    const handleUpdate = () => {
        if (!name || !location || !highOfTheLength || !difficultLevel || !dateHike || !radioValue) {
            Alert.alert("Error", "data is not a valid");
            return;
        }
        Database.updateHikeById(name, location, dateHike, radioValue, highOfTheLength, difficultLevel, description, dataHike.id)
            .then(() => {
                ToastAndroid.showWithGravity(
                    "Update Success",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );

            })
            .catch((error) => {
                console.error("Failed to add hike:", error);
            });
    }
    const handleBackNavigation = () => {
        navigation.goBack();
    }
    return (
        <View style={{marginTop: 40}}>
            <View style={{height: 50, justifyContent: 'center', backgroundColor: "blue"}}>
                <View style={{flexDirection: "row", width: "100%"}}>
                    <Pressable onPress={handleBackNavigation} style={{width: "35%", marginLeft: 20, marginTop: 4}}>
                        <View >
                            <Ionicons name="arrow-back-circle-outline" size={25} color="white"/>
                        </View>
                    </Pressable>
                    <Text style={{color: "white", fontSize: 25, alignItems: "center"}}>
                        Edit Hike
                    </Text>
                </View>
            </View>
            <InputDataComponent open={open} name={name} SetName={SetName} location={location} setLocation={setLocation}
                                date={date} onChange={onChange} dateHike={dateHike} toggleDatePicker={toggleDatePicker}
                                itemsRadioButton={itemsRadioButton} setRadioValue={setRadioValue}
                                highOfTheLength={highOfTheLength} setHighOfLengthTheHike={setHighOfLengthTheHike}
                                radioValue={radioValue} difficultLevel={difficultLevel}
                                setDifficultLevel={setDifficultLevel} description={description}
                                setDescription={setDescription} onPressFunction={handleUpdate}
                                activity={"Update Hike"}/>
        </View>
    )
        ;
}
export default EditHike;