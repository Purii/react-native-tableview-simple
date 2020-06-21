import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export interface THEME_APPEARANCE {
  colors: {
    background: ViewStyle['backgroundColor'] | TextStyle['color'];
    muted: ViewStyle['backgroundColor'] | TextStyle['color'];
    separatorColor: ViewStyle['backgroundColor'] | TextStyle['color'];
    body: ViewStyle['backgroundColor'] | TextStyle['color'];
    primary: ViewStyle['backgroundColor'] | TextStyle['color'];
    secondary: ViewStyle['backgroundColor'] | TextStyle['color'];
  };
}

export const THEMES: {
  appearances: {
    [key: string]: THEME_APPEARANCE;
  };
} = {
  appearances: {
    light: {
      colors: {
        background: '#FFF',
        muted: '#C7C7CC',
        separatorColor: '#C8C7CC',
        body: '#000',
        primary: '#007AFF',
        secondary: '#8E8E93',
      },
    },
    dark: {
      colors: {
        background: '#121312',
        muted: '#59595d',
        separatorColor: '#2b2b2d',
        body: '#FFF',
        primary: '#0f64ee',
        secondary: '#aeaeae',
      },
    },
  },
};

export const ThemeContext = React.createContext(THEMES.appearances.light);
