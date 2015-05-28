var router = require('express').Router();


//get page by cat and subcat
router.get('/pages/:prod/:idcat/:id', function (req, res) {
	var id = req.params.id
	var prod = req.params.prod
	var idcat = req.params.idcat
	var info = {
				"id": id,
				"prod": prod,
				"idcat": idcat
				};
	res.send(info)

//send a variable that will make a part of the SPA visible, rather than sending any actual content!!!
})

//get page by cat
router.get('/pages/:prod/:id', function (req, res) {
	var id = req.params.id
	var prod = req.params.prod
	var info = {
				"id": id,
				"prod": prod
				};
	res.send(info)

//send a variable that will make a part of the SPA visible, rather than sending any actual content!!!
})

module.exports = router
