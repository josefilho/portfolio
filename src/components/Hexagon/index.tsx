import React from 'react';

import styles from './hexagon.module.css';
import hexagon from '../../assets/hexagon.svg';

interface HexagonProps {
  image: string;
  size?: number;
}

const Hexagon: React.FC<HexagonProps> = ({ image, size }) => {
  return (
    <div className={styles.container}>
      <img
        src={hexagon}
        className={styles.hexagon}
      />
      <img
        className={styles.image}
        src={image}
        style={{ width: size, height: size }}
      />
    </div>
  )
}

export { Hexagon };
