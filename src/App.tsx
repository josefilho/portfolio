import { Header } from './components/Header';

import { Hexagon } from './components/Hexagon';

import './global.css';

import styles from './App.module.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.content}>
        <div className={styles.presentation}>
          <h1>Welcome</h1>

          <h2>I'm José, a <span>FullStack Engineer</span> and a <span>Computer Science Student</span></h2>

          <p>Be the Pull Request you wish in the world</p>

          <p>In the first year of studying computer science I noticed that it would teach me a lot, but not everything I would like. So I took Rocketseat's GoStack 14 to learn more about web and mobile development. Since then I've been improving on better algorithms and a wider range of technologies.</p>
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
              // size={55}
            />
            <Hexagon
              image='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
              // size={75}
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
      </div>

      <svg className={styles.backdrop} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3" filter="url(#filter0_f_607_25)">
          <circle cx="890.5" cy="589.5" r="490.5" fill="#2F7EDA"/>
        </g>
        <defs>
          <filter id="filter0_f_607_25" x="0" y="-301" width="1781" height="1781" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_607_25"/>
          </filter>
        </defs>
      </svg>
      
    </div>
  )
}

export default App;
