const searchBtn = document.getElementById('search-btn');
const recipeBtn = document.getElementById('recipe-btn');
const foodList = document.getElementById('food');
const foodDetailsContent = document.querySelector('.food-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

function getFoodList() {
    let searchInput = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if (data.meals) {
            data.meals.forEach(meal => {
                html += `
                    <div class="food-item neumorp-card" data-id="${meal.idMeal}">
                        <div class="food-image">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>
                        <div class="food-name">
                            <h3>${meal.strMeal}</h3>
                            <a class="recipe-btn" id="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            foodList.classList.remove('not-found');
        }
        
        else {
            html = "Makanan tidak ditemukan";
            foodList.classList.add('not-found');
        }

        foodList.innerHTML = html;
    });
}

const foodListInit = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if (data.meals) {
            data.meals.forEach(meal => {
                html += `
                    <div class="food-item neumorp-card" data-id="${meal.idMeal}">
                        <div class="food-image">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>
                        <div class="food-name">
                            <h3>${meal.strMeal}</h3>
                            <a class="recipe-btn" id="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
        }

        foodList.innerHTML = html;
    });
};

// recipeBtn.addEventListener('click', () => {
//     foodDetailsContent.parentElement.classList.add('show-recipe');
// });
// recipeCloseBtn.addEventListener('click', () => {
//     foodDetailsContent.parentElement.classList.remove('show-recipe');
// });

searchBtn.addEventListener('click', getFoodList);

foodListInit();