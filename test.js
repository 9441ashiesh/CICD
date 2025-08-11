const sayHello = require("./index");

function testSayHello() {
  const result = sayHello("CI/CD");
  if (result !== "Hello, CI/CD!") {
    console.error(`❌ Test failed: got "${result}"`);
    process.exit(1);
  }
  console.log("✅ All tests passed!");
}

testSayHello();
