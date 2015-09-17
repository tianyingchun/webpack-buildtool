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
        context: 'projects/${projectName}/stylesheets',
        name: '${projectName}/[path][name].[ext]'
      },
      dev: 'http://localhost:3000/public/',
      prod: 'http://cdn.xx.com/public/'
    }
  },
  projects: {
    // ${projectName}, project layers
    web: {
      // ${subProjectName}, it contains multi module in business domain.
      home: {
        // server rendering url matching.
        match: /^\/$/,
        // entry point, must be string.
        entry: './web/app/home/index.js',
        routes: './web/app/home/routes.js',
        version: '',
        jsBundles: ['browser-polyfill.js', 'reactkits.js', 'web/home/bundle.js${version}'],
        cssBundles: ['web/home/bundle.css${version}']
      },
      catalog: {
        match: /^\/(c|catalog)\/?/,
        entry: './web/app/catalog/index.js',
        routes: './web/app/catalog/routes.js',
        version: '',
        jsBundles: ['browser-polyfill.js', 'reactkits.js', 'web/catalog/bundle.js${version}'],
        cssBundles: ['web/catalog/bundle.css${version}']
      },
      product: {
        match: /^\/(p|product)\/?/,
        entry: './web/app/product/index.js',
        routes: './web/app/product/routes.js',
        version: '',
        jsBundles: ['browser-polyfill.js', 'reactkits.js', 'web/product/bundle.js${version}'],
        cssBundles: ['web/product/bundle.css${version}']
      },
      user: {
        match: /^\/user\/?/,
        entry: './web/app/user/index.js',
        routes: './web/app/user/routes.js',
        version: '',
        jsBundles: ['browser-polyfill.js', 'reactkits.js', 'web/user/bundle.js${version}'],
        cssBundles: ['web/user/bundle.css${version}']
      }
    }
  }
};
