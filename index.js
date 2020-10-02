const http = require('http');

const port=8000;

const uset= require('fs');

function handler(req,res){
 
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    // res.end("<h1>got u !!</h1>");
   
      let urll;
      
      switch(req.url){
          case '/':
          urll = './index.html';
          break;
          
          case '/profile':
          urll= './profile.html';
          break;
          
          default:
          urll='./404.html';
      }

      uset.readFile(urll, function(err,data){
        if(err)
        {
            console.log('error');
            return res.end('errorrr');
        }

        return res.end(data);
      });

    }

const server=http.createServer(handler);

server.listen(port,function(err){

    if(err){
        console.log(err);
        return;
    }
    console.log("server is running on port", port);
});