const { add, multiply } = require('./math');

function main() {
  const a = 2;
  const b = 3;
  console.log(`a + b = ${add(a, b)}`);
  console.log(`a * b = ${multiply(a, b)}`);
}

if (require.main === module) {
  main();
}

module.exports = { main };
