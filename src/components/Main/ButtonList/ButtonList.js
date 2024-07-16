import React from "react";

import { Button } from "../../Common/Button/Button";
import { View } from "react-native";

import ButtonListStyle from "./ButtonListStyle";

import Ad from "../../../assets/images/Ad.png";
import Game from "../../../assets/images/Game.png";

export const ButtonList = ({
    navigation,
}) => {
    return(
        <View
            style = {ButtonListStyle.buttonlist_container}
        >
            <Button
                title={'포인트 쌓기'}
                source={Ad}

                backgroundColor={'#C9D9F2'}
                color={'white'}

                width={300}
                height={80}

                fontSize={30}

                marginTop={20}
            />
            <Button
                title={'게임 참가'}
                source={Game}

                backgroundColor={'#0038FF'}
                color={'white'}

                width={300}
                height={80}

                fontSize={30}

                marginTop={20}

                onPress={() => navigation.navigate('게임 리스트')}
            />
        </View>
    )
}