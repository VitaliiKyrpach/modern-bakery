const btnOpen = document.querySelectorAll(".modal-open");
const modal = document.querySelector(".backdrop");
const btnClose = document.querySelector(".modal-close");

const handleOpen = () => {
  modal.classList.remove("is-hidden");
  document.body.classList.add("no-scroll");
};
const handleClose = () => {
  modal.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
};

btnOpen.forEach((btn) => btn.addEventListener("click", handleOpen));
btnClose.addEventListener("click", handleClose);
