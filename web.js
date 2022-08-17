const http = require('http')
const port = 8080

const server = http.createServer(function(req, res){
    res.write('dashboard.html')
    res.end()
})

server.listen(port, function(error){
    if(error){
        console.log('Something Went Wrong', error)
    } else{
        console.log('Server is listening on port ' + port)
    }
})