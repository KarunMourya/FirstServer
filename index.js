const http = require('http')
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config();
server = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'})
  fs.readFile('./build/index.html',function(error,data){
    if(error){
      res.writeHead(404)
      res.write('Error : file not found')
    }else{
      res.write(data)
    }
    res.end()
  })
})
server.listen(process.env.PORT,function(error){
  if(error){
    console.log('something went wrong',error)
  }else{
    console.log('server is listening on port ')
  }
})
