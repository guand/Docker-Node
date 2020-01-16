import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express()

let port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/test', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log('App listening on port', port)
})