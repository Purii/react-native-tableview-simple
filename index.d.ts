// Type definitions for react-native-tableview-simple 0.17
// Project: https://github.com/Purii/react-native-tableview-simple
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.3

import * as React from "react";
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

export interface SectionProps {
  /**
   * Respect Text Size accessibility setting on iOS
   * 
   * @default true
   * @type {boolean}
   * @memberof SectionProps
   */
  allowFontScaling?: boolean;

  /**
   * Inject any component to replace original footer (optional)
   * 
   * @type {JSX.Element}
   * @memberof SectionProps
   */
  footerComponent?: JSX.Element;

  /**
   * Inject any component to replace original header (optional)
   * 
   * @type {JSX.Element}
   * @memberof SectionProps
   */
  headerComponent?: JSX.Element;

  /**
   * Footer value
   * 
   * @type {string}
   * @memberof SectionProps
   */
  footer?: string;

  /**
   * Text color of footer
   * 
   * @default #6d6d72
   * @type {string}
   * @memberof SectionProps
   */
  footerTextColor?: string;

  /**
   * Header value
   * 
   * @type {string}
   * @memberof SectionProps
   */
  header?: string;

  /**
   * Text color of header
   * 
   * @default #6d6d72
   * @type {string}
   * @memberof SectionProps
   */
  headerTextColor?: string;

  /**
   * Hide separators
   * 
   * @default false
   * @type {boolean}
   * @memberof SectionProps
   */
  hideSeparator?: boolean;

  /**
   * Padding bottom of section
   * 
   * @default 15
   * @type {number}
   * @memberof SectionProps
   */
  sectionPaddingBottom?: number;

  /**
   * Padding top of section
   * 
   * @default 15
   * @type {number}
   * @memberof SectionProps
   */
  sectionPaddingTop?: number;

  /**
   * Background color of section
   * 
   * @default #EFEFF4
   * @type {string}
   * @memberof SectionProps
   */
  sectionTintColor?: string;

  /**
   * Left inset of separator
   * 
   * @default 15
   * @type {number}
   * @memberof SectionProps
   */
  separatorInsetLeft?: number;

  /**
   * Right inset of separator
   * 
   * @default 0
   * @type {number}
   * @memberof SectionProps
   */
  separatorInsetRight?: number;

  /**
   * Color of separator
   *
   * @default #C8C7CC	 
   * @type {string}
   * @memberof SectionProps
   */
  separatorTintColor?: string;
}

export interface CellProps {
  /**
   * Predefined accessory
   * 
   * @type {("DisclosureIndicator"
   *     | "Detail"
   *     | "DetailDisclosure"
   *     | "Checkmark")}
   * @memberof CellProps
   */
  accessory?:
    | "DisclosureIndicator"
    | "Detail"
    | "DetailDisclosure"
    | "Checkmark";

  /**
   * Color of accessory
   * 
   * @default #007AFF	
   * @type {string}
   * @memberof CellProps
   */
  accessoryColor?: string;

  /**
   * Respect Text Size accessibility setting on iOS
   * 
   * @default true
   * @type {boolean}
   * @memberof CellProps
   */
  allowFontScaling?: boolean;

  /**
   * Background color of cell
   * 
   * @default #FFF
   * @type {string}
   * @memberof CellProps
   */
  backgroundColor?: string;

  /**
   * Predefined cell style
   * 
   * @default "Basic"
   * @type {("Basic" | "RightDetail" | "LeftDetail" | "Subtitle")}
   * @memberof CellProps
   */
  cellStyle?: "Basic" | "RightDetail" | "LeftDetail" | "Subtitle";

  /**
   * Replace accessory view component (e.g.: add Switch or ActivityIndicator)
   * 
   * @type {JSX.Element}
   * @memberof CellProps
   */
  cellAccessoryView?: JSX.Element;

  /**
   * Replace content view component
   * 
   * @type {JSX.Element}
   * @memberof CellProps
   */
  cellContentView?: JSX.Element;

  /**
   * Replace image view component
   * 
   * @type {JSX.Element}
   * @memberof CellProps
   */
  cellImageView?: JSX.Element;

