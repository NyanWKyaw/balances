'use strict';
module.exports = function(app){
    var balance = require('../controllers/balanceController')
    // balance Route
    app.route('/balance/:accountId').get(balance.getBalance)

}