import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import GameStyle from "./GameStyle";

import { Button } from "../../Common/Button/Button";
import { Info } from "../PopUp/Info/Info"
import { Ranking } from "../PopUp/Ranking/Ranking";

export const Game = ({
    infoPopUpVisible,
    setInfoPopUpVisible,

    rankPopUpVisible,
    setRankPopUpVisible,

    navigation
}) => {
    return(
        <View
            style = {GameStyle.game_container}
        >
            <View
                style = {GameStyle.game_popup}
            >
                <TouchableOpacity onPress={() => setInfoPopUpVisible(true)}>
                    <Image
                        source={require('../../../assets/images/Info.png')}
                        style = {GameStyle.game_popup_image}
                    />
                    <Info
                        infoPopUpVisible = {infoPopUpVisible}
                        setInfoPopUpVisible = {setInfoPopUpVisible}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRankPopUpVisible(true)}>
                    <Image
                        source={require('../../../assets/images/Ranking.png')}
                        style = {GameStyle.game_popup_image}
                    />
                    <Ranking
                        rankPopUpVisible = {rankPopUpVisible}
                        setRankPopUpVisible = {setRankPopUpVisible}
                    />
                </TouchableOpacity>
            </View>
            <View
                style = {GameStyle.game_title}
            >
                <Image
                    source={require('../../../assets/images/BubbleShooter.png')}
                />
                <View
                    style = {GameStyle.game_text}
                >
                    <Text
                        style = {GameStyle.game_name}
                    >버블 슈터</Text>
                    <Text
                        style = {GameStyle.game_info}
                    >같은 색의 버블을 맞춰 쏘세요!!</Text>
                </View>
            </View>
            <View
                style = {GameStyle.game_user_info}
            >
                <View
                    style = {GameStyle.game_point}
                >
                    <View
                        style = {GameStyle.game_fee}
                    >
                        <Image 
                            source={require('../../../assets/images/Point.png')}
                        />
                        <Text
                            style = {GameStyle.game_cost}
                        >1P</Text>
                    </View>
                    <Text
                        style = {GameStyle.game_total_fee}
                    >누적 포인트 : 375,127P</Text>
                </View>
                <View>
                    <Button
                        title = {'게임 참가'}

                        backgroundColor={'blue'}
                        color={'white'}
                        
                        borderColor={'white'}
                        borderWidth={4}

                        onPress={() => navigation.navigate('게임')}
                    />
                    <Text
                        style = {GameStyle.game_total_people}
                    >참가인원 : 375,123 명</Text>
                </View>
            </View>
        </View>
    )
}