import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListner) => {
  useEffect(() => {
    registerForPushNotifications();
    // setting sound and alert to true when recived notification
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowAlert: true,
      }),
    });
    if (notificationListner)
      Notifications.addNotificationReceivedListener(notificationListner);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log("fetching notification token error: ", error);
    }
  };
};
