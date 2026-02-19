import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { User } from '../types';
import { styles } from '../Styles';

interface UserCardProps {
  user: User;
  onPress: () => void;
  style?: ViewStyle;
}

const UserCard: React.FC<UserCardProps> = ({ user, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{user?.name?.charAt(0)}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {user?.name}
        </Text>
        <Text style={styles.email} numberOfLines={1}>
          {user?.email}
        </Text>
        <Text style={styles.company} numberOfLines={1}>
          {user?.company.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default UserCard;
