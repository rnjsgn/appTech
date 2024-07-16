import React from "react";
import { View, Text, Image } from "react-native";

import ProductStyle from "./ProductStyle";

export const Product = () => {
    return(
        <View
            style = {ProductStyle.product_container}
        >
            <View 
                style = {ProductStyle.product_image}
            />
            <Text
                style = {ProductStyle.product_name}
            >상품1</Text>
            <View
                style = {ProductStyle.product_cost}
            >
                <Image 
                    source={require("../../../assets/images/Cash.png")}
                />
                <Text
                    style = {ProductStyle.product_price}
                >2400</Text>
            </View>
        </View>
    )
}