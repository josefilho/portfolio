import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, GitHub, Linkedin } from 'react-feather';

import nullByteLogo from '../../assets/square-logo-50.svg';

import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.container} >
      <header className={styles.header}>
        <img className={styles.logo} src={nullByteLogo} />

        <div className={styles.links}>
          <a href='/'>Home</a>
          <a href='/works'>Works</a>
          <a href='/college'>College</a>
        </div>

      </header>
      <div
        className={styles.socialMedia}
      >
        <a href="https://twitter.com/thebitnull" target="_blank">
          <Twitter size={24} />
        </a>
        <a href="https://www.instagram.com/nullbyte.c" target="_blank">
          <Instagram size={24} />
        </a>
        <a href="https://www.facebook.com/nullbyte.dev" target="_blank">
          <Facebook size={24} />
        </a>
        <a href="https://www.github.com/josefilho" target="_blank">
          <GitHub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/filhojosecs" target="_blank">
          <Linkedin size={24} />
        </a>
        <a href='https://www.beecrowd.com.br/judge/pt/profile/416614' target="_blank">
          <img src="https://www.beecrowd.com.br/judge/favicon.ico?1635097036" width="26" height="24" />
        </a>
      </div>
    </div >

  );
};

export { Header };