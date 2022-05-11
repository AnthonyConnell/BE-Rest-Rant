const { append } = require('express/lib/response')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-restaurant.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-resting.jpg'
      }]
      
    res.render('places/index', { places })
})

module.exports = router
