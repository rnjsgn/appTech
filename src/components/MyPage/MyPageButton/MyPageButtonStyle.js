import { StyleSheet } from "react-native";

const MyPageButtonStyle = StyleSheet.create({
    mypagebutton_button : {
        marginLeft : 30,
        marginTop : 10,
        marginBottom : 15,

        width : '85%',

        borderBottomColor : 'Black',
        borderBottomWidth : 2,
    },

    mypagebutton_content : {
        flexDirection : 'row',

        alignItems : 'center',
        justifyContent : 'space-between',

        paddingBottom : 5
    },

    mypagebutton_title : {
        fontSize : 16,
        fontWeight : 'bold'
    }
});

export default MyPageButtonStyle;