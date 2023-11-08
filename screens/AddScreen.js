import {useEffect, useState} from "react";
import {
    Alert,
    Platform, ToastAndroid,
    View,
} from "react-native";
import ModalShowDataHike from "../components/modal/ModalShowDataHike";
import Database from "../database/Database";
import NavBarCustom from "../components/ui/NavBarCustom";
import InputDataComponent from "../components/inputs/InputDataComponent";

const AddScreen = () => {
    const [name, SetName] = useState("")
    const [location, setLocation] = useState("")
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date)
    const [dateHike, setDateHike] = useState("")
    const [highOfTheLength, setHighOfLengthTheHike] = useState()
    const [radioValue, setRadioValue] = useState("")
    const [difficultLevel, setDifficultLevel] = useState()
    const [description, setDescription] = useState()
    const [modalVisible, setModalVisible] = useState(false);
    const [reset, setReset] = useState(0)
    const itemsRadioButton = [
        {label: "Yes", value: "Yes"},
        {label: "No", value: "No"},
    ]
    const toggleDatePicker = (e) => {
        setOpen(!open);
    };
    const onChange = ({type}, selectedDate) => {
        if (type === "set") {
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
    const handleAddHike = () => {
        setModalVisible(!modalVisible)
    };
    const option = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    const resetForm = () => {
        SetName("");
        setLocation("")
        setDateHike("")
        setHighOfLengthTheHike("")
        setRadioValue("")
        setReset(Math.random)
        setDifficultLevel("")
        setDescription("");
    }
    const handleSubmit = () => {
        if (!name || !location || !highOfTheLength || !difficultLevel || !dateHike || !radioValue) {
            Alert.alert("Error", "data is not a valid");
            return;
        }
        Database.addHike(name, location, dateHike, radioValue, highOfTheLength, difficultLevel, description)
            .then((insertedId) => {
                resetForm();
                handleAddHike()
                ToastAndroid.showWithGravity(
                    "Create Success",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );

            })
            .catch((error) => {
                console.error("Failed to add hike:", error);
            });
    }
    return (
        <View style={{marginTop:40}}>
          <NavBarCustom message={"Add New Hike"}/>
            <InputDataComponent open={open} name={name} SetName={SetName} location={location} setLocation={setLocation}
                                date={date} onChange={onChange} dateHike={dateHike} toggleDatePicker={toggleDatePicker}
                                itemsRadioButton={itemsRadioButton} setRadioValue={setRadioValue}
                                highOfTheLength={highOfTheLength} setHighOfLengthTheHike={setHighOfLengthTheHike}
                                radioValue={radioValue} difficultLevel={difficultLevel}
                                setDifficultLevel={setDifficultLevel} description={description}
                                setDescription={setDescription} onPressFunction={handleAddHike} activity={"Add Hike"} reset={reset}/>
            {modalVisible ?
                <ModalShowDataHike radioValue={radioValue} handleSubmit={handleSubmit} description={description}
                                   isSubmit={true}
                                   message={"Confirm Data Hike"}
                                   highOfTheLength={highOfTheLength} difficultyLevel={difficultLevel}
                                   nameHike={name}
                                   location={location} dateOfTheHike={date.toLocaleDateString('es-uk', option)}
                                   modalVisible={modalVisible} setModalVisible={setModalVisible}/> : ""}
        </View>
    )
}
export default AddScreen