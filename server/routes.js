/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

module.exports = function(app) {

  // Insert routes below
  // app.use('/api/things', require('./api/thing'));
  // app.use('/api/users', require('./api/user'));

  app.get('/vrmail', function (req, res) {
    var company;
    var transporter = nodemailer.createTransport(
          {
            service: 'yahoo',
            auth: {
              user: process.env.JYAHOOUSER,
              pass: process.env.JYAHOOPASS
            }
          }
        ),
        data = req.body;
      if (data.company !== undefined || data.company !== '') {
        company = ' with ' + data.company;
      } else {
        company = '';
      }
        transporter.sendMail({
            from: process.env.JYAHOOUSER,
            to: process.env.JPERSONALEMAIL,
            subject: 'Message from ' + data.firstName + ' ' + data.lastName + company,
            text: 'Phone number: ' + data.phone + ' \n ' + data.comment
        }, function(error, response){  //callback
          if(error) {
              return res.json({error: true});
          } else {
              return res.json({error: false});
          }
        }
       
        );
      transporter.close();
    });



  // app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
