import Head from 'next/head'
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.title}>
      <h1>Ola mundo</h1>
    </div>
  )
}
