import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'io.josh.co',
    appName: 'Josh&Co',
    webDir: 'www',
    server: {
        androidScheme: 'http'
        // androidScheme: 'https'
    }
};

export default config;
