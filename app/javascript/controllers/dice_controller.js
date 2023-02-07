import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dice"
export default class extends Controller {
  static targets = ["diceface", "resultboard"]
  connect() {
    console.log("dice controller connected")
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

  nextPlayer(){
    // roll the dice
    const diceloop = this.diceloop;
    let dicenumber = Math.floor(Math.random() * 6) + 1
    const diceshow = document.querySelector('#dicenumber');
    // diceshow.innerHTML = `<div class="ring">
    //                       <span id="loadingspan"></span>
    //                       </div>`
    diceloop(dicenumber);
    setTimeout(function(){diceshow.innerHTML = dicenumber}, 300 * dicenumber);

    // next player & show the position
    const showResult = this.showResult;
    let player_name = document.querySelector("#cur_player_name")
    let players = JSON.parse(document.querySelector('.players_class').dataset.players)
    if(player_name.innerText === ""){
      player_name.innerHTML = players[0].name
      showResult(dicenumber, players[0])
    }else{
      let cur_player = players.find( v => v.name === player_name.innerText)
      let index = cur_player.turn % players.length;
      player_name.innerHTML = players[index].name
      showResult(dicenumber, players[index])
    }
  }


  showResult(dicenumber, player){
    let positions = Array.from(document.querySelectorAll(`.player${player.turn}`));
    let i = positions.findIndex(a=> a.classList.contains('active'));
    let j = (i + dicenumber) % 9;
    let player_position = document.querySelector("#cur_player_position")
    player_position.innerHTML = i
    function jump(){
      positions[i % 9].classList.remove('active');
      positions[(i + 1) % 9].classList.add('active');
      i++;
    }
    const incrementTimer = setInterval(jump, 300);
    setInterval(() => {
      clearInterval(incrementTimer);
    }, 300 * dicenumber);
    setTimeout(function(){document.querySelector("#next_position").innerHTML = j}, 300 * dicenumber);
  }
}
