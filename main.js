console.log(document)

let counter = 0

const PLUS_BUTTON = document.querySelector('#btnPlus')
const MINUS_BUTTON = document.querySelector('#btnMinus')
const COUNTER_SCORE = document.querySelector('#counterField')

PLUS_BUTTON.addEventListener('click', () =>{
    counter++
    COUNTER_SCORE.textContent = counter
})
MINUS_BUTTON.addEventListener('click', () =>{
    counter--
    COUNTER_SCORE.textContent = counter

} )