let card = []
let modalKey = 1
let modelQtd
const sel = (element) => document.querySelector(element)
const selAll = (element) => document.querySelectorAll(element)
const real = (value) => value.toLocaleString( 'pt-BR', {style: 'currency', currency: 'BRL'} )

pizzaJson.map( (item, index) => {
    const pizzaItem = sel('.models .pizza-item').cloneNode(true)
    pizzaItem.setAttribute('data-key', index)

    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = real(item.price)
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    pizzaItem.querySelector('a').addEventListener( 'click', (event) => {
        modelQtd = 1
        event.preventDefault()
        const key = event.target.closest('.pizza-item').getAttribute('data-key')
        modalKey = key

        sel('.pizzaWindowArea').style.opacity = 0
        setTimeout( () => {
            sel('.pizzaWindowArea').style.opacity = 1
        }, 200 )
        sel('.pizzaWindowArea').style.display = 'flex'

        sel('.pizzaBig img').src = pizzaJson[key].img
        sel('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        sel('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        sel('.pizzaInfo--actualPrice').innerHTML = real(pizzaJson[key].price)
        sel('.pizzaInfo--qt').innerHTML = modelQtd
        sel('.pizzaInfo--size.selected').classList.remove('selected')

        selAll('.pizzaInfo--size').forEach( (size, sizeIndex) => {
            if(sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        } )
    } )
    
    sel('.pizza-area').append(pizzaItem)
} )

function closseModal() {
    sel('.pizzaWindowArea').style.opacity = 0
    setTimeout( () => {
        sel('.pizzaWindowArea').style.display = 'none'
    }, 1000 )
}

selAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach( (item) => {
    item.addEventListener('click', closseModal)
} )

sel('.pizzaInfo--qtmais').addEventListener( 'click', () => {
    modelQtd++
    sel('.pizzaInfo--qt').innerHTML = modelQtd
} )
sel('.pizzaInfo--qtmenos').addEventListener( 'click', () => {
    if(modelQtd > 1) {
        modelQtd--
        sel('.pizzaInfo--qt').innerHTML = modelQtd
    }
} )

selAll('.pizzaInfo--size').forEach( (size) => {
    size.addEventListener( 'click', () => {
        sel('.pizzaInfo--size.selected').classList.remove('selected')
        size.classList.add('selected')
    } )
} )

sel('.pizzaInfo--addButton').addEventListener( 'click', () => {
    const size = parseInt(sel('.pizzaInfo--size.selected').getAttribute('data-key'))

    card.push( {
        id: pizzaJson[modalKey].id,
        size: size,
        quantidade: modelQtd
    } )

    closseModal();
} )
