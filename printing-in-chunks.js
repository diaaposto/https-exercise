// Your first function getAndPrintHTMLChunks will utilize the https library to GET a given URL.

// This function should console.log each chunk of data as it is received, concatenated with a newline character
// ('\n') so you can visualize each chunk.
// Remember in this and each subsequent Step - you will always need to invoke (call) the function you wrote.

// Streams allow us to read and write data from and to a variety of sources
// Streams can be readable, writable, duplex (read/write), and transform (a version of duplex where the readable data is modified as it is written)

// Streams generally have in common several handler functions, that are invoked when certain events happen.

// stream.on('data', callback) => Invoked when a chunk of data becomes available
// stream.on('error', callback) => Invoked if there is an error reading or writing data
// stream.on('end', callback) => Invoked when no more data is available (the end of the readable stream)
// stream.on('finish', callback) => Invoked when all of the data has been written (the end of the writable stream).

let https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received. Data: \n' , data);

  });

  response.on('end', function() {
    console.log('Response stream complete.')
  });
});

}

getAndPrintHTMLChunks();
