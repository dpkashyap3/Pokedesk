import React from 'react'
import {Link} from "react-router-dom"

function grid({pokemon}) {

    return (
        <div className="row">
        {
            pokemon.map((poke,id)=>{
            return(
            
            <div key={poke.name} className="col col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="card mb-5" >
            <div className="card-body">
            <h3 className="card-title">{poke.name.toUpperCase()}</h3>
            <Link to={`/detail/${poke.name}`}>
            <img className="img-fluid ml-5" src={`https://pokeres.bastionbot.org/images/pokemon/${id+1}.png`} height="200px" width="200px" alt={poke.name}/>
            </Link>
            </div>
            </div>
            </div>
            
                )
            }
            
           )
        }
       
        </div>
    )
}

export default grid
