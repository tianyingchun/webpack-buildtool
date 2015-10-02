var path = require('path');
module.exports = {
  // the optional configurations.
  options: {
    // the location related gruntfile of your projects root folder.
    // put web, admin into /projects/*
    projectRoot: './projects',

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
    // ${projectName}, project layers, Note for webpack optimze suggestion,
    // if we have some submodule in projecet (multi) page, we need to attach submodule
    // into this project as multi entry points.
    web: {
       // the project meta config.
      _metaInfo: {
        version: ''
      },
      home: {
        // server rendering url matching.
        match: /^\/$/,
        // entry point, must be string.
        entry: './projects/web/app/home/index.js',
        routes: './projects/web/app/home/routes.js',
        jsBundles: ['browser-polyfill.js', 'web/reactlib.js', 'web/common.js', 'web/home/bundle.js${version}'],
        cssBundles: ['web/home/bundle.css${version}']
      },
      catalog: {
        match: /^\/(c|catalog)\/?/,
        entry: './projects/web/app/catalog/index.js',
        routes: './projects/web/app/catalog/routes.js',
        jsBundles: ['browser-polyfill.js', 'web/reactlib.js', 'web/common.js', 'web/catalog/bundle.js${version}'],
        cssBundles: ['web/catalog/bundle.css${version}']
      },
      product: {
        match: /^\/(p|product)\/?/,
        entry: './projects/web/app/product/index.js',
        routes: './projects/web/app/product/routes.js',
        jsBundles: ['browser-polyfill.js', 'web/reactlib.js', 'web/common.js', 'web/product/bundle.js${version}'],
        cssBundles: ['web/product/bundle.css${version}']
      },
      user: {
        match: /^\/user\/?/,
        entry: './projects/web/app/user/index.js',
        routes: './projects/web/app/user/routes.js',
        jsBundles: ['browser-polyfill.js', 'web/reactkits.js', 'web/common.js', 'web/user/bundle.js${version}'],
        cssBundles: ['web/user/bundle.css${version}']
      }
    },
    admin: {

    }
  }
};
