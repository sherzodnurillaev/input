const form = document.forms[0]
const inputs = document.querySelectorAll('.importend')
const suc = document.querySelector('.success')
const er = document.querySelector('.error')
const regEx = {
    name: /^[A-Za-z\s.'-]+$/,
    age: /^(?:1[0-1]\d|120|[1-9]\d|\d)$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    text: /^.{10,50}$/,
}

form.onsubmit = (e) => {
    e.preventDefault()
    let obj = {}
    let sen = new FormData(form)
    sen.forEach((item, key) => {
        obj[key] = item    
    })
    regInput()
    if (isValid() === false) {
        return
    } else {
        console.log(obj);
    }
}
function regInput() {
    inputs.forEach((input, i) => {
        let key = input.getAttribute('name')
        if (regEx[key].test(input.value)) {
            input.style.border = '2px solid rgba(66, 0, 255, 1)'
            input.nextElementSibling.style.display = 'none'
            input.parentElement.nextElementSibling.innerHTML = `Need to fill`
            input.parentElement.nextElementSibling.style.color = 'black'
            input.parentElement.previousElementSibling.style.color = 'rgba(66, 0, 255, 1)'
        } else {
            input.style.border = '2px solid red'
            input.nextElementSibling.style.display = 'block'
            input.parentElement.nextElementSibling.innerHTML = `Need to fill ${input.name}`
            input.parentElement.nextElementSibling.style.color = 'red'
            input.parentElement.previousElementSibling.style.color = 'red'
        }
    })
}
function isValid() {
    let valid = true; 
    if (suc.innerHTML > 0 || er.innerHTML > 0) {
        suc.innerHTML = 0
        er.innerHTML = 0
    }
    inputs.forEach((input) => {
        let key = input.getAttribute('name')
        if (regEx[key].test(input.value)) {
            suc.innerHTML++          
        } else {
            valid = false
            er.innerHTML++
        }
    })
    return valid
}
