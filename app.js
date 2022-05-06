// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

//Endpoint
//methods HTTP: GET, POST, PUT, DELET
app.get('/v1/explorers', (req,res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id:1, name: "Cecilia1"}
    const explorer2 = {id:2, name: "Cecilia2"}
    const explorer3 = {id:3, name: "Cecilia3"}
    const explorer4 = {id:4, name: "Cecilia4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    //http code status:
    res.status(200).json(explorers) //se regresa info en formato json
})

app.get('/v1/explorers/:id', (req,res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1, name: "Cecilia1"}
    res.status(200).json(explorer) //se regresa info en formato json
})

//cuando es un POST se usa un codigo diferente, aqui 201
//POST es para crear
app.post('/v1/explorers', (req,res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    console.log(req.body)
    res.status(201).json({message: "Created"}) //se regresa info en formato json
})

app.put('/v1/explorers/:id', (req,res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    res.status(200).json({message: "Updated"}) //se regresa info en formato json
})