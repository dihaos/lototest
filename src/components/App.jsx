import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [firstSelectedNumbers, setFirstSelectedNumbers] = useState([])
    const [secondSelectedNumbers, setSecondSelectedNumbers] = useState([])
    const firsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    const secondNumbers = [1, 2]

    const chooseNumber = (number) => {
        !firstSelectedNumbers.includes(number) && firstSelectedNumbers.length < 8 ?
            setFirstSelectedNumbers([...firstSelectedNumbers, number])
            : setFirstSelectedNumbers(firstSelectedNumbers.filter(el => el !== number))
    }

    return (
        <>
            <div className='numbers'>
                {firsNumbers.map(el => {
                    const selectedNumber = firstSelectedNumbers.includes(el) ? 'selected-number' : ''
                    return (
                        <div className={`number ${selectedNumber}`} onClick={() => chooseNumber(el)}>
                            {el}
                        </div>
                    )
                })}

                {secondNumbers.map(el => {
                    const selectedNumber = firstSelectedNumbers.includes(el) ? 'selected-number' : ''
                    return (
                        <div className={`number ${selectedNumber}`} onClick={() => chooseNumber(el)}>
                            {el}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App