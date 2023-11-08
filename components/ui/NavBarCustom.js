import {Text, View} from "react-native";

const NavBarCustom = ({message}) => {
    return  <View style={{height:50,alignItems:"center",justifyContent:'center',backgroundColor:"blue"}}>
        <Text style={{color:"white",fontSize:25}}>
            {message}
        </Text>
    </View>
}
export default NavBarCustom