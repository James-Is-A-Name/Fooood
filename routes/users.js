const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {categories: [{
        name: "veg",
        items: [
          {name:"Carrot"},
          {name:"potato"},
          {name:"tomato"}
        ]
      },
      {
        name: "meat",
        items: [
          {name:"beef"},
          {name:"lamb"},
          {name:"more beef"}
        ]
      },
      {
        name: "grain",
        items: [
          {name:"Carrot"},
          {name:"potato"},
          {name:"tomato"}
        ]
      }
    ]
    })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
