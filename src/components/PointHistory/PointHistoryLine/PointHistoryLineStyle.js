import { StyleSheet } from "react-native";

const PointHistoryLineStyle = StyleSheet.create({
    pointhistoryline_container : {
        padding : 5,
        
        flexDirection : 'row',

        alignItems : 'center',
        justifyContent : 'space-between'
    },

    pointhistoryline_image : {
        width : 40
    },

    pointhistoryline_content : {
        flex : 2,

        marginLeft : 20,

        fontSize : 16,
        fontWeight : 'bold'
    },

    pointhistoryline_point : {
        flexDirection : 'row'
    },

    pointhistoryline_pointhistory : {
        marginLeft : 5,

        fontWeight : 'bold'
    }
});

export default PointHistoryLineStyle;