let Cat = require('./controllers/cat');
let Course = require('./controllers/course');
let User = require('./controllers/user');
var Order = require('./controllers/order');


module.exports = function (app) {
  app.get('/', (req, res) => {
    res.send('index.html')
  })

  //  course
  app.post('/course/new',Course.new)
  app.get('/course/detail/:id',Course.detail)
  app.get('/courses', Course.findAll)
  app.delete('/course/delete/:id',Course.del)

  // account
  app.post('/user/signup', User.signup)
  app.post('/user/signin', User.signin)
  app.get('/user/logout', User.logout)
  app.get('/user/:userId', User.getById)

  // order
  app.get('/orders', Order.list)
  app.post('/order/new', Order.add)
}
