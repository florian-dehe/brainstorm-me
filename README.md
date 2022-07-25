# Brainstorm Me!
> The web extension that helps you brainstorm while browsing.

*Brainstorm Me!* is a Firefox web extension that allows you to collect brainstorming ideas along your navigation.
Just Right-Click on a selected text and choose "Brainstorm Me!". It adds the idea to your brainstorming bank so you can edit it later.

## Installation

### Download

The extension is not yet available on the Firefox addon store, but you can build it yourself and try it using the debugging tools.

### Build the extension

This project requires NodeJS and NPM. From there, you can build without any problems using those two comands.

```sh
npm install
npm run build
```

The "build" script uses Webpack to bundle the Babel transpiled files and outputs everything inside the folder `dist/`.
Preact is used to render the popup.

## Development setup

#### Webpack live server
You can launch the development environment with :

```sh
npm run dev
```

This command compiles the code on the fly and updates automatically the extension on the Firefox development environment generated by the `web-ext` npm package.

#### Unit testing
You may want also to test the brainstorming API with this command also :

```sh
npm run test
```
It uses Jest and displays by default the coverage.

## Release History

* 0.0.1
    * Work in progress
    * Basic API working

## Author & License

Florian DEHE – [Github](https://github.com/florian-dehe)

Distributed under the MIT license. See ``LICENSE`` for more information.