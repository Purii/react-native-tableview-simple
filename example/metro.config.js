/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

// react-native >= 0.57

module.exports = {
  resolver: {
    extraNodeModules: new Proxy(
      /* The first argument to the Proxy constructor is passed as
       * "target" to the "get" method below.
       * Put the names of the libraries included in your reusable
       * module as they would be imported when the module is actually used.
       */
      {
        'react-native-tableview-simple': path.resolve(__dirname, '../src/'),
      },
      {
        get: (target, name) => {
          if (target.hasOwnProperty(name)) {
            return target[name];
          }
          return path.join(process.cwd(), `node_modules/${name}`);
        },
      },
    ),
  },
  watchFolders: [path.resolve(__dirname, '../src')],
  projectRoot: path.resolve(__dirname),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
