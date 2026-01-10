const toggleBtn = document.getElementById("toggleBtn");
const categoryButtons = document.getElementById("categoryButtons");
const categoryBtns = document.querySelectorAll(".category-buttons button");
const contents = document.querySelectorAll(".content");

let isOpen = false;

toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  categoryButtons.style.display = isOpen ? "flex" : "none";
  toggleBtn.textContent = isOpen ? "Hide Categories" : "Show Categories";

  if (!isOpen) resetAll();
});

categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    resetAll();

    btn.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

function resetAll() {
  categoryBtns.forEach(btn => btn.classList.remove("active"));
  contents.forEach(content => content.classList.remove("active"));
}
