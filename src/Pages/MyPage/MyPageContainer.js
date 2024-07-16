import React from "react";
import { MyPagePresenter } from "./MyPagePresenter";

const MyPageContainer = ({
    navigation
}) => {
    return(
        <MyPagePresenter
            navigation = {navigation}
        />
    )
}

export default MyPageContainer;