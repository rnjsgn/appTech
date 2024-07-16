import React from "react";
import { Modal, Text, View } from "react-native";

import InfoStyle from "./InfoStyle";

import { Button } from "../../../Common/Button/Button";

export const Info = ({
    infoPopUpVisible,
    setInfoPopUpVisible,
}) => {
    return(
        <Modal
            transparent={true}
            visible={infoPopUpVisible}
            onRequestClose={() => {
                setInfoPopUpVisible(!infoPopUpVisible);
            }}
        >
            <View
                style = {InfoStyle.info_container}
            >
                <View
                    style = {InfoStyle.info_explain}
                >
                    <Text
                        style = {InfoStyle.info_title}
                    >게임설명</Text>
                    <Text
                        style = {InfoStyle.info_list}
                    >1. 게임 설명 중 ...</Text>
                    <Text
                        style = {InfoStyle.info_list}
                    >1. 게임 설명 중 ...</Text>
                    <Text
                        style = {InfoStyle.info_list}
                    >1. 게임 설명 중 ...</Text>
                    <Text
                        style = {InfoStyle.info_list}
                    >1. 게임 설명 중 ...</Text>
                </View>
                <View
                    style = {InfoStyle.info_explain}
                >
                    <Text
                        style = {InfoStyle.info_title}
                    >보상 조건 및 비율</Text>
                    <Text
                        style = {InfoStyle.info_list}
                    >1. 게임 설명 중 ...</Text>
                    <Text
                        style = {InfoStyle.info_list}
                    >1. 게임 설명 중 ...</Text>
                    <Text
                        style = {InfoStyle.info_list}
                    >1. 게임 설명 중 ...</Text>
                    <Text
                        style = {InfoStyle.info_list}
                    >1. 게임 설명 중 ...</Text>
                </View>
                <Button 
                    title={'닫기'}

                    onPress={() => setInfoPopUpVisible(!infoPopUpVisible)}

                    backgroundColor = {'#0038FF'}
                    color = {'white'}

                    width = {'20%'}
                    height = {30}

                />
            </View>
        </Modal>
    )
}