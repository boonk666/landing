import './style.css'

document.querySelector('#payment-submit').addEventListener('click', () => {
  document.querySelector('#payment').classList.remove('hidden')
})

document.querySelector('#payment-close').addEventListener('click', () => {
  document.querySelector('#payment').classList.add('hidden')
})