import React from 'react'
import Loading from "./Loading"

function Viewer({name,height,weight,types,abilities,id,loading,sprites}) {
    return (
        <div>
        <div className="jumbotron back jumbotron-fluid">
        <div className="container ">
        {!loading?
        <div className="row">
          <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <p className="name display-4">{name.toUpperCase()}</p>
          <div className="hero m-5">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name} className="image"/>
          </div>
          </div>
      
          <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="fix">
          <table className="table table-striped table-dark">
          <thead>
          <tr>
          
          <th scope="col">{name.toUpperCase()}</th>
          </tr>
         

          <tr>
          <th scope="col">Height</th>
          <th scope="col">{height}</th>
          </tr>
          <tr>
          <th scope="col">Weight</th>
          <th scope="col">{weight}</th>
          </tr>
          <tr>
          <th scope="col">Type</th>
          <th scope="col">{types.map((type,id)=><li key={id}>{type.type.name.toUpperCase()}</li>)}</th>
          </tr>
          <tr>
          <th scope="col">Abilities</th>
          <th scope="col">{abilities.map((type,idx)=><li key={idx}>{type.ability.name.toUpperCase()}</li>)}</th>
          </tr>
      
        </thead>
        <tbody>
          <tr>
          {sprites.front_default?
            <th scope="row" className="pl-5"><img className="ml-5 " src={sprites.front_default} alt={name} height="100px" width="100px"/></th>:null
          }
          </tr>
          <tr>
            {sprites.back_shiny?
            <th scope="row" className="pl-5"><img className="ml-5 " src={sprites.back_shiny} alt={name} height="100px" width="100px"/></th>:null
          }
          </tr>
          <tr>
          {sprites.default?
            <th scope="row" className="pl-5"><img className="ml-5 " src={sprites.default} alt={name} height="100px" width="100px"/></th>:null
            }
            </tr>
            <tr>
            {sprites.front_shiny?
            <th scope="row" className="pl-5"><img className="ml-5 " src={sprites.front_shiny} alt={name} height="100px" width="100px"/></th>
            :null}
            </tr>
            <tr>
            {sprites.back_female?
                <th scope="row" className="pl-5"><img className="ml-5 " src={sprites.back_female} alt={name} height="100px" width="100px"/></th>
                :null}
                </tr>
                <tr>
                {sprites.front_female?
                    <th scope="row"><img className="ml-5 " src={sprites.front_female} alt={name} height="100px" width="100px"/></th>
                    :null}
          </tr>
          
        </tbody>
      </table>
          </div>
      </div>
      
      
          </div>
          
          :

          <p>
         <Loading/>
          </p>
        }
        </div>
      </div>  
        </div>
    )
}

export default Viewer
