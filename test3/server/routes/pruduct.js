var express = require('express');
var router = express.Router();
const Pruduct = require('../mongods/actors/Pruduct')
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './dist/src/img/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({
  storage: storage
})
router.post('/addpruduct', upload.single('file'), async function (req, res, next) {
  let file = req.file;
  let {
    name,
    price,
    disprice
  } = JSON.parse(req.body.data)

  let imgurl = '/src/img/'+file.originalname;
  let rz = await Pruduct.create({
    name,
    disprice,
    imgurl,
    price
  })
  res.send(rz)
})
router.get('/getpruduct', async function (req, res, next) {
  let arr = await Pruduct.getPruduct();
  
  res.send(arr)
})
module.exports = router;
