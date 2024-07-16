import React from "react";
import { ScrollView, Text } from "react-native";
import { ShopList } from "../../components/Shop/ShopList/ShopList";

export const ShopPresenter = () => {
    return(
        <ScrollView>
            <ShopList />
        </ScrollView>
    )
}