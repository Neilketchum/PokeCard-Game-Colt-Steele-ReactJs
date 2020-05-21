import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'
class Pokedex extends Component{   
    render(){
        return(
            <div className = "Pokedex">
                <h1>
                    Pokedex!
                    <br/>
                    Base-Experience - {this.props.base_experience}
                    <br/>
                    <div className = 'Pokegame-Winner'>
                        {this.props.isWinner?'Winner':''}
                    </div>
                    <div className = 'Pokegame-Looser'>
                        {this.props.isWinner?'':'Looser'}
                    </div>
                   
                </h1>
                <div className = 'Pokedex-cards'>
                    {this.props.pokemon.map((val)=>(
                        <Pokecard id={val.id} 
                            name = {val.name}
                            base_experience = {val.base_experience}
                            type = {val.type}   
                        />
                    )) }
                </div>
            </div>
        )
    }
}
export default Pokedex