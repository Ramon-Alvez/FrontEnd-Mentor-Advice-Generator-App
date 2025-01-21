const adviceNumber = document.getElementById('advice-ID')
const adviceSection = document.getElementById('advice-section')

document.getElementById('diceButton').addEventListener('click', () => printAdvice())

async function searchAdvice() {
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    return await response.json() 
}

async function printAdvice() {
    const searchedAdvice = await searchAdvice()
    const adviceID = searchedAdvice.slip.id
    const advice = searchedAdvice.slip.advice

    adviceNumber.innerHTML = `Advice #${adviceID}`
    adviceSection.innerHTML = `<p>"${advice}"</p>`
}