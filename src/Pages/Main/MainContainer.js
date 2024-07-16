import React, { useState } from "react";
import { MainPresenter } from "./MainPresenter";

const MainContainer = ({
    navigation
}) => {
    return(
        <MainPresenter
            navigation = {navigation}
        />
    )
}

export default MainContainer;