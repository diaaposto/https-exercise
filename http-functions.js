var getHTML = require('./myModule');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(data) {
  console.log(data);
}

// function potato(data) {
//   console.log("hey i got some data");
// }

getHTML(requestOptions, printHTML);
// getHTML(requestOptions, potato)
