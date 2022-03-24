let toggle = document.querySelector("#header.toggle-button");
let collapse = document.querySelectorAll("#header.collapse");

toggle.addEventListener('click',function(){
  collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// with masonry
new Masonry("#posts.grid",{
  itemSelector :'.grid-item',
  gutter: 20
});

//Read More Button
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {

  } else {
    readMoreBtn.innerText = "Read More";
  }
});
