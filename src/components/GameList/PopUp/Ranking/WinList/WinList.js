import React from "react"
import { View, Text, Image } from "react-native"

import WinListStyle from "./WinListStyle"

export const WinList = () => {
    return(
        <View
        style = {WinListStyle.winlist_container}
        >
            <View
                style = {WinListStyle.winlist_wrap}
            >
                <Image
                    style = {WinListStyle.winlist_image}
                    source={require("../../../../../assets/images/Second.png")}
                />
                <Image
                    style = {WinListStyle.winlist_image}
                    source={require("../../../../../assets/images/User.png")}
                />
                <Text
                    style = {WinListStyle.winlist_text}
                >
                    버블버블
                </Text>
                <Text
                    style = {WinListStyle.winlist_text}
                >
                    252,315점
                </Text>
            </View>
            <View
                style = {WinListStyle.winlist_wrap}
            >
                <Image
                    style = {WinListStyle.winlist_image}
                    source={require("../../../../../assets/images/First.png")}
                />
                <Image
                    style = {WinListStyle.winlist_image}
                    source={require("../../../../../assets/images/User.png")}
                />
                <Text
                    style = {WinListStyle.winlist_text}
                >
                    버블버블
                </Text>
                <Text
                    style = {WinListStyle.winlist_text}
                >
                    252,315점
                </Text>
            </View>
            <View
                style = {WinListStyle.winlist_wrap}
            >
                <Image
                    style = {WinListStyle.winlist_image}
                    source={require("../../../../../assets/images/Third.png")}
                />
                <Image
                    style = {WinListStyle.winlist_image}
                    source={require("../../../../../assets/images/User.png")}
                />
                <Text
                    style = {WinListStyle.winlist_text}
                >
                    버블버블
                </Text>
                <Text
                    style = {WinListStyle.winlist_text}
                >
                    252,315점
                </Text>
            </View>
        </View>
    )
}