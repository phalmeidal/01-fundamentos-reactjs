import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://classic.exame.com/wp-content/uploads/2022/11/Selecao-Brasileira-2022.jpg?quality=50&strip=info&w=500"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/diego3g.png"/>

        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}