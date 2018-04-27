const route = require('express').Router()
const QuesBank = require('../db/models')

route.get('/', (req, res) => {
    QuesBank.findall()
        .then((ques) =>
            res.status(200).render('ques', {ques})
        )
        .catch((err) =>
            res.status(500).json({message: err.message})
        )
})

route.post('/', (req, res) => {
    QuesBank.create({
        ques: reqBody.ques,
        answer: reqBody.answer
    })
        .then((addedques) =>
                res.status(201).json(addedques)
        )
        .catch((err) =>
            res.status(500).json({message: err.message})
        )
})



exports = module.exports = route
