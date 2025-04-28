import React from 'react'
import { Header, Hero,About, LeftBorder, RightBorder, TechStack, Projects } from './components'
import useTheme from './hooks/useTheme'


const App = () => {
  const { darkMode } = useTheme()
  return (
    <main className={`relative min-h-screen ${darkMode ? 'dark bg-[#0a192f]' : 'bg-[#ffffff]'}`}>

      {/* Border Components */}
      <LeftBorder />
      <RightBorder />

      {/* Page Content */}
      <div className="mx-16 py-8">

        <Header />
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </div>
    </main>
  )
}

export default App