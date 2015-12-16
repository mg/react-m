import gulp from 'gulp'
import watch from 'gulp-watch'
import runSequence from 'run-sequence'
import mocha from 'gulp-spawn-mocha'
import eslint from'gulp-eslint'
import babel from 'gulp-babel'
import ignore from 'gulp-ignore'
import replace from 'gulp-replace'
import del from 'del'

// Read default config
let conf= require('./conf.js')

// Read user config and merge with default config
try {
    const user= require('./conf.user.js')
    conf= {...conf, ...user}
} catch(e) {
}

// These are the entry point tasks.
gulp.task('test', () => {
  runSequence('mocha')
})

gulp.task('test-watch', () => {
    watch(conf.src, () => {
      runSequence('mocha')
    })
})

gulp.task('lint', () => {
  runSequence('eslint')
})

gulp.task('compile', () => {
  runSequence('clean', 'compilejs', 'copyassets')
})

// Run linter on all source files, use tools/.eslintrc to control linter
gulp.task('eslint', () => {
  return gulp.src(conf.src)
  .pipe(eslint({
    configFile: './.eslintrc',
  }))
  .pipe(eslint.format())
})

gulp.task('mocha', () => {
    let src = conf.test
    const zero = process.argv.indexOf('--files')
    if(zero > 0 && zero < process.argv.length) {
      src = []
      var fileList = process.argv[zero+1].split(',')
      fileList.forEach(file=>{
        src.push(`../src/**/${file}.spec.js`)
        src.push(`../src/**/${file}.spec.jsx`)
      })
    }

  // Execute unit tests
  return gulp.src(src, {
    read: false
  })
  .pipe(mocha({
    reporter: 'spec',
    require: conf.testRequire,
    env: {
      'NODE_ENV': 'test',
      'TEST': 'true',
      'NODE_PATH': '../src',
    }
  }))
})

// Compile package. Convert ES6/ES7 code into ES5 code. Do not include spec files.
// Results are in the /lib folder.
gulp.task('compilejs', () => {
  process.env.NODE_ENV= 'production'
  return gulp.src(conf.src)
    .pipe(ignore.exclude('**/*.spec.*'))
    .pipe(babel())
    .pipe(replace(/\.jsx/g, '.js'))
    .pipe(gulp.dest(conf.dest));
})

gulp.task('copyassets', () => {
  return gulp.src(conf.assets)
    .pipe(gulp.dest(conf.dest));
})

gulp.task('clean', () => {
  return del([
    '../lib/**/*',
  ], {force: true})
})
