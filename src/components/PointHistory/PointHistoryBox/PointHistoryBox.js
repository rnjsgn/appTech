import React from "react";
import { Text, View } from "react-native";

import PointHistoryBoxStyle from "./PointHistoryBoxStyle";
import { PointHistoryLine } from "../PointHistoryLine/PointHistoryLine";

export const PointHistoryBox = () => {
    return(
        <View>
            <Text
                style = {PointHistoryBoxStyle.pointhistorybox_date}
            >24/07/01</Text>
            <View
                style = {PointHistoryBoxStyle.pointhistorybox_box}
            >
                <PointHistoryLine />
                <PointHistoryLine />
                <PointHistoryLine />
                <PointHistoryLine />
            </View>
        </View>
    )
}