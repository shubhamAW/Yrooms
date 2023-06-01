import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yrooms.app',
  appName: 'yrooms',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
