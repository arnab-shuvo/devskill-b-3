path = require 'path'

wrapper = {}

for module in ['cli']
  do (module) ->
    Object.defineProperty wrapper, module,
      enumerable: true
      get: -> path.join require __dirname, module

module.exports = wrapper
