var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name : "IPHONE 14",
      category : "Mobile",
      description : "Best iphone ever",
      image : "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
    },

    {
      name : "IPHONE 14 PRO",
      category : "Mobile",
      description : "Best iphone ever",
      image : "https://istyle.bg/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/c/z/czcs_iphone14pro_q422_deep-purple_pdp-images_position-1a_t_4_8_5.jpg"
    },

    {
      name : "Samsung S23 Ultra",
      category : "Mobile",
      description : "Best camera",
      image : "https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/product_color_phantom_black.png?imwidth=480"
    },

    {
      name : "Samsung S22",
      category : "Mobile",
      description : "Best camera",
      image : "https://images.samsung.com/in/smartphones/galaxy-s23/buy/product_color_green.png?imwidth=480"
    }
  ]



  res.render('index', {products});
});

module.exports = router;
