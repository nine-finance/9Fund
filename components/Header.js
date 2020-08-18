import React from 'react';
import { Link } from '../routes';
import styles from './header.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Welcome to the 9Fund';
export default () => {
  return (
    <header className={styles.header}>
         <Link href="/">
             <a>
                 <img
                     src="/images/profile.png"
                     className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                     alt={name}
                 />
             </a>
         </Link>
        <h1 className={utilStyles.headingLg}>
            <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
        </h1>
    </header>
  );
};
