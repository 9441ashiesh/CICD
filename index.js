function sayHello(name) {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(sayHello("World"));
}

module.exports = sayHello;
