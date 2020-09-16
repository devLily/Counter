//DOM : 각 태그에 대한 정보를 가지고 있는 자바스크립트의 객체
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id);

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
/*

// id가 없을 경우 querySelector
const number = document.getElementById("number");
const buttons = document.querySelectorAll('button');
// id가 아닌 tag이름으로 찾아 냄
console.log(buttons);
const [increase, decrease] = buttons;
// increase 와 decrease를 buttons에서 추출해서 작업 처리

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
*/
