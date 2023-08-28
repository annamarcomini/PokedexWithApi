import { useEffect, useState } from "react"
import { PokemonItem } from "./PokemonItem"
import axios from "axios"
import { api } from "@/services/api"

export function Pokemon(){
 const[pokemons, setPokemons]= useState([])
       useEffect(() => {
         api
           .get("https://pokeapi.co/api/v2/pokemon")
           .then((response) => {
            console.log(response)
            setPokemons(response.data.results)
           }) // Atualiza o estado com os dados da resposta
           
      },[])

  

 return(
  <section className="pokemon"> 
  {pokemons.map(pokemon =>{
    return <PokemonItem pokemon={pokemon}/>
   })} 
  
  </section>
 )
}