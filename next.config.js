const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    webpack : function (config) {
      const originalEntry = config.entry
      config.entry = async () => {
        const entries = await originalEntry()

        if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
          entries['main.js'].unshift('./client/polyfills.js')
        }

        return entries
      }
      return config
    }
})
