const { composePlugins, withNx } = require('@nrwl/webpack');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  return {
    ...config,
    /*    
       Fix option 2
     resolve: {
    ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@codemirror/state':
            __dirname + '/node_modules/@codemirror/state/dist/index.cjs',
          '@codemirror/autocomplete':
            __dirname + '/node_modules/@codemirror/autocomplete/dist/index.cjs',
        },
      },
      
*/
  };
});
