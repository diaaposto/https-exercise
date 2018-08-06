module.exports = function getHTML (options, callback) {
  let https = require('https');

  https.get(options, function (response) {
    let bufferedData = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferedData += data;
      //it gets the stuff
      //console.log("getting stuff")
    });

    response.on('end', function() {
      callback(bufferedData);
      //callback goes at the very end, after it gets the stuff and then does wtv you request it do.. in this case console.log(data)

      console.log('Response stream complete.')

    })
  })

};


// getHTML(requestOptions, printHTML);