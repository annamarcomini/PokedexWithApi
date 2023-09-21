import { PokemonDetailsProps } from "@/types/pokemon";
import styles from './styles.module.scss'

interface HeightProps {
  value: number;
}

export default function Height ({value}: HeightProps){
return (
  <div className={styles.texts}>
    <p>Height:</p>
    <span>{(value / 10).toFixed(2)}m</span>
    {/* para concatenar de acordo com as casas decimais */}
  </div>
)
}