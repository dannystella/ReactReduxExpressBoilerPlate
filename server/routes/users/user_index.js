const router = require('express').Router();

router.get('/', function(req, res) {
  console.log("hit user route");
 
})

module.exports = router;