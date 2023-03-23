let index
const formValues = localStorage.getItem('formValues')


const form = document.querySelector('form')


form.addEventListener('submit', e => {
  e.preventDefault()
  // var formValues = storedData ? storedData : []
  // var formValues = []

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let message = document.getElementById('message').children[1].value 
  console.log(formValues)

  formValues.push({Name: name, Email: email, Message: message})
  localStorage.setItem('formValues', JSON.stringify(formValues))
  console.table(formValues)
  console.log(storedData.data)
  // reset()
})


function reset() {
  let inputs = document.querySelectorAll('input:not([type="submit"])')
  let message = document.getElementById('message')
  inputs.forEach(input => input.value = "")
  message.children[1].value = ""
}
