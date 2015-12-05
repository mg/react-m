module.exports= {
  src: ['../src/**/*.js', '../src/**/*.jsx'],
  test: ['../src/**/*.spec.js', '../src/**/*.spec.jsx'],
  assets: ['../src/**/*.css'],
  dest: '../lib',
  testRequire: ['./mocha.js'],
  port: 8080,
}
