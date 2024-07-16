import { StyleSheet } from "react-native";

const InfoStyle = StyleSheet.create({
    info_container: {
        flex : 1,

        backgroundColor : 'white',
        
        justifyContent: 'center',
        alignItems: 'center',
    },

    info_explain : {
        backgroundColor : '#C9D9F2',

        width : '90%',

        padding : 30,
        marginBottom : 20,

        borderRadius : 5,
    },

    // info_reward : {
    //     backgroundColor : 'skyblue',
    // },

    info_title : {
        fontSize : 20,
        fontWeight : 'bold',

        paddingBottom : 10
    },

    info_list : {
        fontWeight : 'bold',
        paddingBottom : 5,
    }
})
export default InfoStyle;