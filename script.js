const hexacolor = document.querySelector("#hexacolor");
const btn = document.getElementsByClassName("btn");

const generateColor = () => {
  const numbers = Math.random().toString(16);
  const convertSubstring = numbers.substring(2,8);
  const randomColor = "#"+convertSubstring;
  document.body.style.backgroundColor = randomColor;
  hexacolor.textContent = randomColor;
};

btn.addEventListener("click", generateColor());