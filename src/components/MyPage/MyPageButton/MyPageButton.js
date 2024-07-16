import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, View } from "react-native";

import MyPageButtonStyle from "./MyPageButtonStyle";

export const MyPageButton = ({
    title,
    
    onPress
}) => {
    return (
        <TouchableOpacity style={MyPageButtonStyle.mypagebutton_button} onPress={onPress}>
             <View
                style = {MyPageButtonStyle.mypagebutton_content}
             >
                <Text
                    style = {MyPageButtonStyle.mypagebutton_title}
                >{title}</Text>
                <Image 
                    source = {require("../../../assets/images/Next.png")}
                />
            </View>
        </TouchableOpacity>
    );
};
