/*jshint esversion: 6 */
var express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var path = require('path');
var router = express.Router(); //Express router is used to creat the api 
var Investor = require('../models/investor_model'); //Require the model for creating an investor


router.get('/register',(req,res)=>{
	res.render('register');
});

router.post('/register',(req,res)=>{
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var password2 = req.body.password2;

	req.checkBody('firstname', 'First Name is required').notEmpty();
	req.checkBody('lastname', 'Last Name is required').notEmpty();
	req.checkBody('username', 'User Name is required').notEmpty();
  	req.checkBody('email', 'Email is required').notEmpty();
  	req.checkBody('email', 'Email is not valid').isEmail();
  	req.checkBody('password', 'Password is required').notEmpty();
  	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  	let errors = req.validationErrors();

  	if(errors){
    	res.render('register',{errors:errors});
    }
    else {
    	var newInvestor = new Investor({
			firstname: firstname,
			lastname: lastname,
			username: username,
			email: email,
			password: password,
		});
		bcrypt.genSalt(10,(err,salt)=>{
    		bcrypt.hash(newInvestor.password,salt,(err,hash)=>{
    			if(err){
      				throw err;
      			}
      			newInvestor.password = hash;
      			newInvestor.save((err)=>{
      				if(err){
      					throw err;
      					return;
      				}else{
      					req.flash('success','You are now register and can now login');
      					res.redirect('/investor/login');
      				}
      			});
    		});
  		});
    }
});

router.get('/login',(req,res)=>{
	res.render('login');
});

router.post('/login',(req,res,next)=>{
	passport.authenticate('local', {
    	successRedirect:'/investor',
    	failureRedirect:'/investor/login',
    	failureFlash: true
  	})(req, res, next);
});

router.get('/logout',(req,res)=>{
	req.logout();
	req.flash('You are logged out');
	res.redirect('/');
});

// Access Control
function ensureAuthenticated(req, res, next){
  	if(req.isAuthenticated()){
    	return next();
  	}else {
    	req.flash('danger', 'Please login');
    	res.redirect('/investor/login');
  	}
}


module.exports = router;
