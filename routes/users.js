const route = require('express').Router()
const User = require('../db/models').User
const passport = require('../passport')


route.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        res.redirect('/user/')
    })
})
route.post('/', passport.authenticate('local', {
    if (req.user) {
    return res.render('ques')
    }
    res.redirect('/')
}))

exports = module.exports = route