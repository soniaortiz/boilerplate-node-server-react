const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const errorHandler = require('errorhandler')
const app = express()
const validator = require('express-validator')
// const {json} = require('body-parser')

// app.use(express.static(__dirname, '../build/'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(errorHandler())


app.set('port', '8000')

app.get('/', (req, res) => {
    console.log('home: ')
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

/**
 * Add your endpoints here
 */

app.get('*', (req, res) => {
    console.log('any other path: ')
    res.sendfile(path.join(__dirname, '../../public/index.html'))
    // res.status({200: 'ok'})
})

const server = http.createServer(app)
const boot = () => {
    server.listen(
        app.get('port'),
        () => {
            console.log('Express server listening')
        }
    )
}

boot()