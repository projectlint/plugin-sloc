const sloc = require('node-sloc')


exports.fetch = function({config, context: {projectRoot: path}})
{
  return sloc({path, config})
}


exports.evaluate = function(
  {
    config: {value},
    fetch: {
      config: {lps},
      result: {sloc: {sloc}}
    }
  }
) {
  return value < sloc / lps
}
