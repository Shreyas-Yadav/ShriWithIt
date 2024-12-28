import React, { useEffect, useState } from "react";

import AuthNavigator from "./App/navigation/AuthNavigator";

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./App/navigation/navigationTheme";
import AppNavigator from "./App/navigation/AppNavigator";
import FeedNavigator from "./App/navigation/FeedNavigator";
import OfflineNotice from "./App/components/OfflineNotice";
import AuthContext from "./App/auth/context";
import AuthStorage from "./App/auth/storage";
import { jwtDecode } from "jwt-decode";

export default function App() {
  const [user, setUser] = useState();

  const restorToken = async () => {
    const token = await AuthStorage.getToken();
    if (!token) return null;
    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restorToken();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
