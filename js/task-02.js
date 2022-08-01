const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.getElementById("ingredients");

const foodIngredients = (arreyItems) => {
  ulList.append(
    ...arreyItems.map((ingredient) => {
      const items = document.createElement("li");
      items.classList.add("item");
      items.innerHTML = ingredient;
      return items;
    })
  );
};
foodIngredients(ingredients);
