import React, { useState } from "react";
import { GameListPresenter } from "./GameListPresenter";

const GameListContainer = ({
    navigation
}) => {
    const [infoPopUpVisible, setInfoPopUpVisible] = useState(false);
    const [rankPopUpVisible, setRankPopUpVisible] = useState(false);

    return(
        <GameListPresenter 
            infoPopUpVisible = {infoPopUpVisible}
            setInfoPopUpVisible = {setInfoPopUpVisible}

            rankPopUpVisible = {rankPopUpVisible}
            setRankPopUpVisible = {setRankPopUpVisible}

            navigation = {navigation}
        />
    )
}

export default GameListContainer;