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
    const diceshow = document.querySelector('#dicenumber');
    diceshow.innerHTML = `<div class="ring">
                          <span id="loadingspan"></span>
                          </div>`
    diceloop(dicenumber);
    setTimeout(function(){diceshow.innerHTML = dicenumber}, 1000);

    const player = document.querySelector("#cur_player_name")
    const players = JSON.parse(document.querySelector('.players_class').dataset.players)
    let count = 0;
    // showResult(dicenumber, player)
    const cycleArray = ()=>{
      let index = count % players.length;
      console.log(players[index].name);
      count++;
    }
    cycleArray();
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


  showResult(dicenumber, player){
    player.position = (dicenumber + player.position) % 9
  }
}
