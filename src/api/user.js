import express from 'express'
import db from './database'
const { check, oneOf, validationResult } = require('express-validator')

const user = express.Router()

user.get('/:email', async (req, res) => {
  const {email} = req.params
  let data = await db('users').select('*').where('email', email).first()
  if (data) {
    res.send(data)
  } else {
    res.status(404).json('error');
  }

})

user.post('/create', [
    check('first_name').exists(),
    check('last_name').exists(),
    check('email').exists()
  ], async (req, res) => {
  try {
    validationResult(req).throw();
    const {first_name, last_name, email} = req.body
    let data = await db('users').insert({first_name: first_name, last_name: last_name, email: email})
    res.send('ok')
  } catch (err) {
    res.status(422).json('error');
  }
})

module.exports = user
