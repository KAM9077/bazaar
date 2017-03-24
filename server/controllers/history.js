const Order = require('../models/order'),
  User = require('../models/user');
const CLO_ORDER = require('../constants').CLO_ORDER;
const HYG_ORDER = require('../constants').HYG_ORDER;

exports.getOrders = function (req, res, next) {
  const userId = req.params.userId;
  const type = req.params.type;

  Order.find({ userId: userId })
    .sort('-createdAt')
    .populate({
      path: 'items',
      select: 'name value unit'
    })
    .exec((err, orders) => {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      const resultOrders = [];
      orders.forEach((order) => {
        if (!type || typeof type === 'undefined' || type === order.type) {
          resultOrders.push(order);
        }
      });
      return res.status(200).json({ orders: resultOrders });
    });
};

exports.menu = function(req, res, next) {
  res.status(200).json({ types: [HYG_ORDER, CLO_ORDER ]});
}
