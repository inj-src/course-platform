import { App } from "@capacitor/app";
import { StatusBar, Style } from "@capacitor/status-bar";
import { NavigationBar } from "@capgo/capacitor-navigation-bar";
import { Capacitor } from "@capacitor/core";

export const setSystemStyle = async () => {
   if (Capacitor.getPlatform() === "web") return;
   NavigationBar.setNavigationBarColor({ color: "#FFFFFF", darkButtons: true });
   StatusBar.setOverlaysWebView({ overlay: false });
   StatusBar.setBackgroundColor({ color: "#FFFFFF" });
   StatusBar.setStyle({ style: Style.Light });
};

type callBack = (closeApp: () => void) => void;
export function backNavigationHandler(callBack: callBack) {
   App.addListener("backButton", ({ canGoBack }) => {
      const closeApp = () => App.exitApp();
      if (canGoBack) {
         callBack(closeApp);
      } else {
         closeApp();
      }
   });

   return () => {
      App.removeAllListeners();
   };
}
