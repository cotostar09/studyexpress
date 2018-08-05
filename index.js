//모듈을 추출합니다.
var express = require('express');

//서버를 생성합니다.
var app = express();

//request event listener setting
app.use( function (request, response){
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<h1>Hello express</H1>');
});

//start Server
app.listen(52271, function(){
    console.log('Server Running at http://localhost:52271');
})