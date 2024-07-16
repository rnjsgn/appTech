import { StyleSheet } from "react-native";

const WinListStyle = StyleSheet.create({
    winlist_container : {
        flexDirection : 'row',

        justifyContent : 'space-between'
    },

    winlist_wrap : {
        justifyContent : 'center',
        alignItems : 'center',
    },

    winlist_image : {
        marginBottom : 10
    },

    winlist_text : {
        fontWeight : 'bold',

        marginBottom : 10,
    }
})

export default WinListStyle;