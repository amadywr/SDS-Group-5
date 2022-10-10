const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')

const app = express()
const port = 3000

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('homepage')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/recommender', (req, res) => {
  res.render('recommender')
})

app.post('/recommender', (req, res) => {
  const userSelection = Object.values(req.body)
  console.log(userSelection)

  if (userSelection.includes('medicine')) {
    console.log('we recommond nursing')
  }

  res.render('result', { recommendedCourses: userSelection })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
