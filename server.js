// Import the express library here
const express = require('express');

// Instantiate the app here
const app = express();

//NOTE: it must start with ./ if it's just a file, not an NPM package
const pokemon = require('./models/pokemon.js');
const port = 3000;

//view engine must be above the routes
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//This is called 'middleware'. Be sure to put it at the top of your server.js file
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
// Should be placed near the top, around other app.use() calls

app.use(express.urlencoded({extended:false}));

//put this above your Show route
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});     
 
app.get('/pokemon', function(req, res){
    res.render('Sshow', { pokemon: pokemon });
});   

app.get('/backToIndex', function(req, res){
    res.render('Index', { pokemon: pokemon });
});   

app.get('/pokemon/:indexOfPokemonArray', function(req, res){
    res.render('Show', {    //second param must be an object
        pokeObj: pokemon[req.params.indexOfPokemonArray],
        pokeIndex: req.params.indexOfPokemonArray
    });
});     
  
  // Tell the app to listen on port 3000 for HTTP requests from clients
  app.listen(port, function () {
    console.log('Listening on port', port);
  });