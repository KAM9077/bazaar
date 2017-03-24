const Order = require('../models/order'),
  User = require('../models/user');

exports.getOrder = function (req, res, next) {
  const orderId = req.params.orderId;

  Order.findOne({ _id: orderId })
    .populate({
      path: 'items',
      select: 'name value unit'
    })
    .exec((err, order) => {
      if (err) {
        res.send({ error: err });
        return next(err);
      }
      return res.status(200).json({ order: order });
    });
};

exports.addItem = function (req, res, next) {
  const itemId = req.params.itemId;
  const orderId = req.params.orderId;

  Order.findOne({ orderId })
    .populate({
      path: 'author',
      select: 'profile.firstName profile.lastName'
    })
    .exec((err, order) => {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      return res.status(200).json({ id: orderId });
    });
};
