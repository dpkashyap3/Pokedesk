import React,{useEffect,useState} from 'react'
import ShowDetail from "./ShowDetail"
import axios from "axios"

function SearchBy() {

  const [input, setinput] = useState("")
  const [pokemon,setpokemon]=useState([])
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false) 



  const getpokemon=(e)=>{
       e.preventDefault()
       setloading(true)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then(response=>{
      setloading(false)
      setpokemon(response.data)
    })
    .catch(error=>{
    seterror(error)
    })
    }
  
  const showloader=()=>{
    if(loading){
      return(
        <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">Loading...........</h4>
        </div>
      )
    }
  }



  return (
    <div className="App">
    
    <div className="container">
    <form>
    <div className="form-group">
    <h1 className="display-1">Poke Desk</h1>
    <input type="text" className="form-control" onChange={(e)=>setinput(e.target.value.toLowerCase())} placeholder="Enter The Name Of The Pokemon"/>
    <small id="emailHelp" className="form-text text-muted">Enter The Name Of The Pokemon You Will Want To Search And See Result Below</small>
    <br/>
    <button className="btn btn-lg btn-warning" onClick={getpokemon}>Search Your Result</button><hr/>
    </div>
    {
    !loading ?
     
      <ShowDetail pokemon={pokemon}/>
      :
      showloader()
    }
    </form>
    </div>
    </div>
  )
}
  
export default SearchBy