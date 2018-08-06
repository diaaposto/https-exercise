// This function should use a buffering technique to append each chunk of data to a variable as it is received,
// and then console.log the data once all of the data has been received.
// Buffering in this context means the technique you've used before (usually in loops or conditionals)
// of creating an empty variable and adding data to it.


// Streams allow us to read and write data from and to a variety of sources
// Streams can be readable, writable, duplex (read/write), and transform (a version of duplex where the readable data is modified as it is written)

// Streams generally have in common several handler functions, that are invoked when certain events happen.

// stream.on('data', callback) => Invoked when a chunk of data becomes available
// stream.on('error', callback) => Invoked if there is an error reading or writing data
// stream.on('end', callback) => Invoked when no more data is available (the end of the readable stream)
// stream.on('finish', callback) => Invoked when all of the data has been written (the end of the writable stream).

let https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  //get calls function (response) once it gets the thing (data) - call to it, like facebook.com - the callback runs
  //declare an empty string - because data doesn't come in a JSON object

  https.get(requestOptions, function (response) {
    let bufferedData = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferedData += data;
    });

    response.on('end', function() {
      console.log(bufferedData);

      console.log('Response stream complete.')
    })
  })

}

getAndPrintHTML();