#Project EA 2016-17 Group 3
##WEB

The technologies used are:
 * Angular 2
 * HTML 5
 * SCSS, CSS 3
 * Typescript
 * Bootstrap 4
 
Other helpful tool used are:
 * Karma
 * Travis CI
 * Gulp
 * Appveyor



## How to start

**Note** that this project requires node v4.x.x or higher and npm 2.14.7.

In order to start the seed use:

```bash
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
```


## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The environment can be specified by using:

```bash
npm start -- --config-env ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.

This project has been adapted from: [SB Admin BS4 Angular 2](https://github.com/start-angular/SB-Admin-BS4-Angular-2) 