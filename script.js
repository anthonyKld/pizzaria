const sel = (element) => document.querySelector(element)
const selAll = (element) => document.querySelector(element)
const real = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

pizzaJson.map( (item, index) => {
    const pizzaItem = sel('.models .pizza-item').cloneNode(true)

    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = real(item.price)
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    pizzaItem.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault()
        sel('.pizzaWindowArea').style.opacity = 0
        sel('.pizzaWindowArea').style.display = 'flex'
        setTimeout( () => {
            sel('.pizzaWindowArea').style.opacity = 1
        }, 200 )
    })

    sel('.pizza-area').append(pizzaItem)
} )
