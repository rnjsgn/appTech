import React, { useContext } from "react";
import { View, Text, Image } from "react-native";

import ProfileStyles from "./ProfileStyle";

import { useUser } from "../../../context/UserContext";

export const Profile = () => {

    const { userInfo } = useUser()

    return(
        <View
            style = {ProfileStyles.profile_container}
        >
            <Image
                style = {ProfileStyles.profile_image}
                source={require('../../../assets/images/User.png')}
                resizeMode="contain"
            />
            <View
                style = {ProfileStyles.profile_info}
            >
                <Text
                    style = {ProfileStyles.profile_name}
                >{userInfo.name}</Text>
                <View
                    style = {ProfileStyles.profile_haspoint}
                >
                    <Image
                        style = {ProfileStyles.profile_pointimage}
                        source={require('../../../assets/images/Point.png')}
                    />
                    <Text
                        style = {ProfileStyles.profile_point_text}
                    >{userInfo.point}</Text>
                    <Image
                        style = {ProfileStyles.profile_pointimage}
                        source={require('../../../assets/images/Cash.png')}
                    />
                    <Text
                        style = {ProfileStyles.profile_point_text}
                    >{userInfo.cash}</Text>
                </View>
            </View>
        </View>
    )
}