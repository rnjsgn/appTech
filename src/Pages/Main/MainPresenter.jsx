import React from "react";
import { ScrollView } from "react-native";

import { MainList } from "../../components/Main/MainList/MainList";

import { UserProvider } from "../../context/UserContext";

export const MainPresenter = ({
    navigation
}) => {
    return(
        <ScrollView
        >
            <UserProvider>
                <MainList
                    navigation = {navigation}
                />
            </UserProvider>
        </ScrollView>
    )
}