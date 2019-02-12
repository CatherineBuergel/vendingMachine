//private
import VendingMachine from "../models/vendingMachine.js";

//data here
let _vendingMachine = new VendingMachine()
let transaction = false

//public
export default class VendrService {
  constructor() {

  }
  get SnackDictionary() {
    return _vendingMachine.snacks
  }

  get Balance() {
    return _vendingMachine.balance
  }

  addMoney(num) {
    _vendingMachine.balance += num
  }
  get Transaction() {
    return transaction
  }
  purchase(num) {

    if (_vendingMachine.balance >= num) {
      _vendingMachine.balance -= num
      transaction = true
    } else {
      transaction = false
    }

  }
}

