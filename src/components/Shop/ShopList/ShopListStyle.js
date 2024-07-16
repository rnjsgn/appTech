import { StyleSheet } from "react-native";

const ShopListStyle = StyleSheet.create({
    shoplist_container : {
        width : '100%',

        padding : 30,
    },

    shoplist_title : {
        textAlign : 'center',

        fontSize : 32,
        fontWeight : 'bold',

        marginBottom : 20,
    },

    shoplist_list : {
        flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent : 'space-between'
    }
});

export default ShopListStyle;