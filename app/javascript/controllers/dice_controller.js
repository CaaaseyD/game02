import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dice"
export default class extends Controller {
  static targets = ["diceface"]
  connect() {
    console.log("dice controller connected")
 }

  roll(){
    const diceloop = this.diceloop;
    let dicenumber = Math.floor(Math.random() * 6) + 1
    console.log(dicenumber)
    diceloop(dicenumber)
  }

  diceloop(dicenumber){
    let num = 0;
    let timesRun = 0;
    const dicedivs = document.querySelectorAll(".dice")
    let diceinterval = setInterval(() => {
      timesRun += 1;
      if(timesRun === (29 + dicenumber)){
        clearInterval(diceinterval);
      }
      dicedivs[num].style.display = "none";
      num = (num + 1) % 6;
      dicedivs[num].style.display = "inline-flex";
    }, 20)
  }

}
