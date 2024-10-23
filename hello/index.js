#!/usr/bin/env node     # Needed to run as a script

function sayHello() {
    console.log('hi there');
}

function saySomethingElse() {
  console.log('something else');
}

// Only needed if this package is used by other packages, or testing.
module.exports = {
  sayHello,
  saySomethingElse
};

sayHello(); // When run as a script, this will execute and print 'hi there'