import React from "react";
import { View, Alert } from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { firebase_auth } from "../../../../firebaseConfig";

import { Button } from "../Button/Button";

export const Login = () => {
    GoogleSignin.configure({
        webClientId: '594633630736-h4l2nbmp7ccmkl7inm132sc75hao29sf.apps.googleusercontent.com',
        offlineAccess: true,
    });

    const onGoogleButtonPress = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken); // 수정
            await firebase_auth.signInWithCredential(googleCredential);
            Alert.alert('Success', 'Signed in with Google!', [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
        } catch (error) {
            console.error('Google sign in error:', error);
            Alert.alert('Error', 'Failed to sign in with Google.');
        }
    };

    return (
        <View>
            <Button
                title={'구글로그인'}
                onPress={onGoogleButtonPress}
            />
        </View>
    );
};
