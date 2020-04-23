# babel-preset-base-app
babel-preset-base-app

-----------------

`{
  test: /\.(js|mjs)$/,
  exclude: /@babel(?:\/|\\{1,2})runtime/,
  loader: require.resolve('babel-loader'),
  options: {
    babelrc: false,
    configFile: false,
    compact: false,
    presets: [
      [
        require.resolve('babel-preset-base-app/dependencies'),
        { helpers: true },
      ],
    ],
    cacheDirectory: true,
    // See #6846 for context on why cacheCompression is disabled
    cacheCompression: false,
    // @remove-on-eject-begin
    // @remove-on-eject-end
    // Babel sourcemaps are needed for debugging into node_modules
    // code.  Without the options below, debuggers like VSCode
    // show incorrect code and set breakpoints on the wrong lines.
  },
},`
