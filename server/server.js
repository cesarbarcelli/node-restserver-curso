require('./config/config.js')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    //res.send('Hello World')
    let id = req.params.id
    res.json({
        id
    })
})

app.post('/usuario', function(req, res) {
    //res.send('Hello World')
    let body = req.body

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })

    } else {
        res.json({
            persona: body
        })
    }
})

//Actualizar
app.put('/usuario/:id', function(req, res) {
    //res.send('Hello World')
    let id = req.params.id
    res.json({
        id
    })
})

//Eliminar
app.delete('/usuario', function(req, res) {
    //res.send('Delete usuario')
    res.json('delete Usuario')
})

app.listen(3000, () => {
    console.log('Escuchando puerto:', process.env.PORT);
})