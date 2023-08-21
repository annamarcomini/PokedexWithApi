import { useState } from "react"

export function Repository(){
 const[repositories, setRepositories]= useState([])
 return(
  <section className="repository"> 
  <h1>Lista de repositórios</h1>
  <ul>

  </ul>
  </section>
 )
}