'use strict';
var Balance = require('../models/balanceModel');
var balanceList = [];
balanceList.push(new Balance(1, 100));
balanceList.push(new Balance(2, 8000));

exports.getBalance = function(req,res){
    console.log("AccountId : " + req.params.accountId);
    console.log("balanceList : " + JSON.stringify(balanceList));

    var amount = balanceList.filter(b => b.id == req.params.accountId);
    console.log("Balance : " + amount);
    res.send(amount);
}