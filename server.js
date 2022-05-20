'use strict'

const Hapi = require('@hapi/hapi')

const server = new Hapi.server({
    port: '8080',
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
        return ({ message: 'Hello World'})
    }
})

server.start(err => {
    if (err) throw err;
    console.log(`Server listending on port ${server.info.uri}`)
})