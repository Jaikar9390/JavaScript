let current = "";
let scores = [];

const scoreBox = document.getElementById("score");
const totalBox = document.getElementById("total");
const minBox = document.getElementById("min");
const maxBox = document.getElementById("max");
const list = document.getElementById("list");

Array.from(document.querySelectorAll(".keypad button")).forEach((btn) => {
  btn.onclick = () => {
    current += btn.innerText;
    scoreBox.innerText = current;
  };
});

// enter
enter.onclick = () => {
  if (!current) return;
  scores.push(Number(current));
  current = "";
  scoreBox.innerText = "#";
  update();
};

function update() {
  if (scores.length === 0) {
    totalBox.innerText = "-";
    minBox.innerText = "-";
    maxBox.innerText = "-";
    list.innerHTML = "";
    return;
  }

  totalBox.innerText = scores.reduce((a, b) => a + b, 0);
  minBox.innerText = Math.min(...scores);
  maxBox.innerText = Math.max(...scores);

  list.innerHTML = "";
  scores.forEach((s, i) => {
    const li = document.createElement("li");
    li.innerText = `Game ${i + 1} - ${s}`;
    list.appendChild(li);
  });
}

removeAll.onclick = () => {
  scores = [];
  update();
};
removeLast.onclick = () => {
  scores.pop();
  update();
};
removeOdd.onclick = () => {
  scores = scores.filter((n) => n % 2 === 0);
  update();
};
removeEven.onclick = () => {
  scores = scores.filter((n) => n % 2 !== 0);
  update();
};
