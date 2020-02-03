import React,{useState,useEffect} from 'react'
import axios from "axios"
import Grid from "./Grid"
function Home() {

  const [pokemon,setpokemon]=useState([])
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)


  useEffect(() => {
   setloading(true)
     
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response=>{
      setpokemon(response.data.results)
    
      setloading(false)
      
      })
         .catch(error=>{
           seterror(error=error)
        })

    
  
  }, [])
       
  
    return (
        
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <h1 className="display-4">LIST OF POKEMON</h1>
        <hr/>
       
        <Grid pokemon={pokemon}/>
      
         
    
        </div>
       
        </div>
      
    )
}

export default Home
