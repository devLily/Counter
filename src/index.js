//DOM : 각 태그에 대한 정보를 가지고 있는 자바스크립트의 객체
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

/*console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id); */

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
