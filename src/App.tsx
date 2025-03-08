import React, { useState } from 'react'
import PomodoroClock from './components/PomodoroClock';
import ThemeChanger from './components/ThemeChanger';
import ClockSettings from './components/ClockSettings';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setWorkTime] = useState(25 * 60);

  return (
    <>
      <>
        <ThemeChanger />
        <PomodoroClock />
        <ClockSettings onSettingsChange={setWorkTime} />
      </>
    </>
  )
}

export default App
