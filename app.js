const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')
<<<<<<< HEAD
const recommender = require('./javascript/recommender')
=======
const recommender = require('./recommender')
const mongoose = require('mongoose')
const AdminModel = require('./model/AdminModel')
const SubjectModel = require('./model/SubjectModel')
>>>>>>> admin-dashboard

const app = express()
const port = 3000

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
=======
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

mongoose
  .connect(
    'mongodb+srv://amadywr:amadywr@merncluster.sbby1.mongodb.net/SDS5?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))
>>>>>>> admin-dashboard

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
<<<<<<< HEAD
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/preference', (req, res) => {
  res.render('preference', { fields })
})

=======
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', async (req, res) => {
  // console.log(req.body)

  const user = await AdminModel.find({ email: req.body.email })

  console.log(user)

  if (user.length === 0) {
    console.log('user not found')
    res.redirect('/login')
  } else {
    console.log('user found')
    // res.redirect('/dashboard', { user: user })
    res.render('dashboard', { user: user })
  }
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  const subject = new SubjectModel({ name: 'maths', description: 'bullshit' })
  const user = new AdminModel({ name, email, password })

  user.subject.push(subject)
  await user.save()
  await subject.save()
  res.redirect('/login')
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/preference', (req, res) => {
  res.render('preference', { fields })
})

>>>>>>> admin-dashboard
app.post('/preference', (req, res) => {
  const userSelection = Object.values(req.body)
  console.log(req.body)

  res.render('recommendation', {
    recommendedCourses: recommender(userSelection),
  })
})

app.get('/addSubject', (req, res) => {
  res.render('addSubject')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
