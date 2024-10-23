// This is a Jest test class for the hello package. It tests the sayHello() function.

// This line obtains a reference to the hello package, essentially the contents of index.js.
// pkg is an object with the functions sayHello and saySomethingElse.
const pkg = require('../index');

// test() is a Jest function that defines a test case.
// The first argument is a description of the test case.
// The second argument is a function that contains the test case.
test('Make sure sayHello() outputs "hi there"', () => {
  console.log = jest.fn(); // Mock console.log
  pkg.sayHello(); // Call the function
  expect(console.log).toHaveBeenCalledWith('hi there'); // Assert the output
});
