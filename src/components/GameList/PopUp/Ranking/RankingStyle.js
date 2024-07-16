import { StyleSheet } from "react-native";

const RankingStyle = StyleSheet.create({
    ranking_container : {
        flex : 1,

        backgroundColor : 'white',
        
        justifyContent: 'center',
        alignItems: 'center',
    },

    ranking_name : {
        width : '90%',

        flexDirection : 'row',

        justifyContent : 'space-between',
        alignItems : 'center',

        marginBottom : 5,
    },

    ranking_title : {
        fontSize : 20,
        fontWeight : 'bold',
    },

    ranking_date : {
        fontWeight : 'bold'
    },

    ranking_rank : {
        width : '90%',

        backgroundColor : '#C9D9F2',

        borderRadius : 5,

        padding : 20
    },

    ranking_etc : {
        width : '90%',
        
        textAlign: 'left',

        fontWeight : 'bold',

        marginTop : 15,
        marginBottom : 5,
    }
})

export default RankingStyle;