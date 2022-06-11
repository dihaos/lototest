export const setResults = (firstNumbers, secondNumbers, winOrwon) => {
    const data = {
        selectedNumber: {
            firstField: firstNumbers,
            secondField: secondNumbers
        },
        isTicketWon: winOrwon
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('https://stoloto.ru/result/', options)
        .then(res => res.json())
        .then(res => console.log('Успех:', res))
        .catch(error => console.error('Ошибка:', error))
}