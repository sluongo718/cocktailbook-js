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
  console.log("filter click" , filterBtn.getAttribute("value"))
   if (filterBtn.getAttribute("value") === "off"){
    filterBtn.setAttribute("value", "on")
    filterBtn.innerText = "see all drinks"
    let filteredDrinks = Cocktail.allCocktails.filter(drink => drink.name  !== "irish coffee")
    Cocktail.renderCocktails(filteredDrinks)
   } else {
    filterBtn.setAttribute("value", "off")
    filterBtn.innerText = "filter irish coffee"
    Cocktail.renderCocktails(Cocktail.allCocktails)
   }
 
  


})



  allDrinksBtn.addEventListener("click", function(e){
    cocktailList.innerText = ""
    Cocktail.renderCocktails(Cocktail.allCocktails)
  })


cocktailForm.addEventListener("submit", Cocktail.submitCocktail)
  
// init application , fetch all the cocktails from db
Cocktail.fetchCocktails()

