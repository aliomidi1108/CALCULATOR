const output = document.querySelector(".text");
const vals = document.querySelectorAll(".val");
const clearbtn = document.querySelector(".AC");
const deletebtn = document.querySelector(".DEL");
const equalbtn = document.querySelector(".equal");

vals.forEach((val) => {
  val.addEventListener("click", () => {
    output.value += val.value;
  });
});

clearbtn.addEventListener("click", () => {
  output.value = "";
});

deletebtn.addEventListener("click", () => {
  output.value = output.value.slice(0, -1);
});

equalbtn.addEventListener("click", () => {
  output.value = eval(output.value);
});
