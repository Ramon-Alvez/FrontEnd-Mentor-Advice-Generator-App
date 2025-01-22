const adviceNumber = document.getElementById('advice-ID')
const adviceSection = document.getElementById('advice')
const diceButton = document.getElementById('diceButton')
const loading = document.getElementById('loading')

diceButton.addEventListener('click', () => printAdvice())

async function searchAdvice() {
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    if (!response.ok) throw new Error("An error occurred while trying to fetch information from the API");

    return await response.json() 
}

async function hideLoading() { 
    loading.classList.add('hidden')
}

async function printAdvice() {
    if (loading.classList.contains('hidden')) loading.classList.remove('hidden')
    diceButton.disabled = true
    adviceNumber.innerText = "Advice #"
    adviceSection.innerText = ""
    
    try {
        const searchedAdvice = await searchAdvice()
        const adviceID = searchedAdvice.slip.id
        const advice = searchedAdvice.slip.advice
        hideLoading()
        
        adviceNumber.innerText = `Advice #${adviceID}`
        adviceSection.innerText = `"${advice}"`
    }
    catch (error) {
        console.error("Error trying to fetch API information", error);
    }
    finally {
        diceButton.disabled = false
    }
}