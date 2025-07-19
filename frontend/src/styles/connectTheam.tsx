import { lightTheme } from '@rainbow-me/rainbowkit';
import type { Theme } from '@rainbow-me/rainbowkit';

export const customRainbowKitTheme: Theme = {
  ...lightTheme(),
  colors: {
    ...lightTheme().colors,
    // Your style starts here
    connectButtonBackground: 'transparent',
    connectButtonText: '#ffffff',
    connectButtonBackgroundError: '#ef4444',
    connectButtonTextError: '#ffffff',
    
    accentColor: '#00a8e0', // applies to borders and dropdown buttons
    accentColorForeground: '#ffffff',

    actionButtonBorder: '#00a8e0',
    actionButtonBorderMobile: '#00a8e0',
    actionButtonSecondaryBackground: 'transparent',
  },
  radii: {
    ...lightTheme().radii,
    connectButton: '0.5rem', // rounded-md
    actionButton: '0.5rem',
  },
  shadows: {
    ...lightTheme().shadows,
    connectButton: '0 0 0 2px #00a8e0',
  },
};
