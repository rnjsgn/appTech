import React from "react";
import { ScrollView, Text } from "react-native";

import { PointHistoryList } from "../../components/PointHistory/PointHistoryList/PointHistoryList";

export const PointHistoryPresenter = () => {
    return(
        <ScrollView>
            <PointHistoryList />
        </ScrollView>
    )
}