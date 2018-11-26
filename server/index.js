const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('../database/db.js');
const normalizePort = require('normalize-port');
const cors = require('cors');
const morgan = require('morgan');

const port = normalizePort(process.env.PORT || '4001');

const app = express();
// const port = 710;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(`${__dirname}/../client/dist`, { maxAge: '365d' }));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});

app.get('/productdescriptions', function (req, res) {
  console.log("GET REQUEST for product descriptions");
  database.find({}, (err, data) => {
    if(err) {
      console.log("ERROR:", err);
    } else{
      res.status(200).send(data);
    }
  });
});

// app.get('/product/:productId', function (req, res) {
//   res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
// });

app.get('/product/data/:productId', function (req, res) {
  let productId = req.params.productId;
  console.log(`GET REQUEST for product ${productId}`);
  database.findOne({productId: productId}, (err, productData) => {
    if (err) {
      console.log("ERROR:", err);
    } else {
      console.log("SUCCESS");
      res.status(200).send(productData);
    }
  });
});