import React from "react";
import { Image, Text, View } from "react-native";

import MyActivityStyle from "./MyActivityStyle";

export const MyActivity = () => {
    return(
        <View
            style = {MyActivityStyle.myactivity_container}
        >
            <View
                style = {MyActivityStyle.myactivity_line}
            >
                <Text
                    style = {MyActivityStyle.myactivity_text}
                >이번 달 광고 시청 횟수</Text>
                <Text
                    style = {MyActivityStyle.myactivity_text}
                >220 회
                </Text>
            </View>
            <View
                style = {MyActivityStyle.myactivity_line}
            >
                <Text
                    style = {MyActivityStyle.myactivity_text}
                >이번 달 포인트 획득량</Text>
                <View
                    style = {MyActivityStyle.myactivity_point}
                >
                    <Image 
                        source={require('../../../assets/images/Point.png')}
                    />
                    <Text
                        style = {MyActivityStyle.myactivity_text}
                    >220
                    </Text>
                </View>
            </View>
            <View
                style = {MyActivityStyle.myactivity_line}
            >
                <Text
                    style = {MyActivityStyle.myactivity_text}
                >이번 달 게임 참여 횟수</Text>
                <Text
                    style = {MyActivityStyle.myactivity_text}
                >12 회
                </Text>
            </View>
            <View
                style = {MyActivityStyle.myactivity_line}
            >
                <Text
                    style = {MyActivityStyle.myactivity_text}
                >이번 달 캐쉬 획득량</Text>
                    <View
                        style = {MyActivityStyle.myactivity_point}
                    >
                        <Image 
                            source={require('../../../assets/images/Cash.png')}
                        />
                        <Text
                            style = {MyActivityStyle.myactivity_text}
                        >1200
                        </Text>
                    </View>
            </View>
        </View>
    )
}