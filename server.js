const express = require('express');
const app = express();

const pokemon = require('./models/pokemon.js');
const port = 3000;

//view engine must be above the routes
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

//put this above your Show route
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});     
 
app.get('/pokemon', function(req, res){
    res.render('Index', { pokemon: pokemon });
});      

app.get('/pokemon/:indexOfPokemonArray', function(req, res){
    res.render('Show', {
        pokeObj: pokemon[req.params.indexOfPokemonArray],
        pokeIndex: req.params.indexOfPokemonArray
    });
});     
  
  // Tell the app to listen on port 3000 for HTTP requests from clients
  app.listen(port, function () {
    console.log('Listening on port', port);
  });