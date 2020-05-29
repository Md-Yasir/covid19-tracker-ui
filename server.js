const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/covid19telangana'
app.use(express.static(__dirname + '/dist/Covid19-Front-End')); 
 
app.get('*', function(req,res) {
  // Replace the '/dist/covid19telangana/index.html'
  res.sendFile(path.join(__dirname + '/dist/Covid19-Front-End/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);