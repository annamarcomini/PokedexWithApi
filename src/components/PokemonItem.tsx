interface PokemonItemProps{
 pokemon:{
  name:string
  description: string
  html_url: string
 }
}
export function PokemonItem ( {pokemon}: PokemonItemProps) {
 return (
   <li>
     <strong>{pokemon.name}</strong>
     
   </li>
 )
}