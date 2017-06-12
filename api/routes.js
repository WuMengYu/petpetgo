let Shop = require('./controllers/shop');
let User = require('./controllers/user');
var Order = require('./controllers/order');


module.exports = function (app) {
  app.get('/', (req, res) => {
    res.send('index.html')
  })

  //  Shop
  app.post('/shop/search',Shop.search)
  app.post('/shop/new', Shop.add)
  app.get('/shops', Shop.all)



  // account
  app.post('/user/signup', User.signup)
  app.post('/user/signin', User.signin)
  app.get('/user/logout', User.logout)
  app.get('/user/:userId', User.getById)

  // order
  app.get('/orders', Order.list)
  app.post('/order/new', Order.add)
}
