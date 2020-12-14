const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#f5e134',
               '@border-radius-base': '2px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};