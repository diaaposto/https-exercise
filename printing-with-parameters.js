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