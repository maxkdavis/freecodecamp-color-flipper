const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', 'pink', 'blue'];

//store the button in a variable
const btn = document.getElementById('btn');

//generate a random number between 0 and the length of our color array
const getRandomNumber = function () {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', function () {
  let randomNumber = getRandomNumber();
  //change background color
  document.body.style.backgroundColor = colors[randomNumber];
  //change span text to reflect randomly selected color
  document.querySelector('.color').textContent = colors[randomNumber];
});
