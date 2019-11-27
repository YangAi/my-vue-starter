# my-starter

## Features

- [x] Redesign the project structure
- [x] Import TailwindCSS (tested)
- [x] Import PurgeCSS (tested)
- [x] Import NProgress. ('/router/beforeEach.js' and 'afterEach.js') (tested)
- [x] Import Axios and qs('/plugins/http').
- [x] Import a basic event bus and add to Vue prototype.(this.$bus) (tested)
- [x] Import lodash and add to Vue prototype.(this._)(tested)
- [x] Build basic API structure with Restful Design.('/services/api') (tested)
- [x] Import global SCSS variables('/asstes/style/_variables.scss') (tested)
- [x] Import localforage and add to Vue prototype. (this.$sotrage) (tested)
- [x] Build basic Auth module.(un-tested)
- [x] Import Noty.js as Default notification snackbar. 


## Project setup
```
npm install
```

### Add Vue plugins
```
vue add vuetify
vue add electron-builder
```

## Keep Vuetify and tailwind consist
```
Grid Breakpoints:
https://stackoverflow.com/questions/57333274/how-to-change-breakpoints-in-the-scss-in-vuetify-v2
```


### Before start
```
Import proper global notification component.('plugins/http/interceptor', 'plugins/auth', 'router/beforeEach')

Finish login and logout logic in Plugins/Auth module.
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


