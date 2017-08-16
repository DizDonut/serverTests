var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestOne(request, response){
    response.end("You are very tall and have good bone structure." + request.url);
}

function handleRequestTwo(request, response){
  response.end("Unfortunately you are very homely." + request.url);
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORT1, function(){
  console.log("Server is listening on: http://localhost:%s", PORT1);
})

serverTwo.listen(PORT2, function(){
  console.log("Server is listening on: http://localhost:%s", PORT2);
})
