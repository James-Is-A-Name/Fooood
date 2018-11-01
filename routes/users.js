const express = require('express')

const db = require('../db')

const exampleIngredientsObject = require('../exampleIngredients')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', exampleIngredientsObject)
    })
    .catch(err => {
      res.status(500).send('Well this isnt good :(' + err.message)
    })
})

module.exports = router
