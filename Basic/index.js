const express = require('express')
const app = express()
const port = process.env.PORT

require('dotenv').config()
console.log(process.env)


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/asphalt', (req, res) => {
    res.send('Asphalt Awesome!')
} )

app.get('/login', (req,res) =>{
    res.send('<h1>Welcome!</h1>')
})

app.listen(port, () => {
    console.log(`listern on ${port}`)
})