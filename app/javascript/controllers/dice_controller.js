import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dice"
export default class extends Controller {
  static targets = [ "diceface"]
  connect() {
    console.log("dice controller connected")
    this.dicefaceTarget.style.display = "none"
    let random = Math.floor(Math.random() * 6);
    let newrandom = 0;
    if(random == 0){
      //alert(random);
      document.querySelector(".dice").hide().eq(random).show();}
    else if(random > 0){
      document.querySelector(".dice").hide();
      for(let i=1; i<=random; i++){
        newrandom = Math.floor(Math.random() * 6);
        document.querySelector(".dice").eq(newrandom).show();
      //alert(newrandom);
      }
 }
  }
  roll(){
    this.dicefaceTarget.innerHTML = document.querySelector(".dice")
  }
}
