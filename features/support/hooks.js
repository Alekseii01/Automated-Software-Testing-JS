const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');

Before(async function() {
  await this.init();
});

After(async function() {
  await this.close();
});

BeforeAll(async function() {
  console.log('Starting the test suite');
});

AfterAll(async function() {
  console.log('Test suite completed');
}); 