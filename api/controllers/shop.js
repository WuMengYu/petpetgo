var Shop = require('../models/shop');

exports.search = function (req, res) {
  console.log(req.body.key)
  Shop.find({$text: {$search: req.body.key}})
         .exec(function(err, shops) {
            res.json({
              shops
            })
          });
}

exports.all = function (req, res) {
  console.log(req.body.key)
  Shop.find()
         .exec(function(err, shops) {
            res.json({
              shops
            })
          });
}

exports.add = function (req, res) {
  let _shop = req.body
  shop = new Shop(_shop)
  shop.save(function (err,user) {
    if (err) return res.status(500).json({msg: '店面保存失败',err})
    res.json({
      shopId: shop._id,
      name: shop.name,
      msg: '保存成功'
    })
  })
}
