const CracoLessPlugin = require('craco-less');
const colors = require('./src/colors');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              ...colors
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
