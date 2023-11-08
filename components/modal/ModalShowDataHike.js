import {Alert, Modal, Pressable, View,StyleSheet,Text} from "react-native";

const ModalShowDataHike = ({handleSubmit,setModalVisible,modalVisible,nameHike,location,dateOfTheHike,radioValue,highOfTheLength,difficultyLevel,description,message,isSubmit}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{marginBottom:20, fontWeight:"bold", fontSize:30}}>{message}</Text>
                        <Text style={styles.modalText}>Name: {nameHike}</Text>
                        <Text style={styles.modalText}>Location: {location}</Text>
                        <Text style={styles.modalText}>Date Of The Hike: {dateOfTheHike}</Text>
                        <Text style={styles.modalText}>Parking Available: {radioValue}</Text>
                        <Text style={styles.modalText}>High Of The Length: {highOfTheLength}</Text>
                        <Text style={styles.modalText}>Difficulty Level: {difficultyLevel}</Text>
                        <Text style={styles.modalText}>Description: {description}</Text>
                    <View style={{flexDirection: "row"}}>
                        { isSubmit ?
                            <Pressable
                                style={[styles.button, styles.buttonClose, {marginRight:30, padding: 10}]}
                                onPress={handleSubmit}>
                                <Text style={styles.textStyle}>Submit</Text>
                            </Pressable>
                            : ""
                        }
                        <Pressable
                            style={[styles.button, styles.buttonClose,{padding:10}]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width:380,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginTop:50,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        width:100,
    },
    modalText: {
        fontSize:15,
        marginBottom: 15,
        textAlign: 'center',
    },
})
export default ModalShowDataHike