const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');

//step 1: generate a number between 0 and the length of the hex array
const getRandomNumber = function () {
  return Math.floor(Math.random() * hex.length);
};

//step 2: when button is clicked, create a hex string where each letter is randomly selected from the hex array
btn.addEventListener('click', function () {
  let hexStr = '#';

  for (let i = 0; i < 6; i++) {
    hexStr += hex[getRandomNumber()];
  }
  //step 3: apply randomly generated hex color to body background and <span> text
  document.body.style.backgroundColor = hexStr;
  document.querySelector('.color').textContent = hexStr;
});