  /**
   * These styles will be applied to the content container which wraps all of the child views. Overrides cellStyle (e.g.: Override paddingLeft and paddingRight or set fixed height)
   * 
   * @type {StyleProp<ViewStyle>}
   * @memberof CellProps
   */
  contentContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Detail value
   * 
   * @type {(string | number)}
   * @memberof CellProps
   */
  detail?: string | number;
  
  /**
   * These styles will be applied to the (left- / right-) detail Text-Component.
   * 
   * @type {StyleProp<TextStyle>}
   * @memberof CellProps
   */
  detailTextStyle?: StyleProp<TextStyle>;

  /**
   * Disable resizing of image
   * 
   * @default false
   * @type {boolean}
   * @memberof CellProps
   */
  disableImageResize?: boolean;

  /**
   * Opacity of cell when touch is active
   * 
   * @default 0.8
   * @type {number}
   * @memberof CellProps
   */
  highlightActiveOpacity?: number;

  /**
   * Color of underlay that will show through when touch is active
   * 
   * @default "black"
   * @type {string}
   * @memberof CellProps
   */
  highlightUnderlayColor?: string;

  /**
   * Cell is disabled. onPress will not get triggered
   * 
   * @default false
   * @type {boolean}
   * @memberof CellProps
   */
  isDisabled?: boolean;

  /**
   * Image component displayed on the left. Will resized automatically
   * 
   * @type {JSX.Element}
   * @memberof CellProps
   */
  image?: JSX.Element;

  /**
   * Text color of left detail
   * 
   * @default #007AFF
   * @type {string}
   * @memberof CellProps
   */
  leftDetailColor?: string;

  /**
   * Text color of right detail
   * 
   * @default #8E8E93
   * @type {string}
   * @memberof CellProps
   */
  rightDetailColor?: string;

  /**
   * Text color of subtitle
   * 
   * @default #000
   * @type {string}
   * @memberof CellProps
   */
  subtitleColor?: string;

  /**
   * These styles will be applied to the subtitle Text-Component.
   * 
   * @type {StyleProp<TextStyle>}
   * @memberof CellProps
   */
  subtitleTextStyle?: StyleProp<TextStyle>;

  /**
   * Title value
   * 
   * @type {(string | number | JSX.Element)}
   * @memberof CellProps
   */
  title?: string | number | JSX.Element;

  /**
   * Text color of title
   * 
   * @default #000
   * @type {string}
   * @memberof CellProps
   */
  titleTextColor?: string;

  /**
   * These styles will be applied to the title Text-Component (e.g.: update fontSize or fontFamily)
   * 
   * @type {StyleProp<TextStyle>}
   * @memberof CellProps
   */
  titleTextStyle?: StyleProp<TextStyle>;

  /**
   * These styles will be applied to the title Text-Component, when the cell is disabled
   * 
   * @type {StyleProp<TextStyle>}
   * @memberof CellProps
   */
  titleTextStyleDisabled?: StyleProp<TextStyle>;

  /**
   * Function called when row is highlighted
   * 
   * @memberof CellProps
   */
  onHighlightRow?(): void;
  
  /**
   * Function called when row is unhighlighted
   * 
   * @memberof CellProps
   */
  onUnHighlightRow?(): void;

  /**
   * If set, cell will be automaticaly initialized with TouchableHighlight
   * 
   * @memberof CellProps
   */
  onPress?: () => void | false;
}

export interface SeparatorProps {
  /**
   * Background color
   * 
   * @default #EFEFF4
   * @type {string}
   * @memberof SeparatorProps
   */
  backgroundColor?: string;

  /**
   * Left inset of separator
   * 
   * @default 15
   * @type {number}
   * @memberof SeparatorProps
   */
  insetLeft?: number;

  /**
   * Right inset of separator
   * 
   * @default 0
   * @type {number}
   * @memberof SeparatorProps
   */
  insetRight?: number;

  /**
   * Hide separator but keeping its height
   * 
   * @default false 
   * @type {boolean}
   * @memberof SeparatorProps
   */
  isHidden?: boolean;

  /**
   * Color of separator
   * 
   * @default #C8C7CC
   * @type {string}
   * @memberof SeparatorProps
   */
  tintColor?: string;
}

export class TableView extends React.Component {}
export class Section extends React.Component<SectionProps> {}
export class Cell extends React.Component<CellProps> {}
export class Separator extends React.Component<SeparatorProps> {}
