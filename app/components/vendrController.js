//private
import VendrService from "../components/vendrService.js"

let _vendrService = new VendrService()


function drawSnacks() {
  let snackDictionary = _vendrService.SnackDictionary
  let template = ''
  let b = _vendrService.Balance

  for (const prop in snackDictionary) {
    let snack = snackDictionary[prop]
    template += `<div class="col-12 col-md-4">
  <img class="img-fluid" src="${snack.img}">
    <h1>${snack.name}</h1>
    <h2>$${snack.price.toFixed(2)}</h2>
    <button class="btn btn-success w-100" onclick="app.controllers.vendrController.purchase(${snack.price})">${prop}</button>
</div>`
  }
  document.getElementById('bal').innerText = b.toFixed(2)
  document.getElementById('draw-vm').innerHTML = template
}
//public

export default class VendrController {
  constructor() {
    console.log('building controller')
    drawSnacks()
  }
  addMoney(num) {
    _vendrService.addMoney(num);
    drawSnacks()
  }
  purchase(num) {
    _vendrService.purchase(num)
    if (_vendrService.Transaction) {
      document.getElementById('results').innerText = 'here is your tasty treat'

    } else {
      document.getElementById('results').innerText = 'you do not have enough funds'
    }

    drawSnacks()
  }



}

