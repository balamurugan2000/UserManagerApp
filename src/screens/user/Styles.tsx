import { StyleSheet } from "react-native";
import { Colors, FontFamily, FontSizes } from "../../styles/AppStyle";

export const styles = StyleSheet.create({
  // Start User List Styles
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    padding: FontSizes(16),
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor:Colors.silverGray ,
    fontFamily: FontFamily.PoppinsRegular,
  },
  searchInput: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: FontSizes(14),
    color: Colors.textPrimary,
    borderWidth: 1,
    borderColor: Colors.silverGray,
  },
  footerLoader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  footerText: {
    marginLeft: 8,
    color: Colors.textSecondary,
    fontSize: FontSizes(14),
    fontFamily: FontFamily.PoppinsRegular,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  emptyText: {
    fontSize: FontSizes(16),
    fontFamily: FontFamily.PoppinsRegular,
    color: Colors.textMuted,
  },
  // End User List Styles

  // Start Card Styles
  card: {
    flexDirection: "row",
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
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  avatarText: {
    color: Colors.white,
    fontSize: FontSizes(16),
    fontFamily: FontFamily.PoppinsSemiBold,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
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
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  dAvatarText: {
    fontSize: FontSizes(30),
    fontFamily: FontFamily.PoppinsSemiBold,
    color: Colors.primary,
  },
  dName: {
    fontSize: FontSizes(20),
    color: Colors.white,
    fontFamily: FontFamily.PoppinsMedium,
  },
  username: {
    color: Colors.white,
  },
  dContainer: {
    padding: 20,
  },
  label: {
    color: Colors.lightGrey,
    marginTop: 12,
    fontFamily: FontFamily.PoppinsRegular,
    fontSize: FontSizes(13),
  },
  value: {
    fontSize: FontSizes(13),
    marginBottom: 6,
    fontFamily: FontFamily.PoppinsRegular,
    color: Colors.black,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
    marginHorizontal: 6,
  },
  editBtn: {
    backgroundColor: Colors.primary,
    fontFamily: FontFamily.PoppinsRegular,
    fontSize: FontSizes(12),
  },
  saveBtn: {
    backgroundColor: Colors.primary,
    fontFamily: FontFamily.PoppinsRegular,
    fontSize: FontSizes(12),
  },
  cancelBtn: {
    borderWidth: 1,
    borderColor: Colors.red,
    backgroundColor: Colors.white,
    fontSize: FontSizes(12),
  },
  btnText: {
    color: Colors.white,
    fontFamily: FontFamily.PoppinsSemiBold,
    fontSize: FontSizes(12),
  },

// Form 

  formContainer: {
    marginBottom: 14,
  },
  formLabel: {
    fontSize: FontSizes(12),
    color: Colors.textMuted,
    fontFamily: FontFamily.PoppinsRegular,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  formInput: {
    borderWidth: 1,
    borderColor: Colors.silverGray,
    borderRadius: 8,
    padding: 12,
    fontSize: FontSizes(13),
    backgroundColor: Colors.backgroundWhite,
    fontFamily: FontFamily.PoppinsRegular,
  },
  formErrorInput: {
    borderColor: Colors.red,
  },
  formErrorText: {
    borderColor: Colors.red,
    fontSize: FontSizes(12),
    fontFamily: FontFamily.PoppinsRegular,
    marginTop: 4,
  },
});
