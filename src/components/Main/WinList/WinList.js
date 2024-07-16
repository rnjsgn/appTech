import { View, Text } from "react-native";

import WinListStyle from "./WinListStyle";
import { WinRank } from "./WinRank/WinRank";

export const WinList = () => {
    return(
        <View
            style = {WinListStyle.winListStyle_container}
        >
            <Text
                style = {WinListStyle.winListStyle_title}
            >앱 테크 랭킹</Text>
            <WinRank />
        </View>
    );
};