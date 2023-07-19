const teste = console.log('Funcionou!')
const sel = (element) => document.querySelector(element)
const selAll = (element) => document.querySelectorAll(element)
const real = (value) => value.toLocaleString( 'pt-BR', {style: 'currency', currency: 'BRL'} )

pizzaJson.map( (item, index) => {
    const pizzaItem = sel('.models .pizza-item').cloneNode(true)
    pizzaItem.querySelector('a').setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').append(real(item.price))
    pizzaItem.querySelector('.pizza-item--name').append(item.name)
    pizzaItem.querySelector('.pizza-item--desc').append(item.description)
    pizzaItem.querySelector('a').addEventListener( 'click', (event) => {
        let key = event.currentTarget.getAttribute('data-key')
        event.preventDefault()
        sel('.pizzaWindowArea').style.display = 'flex'
        sel('.pizzaWindowArea').style.opacity = 0
        setTimeout( () => sel('.pizzaWindowArea').style.opacity = 1, 200 )

        sel('.pizzaWindowArea h1').innerHTML = pizzaJson[key].name
        sel('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        sel('.pizzaInfo--actualPrice').innerHTML =  real(pizzaJson[key].price)
        sel('.pizzaBig img').src = pizzaJson[key].img
    } )

    sel('.pizza-area').append(pizzaItem)
} )

//Eventos do modal
function botaoCancelar() {
    sel('.pizzaWindowArea').style.opacity = 0
    setTimeout( () => {
        sel('.pizzaWindowArea').style.display = 'none'
    }, 500 )
}

selAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach( (element) => {
    element.addEventListener('click', botaoCancelar)
})
