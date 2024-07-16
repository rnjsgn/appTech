import React from "react";
import { Text, View } from "react-native";

import PointHistoryListStyle from "./PointHistoryListStyle";
import { PointHistoryBox } from "../PointHistoryBox/PointHistoryBox";

export const PointHistoryList = () => {
    return(
        <View>
            <Text
                style = {PointHistoryListStyle.pointhistory_title}
            >포인트 내역</Text>
            <PointHistoryBox />
            <PointHistoryBox />
        </View>
    )
}