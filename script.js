var timer = 60;
var score = 0;
var hitrn = 0;

let panelbottom = document.querySelector(".panelbottom");

function MakeBubble() {
  let clutter = "";

  for (i = 1; i <= 102; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"><h2>${rn}</h2></div>`;
  }

  document.querySelector(".panelbottom").innerHTML = clutter;
}

function RunTimer() {
  var timerin = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#TimerVal").textContent = timer;
    } else {
      clearInterval(timerin);
      panelbottom.innerHTML = `<h1>Your Score is<span>&nbsp;${score}</span> </h1> 
      <button id="restart">Restart</button>`;

      document.querySelector("#restart").addEventListener("click", () => {
        timer = 60;
        score = 0;
        document.querySelector("#ScoreVal").textContent = score;
        MakeBubble();
        RunTimer();
        GetNewHit();
      });
    }
  }, 1000);
}

function GetNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#HitVal").textContent = hitrn;
}

function ScoreInc() {
  score += 10;
  document.querySelector("#ScoreVal").textContent = score;
}

panelbottom.addEventListener("click", function (dets) {
  let targetval = Number(dets.target.textContent);
  if (targetval === hitrn) {
    ScoreInc();
    MakeBubble();
    GetNewHit();
  }
});

MakeBubble();
RunTimer();
GetNewHit();
