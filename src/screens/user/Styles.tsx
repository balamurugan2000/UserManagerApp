import { StyleSheet } from 'react-native';
import { Colors, FontFamily, FontSizes } from '../../styles/AppStyle';

export const styles = StyleSheet.create({
  // Start User List Styles
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    padding: FontSizes(16),
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    fontFamily: FontFamily.PoppinsRegular,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: FontSizes(14),
    color: '#333',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  footerLoader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  footerText: {
    marginLeft: 8,
    color: '#666',
    fontSize: FontSizes(14),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyText: {
    fontSize: FontSizes(16),
    color: '#999',
  },
  // End User List Styles

  // Start Card Styles
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: Colors.white,
    fontSize: FontSizes(16),
    fontFamily: FontFamily.PoppinsSemiBold,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: FontSizes(13),
    fontFamily: FontFamily.PoppinsBold,
    color: Colors.black,
  },
  email: {
    fontSize: FontSizes(11),
    color: Colors.lightGrey,
    fontFamily: FontFamily.PoppinsRegular,
    marginBottom: 2,
  },
  company: {
    fontSize: FontSizes(10),
    color: Colors.black,
    fontFamily: FontFamily.PoppinsRegular,
  },

   // End Card Styles

// user details screen 
   header: {
    backgroundColor: Colors.primary,
    paddingVertical: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  dAvatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f4511e',
  },
  dName: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  username: {
    color: '#fff',
  },
  dContainer: {
    padding: 20,
  },
  label: {
    color: '#999',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    marginBottom: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  editBtn: {
    backgroundColor: Colors.primary,
  },
  saveBtn: {
    backgroundColor: Colors.primary,
  },
  cancelBtn: {
    borderWidth: 1,
    borderColor: '#f4511e',
    backgroundColor: '#fff',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
});
