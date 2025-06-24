card = document.querySelector(".card");
btn = document.getElementById("toggle-btn");
expend = document.getElementById("expend");

//Toggle button
btn.addEventListener("click", () => {
  console.log("test");

  const expended = expend.classList.toggle("expend");
  btn.textContent = expended ? "Learn less" : "Learn more";
});

//Observer
const observer = new IntersectionObserver(
  ([entry]) => {
    console.log(entry);
    entry.isIntersecting
      ? card.classList.remove("invisible")
      : card.classList.add("invisible");
  },
  { threshold: 0.5 }
);
observer.observe(card);
