var data = require("../data.json");

exports.viewHistory = function(req, res) {
    res.render('history', data);
};