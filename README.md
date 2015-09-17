The common build engine for react project (CMD) based on webpack.
==========

The basic usage:
----------
- download the buildtool code to your project via clone, fork, submdules reference anyway you like
- follow below project structures (recommend).

```
if Your project `sample` is very huge SPA.

- you have mutiple complex project (project1) in single one git repository.
- you want to seperate mutiple complex sub module(sub project) from one complex project (project1).
- you can use below app structure it fine.

│
├── `buildtool` (the alias name of `webpack-buildtool`)
├── projects
│   ├── project1 (named as `web`)
│   │   ├── app
│   │   │   ├── home (sub_project or sub_module1) The app entry point (index.js, routes.js)
│   │   │   ├── catalog (sub_project or sub_module2) The app entry point.
│   │   │   ├── product (sub_project or sub_module3) The app entry point.
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
│
├── shared/
├── utils/
├── build.config.js (required by buildtool) copy and rename `hugeApps.build.config.js` to `build.config.js`
├── gruntfile.js
├── isomorphic.js
└── server.js

```

```
if you only need to lunch an simple SPA.

- such as one git repository one app (project1 called `docs`)
- you want to split `docs` into mutiple sub modules (sub projects)

│
├── `buildtool` (the alias name of `webpack-buildtool`)
├──  project1 (named as  `web`)
│    ├── app
│    │   ├── sub_project1 (sub_module1) The app entry point (index.js, routes.js)
│    │   ├── sub_project2 (sub_module2) The app entry point.
│    │   ├── sub_project3 (sub_module3) The app entry point.
│    │   └── ...
│    │
│    ├── actions
│    ├── constants
│    ├── reducers
│    ├── services
│    ├── stylesheets
│    ├── componentes
│    └── views
│
├── shared/
├── utils/
├── build.config.js (required by buildtool) copy and rename `complex.build.config.js` to `build.config.js`
├── gruntfile.js
├── isomorphic.js
└── server.js

```

```
if you only need to lunch an simple SPA.

- such as one git repository one app (project1 called `docs`)
- you only need one app and one module (sub project) is enough.

│
├── `buildtool` (the alias name of `webpack-buildtool`)
├──  project1 (named as  `docs`)
│    ├── app
│    │   ├── index.js (the app entry point).
│    │   └── routes.js
│    │
│    ├── actions
│    ├── constants
│    ├── reducers
│    ├── services
│    ├── stylesheets
│    ├── componentes
│    └── views
│
├── shared/
├── utils/
├── build.config.js (required by buildtool) copy and rename `simple.build.config.js` to `build.config.js`
├── gruntfile.js
├── isomorphic.js
└── server.js

```
