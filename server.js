const express = require('express')
const next = require('next')
<<<<<<< HEAD

const config = require('config')
const port = parseInt(config.react.port, 10) || 5000
=======
const port = 5001
>>>>>>> fdd34e5ad3d2ebb41d9cef3cc5a8d89663d5821c
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

// using next-route
const routes = require('./routes')
const handle = routes.getRequestHandler(app, ({req, res, route, query}) => {
    app.render(req, res, route.page, query)
})

const Main = async () => {
    await app.prepare()
    const server = express()
    server.use(handle)
    
    // port setting
    await server.listen(port, err => {
        if (err) throw err
        console.log(`Ready on http://localhost:${port}`)
    })
}

// Main program
Main()
