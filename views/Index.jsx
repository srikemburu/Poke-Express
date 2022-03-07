const React = require('react');

const myStyle = {
    color: 'brown',
    backgroundColor: 'grey',     
  };

  // const anchorStyle = {
  //   style : 'text-transform:capitalize',
  // }

const pokemon = require('../models/pokemon');

    class Index extends React.Component {
      render() {
          const { poke } = this.props;
          return (
                  <div style={myStyle}>
                      <h1>See All The Pokemon!</h1>
                      <ul>
                          {pokemon.map((poke, i) => {
                              return (
                                  <li>
                                    <h1>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h1>           
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }

    module.exports = Index;
