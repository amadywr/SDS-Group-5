const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')
const recommender = require('./javascript/recommender')

const app = express()
const port = 3000

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const fields = [
  'Maths',
  'IT',
  'Medicine',
  'Anthropology',
  'History',
  'Law',
  'Languages',
  'Philosophy',
  'Religion',
  'Economics',
  'Art',
]

app.get('/', (req, res) => {
  res.render('homepage')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/preference', (req, res) => {
  res.render('preference', { fields })
})

app.post('/preference', (req, res) => {
  const userSelection = Object.values(req.body)
  console.log(req.body)

  res.render('recommendation', {
    recommendedCourses: recommender(userSelection),
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
