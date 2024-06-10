# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.4.1](https://github.com/Purii/react-native-tableview-simple/compare/v4.4.0...v4.4.1) (2024-06-10)

- Fix on-integer device scaling causing issues with <Separator> hairline widths ([#786](https://github.com/Purii/react-native-tableview-simple/pull/786)) ([40d77e5](https://github.com/Purii/react-native-tableview-simple/commit/5e81f61993eea32784cd9b20fa6e73d1240d77e5)) (Thanks @cixio!)

## [4.4.0](https://github.com/Purii/react-native-tableview-simple/compare/v4.3.1...v4.4.0) (2023-02-11)

### Features

- Cell longPress ([#713](https://github.com/Purii/react-native-tableview-simple/issues/713)) ([50c6e83](https://github.com/Purii/react-native-tableview-simple/commit/50c6e83401a56e0a18c58277b332703a89522851)) (Thanks @cixio!)

### [4.3.1](https://github.com/Purii/react-native-tableview-simple/compare/v4.3.0...v4.3.1) (2021-12-12)

## [4.3.0](https://github.com/Purii/react-native-tableview-simple/compare/v4.2.1...v4.3.0) (2021-03-26)

### Features

- add prop children in cell component ([#497](https://github.com/Purii/react-native-tableview-simple/issues/497)) ([4bd400e](https://github.com/Purii/react-native-tableview-simple/commit/4bd400e121a350f6f2cc710c5dea749e998d373d)) (Thanks @brunohkbx!)

### [4.2.1](https://github.com/Purii/react-native-tableview-simple/compare/v4.2.0...v4.2.1) (2020-12-21)

### Bug Fixes

- **tableview:** render correct appearance (fix [#425](https://github.com/Purii/react-native-tableview-simple/issues/425)) ([f7dcf49](https://github.com/Purii/react-native-tableview-simple/commit/f7dcf495f2165a1238807ffc1abe0b5e9a870a8f))

## [4.2.0](https://github.com/Purii/react-native-tableview-simple/compare/v4.1.0...v4.2.0) (2020-09-09)

### Features

- **tableview:** add style prop to tableview wrapper ([#315](https://github.com/Purii/react-native-tableview-simple/issues/315)) ([119a11f](https://github.com/Purii/react-native-tableview-simple/commit/119a11f27c19fd53015d531f759ad472429336e9))

### Bug Fixes

- **test:** update snapshots ([251e128](https://github.com/Purii/react-native-tableview-simple/commit/251e128e3f0ba4868748bb1988e658efb94b900a))
- **types:** fix typings of local styles ([77928dc](https://github.com/Purii/react-native-tableview-simple/commit/77928dcb12236c8a1e53d4dfdfc5f2c043615c27))

## [4.1.0](https://github.com/Purii/react-native-tableview-simple/compare/v4.0.0...v4.1.0) (2020-06-21)

### Features

- **ts:** export interface THEME_APPEARANCE ([996efeb](https://github.com/Purii/react-native-tableview-simple/commit/996efeb939e5509231df5adbedec7769ee299035))

## [4.0.0](https://github.com/Purii/react-native-tableview-simple/compare/v3.2.0...v4.0.0) (2020-06-21)

### ⚠ BREAKING CHANGES

- Default apperance is derived by the system settings. `TableView` depends on `useColorScheme` released with React-Native `0.62.0`

### Features

- appearances incl. dark appearance ([3bf9329](https://github.com/Purii/react-native-tableview-simple/commit/3bf9329ce6d90936f7cce53533ab92c30777e69d))

## [3.2.0](https://github.com/Purii/react-native-tableview-simple/compare/v3.1.0...v3.2.0) (2020-05-24)

### Bug Fixes

- **cell:** fix contentview flex settings ([f455b8d](https://github.com/Purii/react-native-tableview-simple/commit/f455b8db703c67f5fb417e2410c7326e930374c1))

## [3.1.0](https://github.com/Purii/react-native-tableview-simple/compare/v3.0.0...v3.1.0) (2020-05-23)

### Bug Fixes

- **cell:** use explicit flexGrow instead flex. Fix [#194](https://github.com/Purii/react-native-tableview-simple/issues/194) ([d82b1fc](https://github.com/Purii/react-native-tableview-simple/commit/d82b1fca90ec0d755718bd1064ede7c01bca1046))

## [3.0.0](https://github.com/Purii/react-native-tableview-simple/compare/v0.17.0...v3.0.0) (2020-05-02)

Migrated the whole component to `TypeScript`! :rocket:

### Features

- **cell:** add ts definitions for titleTextProps and detailTextProps ([815eed8](https://github.com/Purii/react-native-tableview-simple/commit/815eed8dc19f323356a3ea5b1e72728df8c05b59))
- **cell:** add cell prop onPressDetailDisclosure ([a8d225e](https://github.com/Purii/react-native-tableview-simple/commit/a8d225ecff785283de348679241c1d102a121da6))
- **section:** add footerTextStyle and headerTextStyle ([e3950dd](https://github.com/Purii/react-native-tableview-simple/commit/e3950dd7a2318186df95da96c7bbfc1906541bc4))

### Bug Fixes

- **README:** explain default props to fix [#114](https://github.com/Purii/react-native-tableview-simple/issues/114) ([14b08ad](https://github.com/Purii/react-native-tableview-simple/commit/14b08ad61e2a5125d9a7792ede789edebf49be6a))
- **Section:** always overwrite current highlighted row ([c289c3e](https://github.com/Purii/react-native-tableview-simple/commit/c289c3e4a1a1063bce14c8c2fa886dcc462eef0f))
- restore Cell proptypes ([460a09d](https://github.com/Purii/react-native-tableview-simple/commit/460a09dc187fb1c05b3896d7b8fc12a82f25aee8))
