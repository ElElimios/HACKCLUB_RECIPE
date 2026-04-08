const catContainer = document.getElementById('cat-rain');

function createCat() {
    const cat = document.createElement('img');
    cat.src = '../Media/cat.png';

    cat.classList.add("cat");

    cat.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 60 + 60;
    cat.style.width = size + "px";

    const duration = Math.random() * 3 + 3;
    cat.style.animationDuration = duration + "s";

    catContainer.appendChild(cat);

    setTimeout(() => {
        cat.remove();
    }, duration * 1000);
}

setInterval(createCat, 300);

"Recipes"

const recipes = [
    {
        name: "Avocado Toast",
        description: "A quick and healthy snack with creamy avocado.",
        ingredients: [
            "2 slices bread",
            "1 ripe avocado (150g)",
            "1/2 tsp salt",
            "1 tsp lemon juice"
        ],
        instructions: "Toast the bread until golden and crispy. In a bowl, mash the avocado with lemon juice and salt until smooth. Spread the mixture evenly over the toast and serve immediately."
    },
    {
        name: "Quick Pasta",
        description: "Simple comfort food ready in minutes.",
        ingredients: [
            "100g pasta",
            "1 tbsp butter",
            "30g grated cheese",
            "1/4 tsp pepper"
        ],
        instructions: "Boil water with a pinch of salt and cook the pasta until al dente. Drain the water, then return the pasta to the pot. Add butter and mix until melted. Stir in the cheese and pepper until evenly combined and creamy."
    },
    {
        name: "Scrambled Eggs",
        description: "A classic soft and fluffy breakfast.",
        ingredients: [
            "2 eggs",
            "1 tbsp butter",
            "1/4 tsp salt"
        ],
        instructions: "Crack the eggs into a bowl and beat them until well combined. Heat butter in a pan over medium-low heat. Pour in the eggs and gently stir with a spatula, moving them around the pan until soft and slightly creamy. Remove from heat and add salt."
    },
    {
        name: "Classic Sandwich",
        description: "An easy and filling everyday meal.",
        ingredients: [
            "2 slices bread",
            "2 slices ham (50g)",
            "2 slices cheese (40g)",
            "2 lettuce leaves",
            "1 tbsp mayonnaise"
        ],
        instructions: "Spread mayonnaise on one or both slices of bread. Layer the ham, cheese, and lettuce evenly. Close the sandwich with the second slice of bread, press lightly, and cut in half if desired."
    },
    {
        name: "Quesadillas",
        description: "Cheesy and warm, perfect for a quick bite.",
        ingredients: [
            "1 tortilla (25g)",
            "50g shredded cheese"
        ],
        instructions: "Heat a pan over medium heat. Place the tortilla on the pan and sprinkle the cheese evenly on one half. Fold the tortilla and cook until the cheese melts and the outside is lightly crispy, flipping once."
    },
    {
        name: "Simple Salad",
        description: "Light and refreshing vegetable mix.",
        ingredients: [
            "2 cups lettuce (100g)",
            "1 tomato (120g)",
            "1 tbsp olive oil",
            "1/4 tsp salt"
        ],
        instructions: "Wash and chop the lettuce and tomato into bite-sized pieces. Place them in a bowl, drizzle with olive oil, and sprinkle salt. Toss gently to combine and serve fresh."
    },
    {
        name: "Banana Smoothie",
        description: "A sweet and creamy drink.",
        ingredients: [
            "1 banana (120g)",
            "1 cup milk (250ml)",
            "1 tbsp sugar"
        ],
        instructions: "Peel the banana and cut it into chunks. Add the banana, milk, and sugar into a blender. Blend on high speed until smooth and creamy. Pour into a glass and serve cold."
    },
    {
        name: "Basic Rice",
        description: "A staple side dish for any meal.",
        ingredients: [
            "1 cup rice (200g)",
            "2 cups water (500ml)",
            "1/2 tsp salt"
        ],
        instructions: "Rinse the rice under cold water. In a pot, bring water to a boil and add the salt and rice. Reduce heat to low, cover, and cook until the water is absorbed and the rice is tender. Fluff with a fork before serving."
    },
    {
        name: "Pancakes",
        description: "Soft and fluffy breakfast favorite.",
        ingredients: [
            "100g flour",
            "1 egg",
            "200ml milk"
        ],
        instructions: "In a bowl, mix the flour, egg, and milk until you get a smooth batter. Heat a lightly greased pan over medium heat. Pour small amounts of batter and cook until bubbles form, then flip and cook the other side until golden."
    },
    {
        name: "Quick Pizza",
        description: "A fast homemade pizza alternative.",
        ingredients: [
            "2 slices bread",
            "2 tbsp tomato sauce",
            "50g cheese"
        ],
        instructions: "Preheat a pan or oven. Spread tomato sauce evenly over the bread slices, then add cheese on top. Heat until the cheese melts and becomes slightly bubbly. Serve warm."
    }
];
const recipeName = document.getElementById("recipe-name");
const recipeDescription = document.getElementById("recipe-description");
const recipeIngredients = document.getElementById("recipe-ingredients");
const recipeInstructions = document.getElementById("recipe-instructions");
const getRecipeBtn = document.getElementById("getRecipeBtn");

function showRandomRecipe() {
    const recipe = recipes[Math.floor(Math.random() * recipes.length)];

    recipeName.textContent = recipe.name;
    recipeDescription.textContent = recipe.description;
    recipeInstructions.textContent = recipe.instructions;

    recipeIngredients.innerHTML = "";
    recipe.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        recipeIngredients.appendChild(li);
    });
}

getRecipeBtn.addEventListener("click", showRandomRecipe);