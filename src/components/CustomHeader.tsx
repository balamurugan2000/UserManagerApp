import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
} from 'react-native';
import { Colors, FontFamily, FontSizes } from '../styles/AppStyle';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { goBack } from '../navigation/NavigationService';

interface HeaderProps {
  title: string;
  backIcon?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  leftSide?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  leftSideContainerStyle?: StyleProp<ViewStyle>;
  rightSideContainerStyle?: StyleProp<ViewStyle>;
  rightSide?: boolean;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftCustomIcon?: React.ReactNode;
  rightCustomIcon?: React.ReactNode;
  titleContainer?: React.ReactNode;
}

const AppHeader: React.FC<HeaderProps> = ({
  title = '',
  titleStyle,
  titleContainer,
  titleContainerStyle,
  backIcon = true,
  leftSide = false,
  rightSide = false,
  containerStyle,
  leftSideContainerStyle,
  rightSideContainerStyle,
  leftCustomIcon,
  rightCustomIcon,
  onLeftPress,
  onRightPress,
}) => {
  return (
    <View style={[styles.background, containerStyle]}>
      {/* Left Icon */}
      {(leftSide || backIcon) && (
        <TouchableOpacity
         testID="header-left"
          style={[styles.leftIconContainer, leftSideContainerStyle]}
          onPress={onLeftPress ? onLeftPress : () => goBack()}
        >
          {leftCustomIcon ? (
            leftCustomIcon
          ) : backIcon ? (
            <MaterialIcons name="arrow-back" size={24} color={Colors.white} />
          ) : (
            <></>
          )}
        </TouchableOpacity>
      )}

      {/* Title */}
      <View
        style={[
          styles.titleContainer,
          titleContainerStyle,
          { paddingRight: backIcon && rightSide == false ? 10 : 0 },
        ]}
      >
        {titleContainer ? (
          titleContainer
        ) : (
          <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        )}
      </View>

      {/* Right Icon */}
      {(rightSide || backIcon) && (
        <TouchableOpacity
          style={[styles.rightIconContainer, rightSideContainerStyle]}
          onPress={onRightPress}
        >
          {rightSide ? rightCustomIcon : <></> || null}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.primary
  },
  leftIconContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  rightIconContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: FontFamily.PoppinsSemiBold,
    color: Colors.white,
    fontSize: FontSizes(16),
  },
});

export default AppHeader;
