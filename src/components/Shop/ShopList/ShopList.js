import React from "react";
import { View, Text } from "react-native";

import { Product } from "../Product/Product";

import ShopListStyle from "./ShopListStyle";

export const ShopList = () => {
    return(
        <View
            style = {ShopListStyle.shoplist_container}
        >
            <Text
                style = {ShopListStyle.shoplist_title}
            >코인 상점</Text>
            <View
                style = {ShopListStyle.shoplist_list}
            >
                <Product />
                <Product />
                <Product />
            </View>
        </View>
    )
}