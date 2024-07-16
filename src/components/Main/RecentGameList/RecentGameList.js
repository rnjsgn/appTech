import React from "react";
import { View, Text } from "react-native";

import { RecentGame } from "./RecentGame/RecentGame";

import RecentGameListStyle from "./RecentGameListStyle";

export const RecentGameList = () => {
    return(
        <View
            style = {RecentGameListStyle.recentGameList_container}
        >
            <Text
                style = {RecentGameListStyle.recentGameList_title}
            >최근 게임</Text>
            <RecentGame />
        </View>
    );
};