const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')
const courseRecommender = require('./courseRecommender')

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

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/recommender', (req, res) => {
  res.render('recommender', { fields })
})

app.post('/recommender', (req, res) => {
  const userSelection = Object.values(req.body)
  console.log(req.body)

  // console.log('from func: ', courseRecommender(userSelection))

  res.render('result', { recommendedCourses: courseRecommender(userSelection) })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
