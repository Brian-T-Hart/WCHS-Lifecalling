// Dependencies
var express = require("express");
var path = require("path");
var router = express.Router();

// requiring our models
var db = require("../models");

// route to get student info to set initial state of components upon login
router.post('/getStudentInfo', (req, res, next) => {
	db.students.findOne({
		attributes: ['strengths', 'mbti', 'gifts','loveLanguages', 'intelligences'],
		where: {
			id: req.body.id,
			username: req.body.username
		}
	})
		.then(function (results) {
			res.json(results)
		})
		.catch(function (err) {
			res.json(err);
		});
})

// route to get student strengths
router.post('/getStrengths', (req, res, next) => {
	db.students.findOne({
		attributes: ['strengths'],
		where: {
			id: req.body.id,
			username: req.body.username
		}
	})
	.then(function(results) {
		res.json(results)
	})
	.catch(function (err) {
		res.json(err);
	});
})

// route to update the strengths of a student
router.post('/updateStrengths', (req, res, next) => {
	console.log("_________________________________");
	console.log("updateStrengths..index.routes.js");
	console.log("_________________________________");
	db.students.update({
		strengths: req.body.strengths
	},
	{
		where: {
			id: req.body.id
		}
	})
	.then(function (results) {
		console.log("results from updateStrengths..index.js ", results);
		res.json(results)
	})
	.catch(function (err) {
		res.json(err);
	});
});

// route to get the Meyers-Briggs results of a particular student
router.post('/getMBTI', (req, res, next) => {
	db.students.findOne({
		where: {
			id: req.body.id,
			username: req.body.username
		}
	})
		.then(function (results) {
			res.json(results.mbti)
		})
		.catch(function (err) {
			res.json(err);
		});
})

// route to update Meyers-Briggs info for a student
router.post('/updateMBTI', (req, res, next) => {
	console.log("_________________________________");
	console.log("update myMbti..index.routes.js");
	console.log("_________________________________");
	db.students.update({
		mbti: req.body.myMbti
	},
		{
			where: {
				id: req.body.id
			}
		})
		.then(function (results) {
			console.log("results from updateStrengths..index.js ", results);
			res.json(results)
		})
		.catch(function (err) {
			res.json(err);
		});
});

// route to get spiritual gifts for a particular student
router.post('/getGifts', (req, res, next) => {
	db.students.findOne({
		attributes: ['gifts'],
		where: {
			id: req.body.id,
			username: req.body.username
		}
	})
		.then(function (results) {
			res.json(results)
		})
		.catch(function (err) {
			res.json(err);
		});
})

// route to update spiritual gifts of a particular student
router.post('/updateGifts', (req, res, next) => {
	console.log("_________________________________");
	console.log("update myGifts..index.routes.js");
	console.log("_________________________________");
	db.students.update({
		gifts: req.body.myGifts
	},
		{
			where: {
				id: req.body.id
			}
		})
		.then(function (results) {
			console.log("results from updateStrengths..index.js ", results);
			res.json(results)
		})
		.catch(function (err) {
			res.json(err);
		});
});

// route to update spiritual gifts of a particular student
router.post('/updateLoveLanguages', (req, res, next) => {
	console.log("_________________________________");
	console.log("update LoveLanguages..index.routes.js");
	console.log("_________________________________");
	db.students.update({
		loveLanguages: req.body.myLoveLanguages
	},
		{
			where: {
				id: req.body.id
			}
		})
		.then(function (results) {
			console.log("results from updateStrengths..index.js ", results);
			res.json(results)
		})
		.catch(function (err) {
			res.json(err);
		});
});

// route to update multiple intelligences of a particular student
router.post('/updateIntelligences', (req, res, next) => {
	console.log("_________________________________");
	console.log("update LoveLanguages..index.routes.js");
	console.log("_________________________________");
	db.students.update({
		intelligences: req.body.myIntelligences
	},
		{
			where: {
				id: req.body.id
			}
		})
		.then(function (results) {
			console.log("results from updateStrengths..index.js ", results);
			res.json(results)
		})
		.catch(function (err) {
			res.json(err);
		});
});

// route to update multiple intelligences of a particular student
router.post('/saveDocument', (req, res, next) => {
	console.log("_________________________________");
	console.log("update saveDocument..students.js");
	console.log("_________________________________");
	db.students.update(
		{
			documentUrl: req.body.documentUrl
		},
		{
			where:
				{
					id: req.body.id
				}
		}
	)
	.then(
		function (results) {
			console.log("results from saveDocument..studens.js ", results);
			res.json(results)
		}
	)
	.catch(
		function (err) {
			res.json(err);
		}
	);
});

module.exports = router;