# React typescript empty project

![License](https://img.shields.io/github/license/jannes-io/react-ts-basic-structure)
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

#### Scripts

Run a script using `yarn <script-name>`. To add/edit/remove scripts, see `scripts` section in `package.json`.

| Script | Usage |
| --- | --- |
|`start`|Starts the development server on `localhost:3000`|
|`build`|Compiles and bundles the React app for production usage|
|`test`|Runs tests if any are available|
|`lint`|Runs tslint and checks all files for any violations.|

#### TSLint
This project uses tslint to ensure a consistent code style.
To enable tslint please see your editor's manual.

⚠ Pull requests with tslint violations **WILL BE DENIED** ⚠

For PHPStorm/WebStorm this is under
Languages & Frameworks > TypeScript > TSLint > Automatic configuration

Depending on your editor/IDE you might have to change some automatic code completion settings.

### Production
React must be compiled to a static asset bundle. Do this by running
```bash
yarn build
```
This will copy all files to the `build` directory, where they can then be uploaded to a webserver or static file host.
