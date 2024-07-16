import { StyleSheet } from "react-native";

const MyActivityStyle = StyleSheet.create({
    myactivity_container : {
        width : '85%',
        height : 200,

        marginLeft : 30,
        marginBottom : 20,

        padding : 20,

        backgroundColor : '#D9D9D9',

        justifyContent : 'space-between',

        borderRadius : 5
    },

    myactivity_line : {
        flexDirection : 'row',

        justifyContent : 'space-between',
    },

    myactivity_text : {
        color : 'gray',
        
        fontWeight : 'bold',

        marginLeft : 5
    },

    myactivity_point : {
        flexDirection : 'row'
    }
});

export default MyActivityStyle;