var mysql=require('../model/database.class');
const fs = require('fs');
var table="provider";
exports.List=function(req, res, next){
    mysql.Open();
    var col=["id", "id_user", "name", "ipaddr", "prefix"];
    mysql.GetList(col, table, function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
}

exports.Detail=function(req, res){
    mysql.Open();
	console.log("Hello We Are into detail function")
	console.log(req.body);
    var filter={
      "id":req.params.id
    };
    var col=["id", "id_user", "name", "ipaddr", "prefix"];
    mysql.Detail(col, table, filter, function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
    return res;
}

exports.Update=function(req, res){
    mysql.Open();
	console.log("Hello We Are into Update function")
    var data= req.body;    
	var filter={
      "id":req.params.id
    };
    mysql.Update(data, table, filter, function(data) {
		res.send(data);
	});
    mysql.Close();
    return res;
}

exports.Delete=function(req, res){
console.log("Hello We Are into Delete function")
    mysql.Open();
    var user={
        "id":req.params.id
    };

    mysql.Remove(user, table, function(data) {
		res.send(data);
	});
    mysql.Close();
	return res;
}

exports.AddNew=function(req, res){
    mysql.Open();
    var user=req.body;	
	console.log("Hello We are in Add New row in table");
	console.log(user);
    mysql.AddNew(table, user, function(data) {
		res.send(data);
	});
    mysql.Close();
}
