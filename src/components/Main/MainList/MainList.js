import React from "react";
import { Image, View } from "react-native";

import MainListStyle from "./MainListStyle";

import { Profile } from "../../Common/Profile/Profile";
import { ButtonList } from "../ButtonList/ButtonList";
import { RecentGameList } from "../RecentGameList/RecentGameList";
import { WinList } from "../WinList/WinList";

export const MainList = ({
    navigation
}) => {
    return(
        <View
            style = {MainListStyle.mainList_container}
        >
            <Image
                style = {MainListStyle.mainList_title}
                source={require('../../../assets/images/Title.png')}
                resizeMode="contain"
            />
            <Profile />
            <ButtonList
                navigation = {navigation}
            />
            <RecentGameList />
            <WinList />
        </View>
    );
};