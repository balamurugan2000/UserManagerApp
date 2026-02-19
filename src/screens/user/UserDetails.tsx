import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, User } from './types';
import AppHeader from '../../components/CustomHeader';
import { goBack } from '../../navigation/NavigationService';
import {
  validateUserForm,
  ValidationErrors,
  EditableUserField,
} from '../../utils/validation';
import FormInput from './components/FormInput';
import { styles } from './Styles';
import { useAppSelector } from '../../hooks/Hooks';
import { getUserListSelector, setUserList } from '../../redux/User/UserSlice';
import { useDispatch } from 'react-redux';

type RouteProps = RouteProp<RootStackParamList, 'UserDetail'>;

interface Props {
  route: RouteProps;
}

const UserDetailScreen: React.FC<Props> = ({ route }) => {
  const { user: initialUser } = route.params;
  let dispatch = useDispatch();
  let userList: User[] = useAppSelector(getUserListSelector).userList;

  const [user, setUser] = useState<User>(initialUser);
  const [editedUser, setEditedUser] = useState<User>(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const updateField = (field: EditableUserField, value: string) => {
    setEditedUser(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const updateAddress = (field: keyof User['address'], value: string) => {
    setEditedUser(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  const updateCompany = (field: keyof User['company'], value: string) => {
    setEditedUser(prev => ({
      ...prev,
      company: {
        ...prev.company,
        [field]: value,
      },
    }));
  };

  const handleSave = async () => {
    const validationErrors = validateUserForm(editedUser);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSaving(true);
    try {
      setUser(editedUser);
      let dupUserArr = [...userList];
      const index = userList?.findIndex(user => user.id === editedUser.id);
      if (index !== -1) {
        dupUserArr[index] = editedUser;
      }
      dispatch(setUserList(dupUserArr));
      setIsEditing(false);
      Alert.alert('Success', 'User updated successfully');
    } catch {
      Alert.alert('Error', 'Update failed');
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
    setErrors({});
  };

  return (
    <>
      <AppHeader
        title={isEditing ? 'Edit User' : 'User Details'}
        onLeftPress={() => (!isEditing ? goBack() : handleCancel())}
      />

      <ScrollView>
        {!isEditing && (
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.dAvatarText}>{user.name.charAt(0)}</Text>
            </View>

            <Text style={styles.dName}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>
          </View>
        )}

        <View style={styles.dContainer}>
          {isEditing ? (
            <>
              <FormInput
                label="Name"
                value={editedUser.name}
                onChangeText={t => updateField('name', t)}
                error={errors.name}
              />

              <FormInput
                label="Email"
                value={editedUser.email}
                onChangeText={t => updateField('email', t)}
                error={errors.email}
              />

              <FormInput
                label="Phone"
                value={editedUser.phone}
                onChangeText={t => updateField('phone', t)}
                error={errors.phone}
              />

              <FormInput
                label="Website"
                value={editedUser.website}
                onChangeText={t => updateField('website', t)}
                error={errors.website}
              />

              <FormInput
                label="Street"
                value={editedUser.address.street}
                onChangeText={t => updateAddress('street', t)}
              />

              <FormInput
                label="Suite"
                value={editedUser.address.suite}
                onChangeText={t => updateAddress('suite', t)}
              />

              <FormInput
                label="City"
                value={editedUser.address.city}
                onChangeText={t => updateAddress('city', t)}
              />

              <FormInput
                label="Zipcode"
                value={editedUser.address.zipcode}
                onChangeText={t => updateAddress('zipcode', t)}
              />

              <FormInput
                label="Company Name"
                value={editedUser.company.name}
                onChangeText={t => updateCompany('name', t)}
              />

              <FormInput
                label="Catch Phrase"
                value={editedUser.company.catchPhrase}
                onChangeText={t => updateCompany('catchPhrase', t)}
              />

              <FormInput
                label="Business"
                value={editedUser.company.bs}
                onChangeText={t => updateCompany('bs', t)}
              />
            </>
          ) : (
            <>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{user.email}</Text>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>{user.phone}</Text>
              <Text style={styles.label}>Website</Text>
              <Text style={styles.value}>{user.website}</Text>
              <Text style={styles.label}>Geo Location</Text>
              <Text style={styles.value}>
                {`${user.address.geo.lat}, ${user.address.geo.lng}`}
              </Text>
              <Text style={styles.label}>Address</Text>
              <Text style={styles.value}>
                {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              </Text>
              <Text style={styles.label}>Company</Text>
              <Text style={styles.value}>
                {`${user.company.name} (${user.company.catchPhrase})`}
              </Text>
            </>
          )}

          <View style={styles.buttonRow}>
            {isEditing ? (
              <>
                <TouchableOpacity
                  style={[styles.button, styles.saveBtn]}
                  onPress={handleSave}
                  disabled={saving}
                >
                  {saving ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text style={styles.btnText}>Save</Text>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.cancelBtn]}
                  onPress={handleCancel}
                >
                  <Text style={[styles.btnText, { color: '#f4511e' }]}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={[styles.button, styles.editBtn]}
                onPress={() => setIsEditing(true)}
              >
                <Text style={styles.btnText}>Edit Profile</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UserDetailScreen;
