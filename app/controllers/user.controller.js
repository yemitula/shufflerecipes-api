exports.testPublicAccess = function (req, res) {
  res.send({
    message: 'Public access'
  });
};

exports.testUserAccess = function (req, res) {
  res.send({
    message: 'User access'
  });
};

exports.testAdminAccess = function (req, res) {
  res.send({
    message: 'Admin access'
  });
};