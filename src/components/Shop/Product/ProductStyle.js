import { StyleSheet } from "react-native";

const ProductStyle = StyleSheet.create({
   product_container : {
    width : '45%',

    marginBottom : 10
   },

   product_image : {
    height : 120,

    backgroundColor : 'gray',

    borderRadius : 5,

    marginBottom : 5
   },

   product_name : {
    fontSize : 16,
    fontWeight : 'bold',

    marginBottom : 5
   },

   product_cost : {
    flexDirection : 'row'
   },

   product_price : {
    fontWeight : 'bold',

    marginLeft : 3
   }
});

export default ProductStyle;