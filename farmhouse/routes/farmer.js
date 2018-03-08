/*jshint esversion: 6 */
var express = require('express');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router(); //Express router is used to creat the api 
var Farmer = require('../models/farmer_model');

router.get('/register',(req,res)=>{
	res.render('registerF');
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
    	res.render('registerF',{errors:errors});
    }
    else {
    	var newFarmer = new Farmer({
    		firstname: firstname,
			lastname: lastname,
			username: username,
			email: email,
			password: password,
    	});
    	bcrypt.genSalt(10,(err,salt)=>{
    		bcrypt.hash(newFarmer.password,salt,(err,hash)=>{
    			if(err){
      				throw err;
      			}
      			newFarmer.password = hash;
      			newFarmer.save((err)=>{
      				if(err){
      					throw err;
      					return;
      				}else{
      					req.flash('success','You are now registered and can now login');
      					res.redirect('/farmer/login');
      				}
      			});
    		});
  		});
    }
});

router.get('/login',(req,res)=>{
	res.render('loginF');
});

router.post('/login',(req,res,next)=>{
	passport.authenticate('local', {
    	successRedirect:'/farmer/dashboard',
    	failureRedirect:'/farmer/login',
    	failureFlash: true
  	})(req, res, next);
});

router.get('/logout',(req,res)=>{
	req.logout();
	req.flash('You are logged out');
	res.redirect('/farmer/login');
});

module.exports = router;