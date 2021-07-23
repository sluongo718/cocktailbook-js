const cocktailURL = "http://127.0.0.1:3000/cocktails"
const ingredientsURL = "http://localhost:3000/ingredients"
const cocktailForm = document.getElementById("cocktail-form")
const imageInput = document.getElementById("input-cocktail-url")
const cocktailNameInput = document.getElementById("input-cocktail-name")
const instructionsInput = document.getElementById("input-cocktail-instructions")

cocktailForm.addEventListener("submit", Cocktail.submitCocktail)
Cocktail.fetchCocktails()

