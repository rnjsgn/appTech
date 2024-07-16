import React from "react";
import { Image, Text, View } from "react-native";

import EtcScoreStyle from "./EtcScoreStyle";

export const EtcScore = () => {
    return(
        <View
            style = {EtcScoreStyle.etcscore_container}
        >
            <Text
                style = {EtcScoreStyle.etcscore_text}
            >4</Text>
            <Image 
                source={require("../../../../../../assets/images/User.png")}
            />
            <Text
                style = {EtcScoreStyle.etcscore_text}
            >고기묵자</Text>
            <Text
                style = {EtcScoreStyle.etcscore_text}
            >212,154</Text>
        </View>
    )
}