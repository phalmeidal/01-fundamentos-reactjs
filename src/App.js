import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css';

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Pedro Henrique"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus in felis et venenatis."
          />
        </main>
      </div>
    </div>
  );
}
