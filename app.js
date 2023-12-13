let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#newBtn");
let msg = document.querySelector(".msg-container");
let winMsg = document.querySelector("#msg");
let blur = document.querySelector(".main");

let turnO = true; // Player X, Player O

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  msg.classList.add("hide");
  blur.classList.remove("blur");
  enableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      // turn player O
      box.innerText = "O";
      turnO = false; // print X
    } else {
      // turn player X
      box.innerText = "X";
      turnO = true; // print O
    }
    box.disabled = true;
    checkWin();
  });
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  blur.classList.add("blur");
  msg.classList.remove("hide");
  winMsg.innerText = `Congratulations, Winner is ${winner}`;
  disabledBoxes();
};

const checkWin = () => {
  for (let Pattern of winPatterns) {
    // console.log(Pattern);
    let Pos1 = boxes[Pattern[0]].innerText;
    let Pos2 = boxes[Pattern[1]].innerText;
    let Pos3 = boxes[Pattern[2]].innerText;

    if (Pos1 != "" && Pos2 != "" && Pos3 != "") {
      if (Pos1 === Pos2 && Pos2 === Pos3) {
        // console.log("winner");
        showWinner(Pos1);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
