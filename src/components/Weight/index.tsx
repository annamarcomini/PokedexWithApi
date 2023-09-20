import { PokemonDetailsProps } from "../../types/pokemon"
import styles from './styles.module.scss'

interface PokemonDetailsPageProps {
  pokemon: PokemonDetailsProps
}
export default function Weight({pokemon}: PokemonDetailsPageProps) {
  return (
    <div className={styles.texts}>
      <h1>Weight:</h1>
      <span>{pokemon.weight}</span>
    </div>
  )
}
