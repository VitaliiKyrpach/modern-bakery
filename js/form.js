const form = document.querySelector(".form");

const handleSubmit = (e) => {
  e.preventDefault();
  const user = e.target.elements.userName.value;
  alert(`${user}, дякуємо за ваше звернення! Будь-ласка очікуйте,скоро з вами зв'яжеться оператор.`);
  e.target.reset();
};

form.addEventListener("submit", handleSubmit);
