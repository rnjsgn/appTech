import { StyleSheet } from "react-native";

const MyScoreStyle = StyleSheet.create({
    myscore_container : {
        flexDirection : 'row',

        justifyContent : 'space-between',
        alignItems : 'center',

        backgroundColor : 'skyblue',

        borderRadius : 5,

        padding : 10
    },

    myscore_text : {
        fontWeight : 'bold'
    }
});

export default MyScoreStyle;