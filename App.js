import React, { useEffect, useState } from "react";

import AuthNavigator from "./App/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./App/navigation/navigationTheme";
import AppNavigator from "./App/navigation/AppNavigator";
import OfflineNotice from "./App/components/OfflineNotice";
import AuthContext from "./App/auth/context";
import AuthStorage from "./App/auth/storage";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode correctly
import { navigationRef } from "./App/navigation/rootNavigation";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Keep the splash screen visible until we finish restoring the token
    SplashScreen.preventAutoHideAsync();

    const restoreToken = async () => {
      try {
        const token = await AuthStorage.getToken();
        if (token) {
          setUser(jwtDecode(token));
        }
      } catch (error) {
        console.warn("Error restoring token", error);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync(); // Hide the splash screen after loading is complete
      }
    };

    restoreToken();
  }, []);

  if (!isReady) {
    return null; // Render nothing while app is loading
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
