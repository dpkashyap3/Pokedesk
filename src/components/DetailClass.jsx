import React, { Component } from 'react'
import axios from "axios"
import "./Details.css"

import Viewer from "./Viewer"
export default class Detail extends Component {
   
       constructor(props) {
           super(props);
           this.state = {
               name:"",
               id:"",
               types:[],
               weight:"",
               height:"",
               abilities:[],
               sprites:{},
               loading:true
             }
       }
        
    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
        .then(response=>{
          this.setState({
              name:response.data.name,
              height:response.data.height,
              weight:response.data.weight,
              id:response.data.id,
              types:response.data.types,
              abilities:response.data.abilities,
              sprites:response.data.sprites,
              loading:false
            })
        })
        .catch(error=>error)
    }
    

    render = () =>
    {
        return(
        
        <Viewer name={this.state.name}
        height={this.state.height}
        weight={this.state.weight}
        id={this.state.id}
        types={this.state.types}
        abilities={this.state.abilities}
        sprites={this.state.sprites}
        lading={this.state.loading}
        />
              
          )
    }
    
}