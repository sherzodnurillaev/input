const form = document.forms[0]
const inputs = document.querySelectorAll('.importend')
const spans = document.querySelectorAll('.im span')
const topPs = document.querySelectorAll('.im p')
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

    let valInp = true;

    inputs.forEach(input => {

        if (input.value === '') {

            valInp = false;
            regInput();
        }
    });

    if (valInp) {
        console.log(obj);
        regInput();
    }

    total()

}

function regInput() {
    inputs.forEach((input, i) => {

        let key = input.getAttribute('name')

        if (regEx[key].test(input.value)) {
            
            spans.forEach((span, s) => {
                if (i === s) {
                    span.style.color = 'black'
                }
            })

            topPs.forEach((par, p) => {
                if (i === p) {

                    par.style.color = 'rgba(66, 0, 255, 1)'
                }
            })

            input.style.border = '2px solid rgba(66, 0, 255, 1)'

        } else {
            input.style.border = '2px solid red'
            spans.forEach((span, s) => {
                if (i === s) {
                    span.style.color = 'red'
                }
            })
            topPs.forEach((par, p) => {
                if (i === p) {
                    par.style.color = 'red'
                }
            })
        }
    })
}

function total() {

}
