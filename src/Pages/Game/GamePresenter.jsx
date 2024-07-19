import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const GamePresenter = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://bubble-shooter-web.vercel.app/' }}
        // 로컬 서버 URL
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default GamePresenter;
