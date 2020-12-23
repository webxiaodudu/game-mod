const CracoLessPlugin = require('craco-less');
const path = require('path')
console.log(path.resolve(__dirname, 'src'))
module.exports = {
  devServer: {
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:8888',
        pathRewrite: {'^/api' : ''}
      },
      '/static': {
        target: 'http://127.0.0.1:8888',
        
      }
    }
  },

  webpack: {
    alias: {
      "@": path.resolve(__dirname,"src"),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#f5e134',
               '@border-radius-base': '2px',
               '@text-color':'#101010'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};