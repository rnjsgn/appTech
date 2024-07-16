import React from "react";
import { Image, Text, View } from "react-native";

import MyScoreStyle from "./MyScoreStyle";

export const MyScore = () => {
    return(
        <View
            style = {MyScoreStyle.myscore_container}
        >
            <Text
                style = {MyScoreStyle.myscore_text}
            >234</Text>
            <Image 
                source={require("../../../../../../assets/images/User.png")}
            />
            <Text
                style = {MyScoreStyle.myscore_text}
            >고기23묵자</Text>
            <Text
                style = {MyScoreStyle.myscore_text}
            >92,154</Text>
        </View>
    )
}