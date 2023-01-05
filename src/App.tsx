import { Header } from './components/Header';

import { Hexagon } from './components/Hexagon';

import './global.css';

import styles from './App.module.css';

function App() {

  return (
    <>
      <Header />

      <div className={styles.content}>

      </div>

      <div className={styles.skillContainer}>
        <div className={styles.normal}>
          <Hexagon
            image='https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg'
          />
          <Hexagon
            image='https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg'
          />
        </div>

        <div className={styles.right}>
          <Hexagon
            image='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
          />
          <Hexagon
            image='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
          />
        </div>

        <div className={styles.normal}>
          <Hexagon
            image='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
            size={75}
          />
          <Hexagon
            image='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
            size={75}
          />
        </div>

        <div className={styles.right}>
          <Hexagon
            image='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
          />
          <Hexagon
            image='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
          />
        </div>
      </div>
    </>
  )
}

export default App;
