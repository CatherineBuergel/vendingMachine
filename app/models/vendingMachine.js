import Snack from "../models/snack.js";



export default class VendingMachine {
  constructor() {
    this.snacks = {
      A1: new Snack('Cheetos', 1.25, 'assets/cheetos.png'),
      A2: new Snack('Corn Nuts', 1, 'assets/cornNuts.jpeg'),
      A3: new Snack('Twix', .75, 'assets/twix.jpeg')

    }
    this.balance = 0
  }

}