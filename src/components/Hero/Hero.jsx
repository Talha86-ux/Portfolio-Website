import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I am Talha</h1>
        <p>I am full-stack developer with 4 years of Experience working in Rails and React js.</p>
        <a className={styles.contactBtn} href='mailto:rjtalha555@gmail.com'>Contact Me</a>
      </div>
      <img src={getImageUrl('hero/my_pic.jpg')} alt='My image' className={styles.heroImg}></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
