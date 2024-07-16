import React from "react";
import { View, Text, Image } from "react-native";

import WinRankStyle from "./WinRankStyle";

export const WinRank = () => {
    return(
        <View
            style = {WinRankStyle.winRankStyle_container}
        >
            <Text
                style = {WinRankStyle.winRankStyle_win}
            >버블 슈터 1등</Text>
            <Text
                style = {WinRankStyle.winRankStyle_name}
            >용의자 0658</Text>
            <Image
                style = {WinRankStyle.winRankStyle_image}
                source={require('../../../../assets/images/User.png')}
            />
            <Text
                style = {WinRankStyle.winRankStyle_score}
            >274,154 점</Text>
        </View>
    )
}