import React from 'react'
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'

export const Experience = ()=> {
  return(
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skillImageContainer}>
                <div>
                  <img src={getImageUrl(skill.imageSrc)} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id)=> {
            return(
              <li key={id}>
                <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} className={styles.imageSize} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} , ${historyItem.organisation}`}</h3>
                  <p style={{ fontSize: '15px' }}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}> {experience}</li>
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
