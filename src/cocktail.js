class Cocktail{

    static allCocktails = []

    constructor(cocktail){
        this.id = cocktail.id
        this.name = cocktail.attributes.name
        this.image = cocktail.attributes.image
        this.instructions = cocktail.attributes.instructions
        this.ingredients = cocktail.attributes.ingredients 

        Cocktail.allCocktails.push(this)
        this.renderCocktail()
    }


    static fetchCocktails() {
        fetch(cocktailURL)
        .then(response => response.json())
        .then(cocktails => {
            for(let cocktail of cocktails.data) {
                let newCocktailList = new Cocktail(cocktail)
            }
        })
    }

    static submitCocktail(ct) {
        ct.preventDefault()
        fetch(cocktailURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                image: imageInput.value,
                name: cocktailNameInput.value,
                instructions: instructionsInput.value
            })
        })
        .then(response => response.json())
        .then(cocktail => {
            let newCocktail = new Cocktail(cocktail.data)
            cocktailForm.reset()
        })
    }

    renderCocktail() {
        const cocktailLi = document.createElement("li")

        cocktailLi.dataset.id = this.id
        cocktailList.appendChild(cocktailLi)
        const h3 = document.createElement("h3")
        h3.className=("card-header")
        h3.innerText = this.name 
        const img = document.createElement("img")
        img.src = this.image 
        img.width = 200 
        const p = document.createElement("p")
        p.className = "card-text"
        p.innerText = this.instructions
        // delete button
        const deleteBtn = document.createElement("button")
        deleteBtn.className = "btn btn-primary btn-sm"
        deleteBtn.innerText = "Delete Cocktail"
        deleteBtn.addEventListener("click", this.deleteCocktail)
        // ingredient form
        const ingredientForm = document.createElement("form")
        ingredientForm.innerHTML +=  `<input type="text" id="ingredient-input" placeholder="Ingredient">
        <input type="submit" value="Add">`

        ingredientForm.addEventListener("submit", Ingredient.createIngredient)

        const ingredientList = document.createElement("ul")
        ingredientList.dataset.id = this.id

        this.ingredients.forEach(ingredient => {

            let newIngred = new Ingredient(ingredient)

            newIngred.renderIngredient(ingredientList)
            
        });

        cocktailLi.append( h3, img, ingredientList, ingredientForm, p, deleteBtn)
    }

    deleteCocktail() {
        const cocktailId = this.parentElement.dataset.id 

        fetch(`${cocktailURL}/${cocktailId}`,{
            method: "DELETE"
        })
        this.parentElement.remove()
    }

}