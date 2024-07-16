import React from "react";
import { Modal, Text, View } from "react-native";

import RankingStyle from "./RankingStyle";

import { Button } from "../../../Common/Button/Button";
import { WinList } from "./WinList/WinList";
import { EtcList } from "./EtcList/EtcList";

export const Ranking = ({
    rankPopUpVisible,
    setRankPopUpVisible
}) => {
    return(
        <Modal
            transparent={true}
            visible={rankPopUpVisible}
            onRequestClose={() => {
                setRankPopUpVisible(!rankPopUpVisible);
            }}
        >
            <View
                style = {RankingStyle.ranking_container}
            >
                <View
                    style = {RankingStyle.ranking_name}
                >
                    <Text
                        style = {RankingStyle.ranking_title}
                    >버블 슈터</Text>
                    <Text
                        style = {RankingStyle.ranking_date}
                    >
                        24.10.01 ~ 24.11.01
                    </Text>
                </View>
                <View
                    style = {RankingStyle.ranking_rank}
                >
                    <WinList />
                </View>
                <Text
                    style = {RankingStyle.ranking_etc}
                >
                    그 외의 랭킹
                </Text>
                <View
                    style = {RankingStyle.ranking_rank}
                >
                    <EtcList />
                </View>
                <Button 
                    title={'닫기'}

                    onPress={() => setRankPopUpVisible(!rankPopUpVisible)}

                    backgroundColor = {'#0038FF'}
                    color = {'white'}

                    width = {'20%'}
                    height = {30}

                    marginTop={10}
                />
            </View>
        </Modal>
    )
}