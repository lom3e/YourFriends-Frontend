import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RotatingText from "./components/RotatingText.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RotatingText

          texts={['React', 'Bits', 'Is', 'Cool!']}
          mainClassName="flex scale-200 justify-center items-center w-fit rounded-lg bg-[#5227ff] text-white overflow-hidden px-4 py-2 text-lg md:text-xl font-semibold"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </>
  )
}

export default App
