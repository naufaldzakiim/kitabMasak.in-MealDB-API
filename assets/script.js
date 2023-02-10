const recipeBtn = document.getElementById('recipe-btn');
const foodDetailsContent = document.querySelector('.food-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

recipeBtn.addEventListener('click', () => {
    foodDetailsContent.parentElement.classList.add('show-recipe');
});
recipeCloseBtn.addEventListener('click', () => {
    foodDetailsContent.parentElement.classList.remove('show-recipe');
});