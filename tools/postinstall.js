var fs = require('fs')
var path= require('path')

var root = __dirname + '/../'

try {
  fs.statSync(root + 'src')
  return
} catch(e) {
}

try {
  fs.statSync(root + 'node_modules')
} catch(e) {
  fs.mkdirSync(root + 'node_modules')
}

var modules= fs.readdirSync(root + 'lib')
modules.forEach(function(dir) {
  var module= root + 'lib/' + dir
  var stat= fs.statSync(module)
  if(stat.isDirectory()) {
    try {
      fs.statSync(root + dir)
    } catch(e) {
      try {
        fs.symlinkSync(module, root + dir, 'dir')
      } catch(e) {
        console.log('**********************************************************************')
        console.log('ATTENTION: Not able to create links, you must run npm install as Admin')
        console.log('**********************************************************************')
        throw e
      }
    }
    try {
      fs.statSync(root + 'node_modules/' + dir)
    } catch(e) {
      try {
        fs.symlinkSync(module, root + 'node_modules/' + dir, 'dir')
      } catch(e) {
        console.log('**********************************************************************')
        console.log('ATTENTION: Not able to create links, you must run npm install as Admin')
        console.log('**********************************************************************')
        throw e
      }
    }
  }
})
