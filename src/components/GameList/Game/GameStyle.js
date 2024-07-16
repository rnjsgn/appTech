import { StyleSheet } from "react-native";

const GameStyle = StyleSheet.create({
    game_container : {
        backgroundColor : '#C9D9F2',
        
        margin : 30,
        padding : 10,

        borderRadius : 5,
    },

    game_popup : {
        flexDirection : 'row',
        justifyContent : 'flex-end',
    },

    game_popup_image : {
        marginLeft : 5
    },

    game_title : {
        flexDirection : 'row',
    },

    game_text : {
        marginLeft : 10,
    },

    game_name : {
        fontSize : 20,
        fontWeight : 'bold',

        marginBottom : 7,
    },

    game_info : {
        color : 'gray'
    },
    
    game_user_info : {
        flexDirection : 'row',

        justifyContent : 'space-between',

        marginTop : 20,
    },

    game_point : {
        marginLeft : 62
    },

    game_fee : {
        flexDirection : 'row',

        marginBottom : 10,
    },

    game_cost : {
        fontSize : 15,
        fontWeight : 'bold',
        
        color : 'blue',

        marginLeft : 3
    },

    game_total_fee : {
        fontSize : 10,
        fontWeight : 'bold'
    },

    game_total_people : {
        fontSize : 10,
        fontWeight : 'bold',

        marginTop : 3,
    }
})

export default GameStyle;