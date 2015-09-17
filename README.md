The common build engine for react project (CMD) based on webpack.
==========

The basic usage:
----------
- download the buildtool code to your project via clone, fork, submdules reference anyway you like
- follow below project structures (recommend).

```
Your project `sample`
│
├── `buildtool` (the alias name of `webpack-buildtool`)
├── projects
│   ├── project1 (web)
│   │   ├── app
│   │   │   ├── sub_project1 (sub_module1) The app entry point (index.js, routes.js)
│   │   │   ├── sub_project2 (sub_module2) The app entry point.
│   │   │   ├── sub_project3 (sub_module3) The app entry point.
│   │   │   └── ...
│   │   │
│   │   ├── actions
│   │   ├── constants
│   │   ├── reducers
│   │   ├── services
│   │   ├── stylesheets
│   │   ├── componentes
│   │   └── views
│   │
│   ├── project2 (admin)
│   │
│   └── project3 (...)
│       │
│       ├── home
│       ├── catalog
│       ├── product
│       └── user
├── `build.config.js` (required by buildtool)
├── gruntfile.js
├── isomorphic.js
└── server.js

```
