import React from "react";
import { View, Alert } from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { firebase_auth, firebase_db } from "../../../../firebaseConfig";
import firebase from "firebase/compat/app";

import { Button } from "../Button/Button";

export const Login = () => {
    GoogleSignin.configure({
        webClientId: '594633630736-h4l2nbmp7ccmkl7inm132sc75hao29sf.apps.googleusercontent.com',
        offlineAccess: true,
    });

    const onGoogleButtonPress = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('Google userInfo:', userInfo);

            const { idToken } = userInfo;
            const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken);
            const userCredential = await firebase_auth.signInWithCredential(googleCredential);
            console.log('Firebase userCredential:', userCredential);

            // 사용자 정보를 데이터베이스에 저장
            const { uid, email } = userCredential.user;
            const name = userInfo.user.name;
            await firebase_db.ref(`users/${uid}`).set({
                name,
                email,
            });

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
