let moreText = document.querySelector(".moreText");


//Read More Button
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

// Event to show more text
readMoreBtn.addEventListener("click", (e) => {
  moreText.style.display = "inline"
});