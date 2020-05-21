import React, { Component } from "react";
import './Pokecard.css'
// const Poke_Api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const Poke_Api = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`
let padToThree = (number)=>(number<=999 ? `00${number}`.slice(-3):number)
class Pokecard extends Component {
  render() {
    const imgSrc = `${Poke_Api}${padToThree(this.props.id)}.png`
    return <div className= 'Pokecard'>
                <h4 className = 'heading'>{this.props.name}</h4>
                  <div className = 'Pokecard-Image'>
                    <img src = {imgSrc}  alt =''/>
                  </div>
                <div>
                    Type : {this.props.type}
                    <br/>
                    EXP : {this.props.base_experience}
                </div>
          </div>
  }
}
export default Pokecard;