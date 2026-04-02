import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

import { HomeScreen } from "@/features/home/screens/home-screen";
import { SessionResultScreen } from "@/features/session-result/screens/session-result-screen";
import { SettingsScreen } from "@/features/settings/screens/settings-screen";
import { CustomTabBar } from "@/navigation/components/custom-tab-bar";
import type { HomeStackParamList, MainTabParamList } from "@/navigation/types";

function ProgressScreen() {
  return (
    <View style={styles.placeholder}>
      <Text>Progress</Text>
    </View>
  );
}

function StoreScreen() {
  return (
    <View style={styles.placeholder}>
      <Text>Store</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="SessionResult" component={SessionResultScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
