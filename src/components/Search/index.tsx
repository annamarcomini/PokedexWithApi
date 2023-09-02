import styles from './styles.module.scss'

export function Search(){
 return(
  <div className={styles.Container}>
  <input type='text'
  placeholder="Ex: Pikachu..."
  >
  </input>
  <button type='button'>Buscar</button>
  </div>
 )
}