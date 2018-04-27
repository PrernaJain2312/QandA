const route = require('express').Router()
const QuesBank = require('../db/models').QuesBank

route.get('/', (req, res) => {
    QuesBank.findAll()
        .then((ques) =>
            // res.status(200).json({message: ques})
            console.log(ques)
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
