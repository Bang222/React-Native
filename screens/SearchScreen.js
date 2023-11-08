import {useEffect, useState} from "react";
import TextInputCustom from "../components/ui/TextInputCustom";
import {Pressable, StyleSheet, Text, View} from "react-native";
import NavBarCustom from "../components/ui/NavBarCustom";
import TextCenterCustom from "../components/ui/textCenterCustom";
import Database from "../database/Database";
import SearchDetail from "../components/detail/SearchDetail";
import {useIsFocused} from "@react-navigation/native";
import database from "../database/Database";

const SearchScreen = () => {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [dataHikes, setDataHikes] = useState([])
    const [open, setOpen] = useState(false)
    const isFocused = useIsFocused()

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
    const handleSearch = (dataSearch) => {
        database.searchHike(dataSearch).then((data) => {
            setDataHikes(data)
        })
    }
    const handleDetail = () => {
        setOpen(!open)
    }
    useEffect(()=>{

    },[search])
    useEffect(()=>{
        getAllDataHike().then(()=>{"oke"})
    },[isFocused])
    return (
        <View style={{marginTop:40}}>
            <NavBarCustom message={"Search"}/>
            <View style={styles.distanceNavBar}>
                <View style={styles.container}>
                    <TextInputCustom placeholder={"Search"} data={search} setData={setSearch} typeKeyboard={"default"}/>
                    <View style={{backgroundColor:"blue", padding:10,borderRadius:25,marginVertical:12}}>
                        <Pressable onPress={() => handleSearch(search)}>
                            <TextCenterCustom message={"Search"}/>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View>
                {dataHikes.map((item) => {return(
                    <View key={item.id}>
                    <SearchDetail handleDetail={handleDetail} openedDetail={open} dataHike={item} setOpenedDetail={setOpen}/>
                    </View>
                    )}) }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 12,
    },
    distanceNavBar : {
        marginTop: 20,
    }
});
export default SearchScreen