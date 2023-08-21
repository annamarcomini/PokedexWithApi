import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"
import axios from "axios"
import { api } from "@/services/api"

export function Repository(){
 const[repositories, setRepositories]= useState([])
       useEffect(() => {
         api
           .get("https://api.github.com/users/joaovitorqueiroz/repos")
           .then((response) => setRepositories(response.data)) // Atualiza o estado com os dados da resposta
      },[])

  

 return(
  <section className="repository"> 
  <h1>Lista de repositórios</h1>
  <ul>
   {repositories.map(repository =>{
    return <RepositoryItem repository={repository}/>
   })}
  </ul>
  </section>
 )
}