import React from 'react';
import {
  useColorScheme,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { THEMES, ThemeContext, THEME_APPEARANCE } from './Theme';
import { StringWithAutocomplete } from '../../CustomTypes';

export interface TableViewInterface {
  children?: React.ReactNode;
  appearance?: StringWithAutocomplete<'auto' | 'dark' | 'light'>;
  customAppearances?: {
    [key: string]: THEME_APPEARANCE;
  };
  style?: StyleProp<ViewStyle>;
}

const TableView: React.FC<TableViewInterface> = ({
  children,
  appearance = 'auto',
  customAppearances,
  style,
}: TableViewInterface) => {
  let themeMode: THEME_APPEARANCE = THEMES?.appearances?.light;
  const systemColorScheme = useColorScheme();
  if (
    appearance === 'auto' &&
    (systemColorScheme === 'dark' || systemColorScheme === 'light')
  ) {
    themeMode = THEMES?.appearances?.[systemColorScheme];
  } else if (appearance === 'light' || appearance === 'dark') {
    themeMode = THEMES?.appearances?.[appearance];
  } else if (
    customAppearances &&
    appearance &&
    Object.prototype.hasOwnProperty.call(customAppearances, appearance)
  ) {
    themeMode = customAppearances[appearance];
  }
  return (
    <ThemeContext.Provider value={themeMode}>
      <View style={[styles.tableView, style]}>{children}</View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  tableView: {
    flexDirection: 'column',
  },
});

export default TableView;
