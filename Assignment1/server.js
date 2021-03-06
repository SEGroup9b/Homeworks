var http = require( 'http' ), 
    fs = require( 'fs' ), 
    url = require( 'url' ),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function( request, response ) {
  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
  */
  var parsedUrl = url.parse( request.url );
  //console.log(request);

  if( parsedUrl.path == '/listings' ){
    response.writeHead( 200, {'Content-Type': 'application/json'} );
    response.statusCode = 200; 
    response.write( listingData );
  } else {
    response.writeHead( 404, {'Content-Type': 'text/plain'} );
    response.statusCode = 404; 
    response.write( 'Bad gateway error' );
  }
  response.end();
};

fs.readFile('listings.json', 'utf8', (err, data) => {
  //  This callback function should save the data in the listingData variable, 
  //  then start the server. 
  if( err ) throw err;
  
  var server = http.createServer( requestHandler );
  server.listen(port, function() {
    //once the server is listening, this callback function is executed
    console.log('Server listening on: http://localhost:' + port);
  });
  console.log('Server is starting...' );

  data = JSON.stringify( data );
  data = JSON.parse( data );
  listingData = data;
});




