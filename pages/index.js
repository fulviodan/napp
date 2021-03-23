import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      Ciao Fulvio
      {['a', 'b'].map((el) => (
        <span>{el}</span>
      ))}
    </div>
  )
}
