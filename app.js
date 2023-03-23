// let index
// const formValues = localStorage.getItem('formValues')
const formValues = []
var inputs = document.querySelectorAll('input:not([type="submit"])')
let message = document.getElementById('message')
let span = document.querySelectorAll('span')


const form = document.querySelector('form')


form.addEventListener('submit', e => {
  e.preventDefault()

  // the checkInput function only gets the chance to run if you dont use "required" or pattern in the html
  if (!checkInput()) return

  // var formValues = storedData ? storedData : []

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  console.log(formValues)

  formValues.push({Name: name, Email: email, Message: message.children[1].value})
  // localStorage.setItem('formValues', JSON.stringify(formValues))
  console.table(formValues)
  reset()
})

// Fill span tag of empty input with text 
function checkInput() {
  let valid = true
  for (let i = 0; i < inputs.length; i++) {
    span[i].innerText = inputs[i].value == "" ? "Please Fill In Input" : ""
    if (inputs[i] == "") valid = false 
  }
  return valid
}

function reset() {
  inputs.forEach(input => input.value = "")
  message.children[1].value = ""
}
