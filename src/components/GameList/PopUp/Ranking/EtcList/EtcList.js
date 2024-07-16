import React from "react"
import { View, Text, Image, ScrollView } from "react-native"

import { EtcScore } from "./EtcScore/EtcScore"
import { MyScore } from "./MyScore/MyScore"

export const EtcList = () => {
    return(
        <ScrollView>
            <EtcScore />
            <EtcScore />
            <MyScore />
        </ScrollView>
    )
}
