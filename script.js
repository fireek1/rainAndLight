const light = document.querySelector('.light')
const input = document.querySelector('input')
const x1 = light.getBoundingClientRect().left + light.getBoundingClientRect().width / 2
const y1 = light.getBoundingClientRect().top+ light.getBoundingClientRect().height / 2

let wind = +input.value
input.onchange = () => wind = +input.value

setInterval(() => {
    const drop = document.createElement('div')
    drop.classList.add('drop')
    const left =  Math.random() * window.innerWidth / 2 + window.innerWidth / 4
    drop.style.left = left + 'px'
    drop.style.top = '-50px'
    document.body.appendChild(drop)
    const setOp = setInterval(() => {
        const x2 = drop.getBoundingClientRect().left
        const y2 = drop.getBoundingClientRect().top
        const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
        drop.style.opacity = 1 - distance / 250
        drop.style.rotate = -wind * 45 + 'deg'
        setTimeout(() => clearInterval(setOp), 1600)
    }, 20)
    setTimeout(() => {
        drop.style.top = window.innerHeight + 100 + 'px'
        drop.style.left = (left + (window.innerHeight + 100) * wind) + 'px'
    }, 100)
    setTimeout(() => document.body.removeChild(drop), 1600)
}, 1)
