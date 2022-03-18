path  = require 'path'
ronin = require 'ronin'

program = ronin()

# Set path for autoupdate
program.set
  path: path.join __dirname, '..'

program.autoupdate ->

  # Set path correctly
  program.set
    path: __dirname
    delimiter: ':'

  program.run()
