{Command} = require 'ronin'

fs   = require 'fs'
path = require 'path'
copy = require 'recursive-copy'

templatePath = path.join __dirname, '../../templates'
templates = fs.readdirSync templatePath

module.exports = Command.extend
    desc: 'Create new ecommerce site'

    options:
      template: 'string'

    run: (template, name) ->
      unless name?
        console.log 'name required'
        return

      unless template? or template == ''
        template = 'standard-landing-page'

      if (templates.indexOf template) == -1
        console.log 'template not found, try one of ' + templates.join ', '
        return

      copy (path.join templatePath, template), (path.join process.cwd(), name)
      console.log 'created new ecommerce site ' + name
