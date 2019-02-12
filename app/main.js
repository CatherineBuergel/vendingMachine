import VendrController from "./components/vendrController.js"

class App {

  constructor() {
    this.controllers = {
      vendrController: new VendrController

    }
  }
}

// @ts-ignore
window.app = new App()