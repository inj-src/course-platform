import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
   appId: "com.cabbry.app",
   appName: "course-platform",
   webDir: "out",
   server: {
      url: "http://192.168.0.199:3000",
      cleartext: true,
   },
};

export default config;
