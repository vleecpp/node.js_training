///////////////////////////////////////////////
// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
///////////////////////////////////////////////


exports.jyliu = function(req, res) {
	res.render('index', {
		title : "JyLiu" ,
		name : "jyliu" ,
		date : "1995/09/24"
	});
}



exports.Name = function(req, res) {
	console.log('aaaaaa');
	res.render('name_output', {
		name : req.body.NAME
	});
}

// exports.Name = function(req, res) {
// 	res.render('name_output', {
// 		name : req.body.NAME
// 	});
// }
