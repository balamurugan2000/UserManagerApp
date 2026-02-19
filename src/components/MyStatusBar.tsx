import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { Colors } from '../styles/AppStyle';

const MyStatusBar = ({backgroundColor, ...props}: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.statusBar, {backgroundColor, height: insets.top}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor:Colors.primary
  },
});

export default MyStatusBar;
