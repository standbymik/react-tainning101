const postcsseasyimport = require('postcss-easy-import')
const postcssurl = require('postcss-url')
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        postcsseasyimport({ prefix: "_" }), // keep this first
        postcssurl({ url: "inline" }),
        autoprefixer({})
    ]
}