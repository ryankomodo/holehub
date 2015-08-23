var request = require('superagent');
var HUB_HOST = 'http://127.0.0.1:3000';

function signin(nameOrEmail, password, callback) {
  request.post(HUB_HOST + '/api/signin/', {
    username: nameOrEmail,
    password: password
  }, function(err, res) {
    if (err) {
      return alert('Error: ' + err);
    }
    var rsp = res.body;
    if (rsp.code !== 0) {
      return alert('Error: ' + rsp.error);
    }
    alert('Login Success.')
  }).type('form');
}

var elem = {};

elem.signin = function(e) {
  var elemNameOrEmaiil = document.getElementById('nameOrEmail');
  var elemPassword = document.getElementById('password');
  var nameOrEmail = elemNameOrEmaiil.value.trim();
  var password = elemPassword.value.trim();
  console.log(nameOrEmail, password);
  signin(nameOrEmail, password);
};

window['elem'] = elem;
