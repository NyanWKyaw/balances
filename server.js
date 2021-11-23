const cors = require("cors");
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3002;


app.use(cors());
app.listen(port);
var routes = require('./api/routes/balanceRoutes')
routes(app);

console.log('Balance RESTful API server started on: ' + port);
