const React = require('react')
class Show extends React.Component {
   render () {
    const pokeObj = this.props.pokeObj
    const pokeIndex = this.props.pokeIndex

    return (
      <div>
        <h1> Pokemon Show Page </h1> 
        <h2>The index number for {pokeObj.name} is {pokeIndex} </h2>  
      </div>
      );

    }
 }
 module.exports  = Show