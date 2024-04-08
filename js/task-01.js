
const categoriesList = document.getElementById('categories');


const categoriesCount = categoriesList.querySelectorAll('li.item').length;
console.log('Number of categories:', categoriesCount);


categoriesList.querySelectorAll('li.item').forEach(category => {

  const categoryTitle = category.querySelector('h2').textContent;

  const elementsCount = category.querySelectorAll('ul li').length;
  console.log(Category: ${categoryTitle});
  console.log(Elements: ${elementsCount});
});