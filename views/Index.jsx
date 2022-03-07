const React = require('react');

const myStyle = {
    color: 'brown',
    backgroundColor: 'grey',     
  };

const pokemon = require('../models/pokemon');

    class Index extends React.Component {
      render() {
          const { poke } = this.props;
          return (
                  <div style={myStyle}>
                      <h1>Gotta Catch 'Em All!</h1>
                      <ul>
                          {pokemon.map((poke, i) => {
                              return (
                                  <li>
                                      <a href={`/pokemon/${i}`}> 
                                          <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
                                      </a>
                                    {/* <h1>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h1>            */}
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }

    module.exports = Index;
