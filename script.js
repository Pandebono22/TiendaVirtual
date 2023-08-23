document.addEventListener("DOMContentLoaded", function () {
  const categoryItems = document.querySelectorAll(".category-item");

  categoryItems.forEach((category) => {
    const subcategoryBox = category.querySelector(".subcategory-box");

    category.addEventListener("mouseover", () => {
      subcategoryBox.style.display = "block";
    });

    category.addEventListener("mouseout", () => {
      subcategoryBox.style.display = "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const showMoreButtons = document.querySelectorAll(".show-more-button");

  showMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const additionalText = card.querySelector(".additional-text");

      if (additionalText.style.display === "block") {
        additionalText.style.display = "none";
        button.textContent = "Ver más";
      } else {
        additionalText.style.display = "block";
        button.textContent = "Cerrar";
      }
    });
  });
});