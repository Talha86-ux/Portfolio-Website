import { useState } from 'react'
import styles from'./App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import Hero from './components/Hero/Hero'
import { Experience } from './components/Experience/Experience'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App
