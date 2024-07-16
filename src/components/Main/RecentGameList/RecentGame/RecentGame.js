import React from "react";
import { Image, Text, View } from "react-native";

import { Button } from "../../../Common/Button/Button";

import RecentGameStyle from "./RecentGameStyle";

export const RecentGame = () => {
    return(
        <View
            style = {RecentGameStyle.recentGame_container}
        >
            <Text
                style = {RecentGameStyle.recentGame_title}
            >버블 슈터</Text>
            <Image
                source={require('../../../../assets/images/BubbleShooter.png')}
                style = {RecentGameStyle.recentGame_image}
            />
            <Button 
                title={'게임 하기'}
                
                width={70}
                height={20}

                backgroundColor={'gray'}
                color={'white'}
                
                fontSize={10}
            />
        </View>
    )
}