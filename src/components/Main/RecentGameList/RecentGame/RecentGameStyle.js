import { StyleSheet } from "react-native";

const RecentGameStyle = StyleSheet.create({
    recentGame_container : {
        width : '30%',

        alignItems : 'center',
        justifyContent : 'center',

        padding : 10,

        borderColor : 'gray',
        borderRadius : 5,
        borderWidth : 2,

        marginRight : 10,
    },

    recentGame_title : {
        fontWeight : 'bold',
        marginBottom : 10,
    },

    recentGame_image : {
        marginBottom : 10,
    },
})

export default RecentGameStyle;