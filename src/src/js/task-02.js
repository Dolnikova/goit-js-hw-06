const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const ulEl = document.querySelector("#ingredients");
// // const list = document.createElement("ul");
// // list.classList.add("item");
// const ingredient = (options) => {
//   return options.map((option) => {
//     const list = document.createElement("ul");
//     list.classList.add("item");
//     const link = document.createElement("li");
//     link.textContent = ingredients[];
//     return options;
//   });
// };
// const elements = ingredient(ingredients);
// // ingredientsElements.append(...elements);
// console.log(elements);
let ulList = document.getElementById("ingredients");

const foodIngredients = ingredients.forEach((ingredient) => {
  let items = document.createElement("li");
  items.classList.add("item");
  items.innerHTML = ingredient;
  ulList.append(items);
});
