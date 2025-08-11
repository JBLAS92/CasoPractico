const { suma } = require('./index');

if (suma(2, 3) === 5) {
  console.log('Test pasó');
  process.exit(0);
} else {
  console.error('Test falló');
  process.exit(1);
}
