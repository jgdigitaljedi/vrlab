'use strict';

var request = require('request'),
	nodemailer = require('nodemailer'),
	smtpTransport = require('nodemailer-smtp-transport'),
	path = require('path');

exports.sendMail = function(req, res) {
	var company,
		transporter = nodemailer.createTransport(
			{
				service: 'yahoo',
				auth: {
					user: process.env.JYAHOOUSER,
					pass: process.env.JYAHOOPASS
				}
			}
		),
 		data = req.body;
 	if(data.company !== undefined || data.company !== '') {
		company = ' with ' + data.company;
	} else {
		company = '';
	}
    transporter.sendMail({
        from: process.env.JYAHOOUSER,
        to: process.env.JPERSONALEMAIL,
        subject: 'Message from ' + data.firstName + ' ' + data.lastName + company,
        text: 'Phone#: ' + data.phone + ' \n ' + data.comment
    }, function(error, response){  //callback
			if(error) {
			    return res.json({error: true});
			} else {
    			return res.json({error: false});
			}
		}
   
   	);
 	transporter.close();
};
