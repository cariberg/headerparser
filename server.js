var express = require('express')
var app = express()

app.get('/', function(req,res) {
    var rawIP = req.connection.remoteAddress
    if (rawIP.indexOf(':') >= 0) {
        var formIP = rawIP.split(':').reverse()[0]
    }
    else {
        formIP = rawIP
    }
    var rawUserAg = req.headers['user-agent']
    var regExp = /\(([^)]+)\)/g;
    var match = rawUserAg.match(regExp)[0]
    var formUserAg = match.substr(1,match.length-2)
    var rawLang = req.headers['accept-language']
    var formLang = rawLang.split(',')[0]
    res.json({IPaddress : formIP, Language : formLang, Software : formUserAg})
})

app.listen(8080, function () {
})

