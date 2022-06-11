import React, { useState } from 'react'
import './App.css'
import Field from './Field.jsx'
import magic from '../magic.svg'
import { setResults } from '../request'

const App = () => {
    const firsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    const secondNumbers = [1, 2]
    const [firstSelectedNumbers, setFirstSelectedNumbers] = useState([])
    const [secondSelectedNumbers, setSecondSelectedNumbers] = useState([])
    const [firstRandom, setFirstRandom] = useState([])
    const [secondRandom, setSecondRandom] = useState([])

    const chooseNumber = (number, selectedNumbers, setSelectedNumbers, needСhoose) => {
        !selectedNumbers.includes(number) && selectedNumbers.length < needСhoose ?
            setSelectedNumbers([...selectedNumbers, number])
            : setSelectedNumbers(selectedNumbers.filter(el => el !== number))
    }

    const disBtn = firstSelectedNumbers.length === 8 && secondSelectedNumbers.length === 1
    const getResult = () => {
        let resultCounter = 0
        firstRandom.forEach(el => {
            if (firstSelectedNumbers.includes(el)) {
                resultCounter++
            }
        })
        if (secondSelectedNumbers.includes(secondRandom[0])) {
            resultCounter++
        }

        if (resultCounter > 3) {
            alert('Вы выиграли!')
            setResults(firstSelectedNumbers, secondSelectedNumbers, true)
        } else {
            alert('Вы проиграли!')
            setResults(firstSelectedNumbers, secondSelectedNumbers, false)
        }

    }

    const setRandomNumbers = () => {
        const randomNumbers = []
        for (let i = 0; randomNumbers.length < 8; i++) {
            const randomNumber = Math.floor(Math.random() * 19) + 1
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber)
            }
        }
        setFirstSelectedNumbers(randomNumbers.sort((a, b) => a - b))
        setSecondSelectedNumbers([Math.floor(Math.random() * 2) + 1])
    }

    return (
        <div className='main'>
            <Field
                numbers={firsNumbers}
                needСhoose={8}
                chooseNumber={chooseNumber}
                selectedNumbers={firstSelectedNumbers}
                setSelectedNumbers={setFirstSelectedNumbers}
                setRandom={setFirstRandom} />

            <Field
                numbers={secondNumbers}
                needСhoose={1}
                chooseNumber={chooseNumber}
                selectedNumbers={secondSelectedNumbers}
                setSelectedNumbers={setSecondSelectedNumbers}
                setRandom={setSecondRandom} />

            <div className='buttons'>
                <button disabled={!disBtn} onClick={() => getResult()}>Показать результат</button>
                <img src={magic} alt='magicButton' className='magicButton' title='Рандомно выбрать номера' onClick={() => setRandomNumbers()} />
            </div>
        </div>
    )
}

export default App