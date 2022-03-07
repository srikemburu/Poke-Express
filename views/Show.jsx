// Import the express library here
const React = require('react')

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

class Show extends React.Component {
   render () {
    const pokeObj = this.props.pokeObj
    const pokeIndex = this.props.pokeIndex

    return (
      <div>
        <h1> Gotta Catch 'Em All </h1> 
        <h2>{pokeObj.name.charAt(0).toUpperCase() + pokeObj.name.slice(1)}</h2>
        <img src={pokeObj.img + ".jpg"}  width="200" height="200"></img>

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

 module.exports  = Show