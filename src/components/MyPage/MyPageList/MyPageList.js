import React from "react";
import { View, Text } from "react-native";

import MyPageListStyle from "./MyPageListStyle";

import { Profile } from "../../Common/Profile/Profile";
import { MyActivity } from "../MyActivity/MyActivity";
import { MyPageButtonList } from "../MyPageButtonList/MyPageButtonList";

export const MyPageList = ({
    navigation
}) => {
    return(
        <View
            style = {MyPageListStyle.mypagelist_container}
        >
            <Text
                style = {MyPageListStyle.mypagelist_title}
            >마이페이지</Text>
            <Profile />
            <Text
                style = {MyPageListStyle.mypagelist_title}
            >나의 활동</Text>
            <MyActivity />
            <MyPageButtonList 
                navigation = {navigation}
            />
        </View>
    )
}