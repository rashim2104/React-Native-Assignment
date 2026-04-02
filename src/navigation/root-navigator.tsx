import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator } from '@/navigation/auth-navigator';
import { MainNavigator } from '@/navigation/main-navigator';
import { useAuth } from '@/navigation/auth-context';
import type { RootStackParamList } from '@/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { isAuthenticated } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}
