var path = require('path');
module.exports = {
  // the optional configurations.
  options: {
    // the location related gruntfile of your projects root folder.
    // put web, admin into /*
    projectRoot: './',

    devServer: {
      host: 'localhost',
      port: 3000,
      publicPath: 'http://localhost:3000/public/'
    },
    built: {
      // where the built files should be placed?
      baseDir: path.join(__dirname, 'public')
    },
    // assets public path (stylesheets,...)
    assets: {
      // the urlLoaderQuery used in buildtool/webpack.base.config.js <url-loader> config node.
      urlLoaderQuery: {
        context: '${projectName}/stylesheets',
        name: '${projectName}/[path][name].[ext]'
      },
      dev: 'http://localhost:3000/public/',
      prod: 'http://cdn.xx.com/public/'
    }
  },
  projects: {
    // ${projectName}, project layers
    docs: {
      // ${subProjectName}, it contains multi module in business domain.
      reactui: {
        // server rendering url matching.
        match: /^\/$/,
        // entry point, must be string.
        entry: './docs/app/index.js',
        routes: './docs/app/routes.js',
        version: '',
        jsBundles: ['browser-polyfill.js', 'reactkits.js', 'docs/reactui/bundle.js${version}'],
        cssBundles: ['docs/reactui/bundle.css${version}']
      }
    }
  }
};
