const React = require('react');

const myStyle = {
    color: 'black',
    backgroundColor: 'grey',     
};

const buttonStyle = {
    background: 'pink',
    width : '15%',
    display : 'block',
    color : 'red',
    font : '50px',
    margin : '30px',
    padding : '10px 20px',
    border: '4px solid black',
}

const pokemon = require('../models/pokemon');

    class Sshow extends React.Component {
      render() {
          const { poke } = this.props;
          return (
                  <div style={myStyle}>
                      <h1>Gotta Catch 'Em All!</h1>
                      <ul>
                          {pokemon.map((poke, i) => {
                              return (
                                  <li>
                                    <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
                                    <img src={poke.img + ".jpg"}  width="200" height="200"></img>        
                                  </li>
                              );
                          })}
                      </ul>
                      <nav>
                        <a href="/backToIndex">
                            <button style={buttonStyle}>Back</button>
                            <br></br>
                            <br></br>
                        </a>    
                      </nav>
                  </div>
          );
      }
    }

    module.exports = Sshow;
