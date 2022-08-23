const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#d0a028',
              '@border-color-base': '#5b5d69',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
