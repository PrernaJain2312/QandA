const express = require('express')
const hbs = require('express-hbs')
const path = require('path')
const session = require('express-session')
const passport = require('./passport')

const app = express()

app.set('view engine', 'hbs')

app.use('/', express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'lsdgdkhfbdkgbdk',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/ques', require('./routes/ques'))


app.listen(2626, () =>
    console.log("Server started on http://localhost:2626"))