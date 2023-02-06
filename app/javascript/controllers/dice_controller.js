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
    diceshow.innerHTML = `<div class="ring">
                          <span id="loadingspan"></span>
                          </div>`
    diceloop(dicenumber);
    setTimeout(function(){diceshow.innerHTML = dicenumber}, 1000);
    // next player
    const showResult = this.showResult;
    let player_name = document.querySelector("#cur_player_name")
    let player_position = document.querySelector("#cur_player_position")
    let players = JSON.parse(document.querySelector('.players_class').dataset.players)
    if(player_name.innerText === ""){
      player_name.innerHTML = players[0].name
      player_position.innerHTML = players[0].position
      showResult(dicenumber, players[0])
    }else{
      let cur_player = players.find( v => v.name === player_name.innerText)
      let index = cur_player.turn % players.length;
      player_name.innerHTML = players[index].name
      player_position.innerHTML = players[index].position
      showResult(dicenumber, players[index])
    }
  }


  showResult(dicenumber, player){
    let positions = Array.from(document.querySelectorAll(`.player${player.turn}`))
    let i = positions.findIndex(a=> a.classList.contains('active'))
    console.log(`dice number: ${dicenumber}`)
    console.log(`initial player${player.turn} position: ${i}`)
    for(i; i <= (player.position + dicenumber); ++i){
      setTimeout(jump(i), 300)
    }

    function jump(i){
      positions[i % 9].classList.remove('active');
      positions[(i + 1) % 9].classList.add('active');
    }
  }
}
// players[0].position = (players[0].position + dicenumber) % 9
// player_position.innerHTML = players[0].position
