const express = require('express');
const app = express();

const pokemon = require('./models/pokemon.js');
const port = 3000;

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

app.get('/pokemon/:id', function(req, res){
    res.send(req.params.id);
});      
 
// app.get('/pokemon', function(req, res){
//     res.render('Index', { pokemon: pokemon });
// });      

// app.get('/', function(req,res){
//     res.send(' <h1>Welcome to the Pokemon App!</h1>')
//   })

//   app.get('/pokemon', function(req,res){
//     res.send(pokemon)
//   })


  
  // Tell the app to listen on port 3000
  // for HTTP requests from clients
  app.listen(port, function () {
    console.log('Listening on port', port);
  });