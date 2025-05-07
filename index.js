require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// Models
const User = require('./models/User')

// Routes
const userRoutes = require('./routes/userRoutes')

app.get('/', (req, res) => {
    res.render('user/all')
})

app.use('/user', userRoutes)

app.use((req, res)=>{
    res.status(404).sendFile(__dirname + '/views/notfound.html')
})

conn.sync()
.then(app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
}))
.catch(e => console.log(e))