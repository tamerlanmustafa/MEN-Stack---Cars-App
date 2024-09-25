const express = require('express')


const app = express()



app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send("HOME")
})

app.get('/new', (req, res) => {
    res.render('new')
} )

app.post('/create', (req, res) => {
    res.send('Your blog has been successfully created!')
})

app.listen(3000, () => {
    console.log('Server is running on port: 3000')
}) 



 