// var express = require('express');
// var app = express();

module.exports = function (app) {
  app.get('/:dateVal', function (req, res) {
    var dateVal = req.params.dateVal;
    var result = {
      "unix": null,
      "natural": null
    };

    if (isNaN(parseInt(dateVal))) {
        var parsing = Math.floor(Date.parse(decode) / 1000);
        console.log(parsing);

      if (!isNaN(parsing)) {
        result.unix = parsing;
        result.natural = createDate(new Date(decode));
      }

    } else if(dateVal.length <= 13){
      result.unix = parseInt(dateVal);
      result.natural = createDate(new Date(parseInt(dateVal) * 1000));
    }

    res.send(result);
  });

  function createDate(tanggal){
    var bulan = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
      ];

    var year = tanggal.getFullYear();
    var month = bulan[tanggal.getMonth()];
    var date = tanggal.getDate() < 10 ? "0" + tanggal.getDate() : tanggal.getDate() ;

    return `${month} ${date}, ${year}`;
  }
}