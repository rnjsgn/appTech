import React from "react";
import { Image, View, Text } from "react-native";

import PointHistoryLineStyle from "./PointHistoryLineStyle";

export const PointHistoryLine = () => {
    return(
        <View
            style = {PointHistoryLineStyle.pointhistoryline_container}
        >
            <Image
            style = {PointHistoryLineStyle.pointhistoryline_image}
                source={require("../../../assets/images/BubbleShooter.png")}
                resizeMode="contain"
            />
            <Text
                style = {PointHistoryLineStyle.pointhistoryline_content}
            >
                광고 시청
            </Text>
            <View
                style = {PointHistoryLineStyle.pointhistoryline_point}
            >
                <Image
                    source={require("../../../assets/images/Point.png")}
                />
                <Text
                    style = {PointHistoryLineStyle.pointhistoryline_pointhistory}
                >
                    1
                </Text>
            </View>
        </View>
    )
}