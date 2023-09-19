import { PokemonDetailsProps } from "@/types/pokemon";
import styles from './styles.module.scss'

interface PokemonDetailsPageProps {
  pokemon: PokemonDetailsProps
}

export default function ({pokemon}: PokemonDetailsPageProps){
return (
  <div className={styles.texts}>
    <h1>Height:</h1>
    <p>{pokemon.height}</p>
  </div>
)
}