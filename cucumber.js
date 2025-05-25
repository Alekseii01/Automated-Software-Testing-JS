module.exports = {
  default: {
    paths: ['features/*.feature'],
    require: ['features/step_definitions/*.js', 'features/support/*.js'],
    requireModule: ['@babel/register'],
    format: ['html:reports/cucumber-report.html', 'summary', 'progress'],
    parallel: 5
  },
  checkbox: {
    paths: ['features/*.feature'],
    require: ['features/step_definitions/*.js', 'features/support/*.js'],
    requireModule: ['@babel/register'],
    format: ['html:reports/cucumber-checkbox-report.html', 'summary', 'progress'],
    tags: '@checkbox',
    parallel: 2
  },
  radioButton: {
    paths: ['features/*.feature'],
    require: ['features/step_definitions/*.js', 'features/support/*.js'],
    requireModule: ['@babel/register'],
    format: ['html:reports/cucumber-radioButton-report.html', 'summary', 'progress'],
    tags: '@radioButton',
    parallel: 2
  },
  datePicker: {
    paths: ['features/*.feature'],
    require: ['features/step_definitions/*.js', 'features/support/*.js'],
    requireModule: ['@babel/register'],
    format: ['html:reports/cucumber-datePicker-report.html', 'summary', 'progress'],
    tags: '@datePicker',
    parallel: 2
  },
  slider: {
    paths: ['features/*.feature'],
    require: ['features/step_definitions/*.js', 'features/support/*.js'],
    requireModule: ['@babel/register'],
    format: ['html:reports/cucumber-slider-report.html', 'summary', 'progress'],
    tags: '@slider',
    parallel: 2
  },
  dragAndDrop: {
    paths: ['features/*.feature'],
    require: ['features/step_definitions/*.js', 'features/support/*.js'],
    requireModule: ['@babel/register'],
    format: ['html:reports/cucumber-dragAndDrop-report.html', 'summary', 'progress'],
    tags: '@dragAndDrop',
    parallel: 2
  }
}; 