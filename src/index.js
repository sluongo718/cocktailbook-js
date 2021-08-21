const cocktailURL = "http://127.0.0.1:3000/cocktails"
const ingredientsURL = "http://localhost:3000/ingredients"
const cocktailForm = document.getElementById("cocktail-form")
const imageInput = document.getElementById("input-cocktail-url")
const cocktailNameInput = document.getElementById("input-cocktail-name")
const instructionsInput = document.getElementById("input-cocktail-instructions")
const cocktailList = document.getElementById("cocktail-list")
const filterBtn = document.getElementById("filterBtn")
const allDrinksBtn = document.getElementById("allDrinks")

filterBtn.addEventListener("click", function(e){
  let filteredDrinks = Cocktail.allCocktails.filter(drink => drink.name  !== "irish coffee")

  Cocktail.renderCocktails(filteredDrinks)

})




cocktailForm.addEventListener("submit", Cocktail.submitCocktail)
Cocktail.fetchCocktails()

