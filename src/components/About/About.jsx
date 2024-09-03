import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css'

export const About = ()=> {
  return <section className={styles.container} id='about'>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img src={getImageUrl('about/image.png')} alt='about Image' className={styles.aboutImage} />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor Image' />
          <div className={styles.aboutItemText}>
            <h3>Full-stack Engineer</h3>
            <p>I am a full-stack engineer with experience working in Ruby on Rails, Bootstrap and React js</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl('about/serverIcon.png')} alt='Cursor Image' />
          <div className={styles.aboutItemText}>
            <h3>No-code / Low-code Developer</h3>
            <p>I am a low-code developer with experience working in Xano, Retool, Bubble.io</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
};
