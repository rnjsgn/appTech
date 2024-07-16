import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, View } from "react-native";

export const Button = ({
    title,
    source,

    width,
    height,

    backgroundColor,
    color,

    borderColor,
    borderWidth,

    fontSize,

    marginTop,
    
    onPress
}) => {

    const buttonStyle = StyleSheet.create({
        button: {
            width: width,
            height: height,

            backgroundColor: backgroundColor,

            borderColor: borderColor,
            borderWidth: borderWidth,

            alignItems : 'center',
            justifyContent : 'center',

            marginTop : marginTop,

            borderRadius: 5,
        },

        content: {
            flexDirection: 'row',
        },

        text: {
            color: color,

            fontSize: fontSize,
            fontWeight : 'bold',
        },

        image : {
            marginLeft : 20
        }
    });

    return (
        <TouchableOpacity style={buttonStyle.button} onPress={onPress}>
             <View style={buttonStyle.content}>
                <Text style={buttonStyle.text}>{title}</Text>
                {
                    !source
                    ?
                    <></>
                    :
                    <Image style={buttonStyle.image} source={source} />
                }
            </View>
        </TouchableOpacity>
    );
};
