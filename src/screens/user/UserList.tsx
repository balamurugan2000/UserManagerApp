import React, { useState, useEffect, useCallback, JSX } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  RefreshControl,
  ActivityIndicator,
  ListRenderItem,
} from 'react-native';
import UserCard from './components/UserCard';
import { navigate } from '../../navigation/NavigationService';
import { styles } from './Styles';
import { fetchUsers } from '../../services/api.call';
import { User } from './types';
import AppHeader from '../../components/CustomHeader';
import { Colors } from '../../styles/AppStyle';
import { NavKeys } from '../../navigation/NavKey';
import { useDispatch } from 'react-redux';
import {
  getUserListSelector,
  setMergeUserList,
  setUserList,
} from '../../redux/User/UserSlice';
import { useAppSelector } from '../../hooks/Hooks';

const UserList: React.FC = () => {
  let dispatch = useDispatch();
  let userList: User[] = useAppSelector(getUserListSelector).userList;

  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  useEffect(() => {
    loadUsers(1);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredUsers(userList);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = userList.filter(
        user =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query) ||
          user.username.toLowerCase().includes(query) ||
          user.company.name.toLowerCase().includes(query),
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, userList]);

  const loadUsers = useCallback(
    async (page: number = 1, refresh: boolean = false): Promise<void> => {
      try {
        if (refresh) {
          setCurrentPage(1);
        }
        const response = await fetchUsers(page);
        if (refresh || page === 1) {
          setFilteredUsers(response.data);
          dispatch(setUserList(response.data));
        } else {
          dispatch(setMergeUserList(response.data));
          setFilteredUsers(prev => [...prev, ...response.data]);
        }

        setHasMore(response.hasMore);
        setCurrentPage(page);
      } catch (error) {
        console.error('Error loading users:', error);
      } finally {
        setLoading(false);
        setRefreshing(false);
        setLoadingMore(false);
      }
    },
    [],
  );
  const handleRefresh = useCallback((): void => {
    setRefreshing(true);
    loadUsers(1, true);
  }, []);

  const handleLoadMore = (): void => {
    if (hasMore && !loadingMore) {
      setLoadingMore(true);
      loadUsers(currentPage + 1);
    }
  };

  const handleUserPress = (user: User): void => {
    navigate(NavKeys.USER_DETAILS, { user });
  };

  const renderItem: ListRenderItem<User> = useCallback(
    ({ item }) => (
      <UserCard user={item} onPress={() => handleUserPress(item)} />
    ),
    [],
  );

  const keyExtractor = useCallback(
    (item: User): string => item.id.toString(),
    [],
  );

  const renderFooter = (): JSX.Element | null => {
    if (!loadingMore) return null;
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color="#f4511e" />
        <Text style={styles.footerText}>Loading more users...</Text>
      </View>
    );
  };

  const renderEmpty = (): JSX.Element | null => {
    if (loading) return null;
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No users found</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size={'large'} color={Colors.primary} />
      </View>
    );
  }

  return (
    <>
      <AppHeader title="User List" backIcon={false} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users by name, email, or company..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[Colors.primary]}
            tintColor={Colors.primary}
          />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </>
  );
};

export default UserList;
