import React, { useEffect } from 'react';

const Field = ({ numbers, needСhoose, selectedNumbers, setSelectedNumbers, chooseNumber, setRandom }) => {

    useEffect(() => {
        const randomNumbers = []
        for (let i = 0; randomNumbers.length < needСhoose; i++) {
            const randomNumber = Math.floor(Math.random() * (numbers.length)) + 1
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber)
            }
        }
        setRandom(randomNumbers.sort((a, b) => a - b))
    }, [])

    return (
        <div className='field'>
            Осталось выбрать номеров: {needСhoose - selectedNumbers.length}
            <div className='numbers'>
                {numbers.map(el => {
                    const selectedNumber = selectedNumbers.includes(el) ? 'selected-number' : ''
                    return (
                        <div
                            key={el}
                            className={`number ${selectedNumber}`}
                            onClick={() => chooseNumber(el, selectedNumbers, setSelectedNumbers, needСhoose)}>
                            {el}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Field