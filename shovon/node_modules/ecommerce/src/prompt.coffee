module.exports = (schema, cb) ->
  prompt = require 'prompt'

  prompt.message = '  '
  prompt.delimiter = ''


  for k,v of schema.properties
    delete schema.properties[k]
    schema.properties["  #{k}:"] = v

  prompt.start()
  prompt.get schema, (err, result) ->
    return cb err if err?

    for k,v of result
      delete result[k]
      k = k.trim()
      k = k.substr 0, k.length - 1
      result[k] = v

    cb null, result
