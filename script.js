const form = document.forms[0]
const inps = document.querySelectorAll('.inp input')
const spas = document.querySelectorAll('.importend span')
const ps = document.querySelectorAll('.importend p')
const impors = document.querySelectorAll('.importend input')
const er = document.querySelector('.error')
const suc = document.querySelector('.success')


form.onsubmit = (e) => {
    e.preventDefault()
    impors.forEach(impor => {
                    if (impor.value.length > 0) {
                        impo()
                        spas.forEach(spa => {
                            ps.forEach(p => {
                                spa.style.color = 'black'
                                p.style.color = 'rgba(66, 0, 255, 1)'
                                impor.style.border = '2px solid rgba(66, 0, 255, 1)'
                            })
                        })
                    } else if (impor.value.length === 0) {
                        spas.forEach(spa => {
                            ps.forEach(p => {
                                spa.style.color = 'red'
                                p.style.color = 'red'
                                impor.style.border = '2px solid red'
                            })
                        })
                    }  

        // console.log(impor.value);
            if (er.innerHTML > 7 || suc.innerHTML > 7) {
                tot()
            } else if (impor.value.length == 0) {
                er.innerHTML++
            } else if (impor.value.length > 0) {
                suc.innerHTML++
            }
    })
}

function tot() {
    suc.innerHTML = 0
    er.innerHTML = 0
}

function impo() {
    let obj = {}
    let fm = new FormData(form)
    fm.forEach((item, key) => {
        obj[key] = item
    })
    console.log(obj);
}

// let fm = new FormData(form)

//             fm.forEach((item, key) => {
                
//                 obj[key] = item
//             })
//             console.log(obj);
