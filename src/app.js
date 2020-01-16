import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import user from './api/user'

const app = express()

let port = process.env.PORT || 3000

let corsOptions = {
  origin: process.env['APP_HOST'],
  optionsSuccessStatus: 200
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('common'))
app.use(cors(corsOptions))

app.use('/user', user)

app.listen(port, () => {
  console.log('App listening on port', port)
})