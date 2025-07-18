import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useUser, useClerk } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import SafeScreen from "../../components/SafeScreen";

const ProfileScreen = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: signOut },
    ]);
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.card}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person-circle-outline" size={110} color={COLORS.primary} style={styles.avatar} />
          </View>
          <Text style={styles.name}>{user.fullName || user.username || "User"}</Text>
          <Text style={styles.email}>{user.primaryEmailAddress?.emailAddress || "No email"}</Text>
        </View>
        <View style={styles.actionsSection}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
            <Ionicons name="log-out-outline" size={22} color={COLORS.white} style={{ marginRight: 8 }} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.primary,
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  card: {
    width: "90%",
    backgroundColor: COLORS.card,
    borderRadius: 24,
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 32,
  },
  avatarContainer: {
    marginBottom: 16,
    borderRadius: 60,
    backgroundColor: COLORS.background,
    padding: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    // extra styling if needed
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 6,
  },
  email: {
    fontSize: 16,
    color: COLORS.textLight,
    marginBottom: 8,
  },
  actionsSection: {
    width: "90%",
    alignItems: "center",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 28,
    marginTop: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  logoutText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default ProfileScreen; 