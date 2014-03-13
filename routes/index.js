
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  
};

exports.value = function(req, res){
	console.log(req.query.q);
	res.render('index', { title: 'TESTING', number: req.query.q});
}

exports.test = function(req, res){
  res.render('test', { title: 'Express' });
};