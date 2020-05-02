const requireDirectory = require('require-directory')


const rules = requireDirectory(module, './rules')


exports.config = {
  recommended: {
    'sloc': {
      rules: {
        'warning': {unit: 'seconds', value: 3*3600},  // 3 hours (half work day)
        'error': {unit: 'seconds', value: 7*3600}     // 7 hours (1 work day)
      },
      lps: 80 / 300  // source code lines per second, standard 1 page / 5 minutes
    }
  }
}

exports.rules = rules
