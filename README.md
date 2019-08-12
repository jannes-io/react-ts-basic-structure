# React typescript empty project

![License](https://img.shields.io/badge/license-WTFPL-brightgreen)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue)](https://www.typescriptlang.org/) 
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Usage

### Development

#### Development server

```bash
yarn
yarn start
```
This will start the development server on `localhost:3000`

#### TSLint
This project uses tslint to ensure a consistent code style.
To enable tslint please see your editor's manual. 

For PHPStorm/WebStorm this is under
Languages & Frameworks > TypeScript > TSLint > Automatic configuration

### Production
React must be compiled to a static asset bundle. Do this by running
```bash
yarn build
```
This will copy all files to the `build` directory, where they can then be uploaded to a webserver or static file host.
