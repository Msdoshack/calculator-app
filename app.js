const input = document.querySelector(".screen");

const btns = document.querySelectorAll(".btn");

const greenBtn = document.querySelector(".green-btn");

const redBtn = document.querySelector(".red-btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    let number = btns[i].getAttribute("data-num");
    input.value += number;
  });
}

greenBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("input is empty");
  } else {
    let value = eval(input.value);
    input.value = value;
  }
});

redBtn.addEventListener("click", () => {
  input.value = "";
});
