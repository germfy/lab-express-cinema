const express = require('express');
const router  = express.Router();
//const mongoose = import('mongoose')
const Movie = require('../Models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find({}, 'title image')
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json({
        text: "Error del servidor",
        err: err
      })
    })
});

router.get('/:id', (req, res, next)=>{
  Movie.findById(req.params.id)
    .then(theMovie =>{
      res.status(200).json(theMovie)
    }).catch(err =>{
    res.status(500).json({
      text: "Error del servidor",
      err: err
    })
    }
  )
})
module.exports = router;
