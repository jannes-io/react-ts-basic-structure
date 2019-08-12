# A&C systems user accounts

*A&C systems user account management frontend*

![License](https://img.shields.io/badge/license-proprietary-red)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/) 

##Usage

###Development
####Development server
```bash
git clone git@bitbucket.org:acwebdev/user-management-frontend.git
cd user-management-frontend
yarn
yarn start
```
This will start the development server on `localhost:3000`

####TSLint
This project uses tslint to ensure a consistent code style.
To enable tslint please see your editor's manual. 

For PHPStorm/WebStorm this is under
Languages & Frameworks > TypeScript > TSLint > Automatic configuration

###Production
React must be compiled to a static asset bundle. Do this by running
```bash
yarn build
```
This will copy all files to the `build` directory, where they can then be uploaded to a webserver or static file host.
