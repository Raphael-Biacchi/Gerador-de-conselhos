const adviceUpdateButton = document.querySelector('.advice-update')
const adviceNumber  = document.querySelector('.advice-id')
const adviceDescription  = document.querySelector('.advice-description')

async function getAdice() {
    const response  = await fetch('https://api.adviceslip.com/advice')
    const adviceContent  = await response.json()
    const adviceId  = `Advice #${adviceContent.slip.id}`
    const adviceText  = `"${adviceContent.slip.advice}"`

    adviceNumber.innerHTML = adviceId
    adviceDescription.innerHTML = adviceText 
}

adviceUpdateButton.addEventListener('click', getAdice)

getAdice()