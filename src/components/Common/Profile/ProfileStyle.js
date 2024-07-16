import { StyleSheet } from "react-native";

const ProfileStyles = StyleSheet.create({
    profile_container : {
        width : '100%',

        flexDirection : 'row',

        marginLeft : 30,
    },

    profile_image : {
        borderRadius : 100,

        marginRight : 10,
    },

    profile_info : {
        justifyContent : 'center'
    },

    profile_name : {
        fontSize : 18,
        fontWeight : 'bold',

        marginBottom : 5,
    },

    profile_haspoint : {
        flexDirection : 'row'
    },

    profile_pointimage : {
        marginRight : 5,
    },

    profile_point_text : {
        fontSize : 16,
        fontWeight : 'bold',

        marginRight : 10
    }
})

export default ProfileStyles;