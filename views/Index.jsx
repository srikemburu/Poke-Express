const React = require('react');

const myStyle = {
    color: 'black',
    backgroundColor: 'grey',     
  };

  const anchorStyle = {
    style : 'text-transform:capitalize',
  }

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
                                      <h1>The Pokemon name is {' '}    
                                        <a href={`/pokemon/${i}`}>
                                          {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                                    </a>{' '}
                                    </h1>         
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }

    module.exports = Index;
