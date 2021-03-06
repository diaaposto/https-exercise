let https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {
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

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(options);

//you can pass in a url as a parameter
//try to find which part is path which is host, create obj from that
//you can pass it as a command line argument and then parse the url
//for the options obj

//you need it to be passed in as an object with a host and a path