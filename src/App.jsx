
import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Message from './components/Message'
import Numbers from './components/Numbers'
import BurgerMenu from './components/BurgerMenu'

function App() {
  const [isActive, setIsActive] = useState(false);
  const [activeNumber, setActiveNumber] = useState(1);

  const messages = [
    "Learn react 🚀",
    "Get Paid 🤑",
    "Invest income ✔",
  ]

  function viewStepper() {
    setIsActive(!isActive);
  }

  function handlePrevious() {
    if (activeNumber <= 1) return
    setActiveNumber(activeNumber - 1)

    console.log('previous')

  }

  function handleNext() {
    if (activeNumber >= 3) return
    setActiveNumber(activeNumber + 1)


    console.log('next')
  }

  return (
    <>
      {isActive ? (
        <>
          <div className=' flex flex-col gap-2 absolute top-2 right-2  cursor-pointer p-[20px]' onClick={viewStepper}>
            <span>❌</span>
          </div>
          <div className='w-[500px] h-[250px] bg-slate-300 mx-auto mt-[80px] relative'>
            <Numbers activeNumber={activeNumber} setActiveNumber={setActiveNumber} />
            <Message activeNumber={activeNumber} />
            <div className='flex justify-between items-center px-4 mt-[30px]'>
              <Buttons onClick={handlePrevious}>Previous</Buttons>
              <Buttons onClick={handleNext}>Next</Buttons>
            </div>

          </div>
        </>
      ) : (
        <BurgerMenu viewStepper={viewStepper} />
      )}

    </>
  )
}

export default App
