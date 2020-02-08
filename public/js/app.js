
console.log("Just a message that I've prepared for you")



const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const url = 'http://localhost:3000/weather?address='+location
    fetch(url).then((response) => {
        response.json().then((data) => {

            if(data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
    

})