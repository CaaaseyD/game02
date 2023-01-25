import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="table"
export default class extends Controller {
  static targets = []
  connect() {
    console.log("table controller connected")
    let table = document.querySelectorAll(".cell"), i;
    const buildings = Array.from(document.querySelectorAll(".buildings_class li"))
    for (i = 0; i < table.length; ++i) {
      let x = table[i].dataset.index;
      x = parseInt(x, 10);
      table[i].innerHTML =
        `<div class="row row-cols-2">
          <div class="col d-flex align-items-start"><div class="player player1"></div></div>
          <div class="col d-flex align-items-start justify-content-end"><div class="player player2"></div></div>
          <div class="col d-flex align-items-end"><div class="player player3"></div></div>
          <div class="col d-flex align-items-end justify-content-end"><div class="player player4"></div></div>
        </div>
        <p>${buildings[x].innerText}</p>`;
    }
  }
  move() {

  }
}
