var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
  name: String,
  pId: String,
  Price: String,
  Description: String,
  splprice: String,
});
const Product = mongoose.model("Product",productSchema);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(40).required(),
    Price: Joi.number().min(0).required(),
    pId: Joi.number().min(0).required(),
    Description: Joi.string().min(0).required(),
    splprice: Joi.number().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports = Product;
module.exports.validate = validateProduct;