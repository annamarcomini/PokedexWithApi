import styles from './styles.module.scss'
import { FiSearch } from "react-icons/fi"
export function Search(){
 return(
  <div className={styles.container}>
   
  <input type='text'
  placeholder="Ex: Pikachu..."
  >
  </input>
  <button type='button'><FiSearch/></button>
  </div>
 )
}