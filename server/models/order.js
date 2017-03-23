const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      required: true
      ref: 'User'
    },
    items: [{
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Item'
    }],
    total: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: [HYG_ORDER, CLO_ORDER],
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', OrderSchema);
