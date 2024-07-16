import { StyleSheet } from "react-native";

const WinRankStyle = StyleSheet.create({
    winRankStyle_container : {
        width : '40%',
        height : 250,

        alignItems : 'center',
        justifyContent : 'center',

        padding : 10,

        borderColor : 'gray',
        borderRadius : 5,
        borderWidth : 2,

        marginRight : 10,
        marginBottom : 20
    },

    winRankStyle_win : {
        width : '100%',

        backgroundColor : '#0038FF',
        color : 'white',

        borderRadius : 5,

        textAlign : 'center',

        fontWeight : 'bold',

        padding : 5,
        marginTop : 5
    },

    winRankStyle_name : {
        fontWeight : 'bold',

        margin : 5
    },

    winRankStyle_image : {
        width : '60%',
        height : 100,

        margin : 5
    },

    winRankStyle_score : {
        fontWeight : 'bold',

        padding : 5,
        margin : 5
    }
});

export default WinRankStyle;