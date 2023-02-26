const sel = (element) => document.querySelector(element)
const selAll = (element) => document.querySelector(element)
const real = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

pizzaJson.map( (item, index) => {
    //Faz um clone da div pizza-item
    const pizzaItem = sel('.models .pizza-item').cloneNode(true)

    //Adiciona valores aos atributos das classes que pertence a div pizza-item
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = real(item.price)
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    
    pizzaItem.querySelector('a').addEventListener('click', (element) => {
        let pizzaWindowArea = sel('.pizzaWindowArea')
        element.preventDefault()
        pizzaWindowArea.style.opacity = 0
        pizzaWindowArea.style.display = 'flex'
        setTimeout(() => {
            pizzaWindowArea.style.opacity = 1
        }, 200);
    })

    //Adiciona a div pizza-item na div pizza-area
    sel('.pizza-area').append(pizzaItem)
})
