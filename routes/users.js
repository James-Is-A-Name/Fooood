const express = require('express')

const db = require('../db')

const exampleIngredientsObject = require('../exampleIngredients')
const exampleDishesObject = require('../exampleDishes')

const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.query)
  res.render('ingredients', exampleIngredientsObject)
  // db.getUsers()
  //   .then(users => {
  //     res.render('index', exampleIngredientsObject)
  //   })
  //   .catch(err => {
  //     res.status(500).send('Well this isnt good :(' + err.message)
  //   })
})



router.post('/dishes', (req, res) => {
  res.redirect('/dishes')
})


router.get('/dishes', (req, res) => {
  res.render('dishes', exampleDishesObject)
  // db.getDishes(ingredients)
  //   .then(dishes => {
  //     res.render('dishes', exampleDishesObject)
  //   })
  //   .catch(err => {
  //     res.status(500).send('I think I dropped a plate' + err.message)
  //   })
})

module.exports = router
