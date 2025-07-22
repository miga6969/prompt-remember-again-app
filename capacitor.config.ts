import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.1d44d3101bbd47b4aefe533c54b7193d',
  appName: 'Emergency Aid Pro',
  webDir: 'dist',
  server: {
    url: 'https://1d44d310-1bbd-47b4-aefe-533c54b7193d.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Geolocation: {
      permissions: ['location']
    }
  }
};

export default config;