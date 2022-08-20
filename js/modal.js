"use strict";

const modal = document.querySelector(".modal-1");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal-1");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// // HELLO
const modal1 = document.querySelector(".modal-2");
const overlay1 = document.querySelector(".overlay-2");
const btnCloseModal1 = document.querySelector(".close-modal-2");
const btnsOpenModal1 = document.querySelectorAll(".show-modal-2");
const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay1.classList.remove("hidden");
};

const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay1.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal1[i].addEventListener("click", openModal1);

btnCloseModal1.addEventListener("click", closeModal1);
overlay1.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal1();
  }
});
// modal 3
const modal2 = document.querySelector(".modal-3");
const overlay2 = document.querySelector(".overlay-3");
const btnCloseModal2 = document.querySelector(".close-modal-3");
const btnsOpenModal2 = document.querySelectorAll(".show-modal-3");
const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay2.classList.remove("hidden");
};

const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay2.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal2[i].addEventListener("click", openModal2);

btnCloseModal2.addEventListener("click", closeModal2);
overlay2.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal2();
  }
});
