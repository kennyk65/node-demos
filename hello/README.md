# hello world demo

This is a minimalist "getting started" demo with NodeJS.  This is an example of a package which can be run from the command line, or used as a module by other NodeJS code.  From the command line, running "hello" will result in a "hi there" message displayed to the console.

Make sure nodeJS is installed, [Install NodeJS](https://nodejs.org/en).  This also installs npm.

## Organization ##

The `package.json` explains that the main file is `index.js`.  Importantly, the bin entry indicates how to run this from the command line when the command "hello" is entered.

`index.js` is the main code file.  It contains a `#!/usr/bin/env node` entry to run as a script.  Two demonstration functions are defined and "exported", making them referenceable from other packages, though only one is actually used.

## Testing ##

This example uses "jest" test framework.  The `package.json` file defines this test dependency in the devDependencies section.  To run the test you must perform a one-time install of all the dependencies from the root folder:

```
npm install
```

This will populate the node_modules folder with a copy of all needed dependencies (and transitive dependencies).  In this case, the Jest framework is the only direct dependency.

The Jest test is located (by convention) within the `__tests__` folder.  The `hello.test.js` file contains all the needed test logic.  Tests can be run from the root folder by running:

```
npm test
```

## Deploying and Running ##
You can run from the root directory by running 

```
npm start
```

This works because the scripts section of `package.json` contains a start command of `node index.js`.  This means you can also run this:

```
node index.js
```

To install this package so it can run anywhere, run

```
npm install -g hello
```

After doing this, you can run from any command prompt by running:

```
hello
```

If you'd like to delete it later, just run

```
npm uninstall -g hello
```
